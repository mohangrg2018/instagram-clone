import { modalState } from "@/atom/ModalAtom";
import React, { useRef } from "react";
import { useRecoilState } from "recoil";
import Modal from "react-modal";
import { AiOutlineCamera } from "react-icons/ai";

const ModalState = () => {
  const [open, setOpen] = useRecoilState(modalState);
  const filePickerRef = useRef(null);

  return (
    <div>
      {open && (
        <Modal
          isOpen={open}
          onRequestClose={() => setOpen(false)}
          className="absolute top-[30%] left-[50%] translate-x-[-50%] flex flex-col items-center gap-4 border border-gray-400 rounded-md p-5 bg-gray-100"
        >
          <AiOutlineCamera
            className="text-3xl cursor-pointer"
            onClick={() => filePickerRef.current.click()}
          />
          <input type="file" className="hidden" ref={filePickerRef} />
          <h2 className="font-medium">Upload a Photo</h2>
          <input
            type="text"
            placeholder="Add a caption"
            className="text-center bg-transparent outline-none"
          />
          <button
            type="button"
            className="text-sm bg-red-400 text-white p-3 rounded-md"
          >
            Upload Post
          </button>
        </Modal>
      )}
    </div>
  );
};

export default ModalState;
