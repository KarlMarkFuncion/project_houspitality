import useStore from "../../Store/useStore";

const PaymentInfo = () => {
  const { booking } = useStore();
  return (
    <div className="p-6 col-span-2 border border-gray-200 rounded-lg shadow-md">
      <h3 className="text-2xl font-semibold">Payment Details</h3>
      <h3 className="text-md mb-3">
        Please ensure the payment details are correct
      </h3>
      <ul className="flex flex-col gap-1 mb-2">
        <li className="text-lg underline font-semibold">Credit card details</li>
        <li>Card name: {booking.cardName}</li>
        <li>Card number: {booking.cardNum}</li>
        <li>Expiration date: {booking.expirationDate}</li>
        <li>CVC: {booking.cvc}</li>
        <li>ZIP Code: {booking.zipCode}</li>
        <li>Address: {booking.address}</li>
        <li>City: {booking.city}</li>
        <li>Province: {booking.province}</li>
      </ul>
      <div className="grid grid-cols-2">
        <ul className="flex flex-col gap-1 ">
          <li className="text-lg  underline font-semibold">Length of stay</li>
          <li>Booking Start Date: {booking.bookingStartDate}</li>
          <li>Booking End Date: {booking.bookingEndDate}</li>
          <li>Number of Days: {booking.daysLen}</li>
        </ul>
        <ul className="flex flex-col gap-1 ">
          <li className="text-lg underline font-semibold">
            {" "}
            Your contact info
          </li>
          <li>Contact Number: {booking.contactNum}</li>
          <li>Email: {booking.email}</li>
        </ul>
      </div>
    </div>
  );
};

export default PaymentInfo;
