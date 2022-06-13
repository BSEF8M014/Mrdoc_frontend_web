import React from "react";
import logo from "../../../Assets/logo.jpeg";
const Header = () => {
  const pharname = "(Demo Name)";
  return (
    <div>
      <div className="flex justify-between h-11  my-3 px-5">
        <div className="flex">
          <img src={logo} alt="logo" className="rounded-full" />

          <h2 className="text-rose-600 text-2xl font-bold py-1 px-2">
            MrPharma.online
          </h2>
        </div>
        <div className="flex py-1">
          <h2 className="text-xl text-blue-600 font-bold py-1 px-4">
            {pharname}
          </h2>
          <button className="bg-blue-400 rounded-full text-white h-9 w-24">
            Log out
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
