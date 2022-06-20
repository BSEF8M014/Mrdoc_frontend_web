import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const PharSalesHistory = () => {
  const data = [
    {
      SaleNumber: 1,
      Name: "Waleed",
      CNIC: 3345312312,
      TotalSale: 123123123,
    },
    {
      SaleNumber: 2,
      Name: "Mehtab",
      CNIC: 334512321312,
      TotalSale: 123123123,
    },
    {
      SaleNumber: 3,
      Name: "Waleed",
      CNIC: 3345312312,
      TotalSale: 123123123,
    },
    {
      SaleNumber: 4,
      Name: "Waleed",
      CNIC: 3345312312,
      TotalSale: 123123123,
    },
  ];

  return (
    <>
      <div>
        <ToastContainer position="top-left" />

        <div className="my-6 w-[90%]">
          <h3 className="   text-2xl font-bold  my-4">Sales History</h3>
          <div>
            <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
              <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th scope="col" class="px-6 py-3">
                      SaleNumber
                    </th>
                    <th scope="col" class="px-6 py-3">
                      Name
                    </th>
                    <th scope="col" class="px-6 py-3">
                      CNIC
                    </th>
                    <th scope="col" class="px-6 py-3">
                      Total Sale
                    </th>
                    <th scope="col" class="px-6 py-3">
                      <span class="sr-only">Open</span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((data, idx) => (
                    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                      <th
                        scope="row"
                        class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
                      >
                        {data.SaleNumber}
                      </th>
                      <td class="px-6 py-4">{data.Name}</td>
                      <td class="px-6 py-4">{data.CNIC}</td>
                      <td class="px-6 py-4">{data.TotalSale}</td>
                      <td class="px-6 py-4 text-right">
                        <a
                          href="#"
                          id={data.SaleNumber}
                          class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                        >
                          View
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PharSalesHistory;
