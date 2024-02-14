import mongoose from "mongoose";
import { ListingSchema } from "../models/listingModel";
import { BookingSchema } from "../models/bookingModel";
import { UserSchema } from "../models/userModel";

const Listing = mongoose.model("Listing", ListingSchema);
const Booking = mongoose.model("Booking", BookingSchema);
const User = mongoose.model("User", UserSchema);

export const addNewListing = async (req, res) => {
  // console.log(` REQ THUMBNAIL: ${req.body.thumbnailPhoto}`);
  console.log(` REQ HouseType: ${req.body.houseType}`);
  console.log(` REQ numBeds: ${req.body.numBeds}`);
  console.log(` REQ numRooms: ${req.body.numRooms}`);

  let newListing = new Listing(req.body);

  await newListing
    .save()
    .then((Listing) => {
      res.json(Listing);
    })
    .catch((err) => {
      res.send(err);
    });
};

export const getListing = (req, res) => {
  Listing.find({})
    .then((Listing) => {
      res.json(Listing);
    })
    .catch((err) => {
      res.send(err);
    });
};

export const validateEmail = async (req, res) => {
  const { email } = req.body;

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: "Email already exists" });
    }
    return res.status(200).json({ message: "Email available" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

export const getUserLogin = (req, res) => {
  const { email, password } = req.params;

  console.log(email);
  User.findOne({ email })
    .then((user) => {
      if (user) {
        console.log(user.password);
        console.log(password);
        if (password === user.password) {
          const userData = {
            userId: user._id,
            firstName: user.firstName,
            lastName: user.lastName,
            profilePhoto: user.profilePhoto,
            bookings: user.bookings,
            createdDate: user.createdDate,
          };
          res.json(userData);
          console.log("Successful login");
        } else {
          console.log("incorrect password");
          res.status(401).json({ message: "Incorrect Password" });
        }
      } else {
        console.log("user not found");
        res.status(404).json({ message: "User not found" });
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json({ message: "Internal Server Error" });
    });
};

export const getListingById = (req, res) => {
  const { id } = req.params;
  Listing.findById(id)
    .then((listing) => {
      if (listing) {
        res.json(listing);
      } else {
        res.status(404).json({ message: "Listing not found" });
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json({ message: "Internal Server Error" });
    });
};

export const addNewBooking = (req, res) => {
  let newBooking = new Booking(req.body);

  newBooking
    .save()
    .then((newBooking) => {
      res.json(newBooking);
    })
    .catch((err) => {
      res.send(err);
    });
};

export const addNewUser = (req, res) => {
  let newUser = new User(req.body);

  newUser
    .save()
    .then((newUser) => {
      res.json(newUser);
    })
    .catch((err) => {
      res.send(err);
    });
};
