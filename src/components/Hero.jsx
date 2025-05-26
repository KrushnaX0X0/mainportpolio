import React from 'react'
import img1 from '../assets/myp.jpg'

function Hero() {
    return (
        <>
            <div className='h-m-screen w-screen flex iteam-center flex-wrap  justify-center iteam-center  mt-10 '>
                <div className='h-[450px] mx-auto sm:w-[300px]  w-[250px] bg-red-600 rounded-b-full overflow-hidden '>
                 <img src={img1} alt="profile" className='h-[100vh] w-full rounded-b-full object-cover ' />
                </div>

                <div className='h-full w-full md:w-[60vw] justify-center iteam-center pt-10 mt-10  '>
                    <div className='h-40 w-[50vw] text-center mx-auto flex flex-col justify-center items-center mb-5'>
                        <h4 className='text-4xl sm:text-7xl text-center'>A Creative <span className='text-green-500 font4 text-6xl sm:text-8xl'>Developer</span><br></br><span className='font4 text-6xl sm:text-8xl text-green-500'>&</span>digital teacher</h4>
                    </div>
                    <p className='text-center'>I collaborate with brands globally to design impactful, mission-focused websites that drive results and achieve business goals.</p>
                    <button className='py-3  px-10 bg-black text-white rounded-4xl cursor-pointer'>My Resume</button>
                </div>
                


            </div>
        </>
    )
}

export default Hero