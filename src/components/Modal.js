import React from "react";

const Modal = ({ seats, isOpen, onClose }) => {
  if (!isOpen) {
    return null;
  }
  return (
    <div
      style={{
        position: "fixed",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        backgroundColor: "grey",
        padding: "50px",
        zIndex: 1000,
        width: "500px",
        height: "500px",
      }}
    >
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <button onClick={onClose}>X</button>
      </div>
      <ul
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "10px",
          listStyle: "none",
        }}
      >
        {seats.seatData.map((item, idx) => {
          return (
            <li
              key={item.id}
              style={{
                backgroundColor: item.isAvailable ? "#fff" : "skyblue",
                width: "100px",
                height: "100px",
                borderRadius: "10px",
              }}
            ></li>
          );
        })}
      </ul>
    </div>
  );
};

export default Modal;
