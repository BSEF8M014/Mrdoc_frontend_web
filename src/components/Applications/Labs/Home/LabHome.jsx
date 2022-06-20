import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "../LabComponents/Dashboard";
import Header from "../LabComponents/Header";
import LabBills from "../LabComponents/LabBills";
import Sidebar from "../LabComponents/Sidebar";
import Test from "../LabComponents/Test";
import Uncompleted from "../LabComponents/Uncompleted";
const LabHome = () => {
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
              <Route path="/Lab/Bills" element={<LabBills />}></Route>
              <Route path="/Lab/Dashboard" element={<Dashboard />}></Route>
              <Route path="/Lab/Tests" element={<Test />}></Route>
              <Route path="/Lab/Uncompleted" element={<Uncompleted />}></Route>
              {/* <Route path="/ProductForm" element={<ProductForm />}></Route>
              <Route path="/CategoryForm" element={<CategoryForm />}></Route>
              <Route path="/VendorForm" element={<VendorForm />}></Route>
              <Route path="/PharBills" element={<PharBills />}></Route> */}
            </Routes>
          </div>
        </div>
      </Router>
    </div>
  );
};

export default LabHome;
