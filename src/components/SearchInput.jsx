import { useState, useCallback, useEffect } from 'react';
import searchIcon from "../assets/icons/magnifierIcon.png"; 
import useMusic from '../customHooks/useMusic';

const SearchInput = () => {
  const { displayList , setDisplayList,handleReset} = useMusic();

  const [searchInput, setSearchInput] = useState('');
  const [filterResult,setFilterResult] = useState([])

  useEffect(()=>{
    if(searchInput.length ==0){
        setFilterResult([...displayList])
    }
  },[displayList,searchInput])
  

  // Debounce function to limit the rate of execution
  const debounce = (func, delay) => {
    let debounceTimer;
    return (...args) => {
      clearTimeout(debounceTimer);
      debounceTimer = setTimeout(() => func(...args), delay);
    };
  };

  const handleSearch = useCallback(
    debounce((query) => {
      if (!query) {
        handleReset()
      } else {
        setDisplayList(
            filterResult.filter((song) =>
            song.name.toLowerCase().includes(query.toLowerCase()) ||
            song.artist.toLowerCase().includes(query.toLowerCase())
          )
        );
      }
    }, 300),
    [searchInput,displayList, setDisplayList]
  );

  return (
    <div className="flex items-center w-full p-2 mb-4 backdrop-blur-2xl brightness-125 text-white rounded">
      <input
        type="text"
        placeholder="Search Song, Artist"
        value={searchInput}
        onChange={(e) => {
          setSearchInput(e.target.value);
          handleSearch(e.target.value);
        }}
        className="flex-grow bg-transparent outline-none px-3 placeholder:text-sm"
      />
      <img
        src={searchIcon}
        alt="Search"
        className="w-4 h-4 bg-transparent"
      />
    </div>
  );
};

export default SearchInput;
