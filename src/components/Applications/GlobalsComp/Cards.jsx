import React from "react";
import img from "../../Assets/logo.jpeg";
const Cards = (props) => {
  const data = props.data;
  return (
    <div>
      <div className=" w-full ">
        <div>
          <div className=" flex justify-between ">
            {data.map((data, idx) => (
              <div
                className={` ${data.bgData}   flex py-3 px-3 mr-3 h-[${
                  50 * data.NOL
                }px] py-11 w-[33%] border border-[#E0E0E0] rounded-xl`}
              >
                <div className="h-[40px] w-[40px] p-2 bg-[#e5ebf4] rounded-full  ">
                  <img src={data.img} alt="myimg" className="  rounded-full" />
                </div>
                <div className="px-2 w-full">
                  <div>
                    <h1 className="text-[18px] font-semibold text-white">
                      {data.line1val2}
                      {data.line1val3}
                      {data.lineval4}{" "}
                      <span className="text-sm">{data.line1val1}</span>
                    </h1>
                  </div>
                  <h2 className="text-[12px]  text-white font-medium  ">
                    {data.line2val1}
                  </h2>

                  <div className="flex justify-between mt-5 w-full">
                    <h1 className="text-[18px] font-semibold text-white">
                      {data.line3val1}
                    </h1>
                    <h2 className="text-sm text-[12px] font-semibold text-white">
                      {data.line3val2}
                      {data.line3val3}
                      <br />
                      {data.line4val1}
                      {data.line4val2}
                    </h2>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
