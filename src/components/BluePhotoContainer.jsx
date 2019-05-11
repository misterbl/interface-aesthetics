import React from "react";

const BluePhotoContainer = ({ container, header, children }) => (
  <header className={`${container} d-none d-md-block position-relative`}>
    <div>{header && <div className={`${header}`}>{children}</div>}</div>
  </header>
);

export default BluePhotoContainer;
