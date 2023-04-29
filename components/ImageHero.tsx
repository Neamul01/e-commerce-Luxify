import React from "react";

type Props = {
  children: React.ReactNode;
  image: string;
  imageClass?: string;
  contentClass?: string;
};

export default function ImageHero(props: Props) {
  return (
    <div
      className={`bg-cover bg-center h-[18.2rem] flex justify-center items-center`}
      style={{ backgroundImage: `url(${props.image})` }}
    >
      <p className="text-white font-bold text-6xl capitalize">
        {props.children}
      </p>
    </div>
  );
}
