import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";
import { Subcategories } from "./AssemblyName";
import bjp from "../../assests/images/BJP.png";
import sp from "../../assests/images/SP.png";
import congress from "../../assests/images/INC.png";
import bsp from "../../assests/images/BSP.png";
import aap from "../../assests/images/AAP.png";
import other from "../../assests/images/Other.png";
import { Helmet } from "react-helmet";
import ReactGA from "react-ga";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// toast.configure()

const TRACKING_ID = "G-Z0G655HHZ0";
ReactGA.initialize(TRACKING_ID);

const Drop = () => {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);
  const location = useLocation();
  const { token } = useParams();
  const [clientData, setclientData] = useState();
  const [loginuser, setLogInUser] = useState("");
  const [userName, setUserName] = useState("false");
  const clientemail = location?.state?.useremail;
  const clientname = location?.state?.username;

   console.log(location);

  useEffect(() => {
    if (token) {
      fetchPortfolio();
    } else {
      if (!localStorage.getItem("user")) {
        navigate("/");
      } else {
        const user = JSON.parse(localStorage.getItem("user"));
        setLogInUser(user?.username);
        setUserName(true);
      }
    }
  }, []);

  const fetchPortfolio = async () => {
    try {
      const url = `https://backlaravel.mpvoter.com/api/verify/${token}`;
      const res = await axios.get(url);
      setclientData(res);
      // console.log(res);
      const user = {
        username: res?.data[0],
        email: res?.data[1],
      };
      localStorage.setItem("user", JSON.stringify(user));

      if (res?.data[1] == "s") {
        navigate("/login");
      }
    } catch (err) {
      console.log(err);
    }
  };

  const subcategories = Subcategories.name;

  const navigate = useNavigate();

  const [formValue, setFormValue] = useState({
    voter_district: "",
    voter_assembly: "",
    voter_partie_support: "",
    voter_content: "",
    voter_name: clientemail,
  });

  const [toggle, setToggle] = useState(true);
  useEffect(() => {
    formShow();
  }, []);

  const [data, setData] = useState();
  const formShow = async () => {
    
    try {
      const url = "https://backlaravel.mpvoter.com/api/verify_with_login";
      const res = await axios.get(url);
      setData(res.data);
      console.log(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const filteredItems = data?.filter((item) => item.voter_name === clientemail);
  console.log(filteredItems);
  // const getLoggedUser = () => {
  //   const user = JSON.parse(localStorage.getItem("user"));
  //   setUser(user?.username);
  // };
  // useEffect(() => {
  //   getLoggedUser();
  //   if (!localStorage.getItem("user")) {
  //     navigate("/");
  //   }
  // }, []);

  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedSubcategory, setSelectedSubcategory] = useState("");

  const districts = [
    { id: "1", name: "Agar Malwa / आगर मालवा" },
    { id: "2", name: "Alirajpur / अलीराजपुर" },
    { id: "3", name: "Anuppur / अनूपपुर" },
    { id: "4", name: "Ashok Nagar / अशोकनगर" },
    { id: "5", name: "Balaghat / बालाघाट" },
    { id: "6", name: "Barwani / बड़वानी" },
    { id: "7", name: "Betul / बैतूल" },
    { id: "8", name: "Bhind / भिंड" },
    { id: "9", name: "Bhopal / भोपाल" },
    { id: "10", name: "Burhanpur / बुरहानपुर" },
    { id: "11", name: "Chhatarpur / छतरपुर" },
    { id: "12", name: "Chhindwara / छिंदवाड़ा" },
    { id: "13", name: "Damoh / दमोह" },
    { id: "14", name: "Datia / दतिया" },
    { id: "15", name: "Dewas / देवास" },
    { id: "16", name: "Dhar / धार" },
    { id: "17", name: "Dindori / डिंडोरी" },
    { id: "18", name: "Guna / गुना" },
    { id: "19", name: "Gwalior / ग्वालियर" },
    { id: "20", name: "Harda / हरदा" },
    { id: "22", name: "Indore / इंदौर" },
    { id: "23", name: "Jabalpur / जबलपुर" },
    { id: "24", name: "Jhabua / झाबुआ" },
    { id: "25", name: "Katni / कटनी" },
    { id: "26", name: "Khandwa / खंडवा" },
    { id: "27", name: "Khargone / खरगोन" },
    { id: "28", name: "Mandla / मंडला" },
    { id: "29", name: "Mandsaur / मंदसौर" },
    { id: "30", name: "Morena / मुरैना" },
    { id: "31", name: "Narsinghpur / नरसिंहपुर" },
    { id: "32", name: "Neemuch / नीमच" },
    { id: "21", name: "Narmadapuram / नर्मदापुरम" },
    { id: "33", name: "Panna / पन्ना" },
    { id: "34", name: "Raisen / रायसेन" },
    { id: "35", name: "Rajgarh / राजगढ़" },
    { id: "36", name: "Ratlam / रतलाम" },
    { id: "37", name: "Rewa / रीवा" },
    { id: "38", name: "Sagar / सागर" },
    { id: "39", name: "Satna / सतना" },
    { id: "40", name: "Sehore / सीहोर" },
    { id: "41", name: "Seoni / सिवनी" },
    { id: "43", name: "Shajapur / शाजापुर" },
    { id: "44", name: "Sheopur / श्योपुर" },
    { id: "45", name: "Shivpuri / शिवपुरी" },
    { id: "46", name: "Sidhi / सीधी" },
    { id: "47", name: "Singrauli / सिंगरौली" },
    { id: "48", name: "Tikamgarh / टीकमगढ़" },
    { id: "49", name: "Ujjain / उज्जैन" },
    { id: "50", name: "Umaria / उमरिया" },
    { id: "51", name: "Vidisha / विदिशा" },
  ];

  // const subcategories = [
  //   { id: "1", name: "Indore A", district: "Agar Malwa" },
  // ];

  const submitData = async (e) => {
    e.preventDefault();
    //navigate("/thank-you");

    // console.log(formValue);
    const result = await axios
      .post("https://backlaravel.mpvoter.com/api/some_route", formValue, {
        headers: { "Content-Type": "application/json" },
      })
      .then((response) => {
        if (response.data) {
          navigate("/thank-you");
        } else {
          alert("Something went wrong");
        }
      })
      .catch((error) => {
        if (error.response) {
          // The request was made, and the server responded with a status code
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        } else if (error.request) {
          // The request was made, but there was no response from the server
          console.log(error.request);
        } else {
          // Something happened in setting up the request
          console.error("Error", error.message);
        }
        // console.log(error.config);
      });
    // console.log(result);
  };
  // Function to handle the category selection
  const handleCategoryChange = (e) => {
    const selectedValue = e.target.value;
    setFormValue({ ...formValue, [e.target.name]: e.target.value });
    setSelectedCategory(selectedValue);
    setSelectedSubcategory(""); // Reset subcategory selection
  };
  const selectAssembly = (e) => {
    const AssemblyValue = e.target.value;
    setSelectedSubcategory(AssemblyValue);
    setFormValue({ ...formValue, [e.target.name]: e.target.value });
  };
  const selectPolitics = (e) => {
    setFormValue({ ...formValue, [e.target.name]: e.target.value });
  };
  const selectDescription = (e) => {
    setFormValue({ ...formValue, [e.target.name]: e.target.value });
  };
  const selectVoter = (e) => {
    setFormValue({ ...formValue, [e.target.name]: e.target.value });
  };

  const [isActive, setIsActive] = useState(false);

  const toggleClass = () => {
    setIsActive(!isActive);
  };

  const [isaassmbly, setIsAssambly] = useState(false);

  const toggleClassAssambly = () => {
    setIsAssambly(!isaassmbly);
  };

  return (
    <div className="container poll-form-1">
      <Helmet>
        <link rel="canonical" href="https://mpvoter.com/voting-form" />
      </Helmet>
      {filteredItems?.length > 0 ? (
        <div>
          <h2>You already submit form !</h2>
          <div className="content">
            <h5>
              Name:-<span>{filteredItems[0]?.voter_assembly}</span>
            </h5>
            <h5>
              District:-<span>Candidates District</span>
            </h5>
            <h5>
              Assembly:-<span>Candidates Assembly</span>
            </h5>
            <h5>
              Party:-<span>Candidates party</span>
            </h5>
          </div>
        </div>
      ) : (
        <div className="container poll-form vote bottom-pd">
          <form
            className="col-12 m-auto col-lg-8 voting-form"
            onSubmit={(e) => submitData(e)}
          >
            <h1 className="mb-4">Welcome {clientname} </h1>

            <div
              className={`select ${isActive ? "active" : "inactive"}`}
              onClick={toggleClass}
            >
              <label className="h5">Select Your District / ज़िला:</label>
              <select
                required
                name="voter_district"
                //value={selectedCategory}
                //value={selectedCategory}
                onChange={handleCategoryChange}
              >
                <option value="">Select...</option>
                {districts.map((category) => (
                  <option key={category.id} value={category.name}>
                    {category.name}
                  </option>
                ))}
              </select>
            </div>

            <input type="hidden" name="voter_name" value="test" readOnly />
            {selectedCategory && (
              <div
                className={`select  ${isaassmbly ? "active" : "inactive"}`}
                onClick={toggleClassAssambly}
              >
                <label className="h5">Select Your Assembly / विधानसभा:</label>
                <select
                  required
                  name="voter_assembly"
                  //value={selectedSubcategory}
                  // onChange={(e) => setSelectedSubcategory(e.target.value)}
                  onChange={selectAssembly}
                >
                  <option value="">Select...</option>
                  {subcategories
                    .filter(
                      (subcategory) => subcategory.District === selectedCategory
                    )
                    .map((subcategory) => (
                      <option key={subcategory.id} value={subcategory.Name}>
                        {subcategory.Name}
                      </option>
                    ))}
                </select>
              </div>
            )}

            {selectedSubcategory && (
              <div>
                <div className="form-check d-flex align-items-center">
                  <img src={bjp} alt="BJP" />
                  <div>
                    <input
                      type="radio"
                      className="form-check-input"
                      id="radio1"
                      name="voter_partie_support"
                      value="BJP"
                      onChange={selectPolitics}
                      required
                    />
                    Bharatiya Janata Party (BJP)
                  </div>
                  {subcategories
                    .filter(
                      (subcategories) =>
                        subcategories.Name === selectedSubcategory
                    )
                    .map((subcategories) => (
                      <div></div>
                    ))}
                  <label className="form-check-label" htmlFor="radio1"></label>
                </div>
                <div className="form-check d-flex align-items-center">
                  <img src={congress} alt="congress" />

                  <div>
                    <input
                      type="radio"
                      className="form-check-input"
                      id="radio1"
                      value="congress"
                      name="voter_partie_support"
                      onChange={selectPolitics}
                      required
                      // value="option1"
                    />
                    Indian National Congress
                  </div>
                  {subcategories
                    .filter(
                      (subcategories) =>
                        subcategories.Name === selectedSubcategory
                    )
                    .map((subcategories) => (
                      <div onChange={selectVoter}></div>
                    ))}
                  <label className="form-check-label" htmlFor="radio1"></label>
                </div>
                <div className="form-check d-flex align-items-center">
                  <img src={sp} alt="SP" />

                  <div>
                    <input
                      type="radio"
                      className="form-check-input"
                      id="radio1"
                      name="voter_partie_support"
                      value="SP"
                      onChange={selectPolitics}
                      required
                    />
                    Samajwadi Party (SP)
                  </div>
                  {subcategories
                    .filter(
                      (subcategories) =>
                        subcategories.Name === selectedSubcategory
                    )
                    .map((subcategories) => (
                      <div></div>
                    ))}
                  <label className="form-check-label" htmlFor="radio1"></label>
                </div>
                <div className="form-check d-flex align-items-center">
                  <img src={bsp} alt="BSP" />

                  <div>
                    <input
                      type="radio"
                      className="form-check-input"
                      id="radio1"
                      name="voter_partie_support"
                      value="BSP"
                      onChange={selectPolitics}
                      required
                    />
                    Bahujan Samaj Party (BSP)
                  </div>
                  {subcategories
                    .filter(
                      (subcategories) =>
                        subcategories.Name === selectedSubcategory
                    )
                    .map((subcategories) => (
                      <div></div>
                    ))}
                  <label className="form-check-label" htmlFor="radio1"></label>
                </div>
                <div className="form-check d-flex align-items-center">
                  <img src={aap} alt="AAP" />

                  <div>
                    <input
                      type="radio"
                      className="form-check-input"
                      id="radio1"
                      name="voter_partie_support"
                      value="AAP"
                      onChange={selectPolitics}
                      required
                    />
                    Aam Aadmi Party (AAP)
                  </div>
                  {subcategories
                    .filter(
                      (subcategories) =>
                        subcategories.Name === selectedSubcategory
                    )
                    .map((subcategories) => (
                      <div></div>
                    ))}
                  <label className="form-check-label" htmlFor="radio1"></label>
                </div>

                <div className="form-check d-flex align-items-center">
                  <img src={other} alt="other" />

                  <div className="d-flex">
                    <input
                      type="radio"
                      className="form-check-input"
                      id="radio1"
                      value="Other"
                      name="voter_partie_support"
                      onChange={selectPolitics}
                      required
                      // value="option1"
                    />
                    Other
                  </div>
                  {subcategories
                    .filter(
                      (subcategories) =>
                        subcategories.Name === selectedSubcategory
                    )
                    .map((subcategories) => (
                      <div className=""></div>
                    ))}
                  <label className="form-check-label" htmlFor="radio1"></label>
                </div>

                <textarea
                  onChange={selectDescription}
                  className="form-control mt-4"
                  id="exampleFormControlTextarea1"
                  name="voter_content"
                  rows="3"
                  placeholder="Why you choose this Party/Candidate ?/आपने इस पार्टी/उम्मीदवार को क्यों चुना ?"
                ></textarea>
              </div>
            )}

            <button type="submit" className="btn btn-primary mt-4">
              Submit
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Drop;
