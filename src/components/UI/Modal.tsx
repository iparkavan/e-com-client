import React from "react";
import ReactDOM from "react-dom";

interface backdropProps {
  onClose: () => void;
}

interface modelProps {
  children: React.ReactNode;
  onClose: () => void;
  heading?: string;
}

const BackDrop = ({ onClose }: backdropProps) => {
  return (
    <div
      className="fixed top-0 left-0 w-full h-full z-20 backdrop-blur-sm bg-black/30"
      onClick={onClose}
    />
  );
};

const ModalOverlay = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="absolute min-w-[350px] w-[50%] bg-white z-30 top-[20vh] left-[25%] p-1 rounded-xl drop-shadow-xl animate-slide-down">
      {children}
    </div>
  );
};

// const portalElement = document.getElementById(
//   "overlays"
// ) as HTMLDivElement | null;

const Modal = ({ children, onClose, heading }: modelProps) => {
  return (
    <div>
      {/* {ReactDOM.createPortal(<BackDrop onClose={onClose} />, portalElement)} */}
      <BackDrop onClose={onClose} />
      <ModalOverlay>
        <div className="w-full bg-gradient-to-r from-blue-500 to-sky-500 h-16 rounded-xl">
          <div className="text-2xl text-white p-4 font-semibold">{heading}</div>
        </div>
        <div className="p-4">{children}</div>
      </ModalOverlay>
    </div>
  );
};

export default Modal;
