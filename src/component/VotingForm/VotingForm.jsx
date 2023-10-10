import React, { useState } from "react";

const Drop = () => {
  // Define state variables for the selected values in each dropdown
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedSubcategory, setSelectedSubcategory] = useState("");

  // Define your data for categories and subcategories
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
    { id: "26", name: "Khandwa (East Nimar)" },
    { id: "27", name: "Khargone (West Nimar)" },
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

  const subcategories = [
    { id: "a", name: "Indore A", category: "1" },
    { id: "b", name: "Indore B", category: "1" },
    { id: "c", name: "Bhopal C", category: "2" },
    { id: "d", name: "Bhopal D", category: "2" },
    { id: "e", name: "Riva E", category: "3" },
  ];

  // Function to handle the category selection
  const handleCategoryChange = (e) => {
    const selectedValue = e.target.value;
    setSelectedCategory(selectedValue);
    setSelectedSubcategory(""); // Reset subcategory selection
  };

  return (
    <div className="container poll-form">
      <form className="col-12 m-auto col-lg-6">
        <h2 className="mb-4">Welcome To MP Voter</h2>

        <div className="select">
          <label className="h5">Select Your District/ज़िला:</label>
          <select value={selectedCategory} onChange={handleCategoryChange}>
            <option value="">Select...</option>
            {districts.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>
        </div>

        {selectedCategory && (
          <div className="select">
            <label className="h5">Select Your Assembly/विधानसभा:</label>
            <select
              value={selectedSubcategory}
              onChange={(e) => setSelectedSubcategory(e.target.value)}
            >
              <option value="">Select...</option>
              {subcategories
                .filter(
                  (subcategory) => subcategory.category === selectedCategory
                )
                .map((subcategory) => (
                  <option key={subcategory.id} value={subcategory.id}>
                    {subcategory.name}
                  </option>
                ))}
            </select>
          </div>
        )}
        <div class="form-check">
          <input
            type="radio"
            class="form-check-input"
            id="radio1"
            name="optradio"
            value="option1"
          />
          BJP
          <label class="form-check-label" for="radio1"></label>
        </div>
        <div class="form-check">
          <input
            type="radio"
            class="form-check-input"
            id="radio1"
            name="optradio"
            value="option1"
          />
          Congress
          <label class="form-check-label" for="radio1"></label>
        </div>
        <div class="form-check">
          <input
            type="radio"
            class="form-check-input"
            id="radio1"
            name="optradio"
            value="option1"
          />
          Other
          <label class="form-check-label" for="radio1"></label>
        </div>
        <button type="submit" class="btn btn-primary btn-lg mt-4">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Drop;
