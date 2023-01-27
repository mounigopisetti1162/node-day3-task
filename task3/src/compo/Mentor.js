import { useContext, useEffect } from "react"
import Context from "./Context"
import CardComponent from './Card'
import { Button, Card,CardActions,CardHeader } from "@mui/material"
export default function Mentors()
{
    const context=useContext(Context)

    useEffect(()=>{
        context.getmentor()
    },[])

    return (
    <div className="cardstudent">
    
{context.mentor.map((men,key)=><CardComponent key={key} data={men}/>


)}
</div>)
}