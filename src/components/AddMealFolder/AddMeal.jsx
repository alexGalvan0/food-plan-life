import React,{useState} from "react";
import './AddMeal.css'


function AddMeal(){

    const[name, setName] = useState("")
    const[type, setType] = useState("")
    const[day, setDay] = useState("")
    const [submitted, setSubmitted] = useState(false)

    //const {userToken, setUserToken} = useContext(userContext);
    const handleSubmit =  async (e) =>{

        setSubmitted(true)

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
        console.log(resp)
       
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
            <form className="add-meal-form" style={{"borderRadius":"25px"}}>
                <h2 className="SignupPage">Add Meal</h2>

                <div className="form-inputs">

                        <label>
                    Meal Name:
                            <input className="form-control" type={"name"} id="name-input"
                                    onChange={handleNameInputChange}
                                    value={name}></input> 
                                                    {submitted && !name?
                                                    <span className="form-validation">Please Enter Meal name</span>:null}
                        </label>
                        <label>
                    Type of Meal:
                        <input className="form-control" id="type-name-input" type={"type"}
                                onChange={handleTypeInputChange}
                                value={type}></input>
                        {submitted && !type?<span className="form-validation">Please pick a type</span>:null}
                </label>
                <label>
                    Day of Meal:
                        <input className="form-control" id="day-name-input" type={"day"}
                                onChange={handleDayInputChange}
                                value={day}></input>
                        {submitted && !type?<span className="form-validation">Please pick a day</span>:null}
                </label>
                </div>
                        <input id="signup-submit" type={"submit"} onClick={handleSubmit}></input>
            </form>
        </div>
    )
}
export default AddMeal