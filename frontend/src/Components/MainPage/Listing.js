"use client";
import "./Listing.css";

import { Link } from "react-router-dom";
import { Card } from "flowbite-react";
// import { useStore } from "zustand";

const Listing = ({
  houseType,
  city,
  thumbnailPhoto,
  startDate,
  endDate,
  pricePerNight,
  _id,
  hostName,
}) => {
  const DbStartDate = new Date(startDate);
  const DbEndDate = new Date(endDate);

  const month = DbStartDate.toLocaleString("default", { month: "short" });
  const day = DbStartDate.getDate();
  const endDay = DbEndDate.getDate();
  const endMonth = DbEndDate.toLocaleString("default", { month: "short" });
  const formattedDate = `${month.toString()} ${day.toString()} - ${endMonth.toString()} ${endDay.toString()}`;

  return (
    <Link to={`/listing/${_id}`}>
      <Card imgAlt="..." imgSrc={thumbnailPhoto} className="limited-card">
        <h5 className="mb-0 text-2xl p-0 m-0 font-bold tracking-tight text-gray-900 dark:text-white">
          {houseType} in {city}
        </h5>
        <p className="mb-1 p-0 font-normal flex flex-col  text-gray-700 dark:text-gray-400">
          {formattedDate}
          <span>Hosted by {hostName}</span>
        </p>
        <p className="text-black p-0 m-0 ">PHP{pricePerNight} per night</p>
      </Card>
    </Link>
  );
};

export default Listing;
