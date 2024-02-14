import { useState } from "react";
import BookingSummary from "./BookingSummary";
import PaymentMethodForm from "./PaymentMethodForm";
import useStore from "../../Store/useStore";
const PaymentDetailsPage = () => {
  const { preBooking } = useStore();

  useState(() => {
    console.log(preBooking);
  });
  return (
    <div className="grid grid-cols-2 my-24 p-4 mx-auto w-2/3">
      <PaymentMethodForm />
      <BookingSummary />
    </div>
  );
};

export default PaymentDetailsPage;
