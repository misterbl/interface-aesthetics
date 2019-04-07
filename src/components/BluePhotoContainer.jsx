import React from "react";

const BluePhotoContainer = ({ container, header, children }) => (
  <div className={`${container} position-relative`}>
    <div className="bg-blue" />
    {header && <div className={`${header}`}>{children}</div>}
  </div>
);

export default BluePhotoContainer;
