import React,{useState} from "react";
import validator from 'validator';


import './Signup.css'

function Signup(){
    const[firstName, setFirstName] = useState("")
    const[lastName, setLastName] = useState("")
    const[email, setEmail] = useState("")

    const[password, setPassword] = useState("")
    
    const [submitted, setSubmitted] = useState(false)

    const handleSubmit =  async (e) =>{
        setSubmitted(true)
        e.preventDefault()
        
        let requestOption = {
            method:"POST",
            headers:{ 'content-Type':'application/json' },
            body: JSON.stringify({first_name: firstName,
                                    last_name:lastName,
                                    email:email,
                                    password:password})
        };
        let url = 'http://127.0.0.1:8000/register/';
        const response = await fetch(url,requestOption)

    }
    const handleFirstNameInputChange = (e) =>{
        setFirstName(e.target.value)
    }
    const handleLasttNameInputChange = (e) =>{
        setLastName(e.target.value)
    }
    const handleEmailInputChange = (e) =>{
        setEmail(e.target.value)
    }
    const handlePasswordInputChange = (e) =>{
        setPassword(e.target.value)
    }
    return(
        <div>
            <form className="sign-up-form" style={{"borderRadius":"25px"}}>
                <h2 className="SignupPage">Signup</h2>

                <div className="form-inputs">
                        <label>
                    First Name:
                            <input className ="form-control" type={"text"} id="first-name-input" 
                                    onChange={handleFirstNameInputChange} 
                                    value={firstName} ></input> 
                            {submitted && !firstName? <span className="form-validation">Please Enter First Name</span>: null} 
                        </label>
                        <label>
                    Last Name:
                            <input className="form-control" type={"text"} id="last-name-input"
                                    onChange={handleLasttNameInputChange}
                                    value={lastName}></input>    
                           {submitted && !lastName? <span className="form-validation">Please Enter Last Name</span> :null }             
                        </label>
                        <label>
                    Email:
                            <input className="form-control" type={"email"} id="email-input"
                                    onChange={handleEmailInputChange}
                                    value={email}></input> 
                                                    {submitted && !email || submitted && !validator.isEmail(email) ?
                                                    <span className="form-validation">Please Enter Email</span>:null}
                        </label>
                        <label>
                    Password:
                        <input className="form-control" id="password-name-input" type={"password"}
                                onChange={handlePasswordInputChange}
                                value={password}></input>
                        {submitted && !password?<span className="form-validation">Please Choose A Password</span>:null}
                </label>
                </div>
                        <input id="signup-submit" type={"submit"} onClick={handleSubmit}></input>
            </form>
        </div>
    )
}
export default Signup