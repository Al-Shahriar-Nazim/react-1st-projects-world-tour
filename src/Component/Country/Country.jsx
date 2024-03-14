import { useState } from "react";
import "./Country.css";
const Country = ({ country ,handleVisitedCountry}) => {
  console.log(country);
  const { name, flags, area, population, cca3 } = country;

  const [visited, setVisited] = useState(false);
  const handleButton = () => {
    setVisited(!visited);
  };
  console.log(handleVisitedCountry)

  // const passWithParams = () => visitedHandleCountries(country);

  return (
    <div className={`country ${visited ? "visited" : "non-visited"}`}>
      <h3 style={{ color: visited ? "purple" : "crimson" }}>
        name : {name.common}
      </h3>
      <img src={flags.png} alt="" />
      <p>Area : {area}</p>
      <p>population :{population}</p>
      <p>
        <small>Code : {cca3}</small>
      </p>
<button onClick={ () => handleVisitedCountry(country)}>Mark visited</button>
      <br />
      <br />
      <button onClick={handleButton}>{visited ? "Visited" : "Going"}</button>
      {visited ? "i  have visited the country" : " I want to visited"}
    </div>
  );
};

export default Country;
