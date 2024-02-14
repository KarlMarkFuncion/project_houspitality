import mongoose from "mongoose";

const Schema = mongoose.Schema;
export const BookingSchema = new Schema({
  email: { type: String, required: true },
  cardName: { type: String, required: true },
  cardNum: { type: String, required: true },
  expirationDate: { type: String, required: true },
  cvc: { type: String, required: true },
  address: { type: String, required: true },
  city: { type: String, required: true },
  province: { type: String, required: true },
  zipCode: { type: String, required: true },
  contactNum: { type: String, required: true },
  adultsNum: { type: Number, required: true },
  childrenNum: { type: Number, required: true },
  petsNum: { type: Number, required: true },
  bookingStartDate: { type: Date, required: true },
  bookingEndDate: { type: Date, required: true },
  daysLen: { type: Number, required: true },

  listingId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Listing",
    required: true,
  },

  noFeeSubtotal: { type: Number, required: true },
  feeSubtotal: { type: Number, required: true },
  serviceFee: { type: Number, required: true },

  // change this to foreignKey when I make a userSchema
  userId: { type: String, required: true },
  createdDate: {
    type: Date,
    default: Date.now,
  },
  modifiedDate: {
    type: Date,
    default: Date.now,
  },
});
