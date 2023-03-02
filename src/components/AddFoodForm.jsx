import React, { useState } from 'react'
import { Divider, Input } from "antd";

function AddFoodForm({createForm}) {
    const [name, setName] = useState("");
    const [image, setImage] = useState("");
    const [calories, setCalories] = useState("");
    const [servings, setServings] = useState("");

    const handleNameInput = (e) =>{
        console.log("input Name : ",e.target.value);
        setName(e.target.value)
    }
    const handleCaloriesInput = (e) =>{
        console.log("input Calories : ",e.target.value);
        setCalories(e.target.value)
    }
    const handleImageInput = (e) =>{
        console.log("input Image : ",e.target.value);
        setImage(e.target.value)
    }
     const handleServingsInput = (e) =>{
        console.log("input servings :",e.target.value);
        setServings(e.target.value)
    }

    const handleSubmit = (e)=>{
        e.preventDefault()
        if(!name && !calories&&!image&&!servings){
            return
        }
        const newFood = {name,calories,image,servings}
        console.log("submitted : ",newFood);
        createForm(newFood)

        setName("")
        setImage("")
        setCalories("")
        setServings("")
    }
  return (
      <form onSubmit={handleSubmit} className="form">
        <Divider >Add new food</Divider>
                    <label htmlFor="name">Name</label>
                    <Input placeholder='ex : Chicken' value={name} type="text" name='name' onChange={handleNameInput}/>
                    <label htmlFor="calories">Calories</label>
                    <Input placeholder='85 Kcal' type="number" value={calories} name='calories' onChange={handleCaloriesInput}/>
                    <label htmlFor="image">Image</label>
                    <Input placeholder='link your image' value={image} type="text" name='image' onChange={handleImageInput}/>
                     <label htmlFor="serving">Servings</label>
                    <Input placeholder='Number of serving' value={servings} type="number" name='serving' onChange={handleServingsInput}/>
                    <button type='submit'>Create</button>
        </form>
  )
}

export default AddFoodForm