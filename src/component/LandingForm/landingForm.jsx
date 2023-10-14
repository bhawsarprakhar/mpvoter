import React, { useEffect, useState } from "react";
// import OtpInput from "react-otp-input";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { Helmet } from "react-helmet";

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
  const [errors, setErrors] = useState({});

  const signIn = async (e) => {
    debugger;
    e.preventDefault();

    const newErrors = {};
    if (!formValue.us_name || !/^[A-Za-z]+$/.test(formValue.us_name)) {
      newErrors.us_name = "name should be alphabetical only";
    }
    if (
      !formValue.us_email ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formValue.us_email)
    ) {
      newErrors.us_email = "Invalid email format";
    }

    // if (!formValue.us_password || formValue.us_password.length < 8) {
    //   newErrors.us_password = "Password must be at least 8 characters";
    // }

    if (!formValue.us_phone || !/^\d{10}$/.test(formValue.us_phone)) {
      newErrors.us_phone = "Phone number should be numerical and 10 digit";
    }
    if (Object.keys(newErrors).length === 0) {
      navigate("/voting-form");
      // const result = await axios
      //   .post("https://backlaravel.mpvoter.com/voter_registration", formValue, {
      //     headers: { "content-type": "application/json" },
      //   })
      //   .then((response) => {
      //     if (response.data) {
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
      //     console.log(error.response.data);
      //   });
      // console.log(formValue);
      // console.log(result);
      // console.log("Valid data:", formValue);
    } else {
      setErrors(newErrors);
    }
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
  return (
    <div className="container poll-form">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Best  Assembly Election Opinion website | Mp Voter Polls Opinion- 2023</title>
        <link rel="canonical" href="https://mpvoter.com" />
      </Helmet>
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
    <p className="text-light information-txt"><b>Join the Powerhouse of Madhya Pradesh's Social Movement!
Be part of something extraordinary as we unite 10 lakh strong voices on social media, amplifying our collective impact and influence.Your voice, your power!
Join us today to shape the future of Madhya Pradesh. Together, we can make a difference.</b><br/>
मध्य प्रदेश के सामाजिक आंदोलन के पावरहाउस में शामिल हों!
हम 10 लाख मजबूत आवाजों को सोशल मीडिया पर जोड़कर हमारे संगठनिक प्रभाव और प्रतिष्ठा को बढ़ाने का अद्वितीय अंश बनें। आपकी आवाज, आपकी शक्ति!
हमारे साथ मिलकर आज ही मध्य प्रदेश के भविष्य को आकार देने में शामिल हों। हम मिलकर बदलाव ला सकते हैं।</p>
          <form
            className="col-12 m-auto col-lg-6 register-form"
            onSubmit={(e) => signIn(e)}
          >
            <h1 className="mb-4 text-center">Welcome</h1>
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
                  name="us_name"
                  placeholder="Your name"
                  onChange={handleChange}
                />
                {errors.us_name && (
                  <p className="text-danger error">{errors.us_name}</p>
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
                  name="us_email"
                  placeholder="Your Email"
                  onChange={handleChange}
                />
                {errors.us_email && (
                  <p className="text-danger error">{errors.us_email}</p>
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
                  name="us_phone"
                  placeholder="Your Phone"
                  onChange={handleChange}
                />
                {errors.us_phone && (
                  <p className="text-danger error">{errors.us_phone}</p>
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
                  name="us_password"
                  placeholder="Password"
                  onChange={handleChange}
                />
                {errors.us_password && (
                  <p className="text-danger error">{errors.us_password}</p>
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
