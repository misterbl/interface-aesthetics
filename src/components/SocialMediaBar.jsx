import React from "react";
import { withRouter } from "react-router-dom";

const SocialMediaBar = ({ className = "" }) => (
  <div className={className}>
    <a
      target="_blank"
      href="https://www.facebook.com/interfaceaesthetics.co.uk/"
    >
      <button className="facebook mr-3 mb-2" />
    </a>
    <a target="_blank" href="https://www.instagram.com/interfaceaesthetics/">
      <button className="instagram" />
    </a>
  </div>
);

export default withRouter(SocialMediaBar);
