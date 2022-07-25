import React from "react";
import { useSelector } from "react-redux";
export const Blogs = ()=>{
    const [data,setData] = React.useState([]);
    const [loading,setLoading] = React.useState(true)
    React.useEffect(()=>{
        async function getData(){
            let res = await fetch("http://localhost:8080/blogs");
            let dt = await res.json();
            setData(dt);
            setLoading(!loading)
        }

        getData();
    })
    return(
        data.map((ele)=>{
            return(
                <>
                <h1>{ele.title}</h1>
                <button>View</button>
                <button>edit</button>
                </>
            )
        })
    )
}