import ListingCard from "./ListingCard";
import useStore from "../../Store/useStore";

const BookingSummary = () => {
  const { currentListing, preBooking } = useStore();

  return (
    <div className="p-4">
      <h2 className="text-xl mb-3 font-semibold">Booking Summary</h2>
      <ListingCard />
      <div className="border-b py-3">
        <h3 className="text-md text-gray-900 dark:text-white w-fill">
          PHP {currentListing.pricePerNight} * {preBooking.daysLen} Nights
          <span className="text-right font-semibold">
            {" "}
            = PHP{preBooking.noFeeSubtotal}{" "}
          </span>
        </h3>
        <h3 className="text-md text-gray-900 dark:text-white w-fill ">
          Hospitalitee Service Fee (20%)
          <span className="text-right font-semibold">
            {" "}
            = PHP{preBooking.serviceFee}{" "}
          </span>
        </h3>
      </div>
      <h3 className="text-md text-gray-900 dark:text-white w-fill ">
        Total:
        <span className="text-right font-semibold">
          = PHP{preBooking.feeSubtotal}{" "}
          <span className="font-medium">(tax included)</span>
        </span>
      </h3>
    </div>
  );
};

export default BookingSummary;
