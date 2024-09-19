import React from 'react'

const StepTwo = ({ formData }) => {
  return (
    <div className="form-step-2">
      <h2 className="text-xl text-black font-semibold mb-4">Step 2: Confirm Your Details</h2>

      <p className="text-gray-700 mb-4">
        Please review the details you have entered. If everything looks correct, click "Confirm" to proceed.
      </p>

      <div className="mb-4">
        <label className="block text-gray-700 mb-1 font-semibold">Team Leader Name</label>
        <p className="text-gray-900">{formData.teamLeaderName}</p>
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 mb-1 font-semibold">Team Name</label>
        <p className="text-gray-900">{formData.teamName}</p>
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 mb-1 font-semibold">Mobile Number</label>
        <p className="text-gray-900">{formData.mobileNumber}</p>
      </div>

    </div>
  )
}

export default StepTwo