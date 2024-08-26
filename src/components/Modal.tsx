import {ReactNode} from "react";
import {motion} from "framer-motion";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

const Modal = ({isOpen, onClose, children}: ModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <motion.div
        initial={{y: 20, opacity: 0}}
        animate={{y: 0, opacity: 1}}
        exit={{y: -50, opacity: 0}}
        transition={{duration: 0.3}}
        className="bg-white rounded-lg p-9 shadow-lg max-w-md w-full relative"
      >
        <button
          onClick={onClose}
          className="absolute text-2xl top-2 right-4 text-blue hover:text-gray-900"
        >
          &times;
        </button>
        {children}
      </motion.div>
    </div>
  );
};

export default Modal;
