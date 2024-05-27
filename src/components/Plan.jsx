import React from 'react';

const Plan = () => {
  return (
    <div className='max-w-[1400px] m-auto py-16 grid lg:grid-cols-2 gap-4'>
      {/* Left Side */}
      <div className='grid grid-cols-2 gap-1 grid-rows-6 h-[80vh]'>
        <img
          className='row-span-3 object-cover w-full h-full'
          src='https://images.pexels.com/photos/1078983/pexels-photo-1078983.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
          alt='/'
        />
        <img
          className='row-span-2 object-cover w-full h-full'
          src='https://images.unsplash.com/photo-1454391304352-2bf4678b1a7a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80'
          alt='/'
        />
        <img
          className='row-span-2 object-cover w-full h-full'
          src='https://images.pexels.com/photos/1179156/pexels-photo-1179156.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
          alt='/'
        />
        <img
          className='row-span-3 object-cover w-full h-full'
          src='https://images.unsplash.com/photo-1468413253725-0d5181091126?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
          alt='/'
        />
        <img
          className='row-span-2 object-cover w-full h-full'
          src='https://images.unsplash.com/photo-1473186578172-c141e6798cf4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1673&q=80'
          alt='/'
        />
      </div>
      {/* Right Side */}
      <div className='flex flex-col h-full justify-center px-4 pt-10'>
        <h3 className='text-3xl md:text-4xl font-bold'>Plan Your Next Trip</h3>
        <p className='text-2xl py-6'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias,
          nam?
        </p>
        <p className='pb-6'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
          voluptates nostrum dolorum reprehenderit error! Doloribus est illo
          eius saepe? Molestias sapiente perspiciatis doloribus consectetur
          nihil facilis aliquid eaque vel quisquam.
        </p>
        <div className='flex gap-2'>
          <button className='bg-white w-32 text-black border-gray-900 hover:bg-gray-900 hover:border-white hover:text-white shadow-xl duration-200'>
            Learn More
          </button>
          <button className='hover:bg-white w-32 hover:text-black hover:border-gray-900 bg-gray-900 border-white text-white shadow-xl duration-200'>Book Your Trip</button>
        </div>
      </div>
    </div>
  );
};

export default Plan;
