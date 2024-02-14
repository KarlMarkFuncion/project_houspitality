import Listing from "./Listing";
import useStore from "../../Store/useStore";
import useFetchData from "../../Store/fetchData";
import Filters from "./Filters";
import { useEffect } from "react";

const MainPage = () => {
  useFetchData();

  const { listings, currentFilter, filteredListings, setFilteredListings } =
    useStore();

  useEffect(() => {
    console.log(` current filter on main page is ${currentFilter}`);

    if (currentFilter !== "") {
      const filteredListings = listings.filter((listing) => {
        return listing.houseType === currentFilter;
      });
      setFilteredListings(filteredListings);
    }
  }, [currentFilter, listings, setFilteredListings]);

  return (
    <div className="p-5 pt-11 mt-12 mx-auto ">
      <Filters />
      <div className="grid content-center sm:grid-cols-1 md:grid-cols-5 mx-auto gap-4">
        {!currentFilter
          ? listings.map((listing) => {
              return <Listing key={listing._id} {...listing} />;
            })
          : filteredListings.map((filtered) => {
              return <Listing key={filtered._id} {...filtered} />;
            })}
      </div>
    </div>
  );
};

export default MainPage;
