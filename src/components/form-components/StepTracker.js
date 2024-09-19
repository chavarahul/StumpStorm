import React from 'react'

const StepTracker = ({step}) => {
  return (
    <>
    <div className={`h-2 w-1/2  ${step>=1 ? 'bg-green-500':'bg-gray-300'} mx-1 rounded-full`}></div>
    <div className={`h-2   w-1/2 ml-10 ${step>=2 ? 'bg-green-500':'bg-gray-300'} mx-1 rounded-full`}></div>
    </>
  )
}

export default StepTracker