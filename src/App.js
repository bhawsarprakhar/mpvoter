import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingForm from './component/LandingForm/landingForm';
import Login from './component/SignInForm.jsx';
import VotingForm from './component/VotingForm/VotingForm';
import BrandExample from './component/Header/Header';
import Thankyou from './component/ThankYou';

function App() {
  return (
    <div>
      <BrandExample />
      <Router>
        <Routes>
          <Route path='/' element={<LandingForm />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/voting-form' element={<VotingForm />}></Route>
          <Route path='/thank-you' element={<Thankyou />}></Route>
          
        </Routes>
      </Router>
    </div>
  );
}

export default App;