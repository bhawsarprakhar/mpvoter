import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast,ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import BrandExample from "../Header/Header";

const AdminLogin = () => {
  const navigate = useNavigate();
  const [formValue, setFormValue] = useState({
    admin_name : "",
    admin_email: "",
    admin_password:""
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

  const LogIn = async (e) => {
    e.preventDefault();
    await axios
      .post("https://backlaravel.mpvoter.com/api/admin_login", formValue, {
        headers: { "content-type": "application/json" },
      })
      .then((response) => {
        console.log(response)
        if (response.data.error == "Check Your Email and Password") {
          toast.error("Check Your Email and Password");
        } else {
          const AdminToken = {
            AdminEmail: response?.data?.admin_email,
          };
          localStorage.setItem("Admin", JSON.stringify(AdminToken));
          navigate("/auth/admin/registered-user");
        }
      });
  };

  return (
    <>
    <BrandExample />
    <ToastContainer />
      <div className="container">
        <div className="sign-bg mt-4">
        <form
          className="col-12 m-auto col-lg-8 login-from demo"
          onSubmit={(e) => LogIn(e)}
        >
          <h1 className="mb-4 text-center">Admin Login</h1>
          <div className="d-flex flex-row align-items-center mb-4">
            <div className="form-outline flex-fill mb-0">
              <input
                type="email"
                id="form3Example3c"
                className="form-control"
                required
                name="admin_email"
                placeholder="Your Email"
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="d-flex flex-row align-items-center mb-4 hs-ps">
            <div className="form-outline flex-fill mb-0 ">
              <input
                type={showPassword ? "text" : "password"}
                id="form3Example4c"
                className="form-control"
                required
                name="admin_password"
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

          <button
            type="submit"
            className="btn btn-primary btn-lg mb-4"
          >
            LOGIN
          </button>
        </form>
        </div>
      </div>
    </>
  );
};

export default AdminLogin;
