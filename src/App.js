import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SurveyForm from './components/SurveyForm';
import SummaryReport from './components/SummaryReport';

function App() {
    const [responses, setResponses] = useState({});

    return (
        <Router>
            <Routes>
                <Route path="/" element={<SurveyForm setResponses={setResponses} />} />
                <Route path="/summary" element={<SummaryReport responses={responses} />} />
            </Routes>
        </Router>
    );
}

export default App;