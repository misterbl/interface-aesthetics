import React from "react";
import photoGalleryList from "../data/photoGalleryList";

const PhotoGallery = () => (
  <div
    id="photo-gallery-indicator"
    className="carousel slide position-relative photo-gallery"
    data-ride="photo-gallery-carousel"
    touch="true"
  >
    <ol className="carousel-indicators">
      {photoGalleryList.map((photo, index) => (
        <li
          data-target="#photo-gallery-indicator"
          data-slide-to={index}
          className={`${index === 0 && "active"} border-0`}
        />
      ))}
    </ol>

    <div className="carousel-inner">
      {photoGalleryList.map((photo, index) => (
        <div
          className={`carousel-item ${index === 0 && "active"}`}
          key={photo.title}
        >
          <img src={photo.image} alt={photo.title} />
        </div>
      ))}
    </div>
  </div>
);

export default PhotoGallery;
