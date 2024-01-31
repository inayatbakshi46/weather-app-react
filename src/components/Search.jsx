import React, {useState} from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const Search= ({changeCity}) => {
  const [val, setVal] = useState("");
  const handleInput = (e) => {
    setVal(e.target.value);
  };

  const handleSet = () => {
    changeCity(val)
    setVal("")
  };

  return (
    <div className="flex items-center justify-center space-x-1 p-4 text-xl">
      <input type="text" value={val} onChange={handleInput} className="bg-transparent border-b-2 border-black dark:border-dark focus:outline-none mx-2 placeholder:text-black placeholder:dark:text-dark" placeholder="Enter city name..." />
      <button onClick={handleSet}>
        <FontAwesomeIcon icon={faMagnifyingGlass} />
      </button>
    </div>
  );
}

export default Search;