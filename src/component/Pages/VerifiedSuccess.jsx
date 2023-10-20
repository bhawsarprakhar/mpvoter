import BrandExample from "../Header/Header";
import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useLocation, Link } from "react-router-dom";

function VerifiedSuccess() {
  const navigate = useNavigate();
  const [clientMail, setclientMail] = useState();
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
      
      //console.log(res);
      if (res.data == "user not found or invalid token") {
        navigate("/login");
      } else {
        const user = {
          username: res?.data[0],
          email: res?.data[1],
        };
        localStorage.setItem("user", JSON.stringify(user));
        setclientMail(res?.data[1]);
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

        {/* <Link to="/voting-form" , 
        state: {username: formValue?.name,
          email: formValue?.email,} > Back to Voting Data</Link> */}
        <Link  to={"/voting-form"}  
         state={{ email: clientMail}} > 
          Back to Voting Data
          </Link>
      </div>
    </>
  );
}

export default VerifiedSuccess;
