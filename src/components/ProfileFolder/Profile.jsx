import React,{useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import AddMeal from "../AddMealFolder/AddMeal";
import './Profile.css'
import { FaTrashAlt } from 'react-icons/fa';
import { FiLogOut } from "react-icons/fi";



function Profile(){

    const url = 'http://localhost:8000/user/meals/';
    const encoded_jwt = localStorage.getItem('token');
    const config = {headers: {Authorization:`Bearer ${encoded_jwt}`}}

    const [userData,setUserData] = useState('')
    const [userName,setUserName] = useState('')
    useEffect( ()=>{
        fetch(url,config)
        .then(resp => resp.json())
        .then(data => setUserData(data))




        const userUrl = 'http://localhost:8000/user/';

        fetch(userUrl,config)
        .then(resps => resps.json())
        .then(datas => setUserName(datas[0].first_name))

    },[])

    let navigate = useNavigate();
    

    const delteMeal = (mealId) =>{
        const delUrl = 'http://localhost:8000/delete/meal/'
        const config2 = {headers:{Authorization:`Bearer ${encoded_jwt}`,'Accept': 'application/json',
        'Content-Type': 'application/json'},
                        method:'POST',
                        body:JSON.stringify({id:mealId})}
        fetch(delUrl,config2)
        window.location.reload(false);
    }
   
    return(

        <div>
            <h3>Hello {userName}!</h3>
            <label className="logout-btn" htmlFor="logout-btn" onClick={() => {
                    localStorage.removeItem('token') 
                    navigate('/login')
                }}>
                Logout
                <FiLogOut className="logout-btn" name="logout-btn"></FiLogOut>
            </label>


            <div className="profile-container">
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
                                    <tr>
                                        <td className="trash">
                                            <FaTrashAlt className="delete-meal" onClick={()=>{
                                                delteMeal(row.id)
                                            }} />
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                        ) 
                    })}
                </div>
            </div>
        </div>
    )
}

export default Profile;