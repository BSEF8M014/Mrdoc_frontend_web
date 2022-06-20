import img from "../../../Assets/logo.jpeg";
import Cards from "../../GlobalsComp/Cards";
import React from "react";

const Dashboard = () => {
  const data = [
    {
      img: img,
      NOL: 4,
      bgData: "bg-rose-500",
      line1val1: "Employees",
      line1val2: 90,
      line2val1: "This is it",
      line3val1: "vendorName",
      line3val2: "SalePrice: ",
      line3val3: "100PKR",
      line4val1: "purchase price: ",
      line4val2: "123",
    },
    {
      img: img,
      NOL: 4,
      bgData: "bg-yellow-500",
      line1val1: "Employees",
      line1val2: 40,
      line1val3: "-",
      line1val4: 100,
      line2val1: "This is it",
    },
    {
      img: img,
      NOL: 3,
      name: "Employees",
      num1: 15,
      sep: ":",
      num2: 100,
      bgData: "bg-lime-300",
      desc: "This is it",
    },
  ];
  return (
    <div>
      <Cards data={data} />
    </div>
  );
};

export default Dashboard;
