import React from 'react'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
    const navigate = useNavigate();
    return (
        // Background container
        <div className='bg-white my-0 mx-auto p-6 text-center'>
            {/* flex container */}
            <div className="flex justify-between items-center px-4 border border-gray-200 rounded-full">
                {/* item 1 */}
                {/* <h1 className="text-4xl text-black font-bold pl-8">Brunel</h1> */}
                <img src="https://i.ibb.co/z5CxkGT/logo.png" alt="logo"  className='pl-8' />

                {/* item 2 */}
                <div className="flex space-x-4 items-center py-4">
                    {/* button 1 */}
                    <button
                    onClick={()=> navigate('/register')} 
                    className="button border border-gray-200 rounded-full px-8 py-6 text-center text-md bg-white hover:bg-gray-200
                    duration-200">
                        Get Projects
                    </button>

                    {/* button 2 */}
                    <button className="button border rounded-full px-8 py-6 text-center text-md bg-black text-white hover:opacity-70
                    duration-200">
                        Onboard Talent
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Navbar



