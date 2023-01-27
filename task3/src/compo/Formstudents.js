import { Button, MenuItem } from '@mui/material';
import TextField from '@mui/material/TextField';
import  axios from 'axios';
import { useContext, useState } from 'react';
import Context from './Context';
import { API } from './global';
const intial={name:'',course:'',mentor:''}
export default function Forms1()
{
 const context=useContext(Context)
    const [data,setdata]=useState(intial)
// const student_url="http://localhost:4001/students"
    const handel=(e)=>
    {
        setdata({...data,[e.target.name]:e.target.value})
        console.log(e.target.value)
    }
    const submit=(e)=>{
        e.preventDefault();
        axios.post(`${API}/students`,data).then(()=>{context.getstudent()})
        setdata(intial)
        
    }
    // const name ={context.student}
    const {mentor}=context.student
    // console.log({context.student})
    
    return(
        <>
        <form >
        <TextField id="outlined-basic" label="Enter Student" variant="outlined" type="text"  onChange={handel} name='name' value={data.name}  />

        <TextField id="outlined-basic" label="Enter Course" variant="outlined" type="text" onChange={handel} name='course' value={data.course} />

        <TextField id="outlined-basic" select label="select" variant="outlined" type="drop-down" onChange={handel} name='mentor' value={data.mentor}
         >
            

            
            {context.mentor.map((men,key)=>(
             
             
                <MenuItem key={key} value={men.name}>
                    {men.name}
                </MenuItem>
                
            

            ))}
            
            </TextField>

<Button onClick={submit}>submit</Button>
            </form>
            </>
    )
}