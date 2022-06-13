import { type } from '@testing-library/user-event/dist/type';
import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import Login from '../Login-SignUp/Login';
import SignUp from '../Login-SignUp/SignUp';

export default function Modal() {
    const [showModal, setShowModal] = useState(false);

    const [type, setType] = useState(true);

    const [showpass, setShowpass] = useState(false);
    return (
      <>
      <div className=''>
      <center>
        <button
          className="bg-[#4f3fd3b0]  mx-4  text-white font-bold uppercase text-xs px-6 py-3 rounded-full shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
          type="button"
          onClick={() => setShowModal(true)}
        >
          Login
        </button>  
        </center>
        </div>
        {showModal ? (
          <>
            <div
              className="justify-center  items-center flex overflow-x-hidden   fixed inset-0 z-50 outline-none focus:outline-none"
            >
              <div className="relative container w-[50%] my-6 mx-auto  ">
                {/*content*/}
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                  {/*header*/}
                  <div>
                  <i className="fa-solid fa-xmark float-right text-gray-400 px-5 pt-2 text-2xl cursor-pointer" onClick={() => setShowModal(false)}></i>
                  </div>
                 
                  {/*body*/}
                  <div className="relative md:w-[90%] mx-auto p-6 flex-auto">

                 {type ? <div className='w-[70%] mx-auto  '>
                 <div>
            <div>
            <div className="  ">
                    <h3 className="text-3xl text-gray-700 text-center font-bold">
                       Login
                    </h3>
                    {/* <p className='text-gray-400 text-center  '> Please Confirm the payment to finish booking the court</p> */}
 
                  </div>

                  <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
    <div class="mb-4">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
        Phone or Email
      </label>
      <input class="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Phone or Email"/>
    </div>
  {showpass ?   <div class="mb-6">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
        Password
      </label>
      <input class="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************"/>
      {/* <p class="text-red-500 text-xs italic">Please choose a password.</p> */}
    </div> :null}
    <div class="flex items-center justify-between">
      <button class="bg-[#4f3fd3b0]    text-white font-bold uppercase text-xs px-6 py-3 rounded-full shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
        Login
      </button>
      <span onClick={()=>{setShowpass(!showpass)}} class=" cursor-pointer inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800">
       Use Password ?
      </span>
    </div>
    <div class="flex items-center mt-4 justify-between">
      
      <a class="inline-block align-baseline text-xs text-gray-500 hover:text-blue-800" href="#">
        Don't have an account Create one ? <span onClick={()=>{setType(false)}} className='cursor-pointer text-blue-500 font-bold'>Sign Up</span>
      </a>
    </div>
  </form>
            </div>
        </div>
                  </div> : 

                  <div className='w-[70%] mx-auto  '>
                  <div>
            <div>
            <div className="  ">
                    <h3 className="text-3xl text-gray-700 text-center font-bold">
                       Sign Up
                    </h3>
                    {/* <p className='text-gray-400 text-center  '> Please Confirm the payment to finish booking the court</p> */}
 
                  </div>

                  <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
    <div class="mb-4">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
        Full Name
      </label>
      <input class="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Full Name"/>
    </div>
    <div class="mb-6">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
        Phone
      </label>
      <input class="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="phone" type="text" placeholder="Phone"/>
      {/* <p class="text-red-500 text-xs italic">Please choose a password.</p> */}
    </div>
    <div class="flex items-center justify-between">
      <button class="bg-[#4f3fd3b0] text-white font-bold uppercase text-xs px-6 py-3 rounded-full shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
        Sign Up
      </button>
        
    </div>
    <div class="flex items-center mt-4 justify-between">
      
      <a class="inline-block align-baseline text-xs text-gray-500 hover:text-blue-800" href="#">
        Already have an account ? <span onClick={()=>{setType(true)}} className='cursor-pointer text-blue-500 font-bold'>Login</span>
      </a>
    </div>
  </form>
            </div>
        </div>  
                  </div> }

                   

                  
                  
     
                  </div>
                  {/*footer*/}
                  <div className="flex items-center justify-center py-2   ">
 
                        {/* <button
                      className="bg-blue-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-9 py-3 rounded-xl shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
                      onClick={() => setShowModal(false)}
                    >
                     Confirm & pay
                    </button>   */}
                  </div>
                </div>
              </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
          </>
        ) : null}
      </>
    );
  }