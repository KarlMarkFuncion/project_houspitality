import { useEffect } from "react";
import axios from "axios";
import useStore from "./useStore";

const useFetchData = () => {
  const { setListings } = useStore();
  //   const listings = useStore((state) => state.listings);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(process.env.REACT_APP_BACKEND_URL);
        setListings(response.data);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();
  }, [setListings]);
};

export default useFetchData;
