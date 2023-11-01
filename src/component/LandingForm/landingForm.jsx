import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import ReactGA from "react-ga";
import VoteGuid from "../Pages/VoteGuid";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import BrandExample from "../Header/Header";
import HomPageContent from "./homePageContent";

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

  const navigate = useNavigate();

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

    if (
      !formValue.password ||
      formValue.password.length < 4 ||
      formValue.password.length > 8
    ) {
      newErrors.password = "Password must be between 4 and 8 characters";
    }

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

  const handleName = (e) => {
    const allowedCharsRegex = /^[A-Za-z\s]+$/; // Regular expression to allow only letters and spaces

    if (!allowedCharsRegex.test(e.key)) {
      e.preventDefault(); // Prevent the keypress if the character is not allowed
    } else {
      setFormValue({ ...formValue, [e.target.name]: e.target.value });
    }
  };
  // const handleInputChange = (e) => {
  //   const sanitizedValue = e.target.value.replace(/[^A-Za-z\s]/g, ""); // Remove special characters and numbers

  //   setFormValue({ ...formValue, [e.target.name]: sanitizedValue });
  // };
  const handleChange = (e) => {
    setFormValue({ ...formValue, [e.target.name]: e.target.value });
  };
  // const handleName = (e) => {
  //   const newErrors = {};
  //   if (!e.target.value || !/^[A-Za-z-' ]+$/.test(e.target.value)) {
  //     newErrors.name = "Name should be alphabetical only";
  //   }
  //   setFormValue({ ...formValue, [e.target.name]: e.target.value });
  //   setErrors(newErrors);
  // };
  // const handleEmail = (e) => {
  //   const newErrors = {};
  //   if (!e.target.value || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e.target.value)) {
  //     newErrors.email = "Invalid email format";
  //   }
  //   setFormValue({ ...formValue, [e.target.name]: e.target.value });
  //   setErrors(newErrors);
  // };
  // const handleNumber = (e) => {
  //   const newErrors = {};
  //   if (!e.target.value || !/^\d{10}$/.test(e.target.value)) {
  //     newErrors.phone = "Phone number should be numerical and 10 digit";
  //   }
  //   setFormValue({ ...formValue, [e.target.name]: e.target.value });
  //   setErrors(newErrors);
  // };

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

        <ToastContainer />
        <div className="sign-box sign-bg">
          <VoteGuid />
          <form
            className="col-12 m-auto col-lg-8 register-form demo"
            onSubmit={(e) => signIn(e)}
          >
            <h1 className="mb-4 text-center gradient-heading">Welcome</h1>
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
                  onKeyPress={handleName}
                  onInput={handleName}
                  onChange={handleName}
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
                  <p className="position-absolute text-danger error">
                    {errors.password}
                  </p>
                )}
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
            {/* {error && <div className="text-danger">{error}</div>} */}
            <button
              type="submit"
              className="btn btn-primary btn-lg mt-4 mb-3 botton-shadow"
            >
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
          <p className="text-light information-txt mx-auto mb-4">
            <b>
              Voice your valuable opinion to unleash the immeasurable potential
              to choose the right leader, a power that solely rests with the
              people! Your opinion counts and it's high time we prioritize our
              state of Madhya Pradesh once again and usher in a new era of
              development. Join us in this unstoppable pursuit to build a
              brighter future of our state.
            </b>
          </p>
          <HomPageContent />
        </div>
      </div>
    </>
  );
};
export default Signup;
