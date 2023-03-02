import React, { useState } from 'react'
import { Divider, Input } from "antd";

function Search({searchFood}) {

  const [name, setName] = useState("")
  
   const handleSearchName = (e) =>{
        console.log("input Name : ",e.target.value);
        setName(e.target.value)
        searchFood(e.target.value)
    }


  return (
    <div>
      <Divider>Search</Divider>
      <div className="searchingBar">
        <label htmlFor="nameInput">Name</label>
        <Input value={name} onChange={handleSearchName} placeholder='ex : Chicken' type="text" name='nameInput'/>
      </div>
       
    </div>

  )
}

export default Search