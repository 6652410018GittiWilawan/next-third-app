"use client";

import { useState } from "react";
import React from "react";

export default function MoneyShare() {
  const [amount, setAmount] = useState("");
  const [people, setPeople] = useState("");
  const [result, setResult] = useState("0.00");

  const handleInputPerson = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPeople(e.target.value);
  };

  const handleClickResetUIValue = () => {
    setAmount("");
    setPeople("");
    setResult("0.00");
  };
  const handleClickCalculateMoneyShare = () => {
    if (amount === ""|| amount <="0"){
        alert("`ตรวจสอบจำนวนเงินต้องที่มากกว่า 0 บาท`");
        return;
    }
    if (people === ""|| people <="0"){
        alert("`ตรวจสอบจำนวนคนต้องที่มากกว่า 0 คน`");
        return;
    }

    let result = parseFloat(amount)/parseInt(people);
    setResult(result.toFixed(2));
  }
  return (
    <div>
      <h3 className="font-bold text-xl text-gray-800 mt-8 mb-4">จำนวนเงิน :</h3>
      <input
        type="number"
        id="amount"
        min={0}
        placeholder="ป้อนจำนวนเงิน"
        className="w-full border border-gray-300 p-5 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        
      />
      <h3 className="font-bold text-xl text-gray-800 mt-8 mb-4">จำนวนคน :</h3>
      <input
        type="number"
        id="amount"
        min={0}
        placeholder="ป้อนจำนวนเงิน"
        className="w-full border border-gray-300 p-5 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
        value={people}
        onChange={handleInputPerson}
      />
      <button className="w-full mt-8 bg-blue-800 text-2xl test-white p-4 rounded"
      onClick={handleClickCalculateMoneyShare}>
        คำนวน
      </button>
      <button
        className="w-full mt-8 bg-red-800 text-2xl test-white p-4 rounded "
        onClick={handleClickResetUIValue}
      >
        ล้างข้อมูล
      </button>
      <div className="mt-8 text-center">
        <h3 className="font-bold text-xl text-gray-800">
          หารกันคนล่ะ
          <span className="text-red-800 text-5xl">{result}</span>
          บาท
        </h3>
      </div>
    </div>
  );
}
