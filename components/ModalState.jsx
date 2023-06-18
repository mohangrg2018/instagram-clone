import { modalState } from "@/atom/ModalAtom";
import React, { useRef, useState } from "react";
import { useRecoilState } from "recoil";
import Modal from "react-modal";
import { AiOutlineCamera } from "react-icons/ai";

const ModalState = () => {
  const [open, setOpen] = useRecoilState(modalState);
  const filePickerRef = useRef(null);

  const [image, setImage] = useState(null);

  const handleFilePickerChange = (event) => {
    const file = event.target.files[0];

    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = () => {
      setImage(reader.result);
    };
  };

  return (
    <div>
      {open && (
        <Modal
          isOpen={open}
          onRequestClose={() => {
            setOpen(false);
            setImage(null);
          }}
          className="absolute top-[100px] left-[50%] translate-x-[-50%] flex flex-col items-center gap-4 border border-gray-400 rounded-md p-5 bg-gray-100"
        >
          {image ? (
            <img src={image} alt="Uploaded Photo" />
          ) : (
            <AiOutlineCamera
              className="text-3xl cursor-pointer"
              onClick={() => filePickerRef.current.click()}
            />
          )}

          <input
            type="file"
            className="hidden"
            ref={filePickerRef}
            onChange={handleFilePickerChange}
          />
          <h2 className="font-medium text-sm">Upload a Photo</h2>
          <input
            type="text"
            placeholder="Add a caption"
            className="text-center bg-transparent outline-none"
          />
          <button
            type="button"
            className="w-full py-2 text-sm bg-red-400 text-white rounded-md"
          >
            Upload Post
          </button>
        </Modal>
      )}
    </div>
  );
};

export default ModalState;
