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

  let selected = -1;

  function handleNavigation(event) {
    const key = event.key;

    switch (key) {
      case "Enter":
        console.log(event.target.value);
        break;
      case "ArrowDown":
        navigateSuggestions(1, event.target);
        break;
      case "ArrowUp":
        navigateSuggestions(-1, event.target);
        break;
      case "Backspace":
        removeStyles();
        break;
      default:
        break;
    }
  }

  function navigateSuggestions(direction, target) {
    const newSelected = selected + direction;
    if (newSelected >= 0 && newSelected < suggestions.length) {
      selected = newSelected;
      target.value = suggestions[selected].title;
      const selectedSuggestion = suggestions[selected].id;
      suggestions.forEach((suggestion) => {
        const li = document.getElementById(suggestion.id);
        if (suggestion.id === selectedSuggestion) {
          li.classList.add("selected");
          li.classList.remove("unselected");
        } else {
          li.classList.add("unselected");
          li.classList.remove("selected");
        }
      });
    }
  }

  function removeStyles() {
    suggestions.forEach((suggestion) => {
      const li = document.getElementById(suggestion.id);
      li.classList.remove("selected");
    });
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
          onKeyDown={handleNavigation}
        />
      </div>
      <ul>
        {suggestions.map((item) => {
          return (
            <li key={item.id} onClick={handleClick} id={item.id}>
              {item.title}
            </li>
          );
        })}
      </ul>
    </StyledSearchBar>
  );
}
