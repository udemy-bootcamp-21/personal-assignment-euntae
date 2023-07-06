import { db } from "../firebase";
import { collection, getDocs, query } from "firebase/firestore/lite";

const collectionRef = collection(db, "board");

export const getData = async () => {
  const q = query(collectionRef);
  const data = await getDocs(q);
  const newData = data.docs.map((doc) => ({
    ...doc.data(),
  }));

  return newData[0].cafeData;
};

export const getDetailData = async () => {
  const q = query(collectionRef);
  const data = await getDocs(q);
  const newData = data.docs.map((doc) => ({
    ...doc.data(),
  }));

  return {
    cafeData: newData[0].cafeData,
    cafeSeat: newData[1].cafeSeat,
  };
};
