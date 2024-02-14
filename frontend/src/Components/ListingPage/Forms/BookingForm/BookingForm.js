import DatePicker from "react-tailwindcss-datepicker";
import { Label, TextInput, Button } from "flowbite-react";
import SubtotalPrice from "./SubtotalPrice";
import { useState, useRef } from "react";
import useStore from "../../../../Store/useStore";
import { Link, useNavigate } from "react-router-dom";

const BookingForm = ({ id }) => {
  const { currentListing, setPreBooking, preBooking, currentUser } = useStore();

  // hardcoded USER ID example CHANGE LATER
  // const hardCodedUser = {
  //   userId: "efe23",
  //   firstName: "Yorvin",
  //   lastName: "Medlin",
  // };

  // useEffect(() => {
  //   setCurrentUser(hardCodedUser);
  //   console.log(currentUser);
  // }, [setCurrentUser]);

  const navigate = useNavigate();

  const [value, setValue] = useState({
    startDate: null,
    endDate: null,
  });

  const handleValueChange = (newValue) => {
    console.log("newValue:", newValue);
    setValue(newValue);
  };

  const startDateFormatted = new Date(value.startDate);
  const endDateFormatted = new Date(value.endDate);

  const startDay = startDateFormatted.getDate();
  const endDay = endDateFormatted.getDate();

  const daysLen = endDay - startDay > 0 ? endDay - startDay : 1;

  const pricePerNight = currentListing.pricePerNight;
  const numOfAdultsRef = useRef(0);
  const numOfChildrenRef = useRef(0);
  const numOfPetsRef = useRef(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !numOfAdultsRef.current.value ||
      !numOfChildrenRef.current.value ||
      !numOfPetsRef.current.value ||
      !value.startDate ||
      !value.endDate ||
      !id ||
      isNaN(daysLen) ||
      !currentUser.userId
    ) {
      console.error("Validation error: Please fill out all required fields.");
      // setError code here to show error type
      return;
    }

    const subtotal1 = (pricePerNight * daysLen).toFixed(2);

    // second subtotal, with service fee and taxes
    const serviceFee = (subtotal1 * 0.2).toFixed(2);

    const subtotal2 = Number(subtotal1) + Number(serviceFee);

    const data = {
      adultsNum: numOfAdultsRef.current.value,
      childrenNum: numOfChildrenRef.current.value,
      petsNum: numOfPetsRef.current.value,
      bookingStartDate: value.startDate,
      bookingEndDate: value.endDate,
      daysLen: daysLen,
      listingId: id,
      noFeeSubtotal: subtotal1,
      feeSubtotal: subtotal2,
      serviceFee: serviceFee,
      userId: currentUser.userId,
    };

    setPreBooking(data);
    console.log(preBooking);

    navigate("/payment_details");
  };

  return (
    <form className="m-3 p-5 border drop-shadow-md rounded-md h-auto">
      <h2 className="text-xl">
        <span className="text-2xl font-bold">PHP {pricePerNight} </span>
        night
      </h2>
      <div className="grid w-fill grid-cols-2 gap-4">
        <div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="base" value="Length of Stay" />
            </div>
            <DatePicker
              separator="to"
              value={value}
              onChange={handleValueChange}
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="base" value="Number of Guests (Adult)" />
            </div>
            <TextInput
              ref={numOfAdultsRef}
              className="mx-0"
              defaultValue={0}
              sizing="md"
              type="number"
              min={1}
              placeholder={0}
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="base" value="Number of Guests (Children)" />
            </div>
            <TextInput
              ref={numOfChildrenRef}
              defaultValue={0}
              className="mx-0"
              sizing="md"
              type="number"
              min={0}
              placeholder={0}
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="base" value="Number of Pets" />
            </div>
            <TextInput
              ref={numOfPetsRef}
              defaultValue={0}
              className="mx-0"
              sizing="md"
              type="number"
              min={0}
              placeholder={0}
            />
          </div>
        </div>
        <SubtotalPrice daysLen={daysLen} />
      </div>
      <Link to="/checkout" className="mt-3 w-11/12 mx-auto">
        <Button
          type="submit"
          onClick={(e) => {
            handleSubmit(e);
          }}
          className="mt-3 w-11/12 mx-auto"
        >
          Submit
        </Button>
      </Link>
    </form>
  );
};

export default BookingForm;
