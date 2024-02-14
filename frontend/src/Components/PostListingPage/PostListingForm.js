"use client";

import useStore from "../../Store/useStore";

import { Button, Label } from "flowbite-react";
import Datepicker from "react-tailwindcss-datepicker";
import { useState } from "react";
import axios from "axios";
import InputImage from "./FormFields/InputImage";
import HouseType from "./FormFields/HouseType";
import InputNum from "./FormFields/InputNum";
import InputText from "./FormFields/InputText";
import InputTags from "./FormFields/InputTags";

const PostListingForm = () => {
  const [successMessage, setSuccessMessage] = useState("");
  // const [pricePerNight, setPricePerNight] = useState();

  const { postListing, tags, setTags, currentUser } = useStore();

  const [value, setValue] = useState({
    startDate: null,
    endDate: null,
  });

  const handleValueChange = (newValue) => {
    console.log("newValue:", newValue);
    setValue(newValue);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const startDateFormatted = new Date(value.startDate);
    const endDateFormatted = new Date(value.endDate);
    const diffTime = Math.abs(endDateFormatted - startDateFormatted);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    const pricePerNightCalc = (postListing.bookingPrice / diffDays).toFixed(2);

    console.log(pricePerNightCalc);
    console.log(diffDays);

    const hostName = currentUser.firstName + " " + currentUser.lastName;

    const data = {
      hostName: hostName,
      bookingPrice: postListing.bookingPrice,
      pricePerNight: pricePerNightCalc,
      houseType: postListing.houseType,
      numBeds: postListing.numBeds,
      numRooms: postListing.numRooms,
      numBathrooms: postListing.numBathrooms,
      addressLine1: postListing.addressLine1,
      addressLine2: postListing.addressLine2,
      city: postListing.city,
      province: postListing.province,
      zipCode: postListing.zipCode,
      contactNum: postListing.contactNum,
      startDate: value.startDate,
      endDate: value.endDate,
      thumbnailPhoto: postListing.thumbnailPhoto,
      bedroomPhoto1: postListing.bedroomPhoto1,
      bedroomPhoto2: postListing.bedroomPhoto2,
      bathroomPhoto1: postListing.bathroomPhoto1,
      bathroomPhoto2: postListing.bathroomPhoto2,
      livingroomPhoto: postListing.livingroomPhoto,
      tags: tags,
    };

    axios
      .post(`${process.env.REACT_APP_BACKEND_URL}add_listing`, data)
      .then((response) => {
        console.log("Response: ", response);
        setSuccessMessage("Listing successfully submitted!");
      })
      .catch((error) => {
        console.error("Error: ", error);
      });

    setTags([]);
  };

  return (
    <form
      method="POST"
      className="flex w-fill flex-col gap-4"
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <div className="grid grid-cols-2 gap-4">
        <div>
          <HouseType />
          <div className="mb-4">
            <p className="font-semibold"> Room Details</p>
            <InputNum
              numField="numBeds"
              minNum={1}
              fieldLabel="Number of Beds* ( double decks count as 2 )"
            />
            <InputNum
              numField="numRooms"
              minNum={1}
              fieldLabel="Number of rooms*"
            />
            <InputNum
              numField="numBathrooms"
              minNum={1}
              fieldLabel="Number of bathrooms*"
            />
          </div>
          <div className="mb-4">
            <p className="font-semibold text-md">Listing Details</p>
            <InputText
              textField="bookingPrice"
              fieldLabel="Booking price (PHP)"
              isNumeric={true}
            />
            <div className="mb-2 block">
              <Label value="Preferred booking dates" />
            </div>
            <Datepicker
              separator="to"
              value={value}
              onChange={handleValueChange}
            />
          </div>
          <div className="grid grid-cols-2 gap-2">
            <div className="flex flex-col gap-3">
              <div>
                <InputImage
                  imageField="thumbnailPhoto"
                  fieldLabel="Thumbnail photo"
                  isRequired={true}
                />
                <InputImage
                  imageField="bathroomPhoto1"
                  fieldLabel="Bathroom photo"
                  isRequired={true}
                />
                <InputImage
                  imageField="bathroomPhoto2"
                  fieldLabel="Bathroom photo 2"
                  isRequired={false}
                />
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <div>
                <InputImage
                  imageField="bedroomPhoto1"
                  fieldLabel="Bedroom photo"
                  isRequired={true}
                />
                <InputImage
                  imageField="bedroomPhoto2"
                  fieldLabel="Bedroom photo 2"
                  isRequired={false}
                />
                <InputImage
                  imageField="livingroomPhoto"
                  fieldLabel="Living room / Common area photo"
                  isRequired={true}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="mb-4">
          <p className="font-semibold">House Address</p>
          <InputText
            textField="addressLine1"
            fieldLabel="Address line 1"
            isNumeric={false}
          />
          <InputText
            textField="addressLine2"
            fieldLabel="Address line 2"
            isNumeric={false}
          />
          <InputText textField="city" fieldLabel="City" isNumeric={false} />
          <InputText
            textField="province"
            fieldLabel="Province"
            isNumeric={false}
          />
          <InputText
            textField="zipCode"
            fieldLabel="Zip code"
            isNumeric={true}
            min={4}
            max={4}
          />
          <InputText
            textField="contactNum"
            fieldLabel="Contact Number (+63)"
            isNumeric={true}
            min={11}
            max={11}
          />
          <InputTags />
        </div>
      </div>

      {/* Success message */}
      {successMessage && (
        <div
          class="p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400"
          role="alert"
        >
          <span class="font-medium">Listing Submitted! </span>
          Your listing has been added
        </div>
      )}
      <Button onClick={(e) => handleSubmit(e)} type="submit">
        Submit
      </Button>
    </form>
  );
};

export default PostListingForm;
