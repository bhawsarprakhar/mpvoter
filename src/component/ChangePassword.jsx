import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useParams } from "react-router-dom";
import BrandExample from "./Header/Header";
// toast.configure();

function ChangePassword() {
  const { token } = useParams();
  const navigate = useNavigate();
  const [formValue, setFormValue] = useState({
    //email:email,
    password: "",
    repassword: "",
  });
  const handleChange = (e) => {
    setFormValue({ ...formValue, [e.target.name]: e.target.value });
  };
  const [showPassword, setShowPassword] = useState(false);
  const [showRePassword, setShowRePassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const toggleRePasswordVisibility = () => {
    setShowRePassword(!showRePassword);
  };

  const [isActive, setIsActive] = useState(false);

  const toggleClass = () => {
    setIsActive(!isActive);
  };
  const [isReActive, setIsReActive] = useState(false);

  const toggleReClass = () => {
    setIsReActive(!isReActive);
  };
  const [errors, setErrors] = useState({});
  const [passwordError, setPasswordError] = useState();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = {};
    // console.log(formValue)
    if (formValue.password !== formValue.repassword) {
      setPasswordError(true);
    } else {
      setPasswordError(false);
      if (
        !formValue.password ||
        formValue.password.length < 4 ||
        formValue.password.length > 8
      ) {
        newErrors.password = "Password must be between 4 and 8 characters";
      }
      setErrors(newErrors);
      if (Object.keys(newErrors).length === 0) {
        await axios
          .post(
            `https://backlaravel.mpvoter.com/api/password-update/${token}`,
            formValue,
            {
              headers: { "content-type": "application/json" },
            }
          )
          .then((response) => {
            if (response.data == "Password updated successfully.") {
              toast.success("Your Password updated successfully.");
              setTimeout(() => {
                navigate("/login");
              }, 4000);
            } else {
              toast.error("Your token has expired.");
              setTimeout(() => {
                navigate("/login");
              }, 4000);
            }

            //  console.log(response);
          })
          .catch((error) => {
            toast.error("Something went wrong");
            setTimeout(() => {
              navigate("/login");
            }, 4000);
            // if (error.response) {
            //   // The request was made, and the server responded with a status code
            //   console.log(error.response.data);
            //   console.log(error.response.status);
            //   console.log(error.response.headers);
            // } else if (error.request) {
            //   // The request was made, but there was no response from the server
            //   console.log(error.request);
            // } else {
            //   // Something happened in setting up the request
            //   console.error("Error", error.message);
            // }
            // console.log(error.config);
          });
      }
    }
  };

  return (
    <>
      <BrandExample />
      <div className="container poll-form">
        <ToastContainer />
        <form
          className="col-12 m-auto col-lg-8 login-from"
          onSubmit={(e) => handleSubmit(e)}
        >
          <h1 className="mb-4 text-center gradient-heading">
            Create New Password
          </h1>

          <div className="d-flex flex-row align-items-center mb-4 hs-ps">
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
          <div className="d-flex flex-row align-items-center mb-4 hs-ps">
            <div className="form-outline flex-fill mb-0 ">
              <input
                type={showRePassword ? "text" : "password"}
                //   type="password"
                id="form3Example4c"
                className="form-control"
                required
                name="repassword"
                placeholder="Re-Password"
                onChange={(e) => handleChange(e)}
              />
              {errors.password && (
                <p className="position-absolute text-danger error">
                  {errors.password}
                </p>
              )}
              
            </div>

            <div
              className={`custom-button ${isActive ? "active" : "inactive"}`}
              onClick={toggleReClass}
            >
              <p className="click-pas" onClick={toggleRePasswordVisibility}>
                {showRePassword ? "Hide" : "Show"}
              </p>
            </div>
           
          </div>
          {passwordError === true ? (
                <p className=" text-danger error">Password did not match!</p>
              ) : (
                ""
              )}
          <button
            type="submit"
            className="btn btn-primary btn-lg mt-4 mb-4 botton-shadow"
          >
            Reset Password
          </button>
        </form>
      </div>
    </>
  );
}
export default ChangePassword;
