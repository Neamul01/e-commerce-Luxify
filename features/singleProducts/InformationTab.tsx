import React from "react";

const specificationsData = [
  { Material: "Praesent id enim sit amet.Tdio" },
  { "Claimed Size": "Praesent id enim sit" },
  {
    "Recommended Use":
      "Praesent id enim sit amet.Tdio vulputate eleifend in in tortor. ellus massa. siti",
  },
  { Manufacturer: "Praesent id enim" },
];

export default function InformationTab() {
  return (
    <div className="">
      {specificationsData.map((specification) => (
        <div className="text-gray-600 text-sm leading-6 tracking-wider grid grid-cols-12 mt-1 border-b py-2">
          <p className="text-gray-900 font-bold col-span-4">
            {Object.keys(specification)}
          </p>
          <p className="text-gray-600 col-span-8">
            {Object.values(specification)}
          </p>
        </div>
      ))}
    </div>
  );
}
