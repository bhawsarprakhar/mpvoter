import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

const Login = () => {
  const [formValue, setFormValue] = useState({
    us_phone: "",
    us_password: "",
  });

  const handleChange = (e) => {
    setFormValue({ ...formValue, [e.target.name]: e.target.value });
  };

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  const LogIn = async (e) => {
    e.preventDefault();
    const newErrors = {};
    if (!formValue.us_phone || !/^\d{10}$/.test(formValue.us_phone)) {
      newErrors.us_phone = "Phone number should be numerical and 10 digit";
    }
    if (Object.keys(newErrors).length === 0) {
      navigate("/voting-form");
      // await axios
      //   .post("https://backlaravel.mpvoter.com/voter_login", formValue, {
      //     headers: { "content-type": "application/json" },
      //   })
      //   .then((response) => {
      //     if (response) {
      //       const user = {
      //         username: response.data.us_name,
      //         useremail: response.data.us_email,
      //         userphone: response.data.us_phone,
      //       };
      //       localStorage.setItem("user", JSON.stringify(user));
      //       navigate("/voting-form");
      //     } else {
      //       alert("Something went wrong");
      //     }
      //     console.log(response);
      //   });
    } else {
      setErrors(newErrors);
    }
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
    <div className="container poll-form">
      <form
        className="col-12 m-auto col-lg-6 login-from"
        onSubmit={(e) => LogIn(e)}
      >
        <h2 className="mb-4 text-center">Login</h2>
        <div className="d-flex flex-row align-items-center mb-4">
          <div className="form-outline flex-fill mb-0">
            <input
              type="text"
              id="form3Example3c"
              className="form-control"
              required
              name="us_phone"
              placeholder=" Your number"
              onChange={handleChange}
            />
            {errors.us_phone && <p className="text-danger error">{errors.us_phone}</p>}
          </div>
        </div>

        <div className="d-flex flex-row align-items-center mb-4 hs-ps">
          <div className="form-outline flex-fill mb-0 ">
            <input
              type={showPassword ? "text" : "password"}
              id="form3Example4c"
              className="form-control"
              required
              name="us_password"
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
        {/* <button type="submit" className="btn btn-primary btn-lg mb-4">
          Login With Gmail
        </button> */}
        <div>
          <p className="have-acc">
            Not have an account ? <Link to="/">Sign Up</Link>
          </p>
        </div>
      </form>
    </div>
  );
};
export default Login;
