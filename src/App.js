import './App.css';
import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingForm from './component/LandingForm/landingForm';
import Login from './component/SignInForm.jsx';
import VotingForm from './component/VotingForm/VotingForm';
import BrandExample from './component/Header/Header';
import Thankyou from './component/ThankYou';
import NotFound from './component/NotFound';
import ReactGA from "react-ga";

const TRACKING_ID = 'G-Z3K0LX24BS';
ReactGA.initialize(TRACKING_ID);
function App() {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);
  return (
    <div>
      <BrandExample />
      <Router>
        <Routes>
          <Route path='/' element={<LandingForm />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/voting-form' element={<VotingForm />}></Route>
          <Route path='/thank-you' element={<Thankyou />}></Route>
          <Route path='*' element={<NotFound />}></Route>
        </Routes>
      </Router>
      <div><h6 className='mt-4 text-center mb-0 text-secondary footer'><a href="https://jmbliss.com/">jmbliss It Solutions</a> | @2023 All Rights Reserved</h6></div>
    </div>
  );
}

export default App;