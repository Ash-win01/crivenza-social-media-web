import social from '../images/abtus.gif';

import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
    return (
       <div className='flex flex-row justify-between gap-[10px]  bg-white h-[200px] p-[50px] w-full'>
           <div className='flex flex-col gap-[20px]'>
                   <div className='text-3xl'>Crivenza</div>
                   <div className='flex flex-col'>
                    Contact us:
                    <div>+91 </div>
                    <div>email</div>
                   </div>
                   </div>
                   <div className='text-2xl'>
                    <div className='flex flex-col gap-3'>Find us on:
                        <div className='flex flex-row gap-5'>
                        <div> <FaFacebook /> </div>
                        <div> <FaInstagram/> </div>
                        <div> <FaLinkedin/> </div>
                        </div>
                    </div>
                   </div>
                 </div>
                  
    )
};