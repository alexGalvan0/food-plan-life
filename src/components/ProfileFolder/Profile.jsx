import React,{useState} from "react";
import AddMeal from "../AddMealFolder/AddMeal";



function Profile(){
    const [meals, setMeals] = useState('')

    const  getProfile = async () =>{
        
        const encoded_jwt = localStorage.getItem('token')

        const config = {headers:{
                             Authorization:`Bearer ${encoded_jwt}`
                        },
        }
       let res = await fetch('http://localhost:8000/user/meals/',config)
       let response = await res.json()
       let mealView = response
       console.log(mealView)
       setMeals(JSON.stringify(mealView))

    }
    return(
        <div>
            <h2 onClick={getProfile} className="name">meals</h2>
            <p>{meals}</p>
            <br/>

        <AddMeal/>
        </div>
    )

}
export default Profile;