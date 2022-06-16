import React,{useState} from "react";
import validator from 'validator';
import './Signup.css'
import { useNavigate } from "react-router-dom";

function Signup(){
    const[firstName, setFirstName] = useState("")
    const[lastName, setLastName] = useState("")
    const[email, setEmail] = useState("")

    const[password, setPassword] = useState("")
    
    const [submitted, setSubmitted] = useState(false)


    let navigate = useNavigate();
    const handleSubmit =  async (e) =>{
        setSubmitted(true)

        if(firstName,lastName,email,password){
            navigate('/login')
        }else{
            e.preventDefault()
        }

        
        let requestOption = {
            method:"POST",
            headers:{ 'content-Type':'application/json' },
            body: JSON.stringify({first_name: firstName,
                                    last_name:lastName,
                                    email:email,
                                    password:password})
        };
        let url = 'http://127.0.0.1:8000/register/';
        await fetch(url,requestOption)

        let requestOptions = {
            method:"POST",
            headers:{ 'Content-Type': 'application/json',
                        'Accept': 'application/json' },
            body: JSON.stringify({email:email,
                                    password:password})
        };
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
        <div className="signupCompContainer">
            <form className="sign-up-form" style={{"borderRadius":"25px"}}>
                <h2 className="SignupPage">SIGNUP</h2>

                <div className="form-inputs">
                        <label>
                    FIRST NAME:
                            <input className ="form-control" type={"text"} id="first-name-input" 
                                    onChange={handleFirstNameInputChange} 
                                    value={firstName} ></input> 
                            {(submitted) && (!firstName)? <span className="form-validation">Please Enter First Name</span>: null} 
                        </label>
                        <label>
                    LAST NAME:
                            <input className="form-control" type={"text"} id="last-name-input"
                                    onChange={handleLasttNameInputChange}
                                    value={lastName}></input>    
                           {submitted && !lastName? <span className="form-validation">Please Enter Last Name</span> :null }             
                        </label>
                        <label>
                    EMAIL:
                            <input className="form-control" type={"email"} id="email-input"
                                    onChange={handleEmailInputChange}
                                    value={email}></input> 
                                                    {(submitted && !email )|| (submitted && !validator.isEmail(email)) ?
                                                    <span className="form-validation">Please Enter Email</span>:null}
                        </label>
                        <label>
                    PASSWORD:
                        <input className="form-control" id="password-name-input" type={"password"}
                                onChange={handlePasswordInputChange}
                                value={password}></input>
                        {submitted && !password?<span className="form-validation">Please Choose A Password</span>:null}
                </label>
                </div>
                        <input id="signup-submit" type={"submit"} onClick={handleSubmit}></input>
            </form>
            <img className="signup-img" src="https://images.unsplash.com/photo-1543352632-5a4b24e4d2a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1925&q=80" alt="" />
        </div>
    )
}
export default Signup