import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Admin from './components/Admin';
import SurveyForm from './components/SurveyForm';
import Summary from './components/Summary';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SurveyForm />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/admin/summary" element={<Summary />} />
      </Routes>
    </Router>
  );
}

export default App;
