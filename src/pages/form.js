import React, { useState } from 'react'
import { StepOne, StepTwo, StepTracker } from '../components/form-components/index'
import gsap from 'gsap';

const Form = () => {

    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        teamname: '',
        players: []
    })

    const handleSubmit = () => {
        console.log(formData);
    }

    const handleFormData = (input,value) => {
        setFormData({...formData,[input]:value})
    }

    const prevStep = () => {
        gsap.to(`.form-step-${step}`, { opacity: 0, y: 30, duration: 0.5 });
        setTimeout(() => {
            setStep(step - 1);
            gsap.fromTo(`.form-step-${step - 1}`, { opacity: 0, y: -30 }, { opacity: 1, duration: 0.5, y: 0 })
        }, 500)
    }

    const nextStep = () => {
        gsap.to(`.form-step-${step}`, { opacity: 0, y: -30, duration: 0.5 });
        setTimeout(() => {
            setStep(step + 1);
            gsap.fromTo(`.form-step-${step + 1}`, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.5 })
        }, 500)
    }
    return (
        <section className=' min-h-screen flex relative w-full'>
            <div className="w-1/2 p-10 min-h-screen flex-col flex ">
                <h1 className='font-semibold text-4xl text-black'>Stump Storm Organization Cricket Registration</h1>
                <p className='text-gray-500 text-xl mt-3'>Welcome to the registration page!</p>
                <div className=" min-h-[33vh] flex-col flex justify-evenly mt-5">
                    <h3 className='text-black text-2xl font-medium'>Event Details</h3>
                    <p className=' capitalize text-black font-normal'>title</p>
                    <p className=' capitalize text-black font-normal'>Location: </p>
                    <p className=' capitalize text-black font-normal'>Date: </p>
                    <p className=' capitalize text-black font-normal'>Timings: </p>
                </div>
                <div className=""></div>
            </div>
            <div className="w-1/2 p-10  min-h-screen relative bg-[#f6f7e9]">
                <div className="borders h-20 flex-all">
                    <StepTracker step={step} />
                </div>
                <div className="borders relative w-full mt-10 min-h-[60vh]">
                    {step === 1 && <StepOne nextStep={nextStep} handleFormData={handleFormData} formData={formData} />}
                    {step === 2 && <StepTwo formData={formData} />}
                </div>
                <div className="relative borders w-full h-20">
                    {
                        step > 1 && (
                            <button onClick={prevStep} className='bg-gray-500 text-white px-5 py-2 rounded'>Back</button>
                        )
                    }
                    {
                        step < 2 ? (
                            <button onClick={nextStep} className='bg-gray-500 text-white px-5 py-2 rounded'>Next</button>
                        ) : (
                            <button onClick={handleSubmit} className='bg-green-500 text-white px-5 py-2 rounded'>Submit</button>
                        )
                    }
                </div>
            </div>
        </section>
    )
}

export default Form