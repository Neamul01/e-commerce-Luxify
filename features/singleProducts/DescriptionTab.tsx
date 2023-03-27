import React from "react";
import { AiTwotoneLock } from "react-icons/ai";
import { BsHeart } from "react-icons/bs";
import { TbTruckDelivery } from "react-icons/tb";
import { TiTick } from "react-icons/ti";
import CustomButton from "../../components/Buttons/CustomButton";

const featuresData = {
  description:
    "Praesent id enim sit amet.Tdio vulputate eleifend in in tortor. ellus massa. siti iMassa ristique sit amet condim vel, facilisis quimequistiqutiqu amet condim Dilisis Facilisis quis sapien. Praesent id enim sit amet.",
  features: [
    "Praesent id enim sit amet.Tdio vulputate",
    "Eleifend in in tortor. ellus massa.Dristique sitii",
    "Massa ristique sit amet condim vel",
    "Dilisis Facilisis quis sapien. Praesent id enim sit amet",
  ],
};

const specificationsData = [
  { Material: "Praesent id enim sit amet.Tdio" },
  { "Claimed Size": "Praesent id enim sit" },
  {
    "Recommended Use":
      "Praesent id enim sit amet.Tdio vulputate eleifend in in tortor. ellus massa. siti",
  },
  { Manufacturer: "Praesent id enim" },
];

export default function DescriptionTab() {
  return (
    <div className="grid grid-cols-2 justify-between">
      {/* features */}
      <div className="col-span-1 pr-6 flex flex-col gap-12">
        <div className="">
          <h2 className="text-xl font-bold w-full mb-5">Features</h2>
          <div className="">
            <p className="text-gray-600 text-sm leading-6 tracking-wider">
              {featuresData.description}
            </p>
            <div className="mt-3">
              {featuresData.features.map((feature) => (
                <p className="text-gray-600 text-sm leading-6 tracking-wider flex items-center gap-3">
                  <TiTick className="text-lg" /> {feature}
                </p>
              ))}
            </div>
          </div>
        </div>

        {/* specification */}
        <div className="">
          <h2 className="text-xl font-bold w-full mb-3">Specifications</h2>
          <div className="mt-6">
            {specificationsData.map((specification) => (
              <div
                key={Object.keys(specification)[0]}
                className="text-gray-600 text-sm leading-6 tracking-wider grid grid-cols-12 mt-1 border-b py-2"
              >
                <p className="text-gray-900 font-bold col-span-4">
                  {Object.keys(specification)}
                </p>
                <p className="text-gray-600 col-span-8">
                  {Object.values(specification)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* video description */}
      <div className="col-span-1">
        <h2 className="text-xl font-bold w-full mb-6">Video Description</h2>
        <div className="w-full h-full flex flex-col gap-6">
          <iframe
            width="100%"
            height="60%"
            src="https://www.youtube.com/embed/gdJwW-NhObU"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
          <div className="flex items-center justify-between gap-8 text-gray-500 mt-4 px-5 w-full">
            <div className="flex items-center gap-6 ">
              <div className="border rounded-full p-4 h-full">
                <AiTwotoneLock className="text-xl" />
              </div>
              <div className="flex flex-col">
                <p className="font-bold text-gray-900">2 year guarranty</p>
                <p className="text-sm text-gray-500">Guarantee with no doubt</p>
              </div>
            </div>
            <div className="h-[1.6rem] w-[1px] bg-gray-400"></div>
            <div className="flex items-center gap-6 ">
              <div className="border rounded-full p-4 h-full">
                <TbTruckDelivery className="text-xl" />
              </div>
              <div className="flex flex-col">
                <p className="font-bold text-gray-900">2 year guarranty</p>
                <p className="text-sm text-gray-500">Guarantee with no doubt</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
