import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

const Login = () => {
  const [formValue, setFormValue] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormValue({ ...formValue, [e.target.name]: e.target.value });
  };
  const navigate = useNavigate();
  const LogIn = async (e) => {
    e.preventDefault();
    navigate("/voting-form")
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

  return (
    <div>
      <section className="vh-100">
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-lg-12 col-xl-11">
              <div className="card text-black">
                <div className="card-body p-md-5">
                  <div className="row justify-content-center">
                    <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                      <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                        Login
                      </p>
                      <form className="mx-1 mx-md-4" onSubmit={(e) => LogIn(e)}>
                        <div className="d-flex flex-row align-items-center mb-4">
                          <i class="fas fa-solid fa-phone fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input
                              type="text"
                              id="form3Example3c"
                              className="form-control"
                              required
                              name="email"
                              onChange={handleChange}
                            />
                            <label className="form-label" for="form3Example3c">
                              Your number
                            </label>
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input
                              type="password"
                              id="form3Example4c"
                              className="form-control"
                              required
                              name="password"
                              onChange={(e) => handleChange(e)}
                            />
                            <label className="form-label" for="form3Example4c">
                              Password
                            </label>
                          </div>
                        </div>

                        <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                          <button
                            type="submit"
                            className="btn btn-primary btn-lg"
                          >
                            LOGIN
                          </button>
                        </div>
                      </form>
                      <div>
                        <p className="have-acc">
                          Not have an account ? <Link to="/">Sign Up</Link>
                        </p>
                      </div>
                    </div>
                    <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                      <img
                        src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                        className="img-fluid"
                        alt="Sample image"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Login;
