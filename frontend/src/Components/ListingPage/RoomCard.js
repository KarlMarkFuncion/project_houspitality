"use client";

import { Card } from "flowbite-react";
import useStore from "../../Store/useStore";
import { BiSolidBed } from "react-icons/bi";

export default function RoomCard() {
  const { currentListing } = useStore();

  return (
    <Card className="max-w-sm" href="#">
      <h3 className="text-2xl">
        <BiSolidBed />
      </h3>
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        Accomodation Details
      </h5>
      {currentListing.numRooms} rooms - {currentListing.numBeds} beds -{" "}
      {currentListing.numBathrooms} bathrooms
    </Card>
  );
}
