import { useState } from "react";
import './searchbar.scss'

function Searchbar({ onSubmit }) {
  const [input, setInput] = useState("");

  const handleChange = e => setInput(e.target.value);

  const handleSubmit = e => {
    e.preventDefault();
    if (input.trim() === "") return;
    onSubmit(input.trim());
    setInput("");
  };

  return (
    <header className="searchbar">
      <form className="form" onSubmit={handleSubmit}>
        <button type="submit" className="button">
          Search
        </button>
        <input
          className="input"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={input}
          onChange={handleChange}
        />
      </form>
    </header>
  );
}

export default Searchbar; 