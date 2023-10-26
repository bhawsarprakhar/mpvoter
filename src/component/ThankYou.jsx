import BrandExample from "./Header/Header";
import HomPageContent from "./LandingForm/homePageContent";
import { Link } from "react-router-dom";

const Thankyou = () => {
  return (
    <>
      <BrandExample />
      <div className="about-main container bottom-pd ">
        <div className="box-bg">
          <h2 className="text-center">
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
