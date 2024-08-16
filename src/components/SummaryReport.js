import React from 'react';
import { Pie, Bar } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement, BarElement, registerables } from 'chart.js';
import './SummaryReport.css'; // Import the CSS file

ChartJS.register(Title, Tooltip, Legend, ArcElement, BarElement, ...registerables);

const SummaryReport = ({ responses }) => {
    const generateSummary = (responses) => {
        const summary = {};
        const options = [
            'Very Satisfied', 'Satisfied', 'Neutral', 'Dissatisfied', 'Very Dissatisfied',
            'Excellent', 'Good', 'Fair', 'Poor',
            'Too Large', 'Just Right', 'Too Small',
            'Very Comfortable', 'Comfortable', 'Neutral', 'Uncomfortable', 'Very Uncomfortable',
            'Very Likely', 'Likely', 'Neutral', 'Unlikely', 'Very Unlikely'
        ];

        Object.keys(responses).forEach(question => {
            if (!summary[question]) {
                summary[question] = {};
            }
            const answer = responses[question];
            if (answer) {
                summary[question][answer] = (summary[question][answer] || 0) + 1;
            }
        });

        return summary;
    };

    const combineSummary = (summary) => {
        const combinedData = {};
        
        Object.values(summary).forEach(questionSummary => {
            Object.keys(questionSummary).forEach(answer => {
                combinedData[answer] = (combinedData[answer] || 0) + questionSummary[answer];
            });
        });
        
        return combinedData;
    };

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
        <div className="summary-report">
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
        </div>
    );
};

export default SummaryReport;