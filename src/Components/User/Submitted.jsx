import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Submitted = () => {
    const navigate = useNavigate();
    const [countDown, setCountDown] = useState(5);
    useEffect(() => {
        setTimeout(() => {
            navigate('/')
        }, 5000);

        const intervalId = setInterval(() => {
            if (countDown > 1) {
                setCountDown(countDown - 1); // Decrement count
            } else {
                clearInterval(intervalId); // Clear interval when count reaches 1
            }
        }, 1000); // Update every second
    }, [countDown]);
    return (
        <div className='p-12 min-h-screen'>
            {/* header section */}
            <section id="header" className='mb-28'>
                <div className="flex justify-start">
                    <img src="https://i.ibb.co/z5CxkGT/logo.png" alt="logo"  />
                </div>
            </section>

            {/* submitted content section */}
            <section id="submitted">
                <div className="flex flex-col space-y-6 justify-center items-center text-center">
                    <img src="https://i.ibb.co/ZTRnsyJ/tick.png" alt="tick"  />
                    <img src="https://i.ibb.co/sq5yvdB/submitted.png"  />
                    <h1 className="text-6xl text-black font-medium">Congratulations</h1>
                    <p className="text-gray-500 text-3xl font-semibold max-w-3xl">Your request has been successfully submitted to us. We
                        will validate your information and reach out to your
                        shortly with updates</p>
                </div>
                <div className="mt-24 text-center flex space-x-2 justify-center items-center">
                    <p className="text-md text-gray-500 ml-4">Redirecting you to Homepage in</p>
                    <p className="text-black text-md font-bold">{countDown} Seconds</p>
                </div>
            </section>
        </div>
    )
}

export default Submitted