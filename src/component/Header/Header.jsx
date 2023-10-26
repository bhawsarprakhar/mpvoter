import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import logo from "../../assests/Mp-LOGO.webp";
import React, { useState, useEffect } from "react";

function BrandExample() {
  const [isDarkHeader, setDarkHeader] = useState(false);
  const [logInUser, setLogInUser] = useState();

  useEffect(() => {
    const handleScroll = () => {
      const scroll = window.scrollY;

      if (scroll >= 60) {
        setDarkHeader(true);
      } else {
        setDarkHeader(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    getLoggedUser();
  },[]);

  const getLoggedUser = () => {
    const user = JSON.parse(localStorage?.getItem("user"));
    setLogInUser(user?.username);
  
  };

  const logOut = () => {
    localStorage.removeItem("user");
  };

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
      <header className={isDarkHeader ? "darkHeader" : ""}>
        <nav className="navbar container navbar-expand-lg navbar-light ">
          {/* <a className="navbar-brand" href="/"> */}
            {
              <Navbar.Brand href="/">
                <img
                  src={logo}
                  width="80"
                  height="80"
                  className="d-inline-block align-top width-style"
                  alt="mpvoter"
                />
              </Navbar.Brand>
            }
          {/* </a> */}
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <div className="nav-icon">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </button>

          <div
            className="collapse navbar-collapse  justify-content-end"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
              {logInUser ? (
                   <a className="nav-link" href="/voting-form">
                   Opinion Poll
                 </a>
                ) : (
                  <a className="nav-link" href="/">
                  Home
                </a>
                )}
                
              </li>
              {/* <li className="nav-item active">
        <a className="nav-link" href="/VoteGuid">How To Vote <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/AllCandidates">Candidates</a>
      </li> */}
              <li className="nav-item">
                <a className="nav-link" href="/AboutUsPage">
                  About Us
                </a>
              </li>

              <li className="nav-item">
                {logInUser ? (
                  <a className="nav-link" onClick={logOut} href="/login">
                    Sign Out
                  </a>
                ) : (
                  <a className="nav-link" href="/login">
                    Sign In
                  </a>
                )}
              </li>

              {/* <li className="nav-item">
        <a className="nav-link " href="/">Contact</a>
      </li> */}
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
}

export default BrandExample;
