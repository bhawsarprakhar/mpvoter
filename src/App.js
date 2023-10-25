import './App.css';
import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingForm from './component/LandingForm/landingForm';
import Login from './component/SignInForm.jsx';
import VotingForm from './component/VotingForm/VotingForm';
import Thankyou from './component/ThankYou';
import NotFound from './component/NotFound';
import ReactGA from "react-ga";
import VoteGuid from './component/Pages/VoteGuid';
import AllCandidates from './component/Pages/AllCandidates';
import ForgotPassword from './component/ForgetPasswod';
// import ChangePassword from './component/ChangePassword';
import VerifiedSuccess from './component/Pages/VerifiedSuccess';

import AboutUsPage from './component/Pages/AboutUsPage';
const TRACKING_ID = 'G-Z0G655HHZ0';
ReactGA.initialize(TRACKING_ID);

function App() {

  const updateLastActivity = () => {
    const now = new Date().getTime();
    localStorage.setItem('lastActivity', now);
  };

  // Check for inactivity and log the user out if the session expires
  const checkSessionExpiration = () => {
    const lastActivity = localStorage.getItem('lastActivity');
    if (lastActivity) {
      const currentTime = new Date().getTime();
      const sessionDuration = 12 * 60 * 60 * 1000; // 12 hours in milliseconds
      if (currentTime - lastActivity >= sessionDuration) {
        localStorage.removeItem("user");
      }
    }
  };

  // Add an event listener to update activity on user interaction
  useEffect(() => {
    updateLastActivity();
    window.addEventListener('mousemove', updateLastActivity);
    window.addEventListener('keydown', updateLastActivity);

    // Periodically check for session expiration
    const sessionExpirationInterval = setInterval(checkSessionExpiration, 10000); // Check every 10 seconds

    return () => {
      clearInterval(sessionExpirationInterval);
      window.removeEventListener('mousemove', updateLastActivity);
      window.removeEventListener('keydown', updateLastActivity);
    };
  }, []);

  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);
  return (
    <div>
      <Router>
      
        <Routes>
          <Route path='/' element={<LandingForm />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/login/:token/:password' element={<Login />}></Route>
          <Route path='/voting-form' element={<VotingForm />}></Route>
          <Route path='/voting-form/:token' element={<VotingForm />}></Route>
          {/* <Route path='/forget-form/:token' element={<ChangePassword />}></Route> */}
          <Route path='/thank-you' element={<Thankyou />}></Route>
          <Route path='*' element={<NotFound />}></Route>
          <Route path='/VoteGuid' element={<VoteGuid/>}></Route>
          <Route path='/AllCandidates' element={<AllCandidates/>}></Route>
          <Route path='/forget-password' element={<ForgotPassword />}></Route>
          <Route path='/AboutUsPage' element={<AboutUsPage/>}></Route>
          <Route path='/verified-success/:token' element={<VerifiedSuccess/>}></Route>

        </Routes>
      </Router>
      <div><h6 className='mt-4 text-center mb-0  footer'><a target='_blank' href="https://jmbliss.com/">Jmbliss IT Solutions</a> | @2023 All Rights Reserved</h6></div>
    </div>
  );
}

export default App;