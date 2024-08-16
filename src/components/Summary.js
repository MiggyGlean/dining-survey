import React from 'react';
import { Pie, Bar } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement, BarElement, registerables } from 'chart.js';
import './Summary.css'; // Import the CSS file for Summary component
import { FaHome, FaChartPie, FaChartBar, FaCog } from 'react-icons/fa'; // Import icons

ChartJS.register(Title, Tooltip, Legend, ArcElement, BarElement, ...registerables);

const questionLabels = {
    q1: 'How satisfied are you with the variety of menu options available?',
    q2: 'How would you rate the taste and quality of the food served?',
    q3: 'How do you feel about the portion sizes of the meals provided?',
    q4: 'How satisfied are you with the temperature at which your food is served?',
    q5: 'How would you rate the cleanliness and hygiene of the dining area?',
    q6: 'How do you feel about the friendliness and professionalism of the dining staff?',
    q7: 'How would you rate the timeliness of the service provided?',
    q8: 'How comfortable is the dining atmosphere in terms of noise levels and seating arrangements?',
    q9: 'How satisfied are you with the availability of special dietary options, such as gluten-free or low-sodium meals?',
    q10: 'How likely are you to recommend our dining services to other residents?'
};

// Dummy data for responses
const dummyResponses = [
    { q1: 'Very Satisfied', q2: 'Good', q3: 'Just Right', q4: 'Satisfied', q5: 'Good', q6: 'Neutral', q7: 'Good', q8: 'Comfortable', q9: 'Satisfied', q10: 'Likely' },
    { q1: 'Satisfied', q2: 'Good', q3: 'Just Right', q4: 'Very Satisfied', q5: 'Good', q6: 'Neutral', q7: 'Good', q8: 'Comfortable', q9: 'Very Satisfied', q10: 'Likely' },
    { q1: 'Very Satisfied', q2: 'Good', q3: 'Just Right', q4: 'Satisfied', q5: 'Neutral', q6: 'Neutral', q7: 'Good', q8: 'Comfortable', q9: 'Satisfied', q10: 'Likely' }
];

// Helper function to generate summary data
const generateSummary = (responses) => {
    const summary = {};

    responses.forEach(response => {
        Object.keys(response).forEach(question => {
            if (!summary[question]) {
                summary[question] = {};
            }
            const answer = response[question];
            if (answer) {
                summary[question][answer] = (summary[question][answer] || 0) + 1;
            }
        });
    });

    return summary;
};

// Helper function to combine summary data for charts
const combineSummary = (summary) => {
    const combinedData = {};

    Object.values(summary).forEach(questionSummary => {
        Object.keys(questionSummary).forEach(answer => {
            combinedData[answer] = (combinedData[answer] || 0) + questionSummary[answer];
        });
    });

    return combinedData;
};

const Summary = ({ responses = dummyResponses }) => {
    const summary = generateSummary(responses);
    const combinedSummary = combineSummary(summary);

    const chartData = (data) => ({
        labels: Object.keys(data),
        datasets: [{
            label: 'Responses',
            data: Object.values(data),
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    });

    return (
        <div className="summary-page">
            <div className="sidebar">
                <div className="logo-container">
                    <img
                        src="https://servingintel.com/wp-content/uploads/2023/07/servingintel.logo_.primary-300x120.png"
                        alt="ServingIntel Logo"
                        className="logo"
                    />
                </div>
                <nav>
                    <ul>
                        <li><FaHome /> <a href="/admin">Home</a></li>
                        <li><FaChartPie /> <a href="/admin/summary">Summary</a></li>
                        <li><FaChartBar /> <a href="/admin/reports">Reports</a></li>
                        <li><FaCog /> <a href="/admin/settings">Settings</a></li>
                    </ul>
                </nav>
            </div>
            <div className="main-content">
                <h1>Survey Summary Report</h1>
                <div className="chart-container">
                    <h2>Pie Chart</h2>
                    <div className="chart">
                        <Pie data={chartData(combinedSummary)} />
                    </div>
                </div>
                <div className="chart-container">
                    <h2>Bar Chart</h2>
                    <div className="chart">
                        <Bar data={chartData(combinedSummary)} />
                    </div>
                </div>
                <div className="response-info-container">
                    <h2>Response Summary</h2>
                    {Object.keys(summary).map(questionKey => (
                        <div key={questionKey} className="question-summary">
                            <h3>Question {questionKey.replace('q', '')}: {questionLabels[questionKey]}</h3>
                            {Object.keys(summary[questionKey]).map(answer => (
                                <p key={answer}>
                                    {answer}: {summary[questionKey][answer]} response{summary[questionKey][answer] > 1 ? 's' : ''}
                                </p>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Summary;
