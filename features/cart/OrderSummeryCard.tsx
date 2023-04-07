import React from "react";

export default function OrderSummeryCard() {
  return (
    <div className="w-full flex justify-between items-center my-8">
      <div className="w-full pl-4 max-w-[9rem]">
        <p className="text-gray-500 text-sm uppercase">ORDER NUMBER:</p>
        <p className="text-xl font-bold">5464</p>
      </div>
      <div className="w-[1px] h-[2.5rem] bg-gray-400"></div>

      <div className="w-full pl-4 max-w-[9rem]">
        <p className="text-gray-500 text-sm uppercase">STATUS:</p>
        <p className="text-xl font-bold">Processing</p>
      </div>
      <div className="w-[1px] h-[2.5rem] bg-gray-400"></div>

      <div className="w-full pl-4 max-w-[13rem]">
        <p className="text-gray-500 text-sm uppercase">DATE:</p>
        <p className="text-xl font-bold">November 20, 2020</p>
      </div>
      <div className="w-[1px] h-[2.5rem] bg-gray-400"></div>

      <div className="w-full pl-4 max-w-[13rem]">
        <p className="text-gray-500 text-sm uppercase">EMAIL:</p>
        <p className="text-xl font-bold">12345@gmail.com</p>
      </div>
      <div className="w-[1px] h-[2.5rem] bg-gray-400"></div>

      <div className="w-full pl-4 max-w-[8rem]">
        <p className="text-gray-500 text-sm uppercase">TOTAL:</p>
        <p className="text-xl font-bold">$39.00</p>
      </div>
      <div className="w-[1px] h-[2.5rem] bg-gray-400"></div>

      <div className="w-full pl-4 max-w-[13rem]">
        <p className="text-gray-500 text-sm uppercase">PAYMENT METHOD:</p>
        <p className="text-xl font-bold">Cash on delivery</p>
      </div>
    </div>
  );
}
