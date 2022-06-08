import React,{useState} from "react";



function Profile(){

    const [name,setName] = useState('')
    const [type,setType] = useState('')
    const [day,setDay] = useState('')
    const [stuff, setStuff] = useState('')

    const  getProfile = async () =>{
        
        const encoded_jwt = localStorage.getItem('token')

        const config = {headers:{
                             Authorization:`Bearer ${encoded_jwt}`
                        },
        }
       let res = await fetch('http://127.0.0.1:8000/user/meals/',config)
       let response = await res.json()
       setStuff(JSON.stringify(response))

    }
    return(
        <div>
            <h2 onClick={getProfile} className="name">meals</h2>
            <p>{stuff}</p>
        </div>
    )

}
export default Profile;