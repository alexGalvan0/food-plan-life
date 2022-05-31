import React,{useState} from "react";
import validator from 'validator';


import './Login.css'

function Signup(){
    const[email, setEmail] = useState("")

    const[password, setPassword] = useState("")
    
    const [submitted, setSubmitted] = useState(false)

    const handleSubmit =  async (e) =>{
        setSubmitted(true)
        let requestOption = {
            method:"POST",
            headers:{ 'content-Type':'application/json' },
            body: JSON.stringify({email:email,
                                password:password})
        };
        let url = 'http://127.0.0.1:8000/login';
        const response = await fetch(url,requestOption)

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
                <h2 className="SignupPage">Login</h2>

                <div className="form-inputs">

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