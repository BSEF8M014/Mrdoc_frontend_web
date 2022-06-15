import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
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
      <Router>
        <Header />
        <div className="flex">
          <div className="w-[20%]  ">
            {" "}
            <Sidebar></Sidebar>{" "}
          </div>
          <div className="w-[80%]  ">
            <Routes>
              <Route exact path="/Dashboard" element={<Dashboard />}></Route>

              <Route path="/ProductForm" element={<ProductForm />}></Route>
              <Route path="/CategoryForm" element={<CategoryForm />}></Route>
              <Route path="/VendorForm" element={<VendorForm />}></Route>
              <Route path="/BillForm" element={<BillForm />}></Route>
              {/* <Route path="/VendorForm" element={<VendorForm />}>
               
              </Route> */}

              {/* <Route path="*" element={<Home />}></Route> */}
            </Routes>

            {/* <Dashboard></Dashboard> */}
            {/* <ProductForm></ProductForm> */}
            {/* <CategoryForm></CategoryForm> */}
            {/* <VendorForm></VendorForm> */}
            {/* <BillForm></BillForm> */}
          </div>
        </div>
      </Router>
    </div>
  );
};

export default PharHome;
