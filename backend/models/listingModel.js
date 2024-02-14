import mongoose from "mongoose";

const Schema = mongoose.Schema;
export const ListingSchema = new Schema({
  // replace with hostID and call in the firstName and lastName from that
  hostName: {
    type: String,
    required: true,
  },
  bookingPrice: {
    type: String,
    required: true,
  },
  pricePerNight: {
    type: Number,
    required: true,
  },
  houseType: {
    type: String,
    required: true,
  },
  numBeds: {
    type: Number,
    required: true,
  },
  numRooms: {
    type: Number,
    required: true,
  },
  numBathrooms: {
    type: Number,
    required: true,
  },
  addressLine1: {
    type: String,
    required: true,
  },
  addressLine2: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  province: {
    type: String,
    required: true,
  },
  zipCode: {
    type: String,
    required: true,
  },
  contactNum: {
    type: String,
    required: true,
  },
  thumbnailPhoto: {
    type: String,
    required: true,
  },
  bedroomPhoto1: {
    type: String,
    required: true,
  },
  bedroomPhoto2: {
    type: String,
  },
  bathroomPhoto1: {
    type: String,
    required: true,
  },
  bathroomPhoto2: {
    type: String,
  },
  livingroomPhoto: {
    type: String,
    required: true,
  },
  startDate: {
    type: Date,
    required: true,
  },
  endDate: {
    type: Date,
    required: true,
  },
  tags: {
    type: Array,
  },
  createdDate: {
    type: Date,
    default: Date.now,
  },
  modifiedDate: {
    type: Date,
    default: Date.now,
  },
});
