import { useContext, useEffect } from "react"
import Context from "./Context"
import CardComponent from './Card'
import { Button, Card,CardActions,CardHeader } from "@mui/material"
export default function Students()
{
    const context=useContext(Context)
    useEffect(()=>{
        context.getstudent()
    },[])
   

    
    return (
    <div className="cardstudent">
    
{context.student.map((stu,key)=><CardComponent key={key} data={stu}/>


)}
</div>)
}