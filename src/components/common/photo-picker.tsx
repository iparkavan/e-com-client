import React from "react";
import ReactDOM from "react-dom";

interface PhotoPickerProps {
  onChange: (e: React.ChangeEvent) => void;
}

const PhotoPicker: React.FC<PhotoPickerProps> = ({ onChange }) => {
  const component = (
    <input type="file" hidden id="photo-picker" onChange={onChange} multiple />
  );

  return ReactDOM.createPortal(
    component,
    document.getElementById("photo-picker-element")
  );
};

export default PhotoPicker;
