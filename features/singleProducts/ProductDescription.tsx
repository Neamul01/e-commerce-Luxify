import { Rating } from "@mantine/core";
import React, { useState } from "react";

export default function ProductDescription() {
  const [rating, setRating] = useState(4.5);
  return (
    <div className="grid grid-cols-2">
      <div className="col-span-1">image</div>
      <div className="col-span-1 border-l pl-5">
        <div className="flex flex-col gap-4">
          <p className="text-3xl font-bold">Fashionable Watch</p>
          <p className="text-xs text-gray-400 flex gap-6">
            <span>SKU: 123453420</span>
            <span>CATEGORIES: Electronics</span>
          </p>
          <p className="text-4xl font-bold">$39.00</p>
          <div className="flex gap-4">
            <Rating value={rating} fractions={2} readOnly />
            <p className="text-xs text-gray-400">(1 reviews)</p>
          </div>
          <p className="text-sm text-gray-500">
            Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae
            luctus metus libero eu augue. Morbi purus liberpuro ate vol faucibus
            adipiscing.
          </p>
          <div className="w-full">
            <p className="text-base text-gray-600">Color: </p>
          </div>
          <div className="w-full">
            <p className="text-base text-gray-600">Size: </p>
          </div>
        </div>
      </div>
    </div>
  );
}
