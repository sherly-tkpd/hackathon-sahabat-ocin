import React from "react";
import { OBJModel, DAEModel } from "react-3d-viewer";
import freedom from "../../assets/laptop/freedom.obj";
import alienware from "../../assets/laptop/alienware.dae";

const Viewer3D = () => (
  <div style={{ display: "flex" }}>
    <OBJModel
      width="400"
      height="400"
      position={{ x: 0, y: -100, z: 0 }}
      src={freedom}
    />
    <DAEModel
      width="400"
      height="400"
      scale={{ x: 0.5, y: 0.5, z: 0.5 }}
      src={alienware}
    />
  </div>
);

export default Viewer3D;
