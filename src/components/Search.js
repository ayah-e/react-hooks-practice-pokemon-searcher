import React from "react";


function Search() {
  function handleSearch(e) {
    const value = e.target.value
    console.log(value)
  }
  return (
    <div className="ui search">
      <div className="ui icon input">
        <input className="prompt" onChange = {handleSearch}/>
        <i className="search icon" />
      </div>
    </div>
  );
}

export default Search;
