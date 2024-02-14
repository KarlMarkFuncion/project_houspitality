("use client");

import AddressMap from "./AddressMap";
import RoomCard from "./RoomCard";
import BookingForm from "./Forms/BookingForm/BookingForm";
import Gallery from "./Gallery";
import HostCard from "./HostCard";
import Tags from "./Tags";
import { useParams } from "react-router-dom";
import axios from "axios";
import useStore from "../../Store/useStore";
import { useEffect } from "react";
import { Toast } from "flowbite-react";
import { BiLocationPlus } from "react-icons/bi";

const ListingPage = () => {
  const { currentListing, setCurrentListing } = useStore();
  const { id } = useParams();

  useEffect(() => {
    const fetchCurrentListing = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_BACKEND_URL}find_listing/${id}`
        );
        setCurrentListing(response.data);
      } catch (error) {
        console.log("Error fetching data: ", error);
      }
    };
    fetchCurrentListing();
  }, [setCurrentListing, id]);

  return (
    <div className="p-5 py-12 mt-12 w-9/12 m-auto">
      <h2 className="text-3xl font-semibold mb-3">
        {currentListing.houseType} in {currentListing.city}
      </h2>
      <Gallery />
      <div className="grid grid-cols-2">
        <div className="">
          <HostCard />
          <div className="border-y py-3">
            <RoomCard />
          </div>
          <Tags />
          <Toast>
            <BiLocationPlus className="h-5 w-5 text-cyan-600 dark:text-cyan-500" />
            <div className="pl-4 text-md font-normal">
              {currentListing.addressLine1} {currentListing.addressLine2}{" "}
              {currentListing.city} {currentListing.province}{" "}
              {currentListing.zipCode}
            </div>
          </Toast>
        </div>
        <BookingForm id={id} />
      </div>
      <AddressMap />
    </div>
  );
};

export default ListingPage;
