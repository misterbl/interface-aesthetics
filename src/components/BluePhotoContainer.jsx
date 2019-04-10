import React from "react";

const BluePhotoContainer = ({ container, header, children }) => (
  <div className={`${container} d-none d-md-block position-relative`}>
    <div className="bg-blue" />
    {header && <div className={`${header}`}>{children}</div>}
  </div>
);

export default BluePhotoContainer;
