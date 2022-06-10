import React,{useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import AddMeal from "../AddMealFolder/AddMeal";
import './Profile.css'



function Profile(){

    const url = 'http://localhost:8000/user/meals/';
    const encoded_jwt = localStorage.getItem('token');
    const config = {headers: {Authorization:`Bearer ${encoded_jwt}`}}

    const [userData,setUserData] = useState('')
    const [toggle, setToggle] = useState(false)

    useEffect( ()=>{
        fetch(url,config)
        .then(resp => resp.json())
        .then(data => setUserData(data))
    },[toggle])

    const getData = () =>{
        if (toggle){
            setToggle(false)
        } else{
            setToggle(true)
        }
    }

    let navigate = useNavigate();
    return(
        <div className="profile-container">
            <input type="button" value="Get Plan" onClick={getData} />
            <input type="button" value="Logout" onClick={() => {
                localStorage.removeItem('token') 
                navigate('/login')
                
            }} />


            <div className="table-container">
            <AddMeal/>
                {Array.isArray(userData) && userData.map(row => {  
                    return(

                            <table>
                                <tbody>
                                <tr>
                                    <th key={row.id}>{row.day}</th>
                                </tr>
                                <tr>
                                    <td key={row.id}>{row.name}</td>
                                </tr>
                                <tr>
                                    <td key={row.id}>{row.type}</td>
                                </tr>
                                </tbody>
                            </table>
                    ) 
                })}
            </div>
        </div>
    )
}

export default Profile;