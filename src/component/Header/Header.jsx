import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import logo from"../../assests/Mp-LOGO.png";
import React, { useState, useEffect } from 'react';
function BrandExample() {

  const [isDarkHeader, setDarkHeader] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scroll = window.scrollY;

      if (scroll >= 60) {
        setDarkHeader(true);
      } else {
        setDarkHeader(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      {/* <Navbar className="bg-body-tertiary">
        <Container>
          { <Navbar.Brand href="/">
            <img
              src={logo}
              width="80"
              height="80"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand> }

          
        </Container>
      </Navbar> */}
      <header className={isDarkHeader ? 'darkHeader' : ''}> 
      <nav class="navbar container navbar-expand-lg navbar-light ">
  <a class="navbar-brand" href="#">{ <Navbar.Brand href="/">
            <img
              src={logo}
              width="80"
              height="80"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand> }</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <div class="nav-icon">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
  </button>

  <div class="collapse navbar-collapse  justify-content-end" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
    <li class="nav-item">
        <a class="nav-link" href="#">Home</a>
      </li>
      <li class="nav-item active">
        <a class="nav-link" href="/VoteGuid">How To Vote <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/AllCandidates">Candidates</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="https://jmbliss.com/about-us/">About Us</a>
      </li>
   
      <li class="nav-item">
        <a class="nav-link " href="https://jmbliss.com/contact/">Contanct</a>
      </li>
    </ul>
  
  </div>
</nav>
</header>
    </>
  );
}

export default BrandExample;
