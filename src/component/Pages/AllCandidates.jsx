import React from 'react'
import logo from"../../assests/Mp-LOGO.png";

export default function AllCandidates() {
  return (
    <div className='main-candidate'>
      <div className='container all-box'>
        <div className='main-card card  p-4 '>
            <div className='box d-flex'>
            <div className='img-box'> 
            <img
              src={logo}
              width="80"
              height="80"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
            </div>
            <div className='content'>
                <h5>Name:-<span>Candidates Name</span></h5>
                <h5>District:-<span>Candidates District</span></h5>
                <h5>Assembly:-<span>Candidates Assembly</span></h5>
                <h5>Party:-<span>Candidates party</span></h5>
                
            </div>
           
            </div>
            <div className='desc mt-2'>
            <h4>Education Details:-</h4>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
               Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
               when an unknown printer took </p>
            </div>
        </div>


        <div className='main-card card  p-4 '>
            <div className='box d-flex'>
            <div className='img-box'> 
            <img
              src={logo}
              width="80"
              height="80"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
            </div>
            <div className='content'>
                <h5>Name:-<span>Candidates Name</span></h5>
                <h5>District:-<span>Candidates District</span></h5>
                <h5>Assembly:-<span>Candidates Assembly</span></h5>
                <h5>Party:-<span>Candidates party</span></h5>
                
            </div>
           
            </div>
            <div className='desc mt-2'>
            <h4>Education Details:-</h4>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
               Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
               when an unknown printer took </p>
            </div>
        </div>

    
      </div>
    </div>
  )
}
