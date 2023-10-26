import React from "react";
import video from "../../assests/mobile.webm";
export default function VoteGuid() {
  return (
    <>
      {/* <BrandExample /> */}

      <div className="container demo video-show">
        {/* <img src={video} alt="use" /> */}

        <video
          src={video}
          autoPlay
          loop
        >
          <source src={video} type="video/webm" />
        </video>
        {/* <h1 className=" text-light mb-5">
          <br />
          Want to show your firm support? Express your opinion in a simplified
          manner.
        </h1>
        <p className=" text-light">
          Be a stalwart supporter of the deserving political party! The
          significance of public opinion is immense. Therefore, for the upcoming
          <b> Madhya Pradesh Election 2023 </b>, the useful platform of
          mpvoter.com gives you the power to make your opinion and your voice
          heard across all of social media. The process is simplified so that
          every <b> MP Voter </b> can express their choice and views in a matter
          of minutes.
        </p>
        <p className=" text-light">
          Keeping in view the <b> Assembly Election 2023</b>, the platform has
          incorporated an easy-to-apply procedure so that every citizen who are
          allowed to vote can understand and use the website.
        </p>
        <p className=" text-light">
          Here any citizen can put forth their opinion in 3 extremely easy steps
        </p>
        <ui className="text-light">
          <li>- Just sign-up/login on the mpvoter.com website</li>
          <li>
            - Select your District/Assembly and vote for your preferred
            political party
          </li>
          <li>
            - Write down your remarks (Reason for selecting/not selecting the
            relevant political parties)
          </li>
        </ui> */}
      </div>
    </>
  );
}
