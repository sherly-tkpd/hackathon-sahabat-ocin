import * as THREE from 'three';

const MODEL_OBJ_URL = '/assets/test3/Samsung_QLED_55__Studio_Stand_mat(1).obj';
const MODEL_MTL_URL = '/assets/test3/Samsung_QLED_55__Studio_Stand_mat(1).mtl';
const MODEL_SCALE = 0.005;

var session;
var renderer;
var gl;
var scene;
var camera;
var model;
var reticle;
var frameOfRef;
var stabilized;
var raycaster;

/**
 * Container class to manage connecting to the WebXR Device API
 * and handle rendering on every frame.
 */

export const onEnterAR = async (device) => {
  const outputCanvas = document.createElement('canvas');
  const ctx = outputCanvas.getContext('xrpresent');

  try {
    const deviceSession = await device.requestSession({
      outputContext: ctx,
      environmentIntegration: true,
    });

    document.body.appendChild(outputCanvas);
    onSessionStarted(deviceSession)
  } catch (e) {
    return;
  }
}

const onSessionStarted = async (deviceSession) => {
  session = deviceSession;

  document.body.classList.add('ar');

  renderer = new THREE.WebGLRenderer({
    alpha: true,
    preserveDrawingBuffer: true,
  });
  renderer.autoClear = false;

  gl = renderer.getContext();

  await gl.setCompatibleXRDevice(session.device);

  session.baseLayer = new window.XRWebGLLayer(session, gl);

  scene = window.DemoUtils.createLitScene();

  window.DemoUtils.loadModel(MODEL_OBJ_URL, MODEL_MTL_URL).then(modelObject => {
    model = modelObject;
    model.scale.set(MODEL_SCALE, MODEL_SCALE, MODEL_SCALE);
  });

  camera = new THREE.PerspectiveCamera();
  camera.matrixAutoUpdate = false;

  reticle = new window.Reticle(session, camera);
  scene.add(reticle);

  frameOfRef = await session.requestFrameOfReference('eye-level');
  session.requestAnimationFrame(onXRFrame);

  window.addEventListener('click', onClick);
}

const onXRFrame = (time, frame) => {
  let session = frame.session;
  let pose = frame.getDevicePose(frameOfRef);

  reticle.update(frameOfRef);
  if (reticle.visible && !stabilized) {
    stabilized = true;
    document.body.classList.add('stabilized');
  }

  session.requestAnimationFrame(onXRFrame);

  gl.bindFramebuffer(gl.FRAMEBUFFER, session.baseLayer.framebuffer);

  if (pose) {
    for (let view of frame.views) {
      const viewport = session.baseLayer.getViewport(view);
      renderer.setSize(viewport.width, viewport.height);

      camera.projectionMatrix.fromArray(view.projectionMatrix);
      const viewMatrix = new THREE.Matrix4().fromArray(pose.getViewMatrix(view));
      camera.matrix.getInverse(viewMatrix);
      camera.updateMatrixWorld(true);

      renderer.render(scene, camera);
    }
  }
}

const onClick = async (e) => {
  if (!model) {
    return;
  }

  const x = 0;
  const y = 0;
  
  raycaster = raycaster || new THREE.Raycaster();
  raycaster.setFromCamera({ x, y }, camera);
  const ray = raycaster.ray;
  
  const origin = new Float32Array(ray.origin.toArray());
  const direction = new Float32Array(ray.direction.toArray());
  const hits = await session.requestHitTest(origin,
                                                  direction,
                                                  frameOfRef);

  if (hits.length) {
    const hit = hits[0];
    const hitMatrix = new THREE.Matrix4().fromArray(hit.hitMatrix);

    model.position.setFromMatrixPosition(hitMatrix);

    window.DemoUtils.lookAtOnY(model, camera);

    scene.add(model);
  }
}
