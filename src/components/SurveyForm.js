import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Import CSS for toast

const SurveyForm = ({ setResponses }) => {
    const [formData, setFormData] = useState({
        q1: '',
        q2: '',
        q3: '',
        q4: '',
        q5: '',
        q6: '',
        q7: '',
        q8: '',
        q9: '',
        q10: '',
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setResponses(formData); // Store the responses in state
        toast.success('Thank you for submitting the survey!'); // Show success toast

        // Redirect to the summary page after 3 seconds
        setTimeout(() => {
            navigate('/summary');
        }, 3000);
    };

    const renderRadioButtons = (name, options) => {
        return options.map(option => (
            <div key={option}>
                <input
                    type="radio"
                    id={`${name}-${option}`}
                    name={name}
                    value={option}
                    checked={formData[name] === option}
                    onChange={handleChange}
                    required
                />
                <label htmlFor={`${name}-${option}`}>{option}</label>
            </div>
        ));
    };

    return (
        <div className="survey-container">
            <div className="logo-container">
                <img
                    src="https://servingintel.com/wp-content/uploads/2023/07/servingintel.logo_.primary-300x120.png"
                    alt="ServingIntel Logo"
                    className="logo"
                />
            </div>
            <div className="survey-title">
                Senior Living Dining Survey
            </div>
            <div className="survey-form">
                <form onSubmit={handleSubmit}>
                    <div className="question">
                        <label className="question-label">
                            1. How satisfied are you with the variety of menu options available?
                        </label>
                        <div className="radio-group">
                            {renderRadioButtons('q1', [
                                'Very Satisfied', 'Satisfied', 'Neutral', 'Dissatisfied', 'Very Dissatisfied'
                            ])}
                        </div>
                    </div>

                    <div className="question">
                        <label className="question-label">
                            2. How would you rate the taste and quality of the food served?
                        </label>
                        <div className="radio-group">
                            {renderRadioButtons('q2', [
                                'Excellent', 'Good', 'Fair', 'Poor'
                            ])}
                        </div>
                    </div>

                    <div className="question">
                        <label className="question-label">
                            3. How do you feel about the portion sizes of the meals provided?
                        </label>
                        <div className="radio-group">
                            {renderRadioButtons('q3', [
                                'Too Large', 'Just Right', 'Too Small'
                            ])}
                        </div>
                    </div>

                    <div className="question">
                        <label className="question-label">
                            4. How satisfied are you with the temperature at which your food is served?
                        </label>
                        <div className="radio-group">
                            {renderRadioButtons('q4', [
                                'Very Satisfied', 'Satisfied', 'Neutral', 'Dissatisfied', 'Very Dissatisfied'
                            ])}
                        </div>
                    </div>

                    <div className="question">
                        <label className="question-label">
                            5. How would you rate the cleanliness and hygiene of the dining area?
                        </label>
                        <div className="radio-group">
                            {renderRadioButtons('q5', [
                                'Excellent', 'Good', 'Fair', 'Poor'
                            ])}
                        </div>
                    </div>

                    <div className="question">
                        <label className="question-label">
                            6. How do you feel about the friendliness and professionalism of the dining staff?
                        </label>
                        <div className="radio-group">
                            {renderRadioButtons('q6', [
                                'Very Satisfied', 'Satisfied', 'Neutral', 'Dissatisfied', 'Very Dissatisfied'
                            ])}
                        </div>
                    </div>

                    <div className="question">
                        <label className="question-label">
                            7. How would you rate the timeliness of the service provided?
                        </label>
                        <div className="radio-group">
                            {renderRadioButtons('q7', [
                                'Excellent', 'Good', 'Fair', 'Poor'
                            ])}
                        </div>
                    </div>

                    <div className="question">
                        <label className="question-label">
                            8. How comfortable is the dining atmosphere in terms of noise levels and seating arrangements?
                        </label>
                        <div className="radio-group">
                            {renderRadioButtons('q8', [
                                'Very Comfortable', 'Comfortable', 'Neutral', 'Uncomfortable', 'Very Uncomfortable'
                            ])}
                        </div>
                    </div>

                    <div className="question">
                        <label className="question-label">
                            9. How satisfied are you with the availability of special dietary options, such as gluten-free or low-sodium meals?
                        </label>
                        <div className="radio-group">
                            {renderRadioButtons('q9', [
                                'Very Satisfied', 'Satisfied', 'Neutral', 'Dissatisfied', 'Very Dissatisfied'
                            ])}
                        </div>
                    </div>

                    <div className="question">
                        <label className="question-label">
                            10. How likely are you to recommend our dining services to other residents?
                        </label>
                        <div className="radio-group">
                            {renderRadioButtons('q10', [
                                'Very Likely', 'Likely', 'Neutral', 'Unlikely', 'Very Unlikely'
                            ])}
                        </div>
                    </div>

                    <button type="submit" className="submit-button">Submit</button>
                </form>
            </div>
            <ToastContainer />
        </div>
    );
};

export default SurveyForm;
