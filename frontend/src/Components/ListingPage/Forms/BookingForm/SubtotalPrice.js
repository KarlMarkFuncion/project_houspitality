import useStore from "../../../../Store/useStore";

const SubtotalPrice = ({ daysLen }) => {
  const { currentListing } = useStore();

  const pricePerNight = currentListing.pricePerNight;

  // initial subtotal. without service fee
  const subtotal_1 = (pricePerNight * daysLen).toFixed(2);

  // second subtotal, with service fee and taxes
  const service_fee = (subtotal_1 * 0.2).toFixed(2);

  const subtotal_2 = Number(subtotal_1) + Number(service_fee);

  return (
    <div>
      <div className="border-b py-3">
        <h3 className="text-md text-gray-900 dark:text-white w-fill">
          PHP {pricePerNight} * {daysLen} Nights
          <span className="text-right font-semibold"> = PHP {subtotal_1} </span>
        </h3>
        <h3 className="text-md text-gray-900 dark:text-white w-fill ">
          Hospitalitee Service Fee (20%)
          <span className="text-right font-semibold">
            {" "}
            = PHP {service_fee}{" "}
          </span>
        </h3>
      </div>
      <h3 className="text-md text-gray-900 dark:text-white w-fill ">
        Subtotal:
        <span className="text-right font-semibold"> = PHP {subtotal_2} </span>
      </h3>
    </div>
  );
};

export default SubtotalPrice;
