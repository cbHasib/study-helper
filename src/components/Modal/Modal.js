import React from "react";

const Modal = ({ modalData, setModalData }) => {
  const { image, question, answer } = modalData;
  return (
    <div>
      <input type="checkbox" id="my-modal-3" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="my-modal-3"
            className="btn btn-sm btn-circle btn-primary absolute right-2 top-2"
            onClick={() => setModalData({})}
          >
            ✕
          </label>
          <img
            className="w-full h-60 object-cover rounded-xl"
            src={image}
            alt={question}
          />
          <h3 className="text-xl font-bold mt-5 text-primary">{question}</h3>
          <p className="py-4">{answer}</p>
        </div>
      </div>
    </div>
  );
};

export default Modal;
