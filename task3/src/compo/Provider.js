import Context from "./Context"
import axios from "axios"
import { API } from "./global"
import { useEffect, useState } from "react"
export default function Provider(props)
{
    const [student,setstudent]=useState([])
    const [mentor,setmentor]=useState([])

    const getstudent=()=>{
        axios(`${API}/students`).then((res)=>setstudent(res.data))
    }
    const getmentor=()=>{
        axios(`${API}/mentors`).then((res)=>setmentor(res.data))
    }
    const deletestudent=(id)=>{
        axios.delete(`${API}/students/${id}`).then(()=>getstudent())
        console.log(id)
    }
    const deletementor=(id)=>{
        axios.delete(`${API}/mentors/${id}`).then(()=>getmentor())
        console.log(id)
    }
    useEffect(()=>{
        getstudent();
       
    },[])
    useEffect(()=>{
        getmentor();
       
    },[])
    return (
        <Context.Provider value={{student,setstudent,getstudent,mentor,getmentor,deletestudent,deletementor}}>
            {props.children}
        </Context.Provider>
    ) 
}