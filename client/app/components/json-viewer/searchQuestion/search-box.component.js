import React, { Component } from 'react';

const SearchBox = ({search}) => (
    <form className="form-inline">
        <input className="form-control" type="text" placeholder="Search" aria-label="Search" onChange={(e) => search(e.target.value)}/>
    </form>
)

export default SearchBox;