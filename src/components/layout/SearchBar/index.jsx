import React, { useState, useEffect } from "react";
import { StyledSearchBar } from "./styles";
import { url } from "../../../utils/contants";

export default function SearchBar() {
  const [data, setData] = useState([]);

  const [userInput, setUserInput] = useState("");

  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(url);
        const json = await response.json();

        setData(json);
      } catch (error) {
        console.log(error);
      }
    }

    fetchData();
    console.log("Component mounted");
  }, []);

  function handleChange(event) {
    const query = event.target.value.toLowerCase();
    setUserInput(query);

    //delay suggestions to display more accurate results
    if (query.length > 2) {
      const filteredSuggestions = data.filter((product) =>
        product.title.toLowerCase().includes(query)
      );
      setSuggestions(filteredSuggestions);
    }

    if (query.length === 0) {
      setSuggestions([]);
    }
  }

  function handleClick(event) {
    console.log(event.target.innerHTML.toLowerCase());
  }

  return (
    <StyledSearchBar>
      <div className="input-wrapper">
        <label htmlFor="search-bar"></label>
        <span className="material-symbols-rounded">search</span>
        <input
          type="text"
          placeholder="Search"
          name="search"
          value={userInput}
          onChange={handleChange}
        />
      </div>
      <ul>
        {suggestions.map((item) => {
          return (
            <li key={item.id} onClick={handleClick}>
              {item.title}
            </li>
          );
        })}
      </ul>
    </StyledSearchBar>
  );
}
