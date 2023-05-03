import { useState } from "react";

function SearchBar({ onSubmit }) {
  const [term, setTerm] = useState("");

  const handleClick = function (event) {
    event.preventDefault();
    onSubmit(term);
  };

  const onchangeevent = function (event) {
    //console.log(event.target.value);
    setTerm(event.target.value);
    console.log(setTerm);
  };

  return (
    <div>
      <form onSubmit={handleClick}>
        <input value={term} onChange={onchangeevent} />
      </form>
    </div>
  );
}

export default SearchBar;
