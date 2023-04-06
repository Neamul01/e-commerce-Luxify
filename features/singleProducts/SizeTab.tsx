import { Table } from "@mantine/core";
import React from "react";

const elements = [
  { size: "xs", chest: "34 - 36", weist: "27 - 29", hips: "34.5 - 36.5" },
  { size: "s", chest: "34 - 36", weist: "27 - 29", hips: "24.5 - 36.5" },
  { size: "m", chest: "34 - 36", weist: "27 - 29", hips: "33.5 - 36.5" },
  { size: "l", chest: "34 - 36", weist: "27 - 29", hips: "32.5 - 36.5" },
  { size: "xl", chest: "34 - 36", weist: "27 - 29", hips: "22.5 - 36.5" },
  { size: "xxl", chest: "34 - 36", weist: "27 - 29", hips: "64.5 - 36.5" },
];
const rows = elements.map((element) => (
  <tr key={element.hips}>
    <td className="uppercase">{element.size}</td>
    <td>{element.hips}</td>
    <td>{element.weist}</td>
    <td>{element.chest}</td>
  </tr>
));
export default function SizeTab() {
  return (
    <div className="grid md:grid-cols-12">
      <div className="col-span-4 mb-4 md:mb-0">picture</div>
      <div className="col-span-8">
        <Table verticalSpacing="xs">
          <thead className="mb-3">
            <tr className="uppercase">
              <th>Size</th>
              <th>Chest(IN.)</th>
              <th>West(IN.)</th>
              <th>Hips(IN.)</th>
            </tr>
          </thead>
          <tbody>{rows}</tbody>
        </Table>
      </div>
    </div>
  );
}
