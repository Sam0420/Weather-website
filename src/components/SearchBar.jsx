import React from "react";

const SearchBar = ({ searchField, onSearchChange, onSearchSubmit }) => {
    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            onSearchSubmit();
        }
    };

    return (
        <div className="flex items-center mb3">
            <input 
                className="pa2 input-reset bg-transparent white br3 b--none ma3 tc"
                type="text" 
                value={searchField} 
                onChange={onSearchChange} 
                onKeyDown={handleKeyDown} // Handle "Enter" key here
                placeholder="Enter city name..."
            />
            <button 
                className="br-pill grow white bg-transparent" 
                onClick={onSearchSubmit}
            >
                Search
            </button>
        </div>
    );
};

export default SearchBar;