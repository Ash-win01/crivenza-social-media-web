import social from '../images/logocr.png';

export default function Highlights() {
    return (
       <div className='flex flex-row gap-[10px] justify-center items-center bg-[#571260] h-[400px] p-[20px] w-full'>
                    <div className='grid grid-cols-[60%_40%] gap-4 w-[80%] h-full'>
                        <div className='flex flex-col p-[10px] gap-[20px] items-center rounded-2xl '>
                         <div className='text-3xl font-sans font-bold text-white'>Highlights</div>
                         <div className='flex flex-wrap font-serif text-xl text-white'>To be updated.. </div>
                         <button className='p-[10px] bg-white border-[#571260] text-[#571260] font-bold'>Read More</button>
                        </div>
       
                        <div className='rounded-2xl flex justify-center items-center'> 
                         <img src={social} className='h-[300px]'></img>
                          </div>
                    </div>
                 </div>
    )
};