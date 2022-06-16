import React,{useState, useEffect} from "react";
import './AddMeal.css'


function AddMeal(){

    const[name, setName] = useState("")
    const[type, setType] = useState("")
    const[day, setDay] = useState("")
    const [submitted, setSubmitted] = useState(false)

    //const {userToken, setUserToken} = useContext(userContext);
    const handleSubmit =  async (e) =>{
        setSubmitted(true)
        if(name,type,day){
            window.location.reload();

        }else{
            e.preventDefault()
        }

        const encoded_jwt = localStorage.getItem('token')
        let requestOption = {
            method:"POST",
            headers:{ 'content-Type':'application/json',
                        Authorization: 'Bearer ' + encoded_jwt },
            body: JSON.stringify({name: name,
                                    type:type,
                                    day:day,
                                })
                            };
        let res = await fetch("http://localhost:8000/register/meal/",requestOption)
        let resp = await res.json()     
        console.log(name)
    }


    const handleNameInputChange = (e) =>{
        setName(e.target.value)
    }
    const handleTypeInputChange = (e) =>{
        setType(e.target.value)
    }
    const handleDayInputChange = (e) =>{
        setDay(e.target.value)
    }
    return(
        
        <div>
            <form className="add-meal-form" >
                <h2 className="SignupPage">ADD MEAL</h2>

                <div className="form-inputs">

                        <label>
                    MEAL NAME:
                            <input className="form-control" type={"name"} id="name-input"
                                    onChange={handleNameInputChange}
                                    value={name}></input> 
                                                    {submitted && !name ?
                                                    <span className="form-validation">Please Enter Meal name</span>:null}
                        </label>
                        <label>
                    TYPE OF MEAL:
                        <input className="form-control" id="type-name-input" type={"type"}
                                onChange={handleTypeInputChange}
                                value={type}></input>
                        {submitted && !type?<span className="form-validation">Please pick a type</span>:null}
                </label>
                <label className="dayOfMeal">
                    DAY OF MEAL:
                        <select className="form-control" id="day-name-input" type={"day"}
                            onChange={handleDayInputChange}
                            value={day}>
                            <option value=""></option>
                            <option value="Monday">Monday</option>
                            <option value="Tuesday">Tuesday</option>
                            <option value="Wednesday">Wednesday</option>
                            <option value="Thursday">Thursday</option>
                            <option value="Friday">Friday</option>
                            <option value="Saturday">Saturday</option>
                            <option value="Sunday">Sunday</option>
                        </select>
                        {submitted && !type?<span className="form-validation">Please pick a day</span>:null}
                </label>
                </div>
                        <input id="signup-submit" type={"submit"} onClick={handleSubmit}></input>
            </form>
        </div>
    )
}
export default AddMeal