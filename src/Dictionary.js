import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");

  function handleResponse(response) {}

  function search(event) {
    event.preventDefault();
    alert(`Searching for ${keyword} definition`);
  }

  let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=9faada74e0td93b882032b77odf27ad4`;
  axios.get(apiUrl).then(handleResponse);

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary">
      <form onSubmit={search}>
        <input
          type="search"
          onChange={handleKeywordChange}
        />
      </form>
    </div>
  );
}
