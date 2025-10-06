import img from '../images/features.png';

export default function Features() {
    return (
       <div className='flex flex-row gap-[10px] justify-center items-center bg-white h-[400px] p-[20px] w-full'>
                    <div className='grid grid-cols-[60%_40%] gap-4 w-[80%] h-full'>
                        <div className='flex flex-col p-[10px] gap-[20px] items-center rounded-2xl bg-white'>
                         <div className='text-3xl font-sans font-bold'>Features</div>
                         <div className='flex flex-wrap font-serif text-xl'> To be updated... </div>
                            <button className='p-[10px] bg-[#571260] text-white'>Read More</button>
                        </div>
       
                        <div className='rounded-2xl flex justify-center items-center'> 
                         <img src={img} className='h-[300px]'></img>
                          </div>
                    </div>
                 </div>
    )
};