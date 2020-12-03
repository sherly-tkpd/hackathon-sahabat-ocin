import React from "react";
import { DAEModel } from "react-3d-viewer";
import alienware from "../../assets/laptop/alienware.dae";
import "./index.css";

const Viewer3D = () => (
  <div className="viewer-container">
    <DAEModel
      scale={{ x: 0.5, y: 0.5, z: 0.5 }}
      src={alienware}
      enableZoom={false}
    />
  </div>
);

export default Viewer3D;
