import { useEffect, useRef } from 'react';
import * as tf from '@tensorflow/tfjs';
import * as facemesh from '@tensorflow-models/facemesh';
import Webcam from 'react-webcam';
import { drawMesh } from './utils';

const wrapperStyle = {
  width: '100%',
  height: 480,
  position: 'relative',
}

const style = {
  position: 'absolute',
  width: 640,
  height: 480,
  left: '50%',
  transform: 'translateX(-50%)',
}

const canvasStyle = {
  position: 'absolute',
  width: 640,
  height: 480,
  filter: 'blur(4px)',
  opacity: 1,
  mixBlendMode: 'lighter',
  left: '50%',
  transform: 'translateX(-50%)',
}


const Makeup = ({skin, lip, eyeShadow}) => {
  const webcamRef = useRef(null);
  const canvasRef = useRef(null);
  const intervalRef = useRef(null);

  //detect function
  const detect = async(net) => {
    if(
      typeof webcamRef.current !== 'undefined' &&
      webcamRef.current !== null &&
      webcamRef.current.video.readyState === 4
    ){
      // get video properties
      const video = webcamRef.current.video;
      const videoWidth = webcamRef.current.video.videoWidth;
      const videoHeight = webcamRef.current.video.videoHeight;

      //sync video and canvas size
      webcamRef.current.video.width = videoWidth;
      webcamRef.current.video.height = videoHeight;
      canvasRef.current.width = videoWidth;
      canvasRef.current.height = videoHeight;

      //make detections //recieving neural network from tensorflow
      const face = await net.estimateFaces(video);

      const ctx = canvasRef.current.getContext("2d");
      drawMesh(face, ctx, skin, lip, eyeShadow);
    }
  }

  //load facemesh
  const runFacemesh = async () => {
    const net = await facemesh.load({
      inputResolution: { width: 640, height: 400 },
      scale: 0.8,
    });
    intervalRef.current = setInterval(()=>{
      detect(net);
    }, 500)
  }

  useEffect(()=>{
    if(skin!==null || lip !== null || eyeShadow !==null){
      clearInterval(intervalRef.current);
      runFacemesh();
    }
    else{
      clearInterval(intervalRef.current);
      const ctx = canvasRef.current.getContext("2d");
      ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
    }
    return(()=>{
      clearInterval(intervalRef.current);
    })
  }, [skin, lip, eyeShadow]);


  return (
    <div style={wrapperStyle}>
      <Webcam ref={webcamRef} style={style}/>
      <canvas ref={canvasRef} style={canvasStyle}/>
    </div>
  );
}

export default Makeup;
