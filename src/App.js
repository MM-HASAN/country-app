import React, { useState, useEffect } from "react";
import "./App.css";
import Country from "./Components/Country/Country";

function App() {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    fetch("https://restcountries.eu/rest/v2/all")
      .then((res) => res.json())
      .then((data) => {
        setCountries(data);
        //console.log(data);
        //const countryNames = data.map((country) => country.name);
        //console.log(countryNames);
      })

      .catch((error) => console.log(error));
  }, []);

  const handelAddCountry = (country) => {
    console.log("you click handleAddfunction", country);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h2>{countries.length}</h2>

        <ul>
          {countries.map((country) => (
            <Country
              country={country}
              key={country.numericCode}
              handelAddCountry={handelAddCountry}
            ></Country>
          ))}
        </ul>
      </header>
    </div>
  );
}

export default App;
