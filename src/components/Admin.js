import React from 'react';
import { FaHome, FaChartPie, FaChartBar, FaCog } from 'react-icons/fa'; // Import icons
import './Admin.css'; // Import the CSS file

const Admin = () => {
    return (
        <div className="summary-container">
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
                <h1>Welcome to the Survey Dashboard!</h1>
                <p>Explore insights and manage the survey data from this dashboard. Use the navigation menu on the left to access different sections.</p>
                <div className="home-welcome">
                    <h2>Get Started</h2>
                    <p>Select a section from the navigation to view detailed reports, summaries, or adjust settings. We're here to help you analyze and improve the dining experience!</p>
                </div>
            </div>
        </div>
    );
};

export default Admin;
