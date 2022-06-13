import React from 'react'

const SignUp = () => {
  return (
    <>
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
      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
        Sign Up
      </button>
        
    </div>
    <div class="flex items-center mt-4 justify-between">
      
      <a class="inline-block align-baseline text-xs text-gray-500 hover:text-blue-800" href="#">
        Already have an account ? <span className='cursor-pointer text-blue-500 font-bold'>Login</span>
      </a>
    </div>
  </form>
            </div>
        </div>
    </>
  )
}

export default SignUp