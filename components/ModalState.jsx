import { modalState } from "@/atom/ModalAtom";
import React, { useRef, useState } from "react";
import { useRecoilState } from "recoil";
import Modal from "react-modal";
import { AiOutlineCamera } from "react-icons/ai";
import { useSession } from "next-auth/react";
import {
  collection,
  addDoc,
  serverTimestamp,
  updateDoc,
  doc,
} from "firebase/firestore";
import { db } from "@/firebase";
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadString,
} from "firebase/storage";

const ModalState = () => {
  const { data: session } = useSession();
  const [open, setOpen] = useRecoilState(modalState);
  const [loading, setLoading] = useState(false);

  const filePickerRef = useRef(null);
  const captionRef = useRef(null);

  const [image, setImage] = useState(null);

  const handleFilePickerChange = (event) => {
    const file = event.target.files[0];

    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = () => {
      setImage(reader.result);
    };
  };

  // ADDING POST TO FIRESTORE
  const handleSubmitPost = async () => {
    if (loading) return;
    setLoading(true);

    const docRef = await addDoc(collection(db, "posts"), {
      username: session?.user?.name,
      caption: captionRef.current.value,
      profileImg: session?.user?.image,
      timestamp: serverTimestamp(),
    });

    console.log("New doc added with ID", docRef.id);

    const storage = getStorage();
    const imageRef = ref(storage, `posts/${docRef.id}/image`);

    await uploadString(imageRef, image, "data_url").then(async (snapshot) => {
      const downloadURL = await getDownloadURL(imageRef);

      await updateDoc(doc(db, "posts", docRef.id), {
        image: downloadURL,
      });
    });

    setOpen(false);
    setLoading(false);
    setImage(null);
    captionRef.current.value = "";
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
          className="absolute top-[100px] left-[50%] translate-x-[-50%] flex flex-col items-center gap-4 border border-gray-200 rounded-md p-5 bg-gray-100"
        >
          {image ? (
            <img src={image} alt="Uploaded Photo" className="w-[500px] " />
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
            ref={captionRef}
            placeholder="Add a caption"
            className="text-center bg-transparent outline-none"
          />
          <button
            disabled={!image}
            type="button"
            onClick={handleSubmitPost}
            className="w-full py-2 text-sm bg-red-400 text-white rounded-md disabled:bg-gray-200"
          >
            Upload Post
          </button>
        </Modal>
      )}
    </div>
  );
};

export default ModalState;
