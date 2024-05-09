import React, { useState } from 'react'

const Info = () => {
    const [firstAnswer, setFirstAnswer] = useState(false);
    const [secondAnswer, setSecondAnswer] = useState(false);
    const [thirdAnswer, setThirdAnswer] = useState(false);
    const [fourthAnswer, setFourthAnswer] = useState(false);
    const [fifthAnswer, setFifthAnswer] = useState(false);
    const firstClickHandler = () => {
        setFirstAnswer(!firstAnswer);
    }
    const secondClickHandler = () => {
        setSecondAnswer(!secondAnswer);
    }
    const thirdClickHandler = () => {
        setThirdAnswer(!thirdAnswer);
    }
    const fourthClickHandler = () => {
        setFourthAnswer(!fourthAnswer);
    }
    const fifthClickHandler = () => {
        setFifthAnswer(!fifthAnswer);
    }
    return (
        <>
            {/* Questions section */}
            <section id="questions" className='mt-36 min-h-screen mx-10 bg-lightGreen rounded-[40px]'>
                {/* positioning arrow image */}
                <div className='relative'>
                    <img src="https://i.ibb.co/pdY6Yrz/Union.png" alt="Union"  className='absolute top-[274px]' />
                </div>
                <div className="flex justify-between p-24">
                    {/* item 1 */}
                    <div className="flex flex-col space-y-4 flex-1">
                        <img src="https://i.ibb.co/Ypmh8R8/mind.png" alt="mind"  className='w-[230px] h-[35px]' />
                        <h1 className="text-black text-6xl font-semibold">Ask Questions</h1>
                    </div>
                    {/* item 2 */}
                    <div className="flex flex-col space-y-6 flex-1">
                        <div className="flex justify-between w-full">
                            <h5 className="text-2xl text-black font-semibold">Do you offers freelancers?</h5>
                            {!firstAnswer ? (
                                <button onClick={firstClickHandler} className='text-3xl font-semibold'> + </button>
                            ) : (
                                <button onClick={firstClickHandler} className='text-3xl font-semibold'> - </button>
                            )}
                        </div>
                        {firstAnswer && (
                            <p className="text-gray-500 text-lg max-w-2xl leading-6 duration-300">
                                If unhappy with a project, communicate with the freelancer, allow for revisions, and
                                refer to the agreement, Escalate to platform support if needed, considering
                                mediation. Review policies, seek collaborative solutions for resolution.
                            </p>
                        )}
                        {/* border line */}
                        <div className="border border-b-1 border-gray-300"></div>
                        <div className="flex justify-between w-full">
                            <h5 className="text-2xl text-black font-semibold max-w-lg">What's the guarantee that I will be satisfied
                                with the hired talent?</h5>
                            {!secondAnswer ? (
                                <button onClick={secondClickHandler} className='text-3xl font-semibold'> + </button>
                            ) : (
                                <button onClick={secondClickHandler} className='text-3xl font-semibold'> - </button>
                            )}
                        </div>
                        {secondAnswer && (
                            <p className="text-gray-500 text-lg max-w-2xl leading-6 duration-300">
                                If unhappy with a project, communicate with the freelancer, allow for revisions, and
                                refer to the agreement, Escalate to platform support if needed, considering
                                mediation. Review policies, seek collaborative solutions for resolution.
                            </p>
                        )}
                        {/* border line */}
                        <div className="border border-b-1 border-gray-300"></div>
                        <div className="flex justify-between w-full">
                            <h5 className="text-2xl text-black font-semibold">Can I hire multiple talents at once?</h5>
                            {!thirdAnswer ? (
                                <button onClick={thirdClickHandler} className='text-3xl font-semibold'> + </button>
                            ) : (
                                <button onClick={thirdClickHandler} className='text-3xl font-semibold'> - </button>
                            )}
                        </div>
                        {thirdAnswer && (
                            <p className="text-gray-500 text-lg max-w-2xl leading-6 duration-300">
                                If unhappy with a project, communicate with the freelancer, allow for revisions, and
                                refer to the agreement, Escalate to platform support if needed, considering
                                mediation. Review policies, seek collaborative solutions for resolution.
                            </p>
                        )}
                        {/* border line */}
                        <div className="border border-b-1 border-gray-300"></div>
                        <div className="flex justify-between w-full">
                            <h5 className="text-2xl text-black font-semibold">Why should I not go to an agency directly?</h5>
                            {!fourthAnswer ? (
                                <button onClick={fourthClickHandler} className='text-3xl font-semibold'> + </button>
                            ) : (
                                <button onClick={fourthClickHandler} className='text-3xl font-semibold'> - </button>
                            )}
                        </div>
                        {fourthAnswer && (
                            <p className="text-gray-500 text-lg max-w-2xl leading-6 duration-300">
                                If unhappy with a project, communicate with the freelancer, allow for revisions, and
                                refer to the agreement, Escalate to platform support if needed, considering
                                mediation. Review policies, seek collaborative solutions for resolution.
                            </p>
                        )}
                        {/* border line */}
                        <div className="border border-b-1 border-gray-300"></div>
                        <div className="flex justify-between w-full">
                            <h5 className="text-2xl text-black font-semibold">Who can help me pick a right skillset
                                and duration for me?</h5>
                            {!fifthAnswer ? (
                                <button onClick={fifthClickHandler} className='text-3xl font-semibold'> + </button>
                            ) : (
                                <button onClick={fifthClickHandler} className='text-3xl font-semibold'> - </button>
                            )}
                        </div>
                        {fifthAnswer && (
                            <p className="text-gray-500 text-lg max-w-2xl leading-6 duration-300">
                                If unhappy with a project, communicate with the freelancer, allow for revisions, and
                                refer to the agreement, Escalate to platform support if needed, considering
                                mediation. Review policies, seek collaborative solutions for resolution.
                            </p>
                        )}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Info