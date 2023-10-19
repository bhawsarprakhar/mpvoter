// NotFound.js
// import { useEffect } from "react";
import React, { useEffect } from "react";
import ReactGA from "react-ga";
import BrandExample from "./Header/Header";

const TRACKING_ID = "G-Z0G655HHZ0";
ReactGA.initialize(TRACKING_ID);

function NotFound() {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);
  return (
    <>
      <BrandExample />
      <div className="text-center">
        <h1>404 - Not Found</h1>
        <p>Sorry, the page you're looking for does not exist.</p>
      </div>
    </>
  );
}

export default NotFound;
