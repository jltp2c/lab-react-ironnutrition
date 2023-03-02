
import { Card, Col, Button} from "antd";

function FoodBox({food, deleteFood}) {
  return (
       <Col>
    <div className='foodContainer'>
      
         <Card >
            <p id='foodName'>{food.name}</p>
            <p> Calories : {food.calories} kCal</p>
            <img src={food.image} alt="{food.name}" width={100} />
            <p>Servings : <b>{food.servings}</b> </p>
            <p> <b>Total calories :</b> {food.calories*food.servings} kCal</p>
            {/* issue with delete */}
            <Button onClick={()=>deleteFood(food.name)}>Delete</Button>
         </Card>
     
    </div>
    </Col>
)
}

export default FoodBox