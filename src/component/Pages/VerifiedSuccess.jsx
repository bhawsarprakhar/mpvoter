import BrandExample from "../Header/Header";
import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useLocation, Link } from "react-router-dom";
import HomPageContent from "../LandingForm/homePageContent";

function VerifiedSuccess() {
  const navigate = useNavigate();
  const [clientMail, setclientMail] = useState();
  const [clientName, setclientName] = useState();
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
        setclientName(res?.data[0]);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <BrandExample />
      
      <div className="about-main container bottom-pd ">
        <div className="box-bg">
          <h2 className="text-center">
            "Your account is Successfully Verified {clientName}"
          </h2>

          <HomPageContent />
          <div>
            <p className="have-acc">
              Back to <Link to={"/voting-form"} state={{ email: clientMail }}>Opinion poll</Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default VerifiedSuccess;
