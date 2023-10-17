// import { sendPasswordResetEmail } from "firebase/auth";
// import { auth } from "../firebase-config";
import React from "react";
import { useNavigate } from "react-router-dom";

function ForgotPassword() {
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const emalVal = e.target.email.value;
    try {
    //   await sendPasswordResetEmail(auth, emalVal);
      alert("Check your gmail");
      navigate("/login");
    } catch (error) {
      alert(error.message);
    }
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
    <div className="login-form">
    <h2>Forgot Password</h2>
    <form onSubmit={(e) => handleSubmit(e)}>
      <div className="form-group">
        <label htmlFor="email">Email:</label>
        <input name="email" />
      </div>
      <button className="reset-forgot">Reset</button>
    </form>
  </div>
  );
}
export default ForgotPassword;

