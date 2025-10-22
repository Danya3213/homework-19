import { useEffect } from "react";
import "./modal.scss"

function Modal({ largeImageURL, onClose }) {
  useEffect(() => {
    const handleEsc = e => {
      if (e.code === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  const handleOverlay = e => {
    if (e.target === e.currentTarget) onClose();
  };

  return (
    <div className="overlay" onClick={handleOverlay}>
      <div className="modal">
        <img src={largeImageURL} alt="" />
      </div>
    </div>
  );
}

export default Modal; 