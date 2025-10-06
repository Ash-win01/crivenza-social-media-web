import React from 'react'
import Background from '../components/Background'
import SignupBox from '../components/SignUpbox'
import LoginBox from '../components/loginBox'
import '../index.css'
const Signup = () => {
  const [user,setUser]= React.useState(true);
  const handleClick=(value)=>{
    setUser(value);
  }
  return (
    <div className='w-full overflow-hidden h-screen flex relative justify-center font-roboto items-center'>
        <Background />
        <div className='main-container'>
          <div className={`card ${!user ? 'flipped' : ''} w-full max-w-xs sm:max-w-md mx-auto`}>
                <div className='front'>
                    <LoginBox onSignup={handleClick} />
                </div>
                <div className='back'>
                    <SignupBox onSignup={handleClick} />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Signup