import useStore from "../../../Store/useStore";

const Tag = ({ color, name }) => {
  const { setTags, tags } = useStore();

  const removeTagByName = (tagName) => {
    const updatedTags = tags.filter((tag) => tag.name !== tagName);
    setTags(updatedTags);
  };

  const deleteTag = () => {
    removeTagByName(name);
  };
  return (
    <p className={color}>
      {name}
      <span className="text-red-600 ml-3" onClick={() => deleteTag()} href="/">
        ☒
      </span>
    </p>
  );
};

export default Tag;
