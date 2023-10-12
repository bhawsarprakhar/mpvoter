import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

const Login = () => {
  const [formValue, setFormValue] = useState({
    number: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormValue({ ...formValue, [e.target.name]: e.target.value });
  };
  const navigate = useNavigate();
  const LogIn = async (e) => {
    e.preventDefault();
    navigate("/voting-form");
    // const result = await axios.post(
    //   `${process.env.REACT_APP_BASE_URL}/api/auth/login`,
    //   formValue,
    //   {
    //     validateStatus: () => true,
    //   }
    // );
    // if (result && result.status === 200) {
    //   // Update user isVerified
    //   const user = {
    //     username: result.data.user.name,
    //     email: result.data.user.email,
    //   };
    //   const token = result.data.token;
    //   localStorage.setItem("user", JSON.stringify(user));
    //   localStorage.setItem("jwt", token);
    //   navigate("/voting-form");
    // } else if (result && result.status === 404) {
    //   alert("User Not Found");
    // } else if (result && result.status === 400) {
    //   alert("Wrong Password");
    // }
  };
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
 

  
    const [isActive, setIsActive] = useState(false);
  
    const toggleClass = () => {
      setIsActive(!isActive);
    }
  return (
    <div className="container poll-form">
      <form className="col-12 m-auto col-lg-6" onSubmit={(e) => LogIn(e)}>
        <h2 className="mb-4 text-center">Login</h2>
        <div className="d-flex flex-row align-items-center mb-4">
          <div className="form-outline flex-fill mb-0">
            <input
              type="text"
              id="form3Example3c"
              className="form-control"
              required
              name="number"
              placeholder=" Your number"
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="d-flex flex-row align-items-center mb-4 hs-ps">
          <div className="form-outline flex-fill mb-0 ">
            <input
              type={showPassword ? 'text' : 'password'}
              id="form3Example4c"
              className="form-control"
              required
              name="password"
              placeholder="Password"
              onChange={(e) => handleChange(e)}
            />
          </div>
      
          <div className={`custom-button ${isActive ? 'active' : 'inactive'}`}
        onClick={toggleClass}>
          <p className="click-pas" onClick={togglePasswordVisibility}>
        {showPassword ? 'Hide' : 'Show'} 
      </p></div>
        </div>

        <button type="submit" className="btn btn-primary btn-lg mb-4">
          LOGIN
        </button>
        <button type="submit" className="btn btn-primary btn-lg mb-4">
          Login With Gmail
        </button>
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
