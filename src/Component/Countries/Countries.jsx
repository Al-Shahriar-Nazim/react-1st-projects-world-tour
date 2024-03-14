import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";
import "./Country.css";

const Countries = () => {
  const [countries, setCountries] = useState([]);
const [ visitedCountry, setVisitedCountry] = useState([])

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);

  const handleVisitedCountry = ( country) => {
console.log("add this visited your countries")
console.log(country)
const newVisitedCountries = [...visitedCountry , country];
setVisitedCountry(newVisitedCountries)
  }
  return (
    <div>
      {/* visited country */}
      <div>
        <h5>Visited country : {visitedCountry.length}</h5>
        <ul>
{
  visitedCountry.map(myCountry => <li key={myCountry.cca3}>{myCountry.name.common}</li>)
}
        </ul>
      </div>
      {/* display country */}
      <h3>Countries : {countries.length}</h3>

      <div className="Country-container">
        {countries.map((conty) => (
          <Country
          key={conty.cca3}
          handleVisitedCountry={handleVisitedCountry}
          country={conty}>

          </Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;
