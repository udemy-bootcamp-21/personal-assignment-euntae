import { useState,useEffect } from 'react';
import './App.css';
import { getDatabase, ref, onValue} from "firebase/database";
import {db} from './firebase';
import { collection, getDocs, addDoc, query, doc, setDoc } from "firebase/firestore/lite";


function App() {
  const collectionRef = collection(db, "board");
  const getData = async () => {
    const q = query(collectionRef);
    const data = await getDocs(q);
    const newData = data.docs.map(doc => ({
      ...doc.data()
    }));

    console.log("data",newData)
  }

  const addData = async () => {
    const docRef = doc(db, "board", "cafe" );

    try {
      const response = await addDoc(docRef, {
        id: 1,
        name: "1번 카페",
        adress: "서울특별시 강남구 강남로 1",
        phone: "02-000-0001",
        menu: [{name: "아메리카노", price: "5000원"},
        {name: "카페라떼", price: "5000원"},
        {name: "카푸치노", price: "5000원"},
        {name: "카라멜마끼야또", price: "5000원"},
        {name: "카페모카", price: "5000원"},
        {name: "자몽티", price: "5000원"},
        {name: "페퍼민트티", price: "5000원"},
        {name: "캐모마일티", price: "5000원"},
        {name: "핫초코", price: "5000원"}]})

      console.log(response)

  
    } catch (error) {
      console.error(error)
    }
  }
  const addTest = ()=>{
    const docRef = doc(db, "board", "cafe" );

    const data = {
      name: "Ottawa2",
      country: "Canada",
      province: "ON"
    };

    setDoc(docRef, data)
    .then((res) => {
      console.log(res);
    })
    .catch(error => {
        console.log(error);
    })
  }

  useEffect(() => {
    getData()
  }, []);




  return (
    <div className="App">
      <button onClick={addData}>등록</button>
      <button onClick={addTest}>등록2</button>
    </div>
  );
}

export default App;