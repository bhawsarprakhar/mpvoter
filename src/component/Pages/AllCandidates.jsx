import React from 'react'
import logo from"../../assests/Mp-LOGO.png";

export default function AllCandidates() {
  return (
    <div className='main-candidate'>
      <div className='container d-flex flex-lg-row flex-column'>
        <div className='main-card card col-lg-6 col-12 p-4 '>
            <div className='box d-flex'>
            <img
              src={logo}
              width="80"
              height="80"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
            <div className='content'>
                <h4>Name:-<span>Candidates Name</span></h4>
                <h4>District:-<span>Candidates Name</span></h4>
                <h4>Assambly:-<span>Candidates Name</span></h4>
                <h4>Party:-<span>Candidates Namew</span></h4>
                
            </div>
           
        </div>
        <div className='desc'>
            <h3>Education Details</h3></div>
        </div>

        <div className='main-card card col-lg-6 col-12'>
        2
        </div>
      </div>
    </div>
  )
}
