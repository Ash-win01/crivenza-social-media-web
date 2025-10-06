import React from 'react'

const SignupBox = ({ onSignup }) => { 
  return (
    <div className={`absolute text-white w-full max-w-xs sm:max-w-md mx-auto bg-white/10 backdrop-blur-[8px] rounded-lg p-6 sm:p-10`}>
      <form action="#" className="flex flex-col relative ">
        <h2 className="text-[24px] text-white text-center mb-5">Sign Up</h2>
        
         <div className="border-2 px-3 border-gray-300 my-4 relative">
           <input
            className="text-white peer relative text-[16px] w-full h-[40px] bg-transparent outline-none border-none"
            type="text"
            required
          />
     <label className="px-2 bg-[#b159a8] absolute left-1 top-1/2 -translate-y-1/2  text-gray-300 text-sm transition-all duration-300 ease-in-out pointer-events-none peer-placeholder-shown:text-base
            peer-focus:-translate-y-8 peer-focus:-translate-x-1 peer-focus:text-sm
            peer-valid:-translate-y-8 peer-valid:text-sm">
           Username
          </label>
        </div>
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

          <button type='submit' className='bg-[#E68B3C] text-black p-3 rounded-lg w-full font-bold mt-5 hover:bg-[#f3a261] hover:scale-105 transition-all duration-300 ease-in-out'>
       SignUp
          </button>
          <button onClick={(e)=> {e.preventDefault(); onSignup(true)}} className={'mt-3'}>
            Already have an account? <span className='text-[#f4f82d] '>Login</span>
          </button>
      </form>
    </div>
  )
}

export default SignupBox