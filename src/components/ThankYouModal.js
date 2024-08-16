import React from 'react';
import './ThankYouModal.css'; // Import the CSS for the modal

const ThankYouModal = ({ onClose }) => {
    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <div className="modal-header">
                    <img
                        src="https://servingintel.com/wp-content/uploads/2023/07/servingintel.logo_.primary-300x120.png"
                        alt="ServingIntel Logo"
                        className="modal-logo"
                    />
                </div>
                <h2>Thank you for filling out the questionnaire!</h2>
                <button className="ok-button" onClick={onClose}>OK</button>
            </div>
        </div>
    );
};

export default ThankYouModal;
