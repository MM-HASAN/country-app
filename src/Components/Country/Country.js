import React from "react";

const Country = (props) => {
  const flagStyle = {
    width: "100px",
    height: "60px",
  };
  const countryStyle = {
    border: "1px solid red",
    padding: "20px",
    margin: "10px",
  };

  const btnStyle = {
    backgroundColor: "blue",
    padding: "10px 20px",
    marginBottom: "20px",
    textTransform: "upperCase",
    border: "1px solid tomato",
  };
  const {
    flag,
    name,
    nativeName,
    numericCode,
    population,
    region,
  } = props.country;
  // console.log("HERE IS pROPS", props);
  const handelAddCountry = props.handelAddCountry;
  return (
    <div style={countryStyle}>
      <img style={flagStyle} src={flag} alt="#" />
      <h2>
        this is country: <span>{name} </span>
        this is country: <span>{nativeName} </span>
        this is country: <span>{numericCode} </span>
        this is country: <span>{population} </span>
        this is country: <span>{region} </span>
      </h2>

      <button onClick={() => handelAddCountry(props.country)} style={btnStyle}>
        addCountry
      </button>
    </div>
  );
};

export default Country;

//country:

//flag: "https://restcountries.eu/data/sdn.svg"
//name: "Sudan"
//nativeName: "السودان"
//numericCode: "729"
//population: 39598700
//region: "Africa"
