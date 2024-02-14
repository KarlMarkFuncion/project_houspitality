import { Button } from "flowbite-react";
import { FaUmbrellaBeach } from "react-icons/fa6";
import { MdHouse, MdApartment } from "react-icons/md";
import { PiWarehouseFill } from "react-icons/pi";
import { BiSolidBuildingHouse } from "react-icons/bi";
import { MdBedroomChild } from "react-icons/md";

import useStore from "../../Store/useStore";

const Filters = () => {
  const { currentFilter, setCurrentFilter } = useStore();

  const addFilter = (e) => {
    e.preventDefault();

    if (currentFilter !== e.target.textContent) {
      console.log(`filter is now ${e.target.textContent}`);
      setCurrentFilter(e.target.textContent);
    } else {
      setCurrentFilter("");
      console.log(`filter is now ${e.target.textContent}`);
    }
  };

  return (
    <Button.Group className="w-full justify-center mx-auto mb-3">
      <Button onClick={(e) => addFilter(e)} color="gray">
        <FaUmbrellaBeach className="mr-3 h-4 w-4" />
        <p>Beachfront</p>
      </Button>
      <Button onClick={(e) => addFilter(e)} color="gray">
        <PiWarehouseFill className="mr-3 h-4 w-4" />
        <p>Tiny House</p>
      </Button>
      <Button onClick={(e) => addFilter(e)} color="gray">
        <MdHouse className="mr-3 h-4 w-4" />
        <p>House</p>
      </Button>
      <Button onClick={(e) => addFilter(e)} color="gray">
        <MdApartment className="mr-3 h-4 w-4" />
        <p>Apartment</p>
      </Button>
      <Button onClick={(e) => addFilter(e)} color="gray">
        <BiSolidBuildingHouse className="mr-3 h-4 w-4" />
        <p>Condo Unit</p>
      </Button>
      <Button onClick={(e) => addFilter(e)} color="gray">
        <MdBedroomChild className="mr-3 h-4 w-4" />
        <p>Hostel</p>
      </Button>
    </Button.Group>
  );
};

export default Filters;
