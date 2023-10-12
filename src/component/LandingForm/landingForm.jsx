import React, { useEffect, useState } from "react";
// import OtpInput from "react-otp-input";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

const Signup = () => {
  const [formValue, setFormValue] = useState({
    us_name: "",
    us_email: "",
    us_phone: "",
    us_password: "",
  });

  const [otp, setOtp] = useState(false);
  const [code, setCode] = useState("");
  const [inValidCode, setInvalidCode] = useState();
  const [isValid, setIsValid] = useState(true);
  const [isnumber, setNumber] = useState(true);

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

  //http://mpvoter.com/api/voter_registration

  const signIn = async (e) => {
    debugger
    e.preventDefault();

      await axios
        .post("https://backlaravel.mpvoter.com/voter_registration", formValue, {
          headers: { "content-type": "application/json" },
        })
        .then((response) => {
          if (response) {
            const user = {
              username: response.data.us_name,
              useremail: response.data.us_email,
              userphone: response.data.us_phone,
            };
            localStorage.setItem("user", JSON.stringify(user));
            navigate("/voting-form");
          } else {
            alert("Something went wrong");
          }
          console.log(response);
        });
      console.log(formValue);
    
  };

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
  const isAlphabetic = (value) => {
    return /^[A-Za-z]+$/.test(value);
  };

  const handleChange = (e) => {
    //setFormValue({ ...formValue, [e.target.name]: e.target.value });
    const newValue = e.target.value;
    if (isAlphabetic(newValue) || newValue === "") {
      setFormValue({ ...formValue, [e.target.name]: e.target.value });
      setIsValid(false)
    } else {
      setError("Name should contain only alphabetic characters");
      setIsValid(true)
    }
  };
  const handleEmail = (e) => {
    setFormValue({ ...formValue, [e.target.name]: e.target.value });
  };

  const handlePhone = (e) => {
    const newValue = e.target.value;
    if (!isNaN(newValue) || newValue.length == 10) {
      setNumber(false)
      setFormValue({ ...formValue, [e.target.name]: e.target.value });
    } else {
      setError("Phone number should be number");
      setNumber(true)
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
          <form className="col-12 m-auto col-lg-6" onSubmit={(e) => signIn(e)}>
            <h2 className="mb-4 text-center">Create Account</h2>
            <button
              type="submit"
              className="btn btn-primary btn-lg mb-4 google-login"
            >
              SignUp With Google
            </button>
            <p className="text-center">-OR-</p>
            <div className="d-flex flex-row align-items-center mb-4">
              <div className="form-outline flex-fill mb-0">
                <input
                  type="text"
                  id="form3Example1c"
                  className="form-control"
                  required
                  name="us_name"
                  placeholder="Your name"
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="d-flex flex-row align-items-center mb-4">
              <div className="form-outline flex-fill mb-0">
                <input
                  type="email"
                  id="form3Example2c"
                  className="form-control"
                  required
                  name="us_email"
                  placeholder="Your Email"
                  onChange={handleEmail}
                />
              </div>
            </div>
            <div className="d-flex flex-row align-items-center mb-4">
              <div className="form-outline flex-fill mb-0">
                <input
                  type="text"
                  id="form3Example3c"
                  className="form-control"
                  required
                  name="us_phone"
                  placeholder="Your Phone"
                  onChange={handlePhone}
                />
              </div>
            </div>

            <div className="d-flex flex-row align-items-center mb-4 hs-ps">
              <div className="form-outline flex-fill mb-0">
                <input
                  type={showPassword ? "text" : "password"}
                  id="form3Example4c"
                  className="form-control"
                  required
                  name="us_password"
                  placeholder="Password"
                  onChange={handleEmail}
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
            {error && <div className="text-danger">{error}</div>}
            <button type="submit" className="btn btn-primary btn-lg mb-3">
              Create Account
            </button>

            <div>
              <p className="have-acc">
                Already have an account ? <Link to="/login">Log In</Link>
              </p>
            </div>
          </form>
        </>
      )}
    </div>
  );
};
export default Signup;
