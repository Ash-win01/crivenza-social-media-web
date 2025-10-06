import React from 'react'
import '../index.css'
const LoginBox = ({ onSignup}) => { 
  return (
    <div className={`absolute text-white w-full max-w-xs sm:max-w-lg mx-auto bg-white/10 backdrop-blur-[8px] rounded-lg p-6 sm:p-10 `}>
      <form action="#" className="flex flex-col relative ">
        <h2 className="text-[24px] text-white text-center mb-5">Login</h2>

        <div className="border-2 px-3 border-gray-300 my-4 relative">
           <input
            className="text-white peer relative text-[16px] w-full h-[40px] bg-transparent outline-none border-none"
            type="text"
            required
          />
     <label className="px-2 bg-[#a852b1] absolute left-1 top-1/2 -translate-y-1/2  text-gray-300 text-sm transition-all duration-300 ease-in-out pointer-events-none peer-placeholder-shown:text-base
            peer-focus:-translate-y-8 peer-focus:-translate-x-1 peer-focus:text-sm
            peer-valid:-translate-y-8 peer-valid:text-sm">
           Enter your email
          </label>
        </div>

         <div className="border-2 px-3 border-gray-300 my-4 relative">
          <input
            className="text-white peer relative text-[16px] w-full h-[40px] bg-transparent outline-none border-none"
            type="password"
            required
          />
         <label className="px-2 bg-[#9e4abd] absolute left-1 top-1/2 -translate-y-1/2  text-gray-300 text-sm transition-all duration-300 ease-out pointer-events-none  peer-placeholder-shown:top-2 peer-placeholder-shown:text-base
            peer-focus:-translate-y-8 peer-focus:-translate-x-1 peer-focus:text-sm
            peer-valid:-translate-y-8 peer-valid:text-sm">
        Password
          </label>
          </div>

          <div className='flex items-center'>
        <input type="checkbox" className=" w-4 h-4 accent-purple-600"/>
            <label className="text-white px-2 text-sm">Remember me</label>
            </div>
          <div className='flex justify-center'>
          <button type='submit' className='bg-[#E68B3C] text-black p-2 rounded-lg w-1/2 font-bold mt-3 mb-2 hover:bg-[#f3a261] hover:scale-105 transition-all duration-300 ease-in-out'>
       Login
          </button>
          </div>  
          <button onClick={(e)=>{e.preventDefault(); onSignup(false)}}>Create an account? <span className='text-[#f4f82d] '>Sign up</span></button>
      </form>
    </div>
  )
}

export default LoginBox