import foods from './foods.json';
import './App.css';
import FoodBox from './components/FoodBox';
import { useState } from 'react';
import AddFoodForm from './components/AddFoodForm';
import Search from './components/Search';
import { Divider } from 'antd';

function App() {
  const [allFood, setFood] = useState(foods);

  // console.log(allFood);
  const addNewFood = (newFood) => {
    const updateFood = [newFood, ...allFood];
    setFood(updateFood);
  };
  const searchFood = (foodSearched) => {
    const foodToSearch = foods.filter((food) =>
      food.name.toLowerCase().includes(foodSearched.toLowerCase())
    );
    setFood(foodToSearch);
  };

  const deleteFood = (foodWantDeleted) => {
    const foodToKeep = allFood.filter((food) => {
      return food.name !== foodWantDeleted;
    });
    console.log(foodWantDeleted);
    setFood(foodToKeep);
    console.log(foodToKeep);
  };

  return (
    <div className="App">
      <AddFoodForm createForm={addNewFood} />
      <Search searchFood={searchFood} />
      <Divider>FoodBox</Divider>

      <div className="containerFood">
        {allFood &&
          allFood.map((food) => (
            <FoodBox key={food.image} food={food} deleteFood={deleteFood} />
          ))}

        {!allFood.length && <p>No DATA</p>}
      </div>
    </div>
  );
}

export default App;
