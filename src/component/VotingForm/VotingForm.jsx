import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Subcategories } from "./AssemblyName";
import bjp from "../../assests/images/BJP.png";
import sp from "../../assests/images/SP.png";
import congress from "../../assests/images/INC.png";
import bsp from "../../assests/images/BSP.png";
import aap from "../../assests/images/AAP.png";
import other from "../../assests/images/Other.png";

const Drop = () => {
  const subcategories = Subcategories.name;
  const navigate = useNavigate();
  const [formValue, setFormValue] = useState({
    voter_district: "",
    voter_assembly: "",
    voter_partie_support: "",
    voter_content: "",
    voter_name: "",
  });

  const [user, setUser] = useState("");

  const getLoggedUser = () => {
    const user = JSON.parse(localStorage.getItem("user"));
    setUser(user?.username);
  };
  // useEffect(() => {
  //   getLoggedUser();
  //   if (!localStorage.getItem("user")) {
  //     navigate("/");
  //   }
  // }, []);

  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedSubcategory, setSelectedSubcategory] = useState("");

  const districts = [
    { id: "1", name: "Agar Malwa/आगर मालवा" },
    { id: "2", name: "Alirajpur/अलीराजपुर" },
    { id: "3", name: "Anuppur/अनूपपुर" },
    { id: "4", name: "Ashok Nagar/अशोकनगर" },
    { id: "5", name: "Balaghat/बालाघाट" },
    { id: "6", name: "Barwani/बड़वानी" },
    { id: "7", name: "Betul/बैतूल" },
    { id: "8", name: "Bhind/भिंड" },
    { id: "9", name: "Bhopal/भोपाल" },
    { id: "10", name: "Burhanpur/बुरहानपुर" },
    { id: "11", name: "Chhatarpur/छतरपुर" },
    { id: "12", name: "Chhindwara/छिंदवाड़ा" },
    { id: "13", name: "Damoh/दमोह" },
    { id: "14", name: "Datia/दतिया" },
    { id: "15", name: "Dewas/देवास" },
    { id: "16", name: "Dhar/धार" },
    { id: "17", name: "Dindori/डिंडोरी" },
    { id: "18", name: "Guna/गुना" },
    { id: "19", name: "Gwalior/ग्वालियर" },
    { id: "20", name: "Harda/हरदा" },
    { id: "21", name: "Hoshangabad/होशंगाबाद" },
    { id: "22", name: "Indore/इंदौर" },
    { id: "23", name: "Jabalpur/जबलपुर" },
    { id: "24", name: "Jhabua/झाबुआ" },
    { id: "25", name: "Katni/कटनी" },
    { id: "26", name: "Khandwa/खंडवा" },
    { id: "27", name: "Khargone/खरगोन" },
    { id: "28", name: "Mandla/मंडला" },
    { id: "29", name: "Mandsaur/मंदसौर" },
    { id: "30", name: "Morena/मुरैना" },
    { id: "31", name: "Narsinghpur/नरसिंहपुर" },
    { id: "32", name: "Neemuch/नीमच" },
    { id: "33", name: "Panna/पन्ना" },
    { id: "34", name: "Raisen/रायसेन" },
    { id: "35", name: "Rajgarh/राजगढ़" },
    { id: "36", name: "Ratlam/रतलाम" },
    { id: "37", name: "Rewa/रीवा" },
    { id: "38", name: "Sagar/सागर" },
    { id: "39", name: "Satna/सतना" },
    { id: "40", name: "Sehore/सीहोर" },
    { id: "41", name: "Seoni/सिवनी" },
    { id: "42", name: "Shahdol/शहडोल" },
    { id: "43", name: "Shajapur/शाजापुर" },
    { id: "44", name: "Sheopur/श्योपुर" },
    { id: "45", name: "Shivpuri/शिवपुरी" },
    { id: "46", name: "Sidhi/सीधी" },
    { id: "47", name: "Singrauli/सिंगरौली" },
    { id: "48", name: "Tikamgarh/टीकमगढ़" },
    { id: "49", name: "Ujjain/उज्जैन" },
    { id: "50", name: "Umaria/उमरिया" },
    { id: "51", name: "Vidisha/विदिशा" },
  ];

  // const subcategories = [
  //   { id: "1", name: "Indore A", district: "Agar Malwa" },
  // ];

  const submitData = async (e) => {
    e.preventDefault();

    console.log(formValue);

    await axios
      .post("https://backlaravel.mpvoter.com/voter_voting", formValue, {
        headers: { "content-type": "application/json" },
      })
      .then((response) => {
        if (response) {
          navigate("/thank-you");
        } else {
          alert("Something went wrong");
        }
        console.log(response.config.data);
      });
  };
  // Function to handle the category selection
  const handleCategoryChange = (e) => {
    const selectedValue = e.target.value;
    setFormValue({ ...formValue, [e.target.name]: e.target.value });
    setSelectedCategory(selectedValue);
    setSelectedSubcategory(""); // Reset subcategory selection
  };
  const selectAssembly = (e) => {
    setFormValue({ ...formValue, [e.target.name]: e.target.value });
  };
  const selectPolitics = (e) => {
    setFormValue({ ...formValue, [e.target.name]: e.target.value });
  };
  const selectDescription = (e) => {
    setFormValue({ ...formValue, [e.target.name]: e.target.value });
  };

  return (
    <div className="container poll-form">
      <form className="col-12 m-auto col-lg-6" onSubmit={(e) => submitData(e)}>
        <h2 className="mb-4">Welcome {user} To MP Voter</h2>

        <div className="select">
          <label className="h5">Select Your District/ज़िला:</label>
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

        {/* {selectedCategory && ( */}
        <div className="select">
          <label className="h5">Select Your Assembly/विधानसभा:</label>
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
        {/* )} */}
        <div className="form-check">
          <img src={bjp} alt="BJP" />
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
          <label className="form-check-label" for="radio1"></label>
        </div>
        <div className="form-check">
          <img src={sp} alt="SP" />
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
          <label className="form-check-label" for="radio1"></label>
        </div>
        <div className="form-check">
          <img src={bsp} alt="BSP" />
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
          <label className="form-check-label" for="radio1"></label>
        </div>
        <div className="form-check">
          <img src={aap} alt="AAP" />
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
          <label className="form-check-label" for="radio1"></label>
        </div>
        <div className="form-check">
          <img src={congress} alt="congress" />
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
          <label className="form-check-label" for="radio1"></label>
        </div>
        <div className="form-check">
          <img src={other} alt="other" />
          <input
            type="radio"
            className="form-check-input"
            id="radio1"
            value="other"
            name="voter_partie_support"
            onChange={selectPolitics}
            required
            // value="option1"
          />
          Other
          <label className="form-check-label" for="radio1"></label>
        </div>
        <textarea
          onChange={selectDescription}
          className="form-control mt-4"
          id="exampleFormControlTextarea1"
          name="voter_content"
          rows="3"
          placeholder="Comment"
        ></textarea>
        <button type="submit" className="btn btn-primary mt-4">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Drop;
