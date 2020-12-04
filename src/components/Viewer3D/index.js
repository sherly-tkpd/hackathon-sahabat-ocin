import React from "react";
import { MTLModel } from "react-3d-viewer";
import "./index.css";

const Viewer3D = ({ src, mtl, slug }) => {
  let texPath;
  let rotation = { x: 0, y: 0, z: 0 };
  let position = { x: 0, y: 0, z: 0 };
  if (slug === "television") {
    texPath = "/model/television/";
    position.x = 10;
    position.y = -80;
    rotation.x = 29.83;
  } else if (slug === "vas") {
    texPath = "/model/vase/";
    position.y = -3.5;
  }

  return (
    <div className="viewer-container">
      <MTLModel
        src={src}
        mtl={mtl}
        texPath={texPath}
        enableZoom={false}
        position={position}
        rotation={rotation}
      />
    </div>
  );
};

export default Viewer3D;
