import { useEffect } from "react";
import BrandExample from "./Header/Header";
import HomPageContent from "./LandingForm/homePageContent";
import { Link } from "react-router-dom";

const Thankyou = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <BrandExample />
      <div className="about-main container bottom-pd ">
        <div className="box-bg">
          <h2 className="text-center gradient-heading">
            "You have Successfully given your Opinion"
          </h2>

          <HomPageContent />
          <div>
            <p className="have-acc">
              Back to <Link to={"/voting-form"}>Opinion poll</Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Thankyou;
