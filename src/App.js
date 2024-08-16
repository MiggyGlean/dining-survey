import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SurveyForm from './components/SurveyForm';
import Admin from './components/Admin';
import Summary from './components/Summary';

function App() {
    const [responses, setResponses] = useState({});

    return (
        <Router>
            <Routes>
                <Route path="/" element={<SurveyForm setResponses={setResponses} />} />
                <Route path="/admin" element={<Admin responses={responses} />} />
                <Route path='/admin/summary' element={<Summary responses={responses} />} />
            </Routes>
        </Router>
    );
}

export default App;