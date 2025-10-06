import social from '../images/abtus.gif';

export default function About() {
    return (
       <div className='flex flex-row gap-[10px] justify-center items-center bg-white h-[400px] p-[20px] w-full'>
                    <div className='grid grid-cols-[60%_40%] gap-4 w-[80%] h-full'>
                        <div className='flex flex-col p-[10px] gap-[20px] items-center rounded-2xl bg-white'>
                         <div className='text-3xl font-sans font-bold'>About us</div>
                         <div className='flex flex-wrap font-serif text-xl'> At Crivenza, we believe that every connection should be simple, meaningful, and seamless. Our platform was created with the vision of bringing people, ideas, and communities together in one vibrant space. We aim to redefine social interaction by combining simplicity, creativity, and innovation, allowing you to share, explore, and grow without clutter. At Crivenza, you are not just another user — you are part of a community where your voice matters, your connections thrive, and your presence shapes the future of digital interaction. </div>
                         <button className='p-[10px] bg-red-800 text-white'>Read More</button>
                        </div>
       
                        <div className='rounded-2xl flex justify-center items-center'> 
                         <img src={social} className='h-[300px]'></img>
                          </div>
                    </div>
                 </div>
    )
};