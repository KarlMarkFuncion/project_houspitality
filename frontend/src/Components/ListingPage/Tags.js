import useStore from "../../Store/useStore";

const Tag = ({ name, color }) => {
  return <span className={color}>{name}</span>;
};

const Tags = () => {
  const { currentListing } = useStore();

  return (
    <>
      {currentListing.tags ? (
        <div className="border-b pb-3 tag-container my-3 flex flex-wrap">
          <span class="bg-blue-100 text-blue-800 text-md font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
            {currentListing.houseType}
          </span>
          {currentListing.tags.map((tag, index) => {
            return <Tag color={tag.color} key={index} name={tag.name} />;
          })}
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default Tags;
