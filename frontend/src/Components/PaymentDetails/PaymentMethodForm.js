import { Button, Label, Checkbox, TextInput } from "flowbite-react";
import { useRef } from "react";
import useStore from "../../Store/useStore";
import { useNavigate } from "react-router-dom";

const PaymentMethodForm = () => {
  const navigate = useNavigate();

  const { preBooking, setBooking } = useStore();

  const emailRef = useRef(null);
  const cardNameRef = useRef(null);
  const cardNumRef = useRef(null);
  const expirationDateRef = useRef(null);
  const cvcRef = useRef(null);
  const addressRef = useRef(null);
  const cityRef = useRef(null);
  const provinceRef = useRef(null);
  const zipCodeRef = useRef(null);
  const contactNumRef = useRef(null);
  const confirmCheckoutRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const isConfirmed = confirmCheckoutRef.current.checked;

    if (isConfirmed === true) {
      const data = {
        email: emailRef.current.value,
        cardName: cardNameRef.current.value,
        cardNum: cardNumRef.current.value,
        expirationDate: expirationDateRef.current.value,
        cvc: cvcRef.current.value,
        address: addressRef.current.value,
        city: cityRef.current.value,
        province: provinceRef.current.value,
        zipCode: zipCodeRef.current.value,
        contactNum: contactNumRef.current.value,
        adultsNum: preBooking.adultsNum,
        childrenNum: preBooking.childrenNum,
        petsNum: preBooking.petsNum,
        bookingStartDate: preBooking.bookingStartDate,
        bookingEndDate: preBooking.bookingEndDate,
        daysLen: preBooking.daysLen,
        listingId: preBooking.listingId,
        noFeeSubtotal: preBooking.noFeeSubtotal,
        feeSubtotal: preBooking.feeSubtotal,
        serviceFee: preBooking.serviceFee,
        userId: preBooking.userId,
      };

      setBooking(data);
      // console.log(data);
      navigate("/checkout");
    }
  };
  return (
    <form className="p-4 flex max-w-md flex-col">
      <p className="font-semibold">Payment details</p>
      <div className="mb-2 block">
        <Label htmlFor="checkout_email" value="Your email" />
      </div>
      <TextInput ref={emailRef} required shadow type="email" />
      <div className="mb-2 block">
        <Label value="Name on card" />
      </div>
      <TextInput ref={cardNameRef} required type="text" />
      <div className="mb-2 block">
        <Label value="Card number" />
      </div>
      <TextInput
        ref={cardNumRef}
        required
        type="text"
        inputMode="numeric"
        pattern="[0-9]*"
      />
      <div className="flex gap-4">
        <div className="w-2/3">
          <div className="mb-2 block">
            <Label value="Expiration date (MM/YY)" />
          </div>
          <TextInput
            ref={expirationDateRef}
            required
            type="text"
            inputMode="numeric"
            pattern="[0-9]*"
            placeholder="MM/YY"
            min={4}
            max={4}
          />
        </div>
        <div className="w-1/3 ">
          <div className="mb-2 block">
            <Label value="CVC" />
          </div>
          <TextInput
            ref={cvcRef}
            required
            type="text"
            inputMode="numeric"
            pattern="[0-9]*"
            min={3}
            max={3}
          />
        </div>
      </div>
      <div className="mb-2 block">
        <Label value="Address" />
      </div>
      <TextInput ref={addressRef} required type="text" />
      <div className="mb-2 block">
        <Label value="City" />
      </div>
      <TextInput ref={cityRef} required type="text" />
      <div className="mb-2 block">
        <Label value="Province" />
      </div>
      <TextInput ref={provinceRef} required type="text" />
      <div className="mb-2 block">
        <Label value="ZIP Code" />
      </div>
      <TextInput
        ref={zipCodeRef}
        required
        type="text"
        inputMode="numeric"
        pattern="[0-9]*"
        min={4}
        max={4}
      />
      <div className="mb-2 block">
        <Label value="Contact Number (PH)" />
      </div>
      <TextInput
        ref={contactNumRef}
        required
        type="text"
        inputMode="numeric"
        pattern="[0-9]*"
        min={11}
        max={11}
      />
      <div className="pt-2 flex items-center gap-2">
        <Checkbox ref={confirmCheckoutRef} required id="confirm_checkout" />
        <Label>I confirm all the details above are correct</Label>
      </div>
      <Button onClick={(e) => handleSubmit(e)} className="my-4" type="submit">
        Checkout
      </Button>
    </form>
  );
};

export default PaymentMethodForm;
