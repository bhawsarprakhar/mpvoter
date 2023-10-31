import React from "react";
import BrandExample from "../Header/Header";

export default function AboutUsPage() {
  return (
    <>
      <BrandExample />

      <div className="about-main container bottom-pd ">
        <div className="box-bg">
          <p className="gradient-heading">
            <b>
              Spread the word and show your unwavering support to the party of
              your choice!
            </b>
          </p>
          <p className="text-black-color">
            mpvoter.com was conceived and launched with a mission to maintain
            the choice of the right leadership in Madhya Pradesh in the next
            Assembly Election 2023. True and honest public opinion can serve as
            the only guiding force that is supposed to lead the state in yet
            another era of safety, economic development, growth, prosperity,
            sustainability, and peace.
          </p>
          <p className="text-black-color">
            The idea behind this particular website is quite simple; every MP
            Voter will never stop believing in the power of people's voice and
            the deserving political establishment. By choosing to voice their
            opinion in favor or in opposition of the parties, they will keep the
            state in the right track. Together, people can undertake the job of
            choosing the right party and sustain the existing or a wholly new
            generation of strong leaders
          </p>
          <p className="text-black-color">
            The next <b className="gradient-heading"> Madhya Pradesh Election 2023 </b> is just around the
            corner and citizens can express their support to a party quite
            easily. The platform can be utilized effortlessly by any person who
            is eligible to vote. A user needs to sign up or log in. After
            selecting the district, the user needs to vote for his/her preferred
            party. And lastly, the user must mention the reason for selecting or
            rejecting a particular party.
          </p>
        </div>
      </div>
    </>
  );
}
