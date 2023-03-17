import React,{useState} from 'react'
import axios from 'axios';
import './login.css';
import { Link } from 'react-router-dom';
// import{useHistory} from "react-router-dom"
// import { Navigate } from 'react-router-dom';

function Login({setLoginUser}) {
    const [user, setUser] = useState({
            email:"",
            password:""
    });
    // })
    const handleChange=(e)=>{
        const {name,value}=e.target
        setUser({
            ...user,
            [name]:value
        })
    }
    const Login = ()=>{
      axios.post("http://localhost:9002/login",user).then(
        res=>{
          alert(res.data.status)
          setLoginUser(res.data.user);  
        }
        );

    }
  return (
    <div>
        {
// console.log(user)
}
         <div className="login">
            <h1>Login</h1>
            <input type="text" name="email" value={user.email} onChange={handleChange} placeholder="Enter your Email"></input>
            <input type="password" name="password" value={user.password} onChange={handleChange}  placeholder="Enter your Password" ></input>
            <div className="button" onClick={Login}>Login{ user !==undefined &&
             <Link to ="/"></Link>
}
</div>
            <div>or</div>
            {/* <div className="button" onClick={'/login'}>Register</div> */}
            <Link className="button" to ="/register">Register</Link>

        </div>
    </div>
  )
}

export default Login