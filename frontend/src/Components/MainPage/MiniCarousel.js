"use client";
import "./Carousel.css";

import { Carousel } from "flowbite-react";

export default function MiniCarousel({ photos }) {
  return (
    <div className="lg:min-h-max">
      <Carousel slide={true}>
        {photos.map((photo, index) => {
          return <img src={photo} alt="..." key={index} />;
        })}
      </Carousel>
    </div>
  );
}
