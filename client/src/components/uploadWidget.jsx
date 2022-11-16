import React, { useEffect, useRef } from "react";
import { CLOUD_NAME, UPLOAD_PRESET } from "../../../config";

const UploadWidget = () => {
  const cloudinaryRef = useRef();
  const widgetRef = useRef();
  useEffect(() => {
    cloudinaryRef.current = window.cloudinary;
    widgetRef.current = cloudinaryRef.current.createUploadWidget(
      {
        cloudName: CLOUD_NAME,
        uploadPreset: UPLOAD_PRESET,
      },
      function (err, result) {
        console.log("results--->", result);
      }
    );
  }, []);

  return <button onClick={() => widgetRef.current.open()}>Upload Photo</button>;
};

export default UploadWidget;
