import React from "react";

const PhotoGallery = ({ images, className = "" }) => (
  <div
    id="photo-gallery-indicator"
    className={`carousel slide position-relative photo-gallery ${className}`}
    data-ride="carousel"
    touch="true"
  >
    <div className="carousel-inner">
      {images.map((image, index) => (
        <div
          className={`carousel-item ${index === 0 && "active"}`}
          key={`photo-gallery-${index}`}
        >
          <img src={image} alt="non surgical aesthetics training" />
        </div>
      ))}
    </div>
    <ol className="carousel-indicators">
      {images.map((image, index) => (
        <li
          data-target="#photo-gallery-indicator"
          data-slide-to={index}
          className={`${index === 0 && "active"} border-0`}
        />
      ))}
    </ol>
  </div>
);

export default PhotoGallery;
