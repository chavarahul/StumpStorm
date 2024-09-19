import React from 'react'

const StepTracker = ({step}) => {
  return (
    <>
    <div className={`h-2 w-1/4 ${step>=1 ? 'bg-[#FE320A]':'bg-gray-300'} mx-1 rounded-full`}></div>
    <div className={`h-2 w-1/4 ${step>=2 ? 'bg-[#FE320A]':'bg-gray-300'} mx-1 rounded-full`}></div>
    </>
  )
}

export default StepTracker