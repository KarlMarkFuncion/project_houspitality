import useStore from "../../../Store/useStore";
import { TextInput, Label } from "flowbite-react";
import Tag from "./Tag";

const InputTags = () => {
  const { setTags, tags } = useStore();

  const colorList = [
    "bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300",
    "bg-gray-100 text-gray-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300",
    "bg-red-100 text-red-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-red-900 dark:text-red-300",
    "bg-green-100 text-green-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300",
    "bg-yellow-100 text-yellow-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-yellow-900 dark:text-yellow-300",
    "bg-indigo-100 text-indigo-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-indigo-900 dark:text-indigo-300",
    "bg-purple-100 text-purple-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-purple-900 dark:text-purple-300",
    "bg-pink-100 text-pink-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-pink-900 dark:text-pink-300",
  ];
  const randNum = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min;
  };
  const chosenColor = colorList[randNum(0, colorList.length - 1)];

  const handleSumbit = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      console.log("detected input");
      const newTag = {
        name: e.target.value,
        color: chosenColor,
      };
      setTags([...tags, newTag]);
      console.log(`added tag: ${e.target.value}`);
      console.log(`tags are: ${tags[0]}`);
      e.target.value = "";
    }
  };

  return (
    <div className="">
      <div className="">
        <div className="mb-2 block">
          <Label value="Tags" />
        </div>
        <TextInput
          onKeyDown={(e) => {
            handleSumbit(e);
          }}
          type="text"
          placeholder="add tag"
        />
      </div>
      <div className="flex py-3">
        {tags.length !== 0 ? (
          tags.map((tag, index) => {
            return <Tag key={index} color={tag.color} name={tag.name} />;
          })
        ) : (
          <p>No Tags Set!</p>
        )}
      </div>
    </div>
  );
};

export default InputTags;
