import React, { useState } from "react";
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
    district: "",
    assembly: "",
    politicsParty: "",
    description: "",
    username: "",
  });

  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedSubcategory, setSelectedSubcategory] = useState("");

  const districts = [
    { id: "1", name: "Agar Malwa" },
    { id: "2", name: "Alirajpur" },
    { id: "3", name: "Anuppur" },
    { id: "4", name: "Ashoknagar" },
    { id: "5", name: "Balaghat" },
    { id: "6", name: "Barwani" },
    { id: "7", name: "Betul" },
    { id: "8", name: "Bhind" },
    { id: "9", name: "Bhopal" },
    { id: "10", name: "Burhanpur" },
    { id: "11", name: "Chhatarpur" },
    { id: "12", name: "Chhindwara" },
    { id: "13", name: "Damoh" },
    { id: "14", name: "Datia" },
    { id: "15", name: "Dewas" },
    { id: "16", name: "Dhar" },
    { id: "17", name: "Dindori" },
    { id: "18", name: "Guna" },
    { id: "19", name: "Gwalior" },
    { id: "20", name: "Harda" },
    { id: "21", name: "Hoshangabad" },
    { id: "22", name: "Indore" },
    { id: "23", name: "Jabalpur" },
    { id: "24", name: "Jhabua" },
    { id: "25", name: "Katni" },
    { id: "26", name: "Khandwa" },
    { id: "27", name: "Khargone" },
    { id: "28", name: "Mandla" },
    { id: "29", name: "Mandsaur" },
    { id: "30", name: "Morena" },
    { id: "31", name: "Narsinghpur" },
    { id: "32", name: "Neemuch" },
    { id: "33", name: "Panna" },
    { id: "34", name: "Raisen" },
    { id: "35", name: "Rajgarh" },
    { id: "36", name: "Ratlam" },
    { id: "37", name: "Rewa" },
    { id: "38", name: "Sagar" },
    { id: "39", name: "Satna" },
    { id: "40", name: "Sehore" },
    { id: "41", name: "Seoni" },
    { id: "42", name: "Shahdol" },
    { id: "43", name: "Shajapur" },
    { id: "44", name: "Sheopur" },
    { id: "45", name: "Shivpuri" },
    { id: "46", name: "Sidhi" },
    { id: "47", name: "Singrauli" },
    { id: "48", name: "Tikamgarh" },
    { id: "49", name: "Ujjain" },
    { id: "50", name: "Umaria" },
    { id: "51", name: "Vidisha" },
  ];

  // const subcategories = [
  //   { id: "1", name: "Indore A", district: "Agar Malwa" },
  // ];

  const submitData = async (e) => {
    e.preventDefault();

    console.log(formValue);

    navigate("/thank-you");
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
        <h2 className="mb-4">Welcome {"Name"} To MP Voter</h2>

        <div className="select">
          <label className="h5">Select Your District/ज़िला:</label>
          <select
            required
            name="district"
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
            name="assembly"
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
            name="politicsParty"
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
            name="politicsParty"
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
            name="politicsParty"
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
            name="politicsParty"
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
            name="politicsParty"
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
            name="politicsParty"
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
          name="description"
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
