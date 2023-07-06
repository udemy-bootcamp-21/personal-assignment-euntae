import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { getDetailData } from "../api/firebaseApi";
import Modal from "../components/Modal";

// interface Seat {
//   seatId: Number;
//   isAvailable: boolean;
// }

// interface CafeSeat {
//   cafeId: number;
//   seat: Seat[];
// }

const Detail = () => {
  const params = useParams();
  const [cafeData, setCafeData] = useState();

  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (params.id) {
      getDetailData().then((res) =>
        setCafeData({
          basicInfo: res.cafeData[+params.id - 1],
          seatInfo: res.cafeSeat[+params.id - 1],
        })
      );
    }
  }, []);
  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  if (!cafeData) return <div>Loading...</div>;
  return (
    <div>
      <Link to={"/"}>home으로</Link>
      <h1>{cafeData.basicInfo.name}</h1>
      <div>{cafeData.basicInfo.phone}</div>
      <div>{cafeData.basicInfo.adress}</div>
      <div>
        {cafeData.basicInfo.menu.map((menu, idx) => (
          <div key={idx}>{`${menu.name}·················${menu.price}`}</div>
        ))}
      </div>
      <Modal
        seats={cafeData.seatInfo}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
      <button onClick={handleOpenModal}>좌석보기</button>
    </div>
  );
};

export default Detail;
