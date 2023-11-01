import { useEffect } from "react";
import BrandExample from "./Header/Header";
import HomPageContent from "./LandingForm/homePageContent";
import { Link } from "react-router-dom";
import {
  FacebookShareButton,
  WhatsappShareButton,
  WhatsappIcon,
  FacebookIcon,
} from 'react-share';

const Thankyou = () => {
  const shareUrl = 'https://mpvoter.com/';
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
          <FacebookShareButton
          url={shareUrl}
          quote={'Title or jo bhi aapko likhna ho'}
          hashtag={'#portfolio...'}
        >
          <FacebookIcon size={40} round={true} />
        </FacebookShareButton>

        <WhatsappShareButton
          url={shareUrl}
          quote={'Title or jo bhi aapko likhna ho'}
          hashtag={'#portfolio...'}
        >
          <WhatsappIcon size={40} round={true} />
        </WhatsappShareButton>
        </div>
      </div>
    </>
  );
};

export default Thankyou;
