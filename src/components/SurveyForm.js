import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SurveyForm.css'; // Import CSS for styling

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
        navigate('/summary'); // Redirect to the summary page
    };

    const renderRadioButtons = (name, options) => {
        return options.map(option => (
            <div key={option} className="radio-group">
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
            <h1>Senior Living Dining Survey</h1>
            <form onSubmit={handleSubmit} className="survey-form">
                <div className="question">
                    <label>1. How satisfied are you with the variety of menu options available?</label>
                    {renderRadioButtons('q1', [
                        'Very Satisfied', 'Satisfied', 'Neutral', 'Dissatisfied', 'Very Dissatisfied'
                    ])}
                </div>

                <div className="question">
                    <label>2. How would you rate the taste and quality of the food served?</label>
                    {renderRadioButtons('q2', [
                        'Excellent', 'Good', 'Fair', 'Poor'
                    ])}
                </div>

                <div className="question">
                    <label>3. How do you feel about the portion sizes of the meals provided?</label>
                    {renderRadioButtons('q3', [
                        'Too Large', 'Just Right', 'Too Small'
                    ])}
                </div>

                <div className="question">
                    <label>4. How satisfied are you with the temperature at which your food is served?</label>
                    {renderRadioButtons('q4', [
                        'Very Satisfied', 'Satisfied', 'Neutral', 'Dissatisfied', 'Very Dissatisfied'
                    ])}
                </div>

                <div className="question">
                    <label>5. How would you rate the cleanliness and hygiene of the dining area?</label>
                    {renderRadioButtons('q5', [
                        'Excellent', 'Good', 'Fair', 'Poor'
                    ])}
                </div>

                <div className="question">
                    <label>6. How do you feel about the friendliness and professionalism of the dining staff?</label>
                    {renderRadioButtons('q6', [
                        'Very Satisfied', 'Satisfied', 'Neutral', 'Dissatisfied', 'Very Dissatisfied'
                    ])}
                </div>

                <div className="question">
                    <label>7. How would you rate the timeliness of the service provided?</label>
                    {renderRadioButtons('q7', [
                        'Excellent', 'Good', 'Fair', 'Poor'
                    ])}
                </div>

                <div className="question">
                    <label>8. How comfortable is the dining atmosphere in terms of noise levels and seating arrangements?</label>
                    {renderRadioButtons('q8', [
                        'Very Comfortable', 'Comfortable', 'Neutral', 'Uncomfortable', 'Very Uncomfortable'
                    ])}
                </div>

                <div className="question">
                    <label>9. How satisfied are you with the availability of special dietary options, such as gluten-free or low-sodium meals?</label>
                    {renderRadioButtons('q9', [
                        'Very Satisfied', 'Satisfied', 'Neutral', 'Dissatisfied', 'Very Dissatisfied'
                    ])}
                </div>

                <div className="question">
                    <label>10. How likely are you to recommend our dining services to other residents?</label>
                    {renderRadioButtons('q10', [
                        'Very Likely', 'Likely', 'Neutral', 'Unlikely', 'Very Unlikely'
                    ])}
                </div>

                <button type="submit" className="submit-button">Submit</button>
            </form>
        </div>
    );
};

export default SurveyForm;