import { Link } from "react-router-dom";
import { Button } from "flowbite-react";
const SuccessfulCheckout = () => {
  return (
    <div className="grid my-24 p-4 mx-auto w-3/4 justify-center">
      <h1 className="text-2xl font-semibold text-center justify-center mb-3">
        Payment Processed, thank you for booking with Hospitalitee!
      </h1>
      <Link className="grid justify-center" to="/">
        <Button className="">Return to Main Page</Button>
      </Link>
    </div>
  );
};

export default SuccessfulCheckout;
