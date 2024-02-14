import { Label, TextInput } from "flowbite-react";
import useStore from "../../../Store/useStore";

const InputText = ({
  textField,
  fieldLabel,
  isNumeric = false,
  min = null,
  max = null,
}) => {
  const { postListing, setPostListing } = useStore();
  const changeInput = (e) => {
    setPostListing({ ...postListing, [textField]: e.target.value });
  };
  const preventSubmit = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
    }
  };
  return (
    <>
      <div className="mb-2 block">
        <Label value={fieldLabel} />
      </div>
      {isNumeric ? (
        <TextInput
          required
          type="text"
          inputMode="numeric"
          pattern="[0-9]*"
          onChange={(e) => changeInput(e)}
          onKeyDown={(e) => preventSubmit(e)}
          min={min}
          max={max}
        />
      ) : (
        <TextInput required type="text" onChange={(e) => changeInput(e)} />
      )}
    </>
  );
};

export default InputText;
