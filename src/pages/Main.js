import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getData } from "../api/firebaseApi";

// interface Menu {
//   menuName: string;
//   menuPrice: number;
// }

// interface Cafe {
//   cafeId: number;
//   cafeName: string;
//   cafeAdress: string;
//   cafePhone: string;
//   cafeMenu: Menu[];
// }

// interface User {
//   userId: number;
//   userName: string;
//   userEmail: string;
//   userLikeList: number[]; // cafeId로 이루어진 array
// }

const Main = () => {
  const [cafeList, setCafeList] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    getData().then((res) => setCafeList(res));
  }, []);

  if (!cafeList) return <div>Loading...</div>;
  return (
    <>
      {cafeList.map((cafe) => (
        <div
          key={cafe.id}
          style={{ border: "1px solid red", cursor: "pointer" }}
          onClick={() => navigate(`/${cafe.id}`)}
        >
          <div>{cafe.name}</div>
          <div>{cafe.adress}</div>
          <div>
            {cafe.tags.map((tag, idx) => (
              <span key={idx} style={{ marginRight: "8px" }}>
                {tag}
              </span>
            ))}
          </div>
          <div>{cafe.phone}</div>
        </div>
      ))}
    </>
  );
};

export default Main;
