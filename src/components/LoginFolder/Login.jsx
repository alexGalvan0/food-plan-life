import React,{useState, useContext} from "react";
import { useNavigate } from "react-router-dom";
import validator from 'validator';
import { UserContext } from '../../GlobalContext'

import './Login.css'


function Login(){
    //Use State
    const[email, setEmail] = useState("")
    const[password, setPassword] = useState("")
    const [submitted, setSubmitted] = useState(false)

    const {user, setUser} = useContext(UserContext);

    let navigate = useNavigate();

    const handleSubmit =  async (e) =>{
        localStorage.removeItem('token')
        e.preventDefault();
        setSubmitted(true)

        if(email,password){
            navigate('/profile')
        }else{
            e.preventDefault()
        }
        
        let requestOption = {
            method:"POST",
            headers:{ 'Content-Type': 'application/json',
                        'Accept': 'application/json' },
            body: JSON.stringify({email:email,
                                    password:password})
        };
        let url = 'http://127.0.0.1:8000/user/login/';
        const response = await fetch(url,requestOption)
        let token = await response.json()
        localStorage.setItem('token',token.access)



        //Get USer info
        const encoded_jwt = localStorage.getItem('token');
        const config = {headers: {Authorization:`Bearer ${encoded_jwt}`}}
        const userUrl = 'http://localhost:8000/user/';

        let nameResponse = await fetch(userUrl,config)
        let resps = await nameResponse.json()
        const firstName = await resps[0].first_name
        setUser( localStorage.setItem('firstName', firstName))
    }
    const handleEmailInputChange = (e) =>{
        setEmail(e.target.value)
    }
    const handlePasswordInputChange = (e) =>{
        setPassword(e.target.value)
    }




    return(
        
        <div className="loggin-comp-container">
            <form className="sign-up-form" style={{"borderRadius":"25px"}}>
                <h2 className="SignupPage">LOGIN</h2>

                <div className="form-inputs">

                        <label>
                    EMAIL:
                            <input className="form-control" type={"email"} id="email-input"
                                    onChange={handleEmailInputChange}
                                    value={email}></input> 
                                                    {(submitted && !email) || (submitted && !validator.isEmail(email)) ?
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
            <br/>
            <img className="loggin-img" src="https://images.unsplash.com/photo-1493770348161-369560ae357d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80" alt="" />
        </div>
    )
}
export default Login