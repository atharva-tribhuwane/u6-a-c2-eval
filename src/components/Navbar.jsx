import React from "react";
import { Link } from "react-router-dom";


 const Navbar = ()=>{
    return(
        <div style={{display:"flex",gap:"20px", justifyContent:"center",backgroundColor:"yellow", height:"40px",alignItems:"center"}}>
            <Link to={'/'}>Home</Link>
            <Link to={'/blogs'}>blogs</Link>
            <Link to={'/login'}>Login</Link>
        </div>
    )
}

export default Navbar;


