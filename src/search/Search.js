import React from 'react'
import './Search.css'
import { useRef } from 'react'
const Search = ({getUserValue}) => {

  const userInfo = useRef(null)
  const handleClick = ()=>{
    const inputValue = userInfo.current.value
    getUserValue(inputValue)
  }
  return (
    <div className='search-bar'>
      <input type='text' ref={userInfo}></input>
      <button onClick={handleClick}><svg xmlns="http://www.w3.org/2000/svg" width="11" height="14"><path fill="none" stroke="#FFF" stroke-width="3" d="M2 1l6 6-6 6"/></svg></button>
    </div>
  )
}

export default Search