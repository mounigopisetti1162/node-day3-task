import {  useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
export default function Home()
{
    const nav=useNavigate()
    return (
        <>
        <h1> This is the student and mentor page</h1>
        <Button onClick={()=>nav('/student-form')}>Add Student</Button>
        <Button onClick={()=>nav('/mentor-form')}>Add Mentor</Button>
        <Button onClick={()=>nav('/student')}>Students</Button>
        <Button onClick={()=>nav('/mentor')}>Mentor</Button>



        </>
    )
}