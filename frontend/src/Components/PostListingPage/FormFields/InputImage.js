import { useState } from "react";
import useStore from "../../../Store/useStore";
import "./InputImage.css";

const InputImage = ({ imageField, fieldLabel, isRequired = false }) => {
  const [image, setImage] = useState(null);
  const { postListing, setPostListing } = useStore();

  const convertToBase64 = (e) => {
    let reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = () => {
      setImage(reader.result);
      setPostListing({ ...postListing, [imageField]: reader.result }); // Pass the base64 data to setImage
    };
    reader.onerror = (error) => {
      console.log("Error: ", error);
    };
  };

  return (
    <>
      {isRequired ? (
        <>
          <label
            className="block mt-3 mb-2 text-sm font-medium text-gray-900 dark:text-white"
            htmlFor="thumbnail_photo"
          >
            {fieldLabel}*
          </label>
          <input
            className="limit-input-width"
            type="file"
            required
            accept="image/"
            onChange={convertToBase64}
          />
          {image === "" || image == null ? (
            ""
          ) : (
            <img
              className="rounded-sm my-1 mb-3 preview-img"
              height={100}
              width={100}
              src={image}
              alt="Selected"
            />
          )}
        </>
      ) : (
        <>
          <label
            className="block mt-3 mb-2 text-sm font-medium text-gray-900 dark:text-white"
            htmlFor="thumbnail_photo"
          >
            {fieldLabel}
          </label>
          <input
            className="limit-input-width"
            type="file"
            accept="image/"
            onChange={convertToBase64}
          />
          {image === "" || image == null ? (
            ""
          ) : (
            <img
              className="rounded-sm m-3 preview-img"
              height={100}
              width={100}
              src={image}
              alt="Selected"
            />
          )}
        </>
      )}
    </>
  );
};

export default InputImage;
