// NotFound.js
// import { useEffect } from "react";
import React,{useEffect} from 'react';
import ReactGA from "react-ga";

const TRACKING_ID = 'G-Z3K0LX24BS';
ReactGA.initialize(TRACKING_ID);

  
  function NotFound() {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);
  return (
    <div className='text-center'>
      <h1>404 - Not Found</h1>
      <p>Sorry, the page you're looking for does not exist.</p>
    </div>
  );
}

export default NotFound;
