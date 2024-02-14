"use client";

import { Carousel } from "flowbite-react";
import "./Gallery.css";

import useStore from "../../Store/useStore";

export default function Gallery() {
  const { currentListing } = useStore();

  const images = [
    currentListing.thumbnailPhoto,
    currentListing.livingroomPhoto,
    currentListing.bedroomPhoto1,
    currentListing.bedroomPhoto2,
    currentListing.bathroomPhoto1,
    currentListing.bathroomPhoto2,
  ];
  const filteredImages = images.filter(
    (image) => image !== null && image !== undefined
  );

  return (
    <Carousel slide={false} className="gallery">
      {filteredImages.map((image, index) => {
        return <img src={image} key={index} alt="..." />;
      })}
    </Carousel>
  );
}
