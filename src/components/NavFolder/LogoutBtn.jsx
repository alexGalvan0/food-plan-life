import React from "react";
import { useNavigate } from "react-router-dom";
import { FiLogOut } from "react-icons/fi";

export function LogoutBtn(){
    let navigate = useNavigate();

    <label className="logout-btn" htmlFor="logout-btn" onClick={() => {
        localStorage.removeItem('firstName') 
        localStorage.removeItem('token') 
        navigate('/login')
        window.location.reload(false);
    }}>
    Logout
    <FiLogOut className="logout-btn" name="logout-btn"></FiLogOut>
</label>
}