import { TRIANGULATION } from './triangulation';

// Draw triangle
const drawPath = (ctx, points, closePath, color) => {
  const region = new Path2D();
  region.moveTo(points[0][0], points[0][1]);
  for (let i = 1; i < points.length; i++) {
    const point = points[i];
    region.lineTo(point[0], point[1]);
  }

  if (closePath) {
    region.closePath();
  }
  ctx.fillStyle = color;
  ctx.fill(region);
}

const lipMesh =[1,3,10,14,15,20,29,33,34,63,83,85,89,91,97,99,103,105,109,111,115,119,129,152,154,169,170,171,175,176,222,224,231,235,236,241,250,254,255,284,304,306,310,312,318,320,324,326,330,332,336,340,350,373,375,390,391,392,396,397,455,457,464,468,469,474,483,487,488,517,536,538,542,544,550,552,556,558,562,564,568,572,581,602,604,617,618,619,623,624,668,670,677,681,682,687,695,699,700,728,747,749,753,755,761,763,767,769,773,775,779,783,792,813,815,828,829,830,834,835,835];

const leftEyeMesh =[229, 287, 343, 353, 365, 369, 374, 378, 675, 795, 805, 809, 814, 818];

const rightEyeMesh =[8, 66, 122, 132, 144, 148, 153, 157, 462, 584, 594, 598, 603, 607];

const rightEyeShadowMesh = [21, 22, 28, 39, 40, 49, 59, 71, 77, 79, 108, 121, 138, 142, 163, 166, 192, 219, 442, 443, 444, 445, 475, 476, 482, 493, 494, 503, 524, 530, 532, 561, 574, 665];

const leftEyeShadowMesh = [242, 243, 249, 260, 261, 270, 292, 298, 300, 329, 342, 359, 363, 384, 387, 440, 446, 447, 448, 449, 450, 451, 688, 694, 705, 714, 724, 735, 741, 743, 772, 785, 851, 878];

// Drawing Mesh
export const drawMesh = (predictions, ctx, skin, lip, eyeShadow) => {
  if (predictions.length > 0) {
    predictions.forEach((prediction) => {
      const keypoints = prediction.scaledMesh;

      //  Draw Triangles
      let lipFlag = 0;
      let rightEyeFlag = 0;
      let rightEyeShadowFlag = 0;
      let leftEyeShadowFlag = 0;
      let leftEyeFlag = 0;
      for (let i = 0; i < TRIANGULATION.length; i++) {
        // Get sets of three keypoints for the triangle
        const points = [
          TRIANGULATION[i][0],
          TRIANGULATION[i][1],
          TRIANGULATION[i][2],
        ].map((index) => keypoints[index]);

        let drawColor = skin;

        if (lipMesh[lipFlag] === i){
          drawColor = lip;
          lipFlag += 1;
        }
        else if(rightEyeMesh[rightEyeFlag] === i){
          drawColor = null;
          rightEyeFlag += 1;
        }
        else if(eyeShadow && rightEyeShadowMesh[rightEyeShadowFlag] === i){
          drawColor = eyeShadow;
          rightEyeShadowFlag += 1;
        }
        else if(leftEyeMesh[leftEyeFlag] === i){
          drawColor = null;
          leftEyeFlag += 1;
        }
        else if(eyeShadow && leftEyeShadowMesh[leftEyeShadowFlag] === i){
          drawColor = eyeShadow;
          leftEyeShadowFlag += 1;
        }

        drawColor && drawPath(ctx, points, true, drawColor);
      }
    });
  }
};