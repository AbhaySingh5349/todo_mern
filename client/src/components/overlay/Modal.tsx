import React from 'react';

import { useNavigate } from 'react-router-dom';

type ChildrenProps = {
  children: React.ReactNode;
};

const Modal = ({ children }: ChildrenProps) => {
  const navigate = useNavigate();

  const closeHandler = () => {
    navigate('/');
  };

  return (
    <div>
      <div
        className="fixed top-0 left-0 w-full h-full bg-primary-700 z-10 opacity-40"
        onClick={closeHandler}
      ></div>
      <dialog
        open={true}
        className="border-none rounded-md shadow-md p-4 overflow-hidden z-10 items-center w-2/5"
      >
        {children}
      </dialog>
    </div>
  );
};

export default Modal;
