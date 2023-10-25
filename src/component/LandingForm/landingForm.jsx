import React, { useEffect, useState } from "react";
// import OtpInput from "react-otp-input";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import ReactGA from "react-ga";
import VoteGuid from "../Pages/VoteGuid";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import BrandExample from "../Header/Header";

const TRACKING_ID = "G-Z0G655HHZ0";
ReactGA.initialize(TRACKING_ID);

const Signup = () => {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  const [formValue, setFormValue] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });

  const [otp, setOtp] = useState(false);
  const [code, setCode] = useState("");
  const [inValidCode, setInvalidCode] = useState();

  const handleOtpChange = (code) => setCode(code);

  const navigate = useNavigate();
  const OtpSubmit = async (e) => {
    e.preventDefault();
    try {
      const verificationData = {
        email: formValue.email,
        code: code,
      };
      var resData = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/api/auth/verifyOtp`,
        verificationData,
        {
          validateStatus: () => true,
        }
      );

      if (resData && resData.status === 200) {
        // Update user isVerified
        setInvalidCode("");
        navigate("/login");
      } else if (resData && resData.status === 404) {
        alert("Invalid verification code");
        setInvalidCode("Invalid verification code");
      } else if (resData && resData.status === 410) {
        alert("Code has expired");
      }
    } catch (err) {
      console.log(err);
    }
  };
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const signIn = async (e) => {
    //debugger;
    e.preventDefault();

    const newErrors = {};
    if (!formValue.name || !/^[A-Za-z-' ]+$/.test(formValue.name)) {
      newErrors.name = "Name should be alphabetical only";
    }
    if (
      !formValue.email ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formValue.email)
    ) {
      newErrors.email = "Invalid email format";
    }

    // if (!formValue.us_password || formValue.us_password.length < 8) {
    //   newErrors.us_password = "Password must be at least 8 characters";
    // }

    if (!formValue.phone || !/^\d{10}$/.test(formValue.phone)) {
      newErrors.phone = "Phone number should be numerical and 10 digit";
    }

    // console.log(newErrors)
    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) {
      setLoading(true);

      const timer = setTimeout(() => {
        const user = {
          username: formValue?.name,
          email: formValue?.email,
        };
        localStorage.setItem("user", JSON.stringify(user));
        navigate("/voting-form", { state: user });
      }, 3000); // 3 seconds

      const result = await axios
        .post("https://backlaravel.mpvoter.com/api/reg_test", formValue, {
          headers: { "content-type": "application/json" },
        })

        .then((response) => {
          if (response) {
            if (response.data == "Email is already taken") {
              clearTimeout(timer);
              toast.error("Email is already taken.");
            }
            // } else {
            //   toast.success("You are Registered.Please verify your Email ID");
            //   const user = {
            //     username: formValue?.name,
            //     email: formValue?.email,
            //   };
            //   localStorage.setItem("user", JSON.stringify(user));
            //   setTimeout(() => {
            //     navigate("/voting-form", { state: user });
            //   }, 4000);
            // }
          } else {
            alert("something went wrong");
          }
        })
        .finally(() => {
          setLoading(false);
        });
    }
  };

  useEffect(() => {
    if (localStorage.getItem("user")) {
      navigate("/voting-form");
    }
  }, []);

  const reSendotp = async (e) => {
    e.preventDefault();
    try {
      const userData = {
        email: formValue.email,
      };
      await axios.post(
        `${process.env.REACT_APP_BASE_URL}/api/auth/resendotp`,
        userData,
        {
          validateStatus: () => true,
        }
      );
    } catch (err) {
      console.log(err);
    }
  };
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormValue({ ...formValue, [e.target.name]: e.target.value });
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
    <>
      <BrandExample />
      <div className="container poll-form guid-video">
        <Helmet>
          <meta charSet="utf-8" />
          <title>
            Best Assembly Election Opinion website | Mp Voter Polls Opinion-
            2023
          </title>

          <link rel="canonical" href="https://mpvoter.com" />
        </Helmet>
        {otp === true ? (
          <div>
            {" "}
            <h1>Enter OTP</h1>
            {/* <OtpInput
          value={code}
          onChange={handleOtpChange}
          numInputs={6}
          separator={<span style={{ width: "8px" }}></span>}
          isInputNum={true}
          shouldAutoFocus={true}
          inputStyle={{
            border: "1px solid transparent",
            borderRadius: "8px",
            width: "54px",
            height: "54px",
            fontSize: "12px",
            color: "#000",
            fontWeight: "400",
            caretColor: "blue",
          }}
          focusStyle={{
            border: "1px solid #CFD3DB",
            outline: "none",
          }}
        /> */}
            <p className="mb-0 ">
              Resend Verification <button onClick={reSendotp}> code</button>
            </p>
            <button onClick={OtpSubmit}>Submit OTP</button>
          </div>
        ) : (
          <>
            
            <ToastContainer />
            <p className="text-light information-txt mx-auto mb-4">
              <b>
                Voice your valuable opinion to unleash the immeasurable
                potential to choose the right leader, a power that solely rests
                with the people! Your opinion counts and it's high time we
                prioritize our state of Madhya Pradesh once again and usher in a
                new era of development. Join us in this unstoppable pursuit to
                build a brighter future of our state.
              </b>
            </p>
          
            <VoteGuid />
            <form
              className="col-12 m-auto col-lg-8 register-form"
              onSubmit={(e) => signIn(e)}
            >
              <h1 className="mb-4 text-center">Welcome</h1>
              {/* <button
              type="submit"
              className="btn btn-primary btn-lg mb-4 google-login"
            >
              SignUp With Google
            </button> */}
              {/* <p className="text-center">-OR-</p> */}
              <div className="d-flex flex-row align-items-center mb-4">
                <div className="form-outline flex-fill mb-0">
                  <input
                    type="text"
                    id="form3Example1c"
                    className="form-control"
                    required
                    name="name"
                    placeholder="Your Name"
                    onChange={handleChange}
                  />
                  {errors.name && (
                    <p className="text-danger error">{errors.name}</p>
                  )}
                </div>
              </div>
              <div className="d-flex flex-row align-items-center mb-4">
                <div className="form-outline flex-fill mb-0">
                  <input
                    type="email"
                    id="form3Example2c"
                    className="form-control"
                    required
                    name="email"
                    placeholder="Your Email"
                    onChange={handleChange}
                  />
                  {errors.email && (
                    <p className="text-danger error">{errors.email}</p>
                  )}
                </div>
              </div>
              <div className="d-flex flex-row align-items-center mb-4">
                <div className="form-outline flex-fill mb-0">
                  <input
                    type="text"
                    id="form3Example3c"
                    className="form-control"
                    required
                    name="phone"
                    placeholder="Your Phone"
                    onChange={handleChange}
                  />
                  {errors.phone && (
                    <p className="text-danger error">{errors.phone}</p>
                  )}
                </div>
              </div>

              <div className="d-flex flex-row align-items-center mb-4 hs-ps">
                <div className="form-outline flex-fill mb-0">
                  <input
                    type={showPassword ? "text" : "password"}
                    id="form3Example4c"
                    className="form-control"
                    required
                    name="password"
                    placeholder="Password"
                    onChange={handleChange}
                  />
                  {errors.password && (
                    <p className="text-danger error">{errors.password}</p>
                  )}
                </div>
                <div
                  className={`custom-button ${
                    isActive ? "active" : "inactive"
                  }`}
                  onClick={toggleClass}
                >
                  <p className="click-pas" onClick={togglePasswordVisibility}>
                    {showPassword ? "Hide" : "Show"}
                  </p>
                </div>
              </div>
              {/* {error && <div className="text-danger">{error}</div>} */}
              <button type="submit" className="btn btn-primary btn-lg mb-3">
                Create Account
              </button>
              {loading && (
                <div className="d-flex align-items-center justify-content-center">
                  <div className="spinner-border" role="status">
                    <span className="sr-only">Loading...</span>
                  </div>
                </div>
              )}
              <div>
                <p className="have-acc">
                  Already have an account ? <Link to="/login">Log In</Link>
                </p>
              </div>
            </form>
           
            <p className="text-light mt-4 homPage-details">
              <b>
                Let your candid opinions pave the way for a strong leadership!
              </b>
            </p>
            <p className="text-light mb-4 homPage-details">
              New ideas, strong ambitions, strengthening economy, and our
              relentless dreams for the brilliant future of Madhya Pradesh! We
              are all aboard in this mission. ARE YOU?
            </p>
            <p className="text-light mb-4 homPage-details">
              Your opinion and your choice as a valuable MP voter counts!
              Through the exemplary website of mpvoter.com, we strive to unite
              the people of Madhya Pradesh through more than 10 lakh voices on
              the social media from grassroots level to every socio-economic
              strata of the community just to power a memorable and historic
              agenda in Assembly Election 2023. To further build on the ongoing
              progress of our state, we need you to pitch in.
            </p>
            <p className="text-light mb-4 homPage-details">
              The launched platform is solely powered by voters involving your
              families, acquaintances, and the community as a whole. Prior to
              the Madhya Pradesh Election 2023, the platform of mpvoter.com is
              going to serve as a stage where MP citizens are able to put forth
              their personal opinion for voting. The platform will let them
              explain the reason for casting their votes for a particular
              political party, basically why they are supporting the relevant
              party and not the other one. We boast of a community with a large
              number of ever-growing registered subscribers who understand their
              responsibility to our state of Madhya Pradesh.
            </p>
          </>
        )}
      </div>
    </>
  );
};
export default Signup;
