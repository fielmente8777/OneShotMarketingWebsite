"use client";
import { useEffect } from "react";
import { Form } from "../forms";
import { AiOutlineClose } from "react-icons/ai";

interface Props {
  openForm: boolean;
  setOpenForm: React.Dispatch<React.SetStateAction<boolean>>;
}
const FormPopup: React.FC<Props> = ({ openForm, setOpenForm }) => {
  useEffect(() => {
    if (openForm) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [openForm]);
  return (
    <div
      className={`fixed flex items-center justify-center bg-black/70 z-50 ${openForm ? "inset-0 w-screen h-screen opacity-100 scale-100" : "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 scale-0 opacity-0"}`}
      onClick={(e) => {
        e.stopPropagation();
        if (e.target === e.currentTarget) {
          setOpenForm(false);
        }
      }}
    >
      <div className="max-w-sm shadow-2xl rounded-3xl w-full relative">
        <button
          onClick={() => setOpenForm(false)}
          className="absolute md:top-4 top-8 right-4 z-20 cursor-pointer text-white bg-tertiary p-2 rounded-full aspect-square hover:bg-secondary"
        >
          <AiOutlineClose size={20} />
        </button>
        <Form setOpenForm={setOpenForm} />
      </div>
    </div>
  );
};

export default FormPopup;
