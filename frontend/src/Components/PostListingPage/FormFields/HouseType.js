import useStore from "../../../Store/useStore";

const HouseType = () => {
  const { postListing, setPostListing } = useStore();
  // const [fieldState, setFieldState] = useState("");

  const changeInput = (e, message = "onChange") => {
    // setFieldState(e.target.value);

    setPostListing({
      ...postListing,
      houseType: e.target.value,
    });

    console.log("state: ", e.target.value, "-", message);
  };

  const types = [
    "Beachfront",
    "Tiny House",
    "House",
    "Apartment",
    "Condo Unit",
    "Hostel",
  ];
  return (
    <div className="mb-4">
      <label className="block font-semibold mb-2 text-md text-gray-900 dark:text-white">
        Select a House Type
      </label>
      <select
        id="house_types"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        onChange={(e) => {
          changeInput(e, "change");
        }}
      >
        <option defaultValue={null} selected>
          Choose a House type
        </option>
        {types.map((type, index) => {
          return <Option houseType={type} key={index} />;
        })}
      </select>
    </div>
  );
};

const Option = ({ houseType }) => {
  return <option defaultValue={houseType}>{houseType}</option>;
};

export default HouseType;
