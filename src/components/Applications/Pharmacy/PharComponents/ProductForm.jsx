import React from "react";

const ProductForm = () => {
  const dataVendor = [
    {
      name: "Vendor1",
      value: "Vendor1",
    },
    {
      name: "Vendor2",
      value: "Vendor2",
    },
    {
      name: "Vendor3",
      value: "Vendor3",
    },
  ];
  const dataCategory = [
    {
      name: "cat1",
      value: "cat1",
    },
    {
      name: "cat2",
      value: "cat2",
    },
    {
      name: "cat3",
      value: "cat3",
    },
  ];
  const dataProduct =
    //fetch
    // fetch data api
    [
      {
        key: 1,
        name: "Product 1",
        salt: "Salt1",
        value: "pro1",
        amount: 12,
        PurchasePrice: 80,
        unitSale: 100,
        vendor: "Mehtab",
        date: Date("12/12/2021"),
      },
      {
        key: 2,
        name: "Product 2",
        salt: "Salt2",
        value: "pro2",
        amount: 123,
        PurchasePrice: 180,
        unitSale: 1000,
        vendor: "Waleed",
        date: Date("12/12/2021"),
      },
      {
        key: 3,
        name: "Product 3",
        salt: "Salt3",
        value: "pro3",
        amount: 132,
        PurchasePrice: 60,
        unitSale: 90,
        vendor: "Waleed",
        date: Date("12/12/2021"),
      },
    ];
  /*
    some work of integeration which will populate 
  */
  return (
    <div>
      <div className="card-shadow p-6 m-6 w-[70%]">
        <h3 className="   text-2xl font-bold ">Products</h3>
        <form>
          <div class="relative z-0 w-full mb-6 mt-3 group">
            <input
              type="text"
              name="floating_name"
              id="floating_name"
              class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              for="floating_name"
              class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Medicine Name
            </label>
          </div>
          <div class="relative z-0 w-full mb-6 group">
            <input
              type="text"
              name="floating_salt"
              id="floating_salt"
              class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              for="floating_salt"
              class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Salt
            </label>
          </div>
          <div class="relative z-0 w-full mb-6 group">
            <select
              name="floating_vendor"
              id="floating_vendor"
              class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            >
              {dataVendor.map((dv, idx) => (
                <option value={dv.value}>{dv.name}</option>
              ))}
            </select>
            <label
              for="floating_vendor"
              class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Vendors Select
            </label>
          </div>
          <div class="relative z-0 w-full mb-6 group">
            <select
              name="floating_Cat"
              id="floating_Cat"
              class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            >
              {dataCategory.map((dc, idx) => (
                <option value={dc.value}>{dc.name}</option>
              ))}
            </select>
            <label
              for="floating_Cat"
              class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Category Select
            </label>
          </div>
          <div class="grid xl:grid-cols-2 xl:gap-6">
            <div class="relative z-0 w-full mb-6 group">
              <input
                type="number"
                name="floating_purchaseprice"
                id="floating_purchaseprice"
                class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
              />
              <label
                for="floating_purchaseprice"
                class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Purchase Price
              </label>
            </div>
            <div class="relative z-0 w-full mb-6 group">
              <input
                type="number"
                name="floating_saleprice"
                id="floating_saleprice"
                class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
              />
              <label
                for="floating_saleprice"
                class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Sale Price
              </label>
            </div>
          </div>

          <div class="grid xl:grid-cols-2 xl:gap-6">
            <div class="relative z-0 w-full mb-6 group">
              <input
                type="number"
                name="floating_phone"
                id="floating_phone"
                class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
              />
              <label
                for="floating_phone"
                class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Amount
              </label>
            </div>
            <div class="relative z-0 w-full mb-6 group">
              <input
                type="date"
                name="floating_date"
                id="floating_date"
                class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
              />
              <label
                for="floating_date"
                class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Date
              </label>
            </div>
          </div>
          <button
            type="submit"
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Add Product
          </button>
        </form>
      </div>

      <div className="my-6 w-[90%]">
        <div>
          <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" class="px-6 py-3">
                    Key
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Product name
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Salt name
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Amount
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Unit Price
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Purchase Price
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Vendor
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Date
                  </th>

                  <th scope="col" class="px-6 py-3">
                    <span class="text-rose-800 sr-only">Delete</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {dataProduct.map((data, idx) => (
                  <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                    <td class="px-6 py-4">{data.key}</td>
                    <th
                      scope="row"
                      class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
                    >
                      {data?.name}
                    </th>
                    <th
                      scope="row"
                      class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
                    >
                      {data?.salt}
                    </th>
                    <td class="px-6 py-4">{data?.amount}</td>
                    <td class="px-6 py-4">{data?.unitSale}</td>
                    <td class="px-6 py-4">{data?.PurchasePrice}</td>
                    <td class="px-6 py-4">{data?.vendor}</td>
                    <td class="px-6 py-4">{data?.date}</td>

                    <td class="px-6 py-4 text-right">
                      <a
                        href="#"
                        class="font-medium text-rose-500 dark:text-rose-800 hover:underline"
                      >
                        Delete
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
  );
};

export default ProductForm;
