import React from 'react';

export default function SearchBar(props) {
  // acá va tu código
  console.log(props)

const search = () =>{
    // creamos la variable inputSearch la cual buscara el id unputsearch
    const inputSearch = document.querySelector("#inputSearch")
    //
    props.onSearch(inputSearch.value)
}

  return <div>
    <div>
      <input id="inputSearch" type="text" />
      <button onClick={search}>Search</button>
    </div>
  </div>
};