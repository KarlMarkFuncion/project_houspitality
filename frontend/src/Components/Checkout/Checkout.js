import { Button } from "flowbite-react";
import ListingCard from "../PaymentDetails/ListingCard";
import PaymentInfo from "./PaymentInfo";
import useStore from "../../Store/useStore";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const { booking, setBooking, setPreBooking } = useStore();
  const navigate = useNavigate();

  const submitBooking = (e) => {
    e.preventDefault();

    if (booking !== null) {
      const data = booking;

      axios
        .post(`${process.env.REACT_APP_BACKEND_URL}add_booking`, data)
        .then((response) => {
          console.log("Response: ", response);
        })
        .catch((error) => {
          console.error("Error: ", error);
        });

      setBooking({});
      setPreBooking({});
      navigate("/payment_processed");
    } else {
      // add an error message here

      navigate(-3);
    }
  };
  return (
    <div className="gap-3 w-2/3 my-24 flex flex-col mx-auto p-4">
      <h1 className="text-2xl font-semibold to-black">Checkout</h1>
      <div className="grid grid-cols-3 gap-3 w-full">
        <ListingCard />
        <PaymentInfo />
      </div>
      <Button onClick={(e) => submitBooking(e)} className="">
        Book
      </Button>
    </div>
  );
};

export default Checkout;
