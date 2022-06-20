import React,{useState, useEffect, useContext} from "react";
import { useNavigate } from "react-router-dom";
import AddMeal from "../AddMealFolder/AddMeal";
import './Profile.css'
import { FaTrashAlt } from 'react-icons/fa';
import { FiLogOut } from "react-icons/fi";
import { UserContext } from '../../GlobalContext'



function Profile(){
    const {setUser,user} = useContext(UserContext);

    const url = 'http://localhost:8000/user/meals/';
    const encoded_jwt = localStorage.getItem('token');
    const config = {headers: {Authorization:`Bearer ${encoded_jwt}`}}

    const [userData,setUserData] = useState('')


    useEffect( ()=>{
        fetch(url,config)
        .then(resp => resp.json())
        .then(data => setUserData(data))
    },[])

    //useEffect(()=>{window.location.reload('false')},[])

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

        <div className="profile-container">
            <h3>Hello {localStorage.getItem('firstName')}! </h3>
            <div className="profile-container">
                <div className="table-container">
                <AddMeal className="add-meal"/>
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
            <img className="profile-img" src="https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80" alt="" />
            <br/>
            <label className="logout-btn" htmlFor="logout-btn" onClick={() => {
                    localStorage.removeItem('firstName') 
                    localStorage.removeItem('token') 
                    navigate('/login')
                    window.location.reload(false);
                }}>
                Logout
                <FiLogOut className="logout-btn" name="logout-btn"></FiLogOut>
            </label>
        </div>
    )
}

export default Profile;