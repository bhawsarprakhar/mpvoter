import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import ReactGA from "react-ga";
import { Helmet } from "react-helmet";
import VoteGuid from "./Pages/VoteGuid";
// import GoogleLoginButton from '../component/GoogleLoginButton.js';

const TRACKING_ID = "G-Z0G655HHZ0";
ReactGA.initialize(TRACKING_ID);

const Login = () => {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  const [formValue, setFormValue] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormValue({ ...formValue, [e.target.name]: e.target.value });
  };

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  const LogIn = async (e) => {
    e.preventDefault();
    // debugger;
    // const newErrors = {};
    // if (!formValue.us_phone || !/^\d{10}$/.test(formValue.us_phone)) {
    //   newErrors.us_phone = "Phone number should be numerical and 10 digit";
    // }
    // if (Object.keys(newErrors).length === 0) {
    //navigate("/voting-form");
    // console.log(formValue);
    await axios
      .post("https://backlaravel.mpvoter.com/api/login_route", formValue, {
        headers: { "content-type": "application/json" },
      })
      .then((response) => {
        if (response.data.error == "Check Your Email and Password") {
          alert("Check Your Email and Password");
        } else {
          const user = {
            username: response?.data?.name,
            useremail: response?.data?.email
          };
          localStorage.setItem("user", JSON.stringify(user));
          navigate("/voting-form" , { state: user });
        }
      });

    // } else {
    //   setErrors(newErrors);
    // }
  };

  // const handleGoogleLogin = async () => {
  //   debugger
  //   try {
  //     const response = await axios.get('https://backlaravel.mpvoter.com/api/googlelogin');
  //     // If successful, you may receive a URL to redirect the user to Google for login.
  //     const { redirect_url } = response.data;
  //     window.location.href = redirect_url;
  //   } catch (error) {
  //     // Handle login error.
  //     console.error(error);
  //   }
  // };

  const handleLoginSuccess = async (response) => {
    // Handle successful Google login, send the token to your backend for verification

    try {
      // Send the Google OAuth response (token) to your backend for verification.
      const token = response.tokenId;
      const responseFromBackend = await fetch(
        "https://backlaravel.mpvoter.com/api/auth/google/callback",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ token }),
        }
      );

      if (responseFromBackend.status === 200) {
        const responseData = await responseFromBackend.json();
        const { token } = responseData;
        // Store the token or take further action.
        console.log("Successfully authenticated with token:", token);
      } else {
        console.error("Google login verification failed.");
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
    // console.log(response);
  };

  const handleLoginFailure = (error) => {
    // Handle Google login failure
    console.error(error);
  };
  
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const [isActive, setIsActive] = useState(false);

  const toggleClass = () => {
    setIsActive(!isActive);
  };
  return (
    <div className="container poll-form guid-video">
      <Helmet>
        <link rel="canonical" href="https://mpvoter.com/login" />
      </Helmet>
    <VoteGuid/>
      <form
        className="col-12 m-auto col-lg-8 login-from"
        onSubmit={(e) => LogIn(e)}
      >
        <h1 className="mb-4 text-center">Login</h1>
        <div className="d-flex flex-row align-items-center mb-4">
          <div className="form-outline flex-fill mb-0">
            <input
              type="email"
              id="form3Example3c"
              className="form-control"
              required
              name="email"
              placeholder="Your Email"
              onChange={handleChange}
            />
            {/* {errors.us_phone && (
              <p className="text-danger error">{errors.us_phone}</p>
            )} */}
          </div>
        </div>

        <div className="d-flex flex-row align-items-center mb-4 hs-ps">
          <div className="form-outline flex-fill mb-0 ">
            <input
              type={showPassword ? "text" : "password"}
              id="form3Example4c"
              className="form-control"
              required
              name="password"
              placeholder="Password"
              onChange={(e) => handleChange(e)}
            />
          </div>

          <div
            className={`custom-button ${isActive ? "active" : "inactive"}`}
            onClick={toggleClass}
          >
            <p className="click-pas" onClick={togglePasswordVisibility}>
              {showPassword ? "Hide" : "Show"}
            </p>
          </div>
        </div>

        <button type="submit" className="btn btn-primary btn-lg mb-4">
          LOGIN
        </button>
    
        {/* <div onClick={handleGoogleLogin} className="btn btn-primary btn-lg mb-4">
          Login With Gmail
        </div> */}

        {/* <GoogleLoginButton onLoginSuccess={handleLoginSuccess} onLoginFailure={handleLoginFailure} /> */}
     
        <div>
          <p className="have-acc">Forget <Link to="/forget-password">password !</Link></p>
          <p className="have-acc">
            Not have an account ? <Link to="/">Sign Up</Link>
          </p>
        </div>
      </form>
      <p className="text-light information-txt">
        <b>
          Join the Powerhouse of Madhya Pradesh's Social Movement! Be part of
          something extraordinary as we unite 10 lakh strong voices on social
          media, amplifying our collective impact and influence.Your voice, your
          power! Join us today to shape the future of Madhya Pradesh. Together,
          we can make a difference.
        </b>
   
      </p>
    </div>
  );
};
export default Login;
