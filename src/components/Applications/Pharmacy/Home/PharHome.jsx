import React from "react";
import ProductForm from "../PharComponents/ProductForm";
import Dashboard from "../PharComponents/Dashboard";
import Header from "../PharComponents/Header";
import Sidebar from "../PharComponents/Sidebar";
import CategoryForm from "../PharComponents/CategoryForm";
import VendorForm from "../PharComponents/VendorForm";
import BillForm from "../../GlobalsComp/BillForm";

const PharHome = () => {
  return (
    <div>
      <Header />
      <div className="flex">
        <div className="w-[20%]  ">
          {" "}
          <Sidebar></Sidebar>{" "}
        </div>
        <div className="w-[80%]  ">
          <Dashboard></Dashboard>
          {/* <ProductForm></ProductForm> */}
          {/* <CategoryForm></CategoryForm> */}
          {/* <VendorForm></VendorForm> */}
          <BillForm></BillForm>
        </div>
      </div>
    </div>
  );
};

export default PharHome;
