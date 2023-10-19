import React from "react";
import poster from "../../assests/images/poster.png";
import BrandExample from "../Header/Header";
export default function VoteGuid() {
  return (
    <>
      {/* <BrandExample /> */}

      <div className="container demo">
        <h1 className="text-center text-light mb-5">
          How Can You Vote To Your Party??
          <br />
          Watch the demo video
        </h1>
        <video width="100%" height="auto" controls poster={poster}>
          <source src="movie.mp4" type="video/mp4" />
          <source src="movie.ogg" type="video/ogg" />
          Your browser does not support the video tag.
        </video>
      </div>
    </>
  );
}
