import React,{useState} from "react";



function Profile(){

    const [name,setName] = useState('')
    const [type,setType] = useState('')
    const [day,setDay] = useState('')

    const  getProfile = async () =>{
        
        const encoded_jwt = localStorage.getItem('token')

        const config = {headers:{
                             Authorization:`Bearer ${encoded_jwt}`
                        },
        }
       let res = await fetch('http://127.0.0.1:8000/user/meals/',config)
       let response = await res.json()
       setName(response[0]['name'])
       setType(response[0]['type'])
       setDay(response[0]['day'])

    }
    return(
        <div>
            <h2 onClick={getProfile} className="name">meals</h2>
            <p className="type">{name}</p>
            <p className="type">{type}</p>
            <p className="day">{day}</p>

        </div>
    )

}
export default Profile;