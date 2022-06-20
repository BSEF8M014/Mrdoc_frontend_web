import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const PharSales = () => {
  const [data, setData] = useState([]);
  const [product, setProduct] = useState({});
  const [total, setTotal] = useState(0);
  const [temp, setTemp] = useState({});
  const [tempUser, setTempUser] = useState({});
  //  const [dataProduct, setDataProduct] = useState([]);
  const token = {};
  const dataProduct =
    //fetch
    // fetch data api
    [
      {
        key: 0,
      },
      {
        key: 1,
        name: "Product 1",
        value: "pro1",
        amount: 12,
        unitSale: 100,
      },
      {
        key: 2,
        name: "Product 2",
        value: "pro2",
        amount: 7,
        unitSale: 111,
      },
      {
        key: 3,
        name: "Product 3",
        value: "pro3",
        amount: 120,
        unitSale: 50,
      },
    ];
  //  setDataProduct(dataProduct1);
  // setData(dataProduct);
  const notify = () => toast.success("Product added");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("product", product);
    const tempProduct = product;
    tempProduct.amount = temp.amount;
    console.log("tempProduct", tempProduct);
    setTotal(total + tempProduct.amount * tempProduct.unitSale);
    const tempArray = data;
    tempArray.push(tempProduct);
    setData(tempArray);
    console.log("data", data);
  };
  const handleSaleSubmit = async (e) => {
    e.preventDefault();
    const tempPost = {
      UserName: tempUser.Cname,
      Phone: tempUser.Cphone,
      Cnic: tempUser.Cnic,
      Sale: data,
      Pharmacy: token,
    };
  };

  return (
    <>
      <div>
        <ToastContainer position="top-left" />
        <div className="card-shadow p-6 m-6 w-[70%]">
          <div className="flex justify-between">
            <h3 className="   text-2xl font-bold ">Sales</h3>

            <button
              disabled
              type="submit"
              class="text-white bg-green-500    font-medium rounded-full text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Rs : {total}
            </button>
          </div>
          <div className="card-shadow p-2  m-2">
            <form
              onChange={({ target: { id, value } }) => {
                setTempUser({
                  ...tempUser,
                  ...(id && { [id]: [value] }),
                });
              }}
            >
              <div class="relative z-0 w-full mb-6 mt-3 group">
                <input
                  type="text"
                  name="floating_name"
                  id="Cname"
                  value={tempUser?.Cname}
                  class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required
                />
                <label
                  for="floating_name"
                  class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Customer Name
                </label>
              </div>

              <div class="grid xl:grid-cols-2 xl:gap-6">
                <div class="relative z-0 w-full mb-6 group">
                  <input
                    type="text"
                    name="floating_phone"
                    id="CNIC"
                    value={tempUser?.cnic}
                    class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                    required
                  />
                  <label
                    for="floating_phone"
                    class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    CNIC
                  </label>
                </div>
                <div class="relative z-0 w-full mb-6 group">
                  <input
                    type="text"
                    name="floating_date"
                    id="Cphone"
                    value={tempUser?.Cphone}
                    class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                    required
                  />
                  <label
                    for="floating_date"
                    class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Phone
                  </label>
                </div>
              </div>
            </form>
          </div>

          <div className="card-shadow my-4 p-2 m-2">
            <form
              onChange={({ target: { value, id } }) => {
                setTemp({
                  ...temp,
                  ...(id && { [id]: value }),
                });
              }}
            >
              <div class="relative z-0 w-full mb-6 mt-3 group">
                <select
                  name="floating_Cat"
                  id="proName"
                  class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  onChange={(e) => {
                    setProduct(dataProduct[e.target.value]);
                  }}
                  required
                >
                  {dataProduct.map((dc, idx) => (
                    <option value={dc.key - 1}>{dc.name}</option>
                  ))}
                </select>
                <label
                  for="floating_Cat"
                  class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Product Name
                </label>
              </div>

              <div class="grid xl:grid-cols-2 xl:gap-6">
                <div class="relative z-0 w-full mb-6 group">
                  <input
                    type="number"
                    name="floating_amount"
                    id="amount"
                    max={product.amount}
                    // value={data?.amount}
                    value={temp?.amount}
                    class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                    required
                  />
                  <label
                    for="floating_phone"
                    class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Amount max({product.amount})
                  </label>
                </div>
                <div class="relative z-0 w-full mb-6 group">
                  <input
                    type="text"
                    disabled
                    name="floating_phone"
                    id="unitPrice"
                    class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                    required
                  />
                  <label
                    for="floating_phone"
                    class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Unit Price: {product.unitSale}
                  </label>
                </div>
              </div>
              <div className="flex justify-between">
                <button
                  onClick={(e) => {
                    handleSubmit(e);
                  }}
                  class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Add Product
                </button>
                <button
                  onClick={(e) => {
                    handleSaleSubmit(e);
                  }}
                  type="submit"
                  class="text-white bg-green-500 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Submit Sale
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="my-6 w-[90%]">
          <div>
            <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
              <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th scope="col" class="px-6 py-3">
                      Product name
                    </th>
                    <th scope="col" class="px-6 py-3">
                      Amount
                    </th>
                    <th scope="col" class="px-6 py-3">
                      Unit Price
                    </th>
                    <th scope="col" class="px-6 py-3">
                      Price
                    </th>
                    <th scope="col" class="px-6 py-3">
                      <span class="text-rose-800 sr-only">Delete</span>
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
                        {data?.name}
                      </th>
                      <td class="px-6 py-4">{data?.amount}</td>
                      <td class="px-6 py-4">{data?.unitSale}</td>
                      <td class="px-6 py-4">{data?.amount * data?.unitSale}</td>
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
    </>
  );
};

export default PharSales;
