import React from "react";
import { MTLModel } from "react-3d-viewer";
import "./index.css";

const Viewer3D = ({ src, mtl, slug }) => {
  let texPath;
  if (slug === "television") {
    texPath = "/model/television";
  } else if (slug === "vas") {
    texPath = "/model/vase";
  }

  return (
    <div className="viewer-container">
      <MTLModel src={src} mtl={mtl} texPath={texPath} enableZoom={false} />
    </div>
  );
};

export default Viewer3D;
