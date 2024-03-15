import React from 'react'
import first from '../asset/first.jpg'
import Typed from 'react-typed';


const Power = () => {
  return (
    <section name='power' className='w-full h-screen relative'>
        {/* image section */}
        <img className='w-full h-screen object-cover relative' src={first} alt="" />

        <div className='absolute top-[20%] right-[50%] left-[50%] flex justify-center'>
        <Typed
        className='font-bold uppercase text-green-500 text-4xl font-[poppins]'
                    strings={['Power']}
                    typeSpeed={70}
                    backSpeed={70}
                    loop
        />
            
        </div>

    </section>
  )
}

export default Power