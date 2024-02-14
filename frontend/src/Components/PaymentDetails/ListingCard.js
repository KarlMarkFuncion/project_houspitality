"use client";

import { Card } from "flowbite-react";
import useStore from "../../Store/useStore";

const ListingCard = () => {
  const { preBooking, currentListing } = useStore();

  return (
    <Card imgAlt="..." imgSrc={currentListing.thumbnailPhoto}>
      <h5 className="text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
        {currentListing.houseType} in {currentListing.city}
      </h5>
      <div className="grid grid-cols-2">
        <div>
          <p>Hosted by: {currentListing.hostName}</p>
          <ul className="font-normal text-gray-700 dark:text-gray-400">
            <li>{currentListing.numBathrooms} bathrooms</li>
            <li>{currentListing.numBeds} beds</li>
            <li>{currentListing.numRooms} rooms</li>
          </ul>
        </div>
        <div>
          <h3 className="mb-0">Guests: </h3>
          <ul className="font-normal mt-0 text-gray-700 dark:text-gray-400">
            {preBooking.adultsNum > 0 && <li>{preBooking.adultsNum} adults</li>}
            {preBooking.childrenNum > 0 && (
              <li>{preBooking.childrenNum} children</li>
            )}
            {preBooking.petsNum > 0 && <li>{preBooking.petsNum} pets</li>}
          </ul>
        </div>
      </div>
    </Card>
  );
};

export default ListingCard;
