import React from "react";
import Login from "./Login";
import {Link} from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Blogs } from "./Blogs";
import { useSelector } from "react-redux";
const Home = ()=>{
    // console.log(authcheck);
    const {auth_token} = useSelector((store)=>store);
    console.log("home",auth_token)
    const navigate = useNavigate();
    const btnfunc = ()=>{
        if(auth_token !== null ){
            navigate('/blogs');
        }
        else{
            navigate('/login');
        }
    }
    return(
        <button onClick={btnfunc}>Click Here To See Blogs</button>
    )
}

export default Home;