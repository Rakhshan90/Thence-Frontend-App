import React, { useState } from 'react'
import Navbar from './Navigation/Navbar'
import Info from './Info'

const Home = () => {
  return (
    <>
      <Navbar />
      {/* Heading content section*/}
      <section id="heading-content" className='my-14'>
        <div className="flex flex-col space-y-2 justify-center items-center text-center">
          <img src="https://i.ibb.co/4FHCptL/success.png" alt="success"  />
          <h1 className="text-6xl text-black font-medium">Every success journey</h1>
          <h1 className="text-6xl text-black font-medium">we've encountered.</h1>
        </div>
      </section>

      {/* image and slider section */}
      <section id="img-slider" className='mb-14'>
        {/* flex container */}
        <div className="flex max-w-8xl p-12">
          {/* item 1 */}
          <div className="container relative">
            <img src="https://i.ibb.co/D5pvXtw/lady.png" alt="lady" className='rounded-[50px] ml-36 hover:scale-105 duration-200' />
            <div className="rounded-3xl bg-white p-6 absolute top-[110px] left-[15px] shadow-xl">
              <img src="https://i.ibb.co/rQ7FjgR/spark.png" alt="spark"  className='w-[95px] absolute top-[-15px] left-[-10px]' />
              <img  src="https://i.ibb.co/3vQ5zcZ/fourty.png" alt="fourty"  className='w-[121px] absolute top-[52px] left-[25px]' />
              <p className="max-w-[207px] text-gray-500 text-xl text-left leading-6 mt-24">
                Achieved reduction in
                project execution time
                by optimising team
                availability
              </p>
            </div>

            <div className="flex items-center space-x-8 p-4 bg-white rounded-full absolute bottom-[50px] left-[80px] shadow-lg">
              <div className="bg-green-100 rounded-full p-2">
                <img src="https://i.ibb.co/VTMGTZP/Frame.png" alt="Frame"  />
              </div>
              <div className="flex flex-col">
                <div className='uppercase font-bold text-2xl'>10 days</div>
                <p className="text-xl text-gray-500">Staff deployment</p>
              </div>
            </div>

            <div className="flex flex-col space-y-6 bg-darkGreen rounded-3xl p-8 absolute bottom-[-48px] left-[28rem]">
              <div className="flex items-end space-x-2">
                <div className="text-white font-semibold text-6xl">$0.5</div>
                <div className="text-gray-300 uppercase">million</div>
              </div>
              <p className="max-w-[216px] text-gray-300 text-xl text-left leading-6 mt-24">
                Reduced client expenses
                by saving on hiring and
                employee costs.
              </p>
            </div>
          </div>
          {/* item 2 */}
          <div className='container'>
            <div className="relative">
              <img src="https://i.ibb.co/xD07J9t/frame1.png" alt="frame1"  className='absolute top-[-90px] left-[244px] -z-50' />
              <img src="https://i.ibb.co/Z2krLMG/frame2.png" alt="frame2"  className='absolute top-[107px] left-[244px] -z-50' />
            </div>
            <div className="flex flex-col space-y-32">
              <div className="flex flex-col items-start justify-start space-y-14 z-50 mt-[5rem] ml-[10rem]">
                <div className="max-w-md text-black font-semibold text-5xl leading-12">
                  Enhance fortune 50
                  company's insights
                  teams research
                  capabilities
                </div>
                <div className="flex space-x-2">
                  <div className='w-3 h-3 bg-green-500 rounded-full cursor-pointer hover:animate-ping'></div>
                  <div className='w-3 h-3 bg-gray-200 rounded-full cursor-pointer hover:animate-ping'></div>
                  <div className='w-3 h-3 bg-gray-200 rounded-full cursor-pointer hover:animate-ping'></div>
                </div>
              </div>
              <button className="ml-[10rem] flex items-center justify-center space-x-4 w-[245px] button border rounded-full px-8 py-6 
               bg-black hover:opacity-70 duration-200">
                <span className='text-center text-xl text-white'>Explore More</span>
                <img src="https://i.ibb.co/X406JSX/Vector.png" alt="Vector"  />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Questions */}
      <Info />

      {/* footer section */}
      <section id="footer" className='my-14'>
        <div className="flex justify-between rounded-[40px] bg-beigeGreen p-[60px] mx-10">
          {/* item 1 */}
          <p className="text-black text-xl font-semibold">&copy; Talup 2023. All rights reserved</p>
          {/* item 2 */}
          <div className="flex space-x-4">
            <p className="text-black text-xl font-semibold underline cursor-pointer">Terms & Conditions</p>
            <p className="text-black text-xl font-semibold underline cursor-pointer">Privacy Policy</p>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home