import React, { useEffect, useState } from "react";
import axios from "axios";
import Country from "./Country";

const Dashboard = () => {
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState("");
  const [loadSatus, changeStatus] = useState(false);
  const [loadCount, changeLoadCount] = useState(0);

  const searchHandler = e => {
    setSearch(e.target.value);
  };
  const submitformHandler = e => {
    e.preventDefault();
    axios
      .get(`http://127.0.0.1:8080/country/country/${search}`)
      .then(response => {
        const data = response.data.hits.hits;
        setCountries(data);
      })
      .catch(error => console.log(error));
  };
  const returnBack = () => {
    changeStatus(!loadSatus);
    setSearch("");
  };

  useEffect(
    () => {
      axios
        .get(`http://127.0.0.1:8080/country/${loadCount}`)
        .then(response => {
          const data = response.data.hits.hits;
          console.log(response);
          setCountries(countries.concat(data));
        })
        .catch(error => console.log(error));
    },
    [loadSatus, loadCount]
  );

  const items = countries.map((country, index) => {
    return <Country country={country} key={index} />;
  });
  return (
    <div className="container">
      <div className="mt-3 ml-0" onSubmit={submitformHandler}>
        <form className="form-inline my-2 my-lg-0 mt-3 mb-3">
          <input
            className="form-control mr-sm-2"
            type="search"
            value={search}
            aria-label="Search"
            onChange={searchHandler}
          />
          <button
            className="btn btn-outline-success my-2 my-sm-0"
            type="submit"
          >
            Search Country
          </button>
        </form>
      </div>

      {items.length > 0 ? [
            <div className="row">{items}</div>,
            <button
              onClick={() => changeLoadCount(loadCount + 10)}
              className="btn btn-info"
            >
              Load More
            </button>
          ]
        : null}
      {countries.length === 0 ? (
        <div className="mt-2">
          <div className="mt-2 mb-2">Sorry, no results found</div>
          <button className="btn btn-primary" onClick={returnBack}>
            Return to All Countries
          </button>
        </div>
      ) : null}
    </div>
  );
};

export default Dashboard;
