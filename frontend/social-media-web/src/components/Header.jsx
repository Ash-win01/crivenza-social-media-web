import NavButton from "./Navbutton";
import crlogo from '../images/logocr.png';
import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";


export default function Header() {
    return (
    <div className='flex flex-row  bg-[#d1add8] items-center justify-between w-full h-[70px] p-[5px]'>
      <div className="flex flex-row items-center">
            <img src={crlogo} className="h-[100px] w-[150px]"></img>
            <h1 className='m-0 text-4xl text-[#571260] font-extrabold p-[20px]'>Crivenza</h1>
      </div>
      <Link to="/signup">
      <div className="flex flex-row items-center">
            <button className="m-0 text-2xl text-[#571260] font-extrabold p-[20px]">Login </button>
            <FaUser className="h-[50px]"/>
      </div>
      </Link>

            </div>
    )
}