import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import BrandExample from "./Header/Header";
// toast.configure();

function ForgotPassword() {
  const navigate = useNavigate();
  const [formValue, setFormValue] = useState({
    email: "",
    // password: "",
  });
  useEffect(() => {
    if (localStorage.getItem("user")) {
      navigate("/voting-form");
    }
  }, []);
  const handleChange = (e) => {
    setFormValue({ ...formValue, [e.target.name]: e.target.value });
  };
  // const [showPassword, setShowPassword] = useState(false);
  // const togglePasswordVisibility = () => {
  //   setShowPassword(!showPassword);
  // };

  // const [isActive, setIsActive] = useState(false);

  // const toggleClass = () => {
  //   setIsActive(!isActive);
  // };
  const [loading, setLoading] = useState(false);
  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    await axios
      .post("https://backlaravel.mpvoter.com/api/user_forget", formValue, {
        headers: { "content-type": "application/json" },
      })
      .then((response) => {
        if (response.data.message == "Check your email box") {
          toast.success("Send Reset Password link to your Email");
        } else {
          toast.error("You are not registered User");
          navigate("/");
        }

        // console.log(response);
      })
      .finally(() => {
        setLoading(false);
      });
  };
  return (
    <>
      <BrandExample />

      <ToastContainer />
      <div className="container poll-form">
        <form
          className="col-12 m-auto col-lg-8 login-from"
          onSubmit={(e) => handleSubmit(e)}
        >
          <h1 className="mb-4 text-center gradient-heading">Forget Password</h1>
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
            </div>
          </div>

          {/* <div className="d-flex flex-row align-items-center mb-4 hs-ps">
            <div className="form-outline flex-fill mb-0 ">
              <input
                type={showPassword ? "text" : "password"}
                //   type="password"
                id="form3Example4c"
                className="form-control"
                required
                name="password"
                placeholder="Create new Password"
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
          </div> */}
          <button type="submit" className="btn btn-primary btn-lg mb-4 botton-shadow">
            Send verify Password link to your Email
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
              Back to <Link to="/login">Log In</Link>
            </p>
          </div>
        </form>
      </div>
    </>
  );
}
export default ForgotPassword;
