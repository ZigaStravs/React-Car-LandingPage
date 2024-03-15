import React from 'react'
import third from '../asset/third.jpg'
import Typed from 'react-typed';


const Handle = () => {
  return (
    <section name='handle' className='w-full h-screen relative'>
        {/* image section */}
        <img className='w-full h-screen object-cover relative border-4 border-b-indigo-500/100 border-l-indigo-500/100 border-r-indigo-500/100' src={third} alt="" />

        <div className='absolute top-[20%] right-[50%] left-[50%] flex justify-center'>
        <Typed
        className='font-bold uppercase text-green-500 text-4xl font-[poppins]'
                    strings={['Control']}
                    typeSpeed={70}
                    backSpeed={70}
                    loop
        />
        </div>

    </section>
  )
}

export default Handle