import React, { useState } from "react";
import { Label, TextInput } from "flowbite-react";
import useStore from "../../../Store/useStore";

const InputNum = ({ numField, minNum, maxNum = null, fieldLabel }) => {
  const { postListing, setPostListing } = useStore();
  const [fieldState, setFieldState] = useState(null); // Local state to store input value
  const preventSubmit = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
    }
  };
  const changeInput = (e) => {
    const value = e.target.value;
    setFieldState(value);
    setPostListing({ ...postListing, [numField]: e.target.value });
  };

  return (
    <>
      <div className="mb-2 block">
        <Label value={fieldLabel} />
      </div>
      <TextInput
        id={fieldLabel}
        value={fieldState} // Set the input value from local state
        onChange={(e) => {
          changeInput(e);
          console.log(`value is: ${e.target.value}`);
        }}
        onKeyDown={(e) => {
          preventSubmit(e);
        }}
        required
        type="number"
        min={minNum}
        max={maxNum}
      />
    </>
  );
};

export default InputNum;
