import React from "react";


function Search({search, setSearch}) {
  function handleSearch(e) {
    const value = e.target.value
    setSearch(value)
    // console.log(value)
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
