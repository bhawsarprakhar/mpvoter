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
  });
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

  const handleSubmit = async (e) => {
    e.preventDefault();

    // console.log(formValue)
    await axios
      .post(`https://backlaravel.mpvoter.com/api/password-update/${token}`, formValue, {
        headers: { "content-type": "application/json" },
      })
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
          <h1 className="mb-4 text-center">Create New Password</h1>

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
            Reset Password
          </button>
        </form>
      </div>
    </>
  );
}
export default ChangePassword;
