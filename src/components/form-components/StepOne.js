import React from 'react';

const StepOne = ({ nextStep, handleFormData, formData }) => {
    return (
        <div className="form-step-1 w-1/2 max-lg:w-full text-black">
            <h2 className="text-xl font-semibold mb-4">Step 1: Team Information</h2>

            <div className="mb-4">
                <div className="inputBox">
                    <input
                        type="text"
                        id="teamLeaderName"
                        name="teamLeaderName"
                        required                       
                        value={formData.teamLeaderName}
                        onChange={(e) => handleFormData('teamLeaderName', e.target.value)}
                    />
                    <span>Team Leader Name</span>
                </div>
            </div>

            <div className="mb-4">
                <div className="inputBox">
                    <input
                        type="text"
                        id="teamName"
                        name="teamName"
                        required                        
                        value={formData.teamName}
                        onChange={(e) => handleFormData('teamName', e.target.value)}
                    />
                    <span>Team Name</span>
                </div>
            </div>

            <div className="mb-4">
                <div className="inputBox">
                    <input
                        type="tel"
                        id="mobileNumber"
                        name="mobileNumber"
                        required
                        value={formData.mobileNumber}
                        onChange={(e) => handleFormData('mobileNumber', e.target.value)}
                    />
                    <span>Mobile Number</span>
                </div>
            </div>
        </div>
    );
}

export default StepOne;
