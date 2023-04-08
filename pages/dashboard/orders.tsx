import React from "react";
import DashboardLayout from "../../components/Layouts/DashboardLayout";
import { Table } from "@mantine/core";

const elements = [
  { order: 6344, date: 12.011, status: "on hold", total: "34" },
  { order: 7345, date: 14.007, status: "on hold", total: "54" },
  { order: 3935, date: 88.906, status: "on hold", total: "64" },
  { order: 5634, date: 137.33, status: "on hold", total: "43" },
  { order: 5834, date: 140.12, status: "on hold", total: "66" },
];

export default function orders() {
  const rows = elements.map((element) => (
    <tr key={element.order}>
      <td>#{element.order}</td>
      <td>{element.date}</td>
      <td>
        <span className="px-2 py-1 border bg-gray-300 rounded">
          {element.status}
        </span>
      </td>
      <td>${element.total}</td>
      <td>
        <a
          href="#"
          className="text-blue-500 uppercase font-bold hover:underline pb-1"
        >
          View
        </a>
      </td>
    </tr>
  ));
  return (
    <DashboardLayout>
      <div>
        <Table
          striped
          highlightOnHover
          withBorder
          verticalSpacing={"lg"}
          horizontalSpacing="xl"
          className="!rounded-lg"
        >
          <thead className="bg-gray-200">
            <tr>
              <th>Order</th>
              <th>Date</th>
              <th>Status</th>
              <th>Total</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>{rows}</tbody>
        </Table>
      </div>
    </DashboardLayout>
  );
}
