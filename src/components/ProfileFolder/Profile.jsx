import React from "react";



function Profile(){
    const  getProfile = async () =>{
        const config = {headers:{
            Authorization: 'Token '+ localStorage.getItem('token')
        }}
        let res = await fetch('http://127.0.0.1:8000/user',config)
        console.log(config)
    }
    return(
        <div>
            <p onClick={getProfile}>getProfile</p>
        </div>
    )

}
export default Profile;