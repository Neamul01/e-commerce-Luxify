import React from "react";
import CommonLayout from "../../components/Layouts/CommonLayout";

export default function index() {
  return (
    <div>
      <div className="bg-[url('/background/contact-us.jpg')] bg-cover bg-center h-[18.2rem] flex justify-center items-center">
        <p className="text-white font-bold text-6xl capitalize">contact us</p>
      </div>
      <CommonLayout>other text</CommonLayout>
    </div>
  );
}
