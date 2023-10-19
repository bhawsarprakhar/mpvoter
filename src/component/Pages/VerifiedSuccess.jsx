import BrandExample from "../Header/Header";
import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useLocation, Link } from "react-router-dom";

function VerifiedSuccess() {
  const navigate = useNavigate();
  const [clientData, setclientData] = useState();
  const { token } = useParams();
  useEffect(() => {
    if (token) {
      fetchPortfolio();
    }
  }, []);

  const fetchPortfolio = async () => {
    // debugger;
    try {
      const url = `https://backlaravel.mpvoter.com/api/verify/${token}`;
      const res = await axios.get(url);
      setclientData(res);
      //console.log(res);
      if (res.data == "user not found or invalid token") {
        navigate("/login");
      } else {
        const user = {
          username: res?.data[0],
          email: res?.data[1],
        };
        localStorage.setItem("user", JSON.stringify(user));
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <BrandExample />
      <div className="container poll-form">
        <h2>"Your account is Verified Successfully "</h2>
        <Link to="/voting-form"> Back to Voting Data</Link>
      </div>
    </>
  );
}

export default VerifiedSuccess;
