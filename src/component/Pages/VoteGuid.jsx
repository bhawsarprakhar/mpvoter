import React from "react";
import poster from "../../assests/images/poster.png";
import BrandExample from "../Header/Header";
export default function VoteGuid() {
  return (
    <>
      {/* <BrandExample /> */}

      <div className="container demo">
        <h1 className=" text-light mb-5">
          <br />
          Want to show your firm support? Express your opinion in a simplified
          manner.
        </h1>
        {/* <video width="100%" height="auto" controls poster={poster}>
          <source src="movie.mp4" type="video/mp4" />
          <source src="movie.ogg" type="video/ogg" />
          Your browser does not support the video tag.
        </video> */}
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
        </ui>
      </div>
    </>
  );
}
