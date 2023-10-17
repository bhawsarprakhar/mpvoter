import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate,Link  } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// toast.configure();

function ForgotPassword() {
  const navigate = useNavigate();
  const [formValue, setFormValue] = useState({
    email: "",
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
    await axios
      .post("https://backlaravel.mpvoter.com/api/user_forget", formValue, {
        headers: { "content-type": "application/json" },
      })
      .then((response) => {
        if (response.data.message == "Password updated successfully") {
          alert("Password updated successfully");
          navigate("/login");
        } else {
          alert("You are not registered User");
          navigate("/");
        }
      });
  };
  return (
    // <div className="App">
    //   <h1>Forgot Password</h1>
    //   <form onSubmit={(e) => handleSubmit(e)}>
    //     <input name="email" />
    //     <br />
    //     <br />
    //     <button>Reset</button>
    //   </form>
    // </div>

    <div className="container poll-form">
      {/* <form onSubmit={(e) => handleSubmit(e)}>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input onChange={(e) => handleChange(e)} name="email" />
          <label htmlFor="password">Create new password</label>
          <input
            type="password"
            onChange={(e) => handleChange(e)}
            name="password"
          />
        </div>
        <button className="reset-forgot">Reset</button>
      </form> */}

      <form
        className="col-12 m-auto col-lg-8 login-from"
        onSubmit={(e) => handleSubmit(e)}
      >
        <h1 className="mb-4 text-center">Forget Password</h1>
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
        <div>
              <p className="have-acc">
                Back to <Link to="/login">Log In</Link>
              </p>
            </div>
      </form>
    </div>
  );
}
export default ForgotPassword;
