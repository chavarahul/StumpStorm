import React, { useState } from 'react'
import { StepOne, StepTwo, StepTracker } from '../components/form-components/index'
import gsap from 'gsap';
import toast from 'react-hot-toast';
import {useNavigate,useLocation} from 'react-router-dom'

const Form = () => {

    const navigate = useNavigate();
    const [step, setStep] = useState(1);
    const location = useLocation();
    const event = location.state;
    const [formData, setFormData] = useState({
        teamLeaderName: '',
        teamName: '',
        mobileNumber: '',
    })

    const handleSubmit = () => {
        console.log(formData);
        toast.success('Successfully registered');
        navigate("/events")
    }

    const handleFormData = (input, value) => {
        setFormData({ ...formData, [input]: value })
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
        <section className=' min-h-screen flex relative w-full max-lg:flex-col'>
            <div className="w-1/2 max-lg:w-full max-md:p-4 p-10 min-h-screen max-lg:bg-[#f6f7e9] max-lg:min-h-[15vh] flex-col flex ">
                <h1 className='font-semibold text-4xl text-black max-lg:text-2xl'>Stump Storm Organization Cricket Registration</h1>
                <p className='text-gray-500 text-xl mt-3'>Welcome to the registration page!</p>
                <div className=" min-h-[50vh] max-lg:hidden flex-col flex justify-evenly mt-5 ">
                    <h3 className='text-black text-2xl font-medium'>Event Details</h3>
                    <img src={event.image} alt="" className='w-1/2 h-1/2 rounded-xl' />
                    <p className=' capitalize text-black font-normal'>{event.title}</p>
                    <p className=' capitalize text-black font-normal'>Location: {event.location} </p>
                    <p className=' capitalize text-black font-normal'>Date: {event.date}</p>
                    <p className=' capitalize text-black font-normal'>Timings: {event.timings}</p>
                </div>
                <div className=""></div>
            </div>
            <div className="w-1/2 max-md:p-4 p-10 max-lg:w-full  min-h-screen relative bg-[#f6f7e9]">
                <div className=" h-20 flex">
                    <StepTracker step={step} />
                </div>
                <div className=" relative w-full min-h-[45vh]">
                    {step === 1 && <StepOne nextStep={nextStep} handleFormData={handleFormData} formData={formData} />}
                    {step === 2 && <StepTwo formData={formData} />}
                </div>
                <div className="relative max-lg:-mt-20 w-full flex-bet h-20">
                    {
                        step > 1 && (
                            <button onClick={prevStep} className='bg-gray-500 text-white px-5 py-2 rounded'>Back</button>
                        )
                    }
                    {
                        step < 2 ? (
                            <button
                                onClick={nextStep}
                                className='bg-gray-800 text-white px-5 py-2 rounded'
                                disabled={formData.mobileNumber === '' || formData.teamLeaderName === '' || formData.teamName === ''}
                            >
                                Next
                            </button>
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