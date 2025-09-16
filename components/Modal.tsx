import React, { MouseEventHandler } from 'react';

interface params{
    isOpen:boolean;
    onClose:MouseEventHandler<HTMLButtonElement>;
    children:any;
}
const Modal = ({ isOpen, onClose, children }:params) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
      <div className="bg-white w-[70%] p-6 rounded-lg shadow-lg relative h-[80%]  mx-auto">
        <button
          onClick={onClose}
          className="absolute top-2 right-8 text-gray-500 hover:text-gray-700 text-3xl cursor-pointer"
        >
          &times;
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;