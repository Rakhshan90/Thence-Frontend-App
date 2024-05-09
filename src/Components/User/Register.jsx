import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import * as Yup from 'yup'
import { useFormik } from 'formik'

// form schema
const formSchema = Yup.object({
    name: Yup.string().required('First name is required'),
    email: Yup.string().email('Please enter a valid email address (e.g., xyz@abc.com)').required('Email is required'),
})

const Register = () => {
    const navigate = useNavigate();
    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
        },
        onSubmit: (values) => {
            navigate('/submitted')
        },
        validationSchema: formSchema,
    })
    return (
        <div className='p-12 min-h-screen'>
            {/* header section */}
            <section id="header">
                <div className="flex justify-between">
                    <img src="https://i.ibb.co/z5CxkGT/logo.png" alt="logo"  />
                    <div
                        onClick={() => navigate('/')}
                        className="absolute top-[40px] left-[1420px] border border-black rounded-full p-4 cursor-pointer">
                        <img  src="https://i.ibb.co/5cL4xB3/Close.png" alt="Close" />
                    </div>
                </div>
            </section>

            {/* Heading content section*/}
            <section id="heading-content" className='my-14'>
                <div className="flex flex-col space-y-2 justify-center items-center text-center">
                    <img src="https://i.ibb.co/JcDhf5V/registration.png"  />
                    <h1 className="text-6xl text-black font-medium">Start your success</h1>
                    <h1 className="text-6xl text-black font-medium">Journey here!</h1>
                </div>
            </section>

            {/* form section */}
            <section id="form" className='flex justify-center items-center'>
                <form
                    onSubmit={formik.handleSubmit}
                    className="flex flex-col space-y-4 w-1/3">
                    <input
                        value={formik.values.name}
                        onChange={formik.handleChange('name')}
                        onBlur={formik.handleBlur('name')}
                        type="text"
                        placeholder='Enter your name'
                        className='p-6 bg-stone-100 border-none rounded-full text-xl
                    placeholder:text-xl placeholder:text-stone-500 focus:outline-blue-400 focus:bg-slate-100' />
                    {formik.touched.name && formik.errors.name && (
                        <div className="flex space-x-2 items-center">
                            <img src="https://i.ibb.co/DtWdBtg/redflag.png" alt="redflag" className='h-6 w-6' />
                            <div className="text-red-600 ml-4 font-semibold">
                                {formik.errors.name}
                            </div>
                        </div>
                    )}
                    <input
                        value={formik.values.email}
                        onChange={formik.handleChange('email')}
                        onBlur={formik.handleBlur('email')}
                        type="email"
                        placeholder='Enter your email'
                        className='p-6 bg-stone-100 border-none rounded-full text-xl
                    placeholder:text-xl placeholder:text-stone-500 focus:outline-blue-400 focus:bg-slate-100' />
                    {formik.touched.email && formik.errors.email && (
                        <div className="flex space-x-2 items-center">
                            <img src="https://i.ibb.co/DtWdBtg/redflag.png" alt="redflag"  className='h-6 w-6' />
                            <div className="text-red-600 ml-4 font-semibold">
                                {formik.errors.email}
                            </div>
                        </div>
                    )}
                    {!formik.isValid ? (
                        <button
                            type='submit'
                            disabled
                            className="p-6 bg-black text-white opacity-20 text-xl text-center rounded-full focus:outline-none">
                            Submit
                        </button>
                    ) : (
                        <button
                            type='submit'
                            className="p-6 bg-black text-white text-xl text-center rounded-full focus:outline-none">
                            Submit
                        </button>
                    )}
                </form>
            </section>
        </div>
    )
}

export default Register