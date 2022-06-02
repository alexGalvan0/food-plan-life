import React,{useContext, Component} from "react";
import { userContext } from "../../App";


function Profile(){
    const getProfile = () =>{
        const config = {headers:{
            Autherization: 'jwt: '+ localStorage.getItem('token')
        }}
        fetch('http://127.0.0.1:8000/user',config).then(res =>{
            console.log(res)
        })
    }
    return(
        <div>
            <p onClick={getProfile}>getProfile</p>
        </div>
    )

}
export default Profile;