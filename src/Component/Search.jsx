import React, { useRef } from "react";
import "./Search.css";

export default function Search(props) {
  const searchInput = useRef();

  return (
    <div className="search_main">
      <input
        type="search"
        value={props.searchData}
        className="input"
        onChange={() => props.eventHandler(searchInput.current.value)}
        ref = {searchInput}
      />
      <button onClick={props.searchWeather} className="search">Search</button>
    </div>
  );
}
