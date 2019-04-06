import React from "react";

const BlueFooter = ({ container, children }) => (
  <div className={`${container} position-relative`}>
    <div className="bg-dark-blue" />
    {children}
  </div>
);

export default BlueFooter;
