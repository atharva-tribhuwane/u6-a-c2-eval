import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { authToken } from "../Redux/action";

const Login = () => {
    const [userName, setUserName] = React.useState("");
    const [password, setPassword] = React.useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const authenticate = () => {
        let payLoad = {
            email: userName,
            password: password
        }
        fetch(`https://reqres.in/api/login`, {
            method: "POST",
            body: JSON.stringify(payLoad),
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then((res)=>res.json())
        .then((res)=>{
            console.log(res)
            if(res.token){
                dispatch(authToken(res.token))
            }
            else{
                dispatch(authToken(null))
            }
        })
        
        


    }
    return (
        <>
        <h1>Login:</h1>
        <div>
            <input type="text" placeholder="Enter UserName...." name="username" value={userName} onChange={(e) => setUserName(e.target.value)} />
            <input type="text" placeholder="Enter Password" name="pass" value={password} onChange={(e) => setPassword(e.target.value)} />
            <button onClick={authenticate}>Submit</button>
        </div>
        </>
    )
}

export default Login;