import {
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
} from "react-share";

const Thankyou = () => {
//   const shareUrl = "https://mpvoter.com"; // Replace with your website URL
//   const title = "Check out this awesome website!";

//   const handleShareClick = () => {
//     if (navigator.share) {
//       navigator
//         .share({
//           title: "Share this link",
//           url: shareUrl,
//         })
//         .then(() => {
//           console.log("Link shared successfully.");
//         })
//         .catch((error) => {
//           console.error("Error sharing link:", error);
//         });
//     } else {
//       // Fallback for browsers that do not support the Web Share API
//       // You can display a message or provide alternative sharing options.
//       console.log("Web Share API is not supported in this browser.");
//     }
//   };
  return (
    <>
      <h2 className="text-center thank-you">Thank You</h2>
      {/* <div>
        <h2>Share This Website</h2>
        <FacebookShareButton url={shareUrl} quote={title}>
          Share on Facebook
        </FacebookShareButton>
        <TwitterShareButton url={shareUrl} title={title}>
          Share on Twitter
        </TwitterShareButton>
        <LinkedinShareButton url={shareUrl} title={title}>
          Share on LinkedIn
        </LinkedinShareButton>
      </div>

      <button onClick={handleShareClick}>Share</button> */}
    </>
  );
};

export default Thankyou;
