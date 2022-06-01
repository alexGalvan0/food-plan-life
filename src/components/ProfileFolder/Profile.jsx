import React,{useContext} from "react";
import { userContext } from "../../App";

function Profile(){
    const {userToken} = useContext(userContext);

    const getProfile = async () => {
    const url = 'http://127.0.0.1:8000/user'
    let response = await fetch(url,{Cookie:userToken})
    let resp = await response.json()
    console.log(resp)
    return resp;
    }
    return(
        <div>
            {getProfile()}
        </div>
    )
}
export default Profile;