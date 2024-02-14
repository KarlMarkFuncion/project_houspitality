"use client";
import useStore from "../../Store/useStore";
import HostRating from "./HostRating";

const HostCard = () => {
  const { currentListing } = useStore();
  return (
    <div className="flex items-center space-x-4 border-y-2 py-2 my-2">
      <div className="flex-shrink-0">
        <img
          className="w-8 h-8 rounded-full"
          src="https://picsum.photos/200/200"
          alt="Neil"
        />
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
          hosted by
        </p>
        <p className="text-sm font-semibold text-gray-900 truncate dark:text-white">
          {currentListing.hostName}
        </p>
        <p className="text-sm text-gray-500 truncate dark:text-gray-400"></p>
      </div>
      <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
        {/* // save for when I learn how to add a merged query in Mongodb */}

        <HostRating />

        {/* {currentListing.host.rating} */}
      </div>
    </div>
  );
};

export default HostCard;
