import React from 'react'
import RotatingText from './RotatingText'

function Navbar() {
    return (

        <>
            <div className='h-10 w-full mt-4 ml-3 '>
                <span className='text-2xl'>Krushna |</span>
                <div className=' w-22 inline-block ml-1 '>
                    <RotatingText
                  texts={[ "Designer", "Developer", "Dreamer", "Creator", "Thinker", "Leader", "Learner"]}
                    mainClassName="w-[110px]  bg-red-400 text-black flex justify-center rounded-4xl py[0.1px px-4]"
                    staggerFrom={"last"}
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    exit={{ y: "-120%" }}
                    staggerDuration={0.035}
                    splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                    transition={{ type: "spring", damping: 30, stiffness: 400 }}
                    rotationInterval={3000}
                />
                </div>
            </div>
        </>
    )
}

export default Navbar