import { Button,MenuItem } from '@mui/material';
import TextField from '@mui/material/TextField';
import  axios from 'axios';
import { useContext, useState } from 'react';
import Context from './Context';
import { API } from './global';
const intial={name:'',course:'',student:''}
export default function Forms2()
{

 const context=useContext(Context)
    const [data,setdata]=useState(intial)
    const handel=(e)=>
    {
        setdata({...data,[e.target.name]:e.target.value})
    }
    const submit=(e)=>{
        e.preventDefault();
        axios.post(`${API}/mentors`,data).then(()=>{context.getmentor()})
        setdata(intial)
    }
    
    return(
        <>
        <form >
        <TextField id="outlined-basic" label="Enter mentor" variant="outlined" type="text"  onChange={handel} name='name' value={data.name} />


        {/* <TextField id="outlined-basic" select label="selectstudent" variant="outlined" type="drop-down" onChange={handel}  name='student' value={data.student} >
        {context.student.map((stu,key)=>(
                <MenuItem key={key} value={stu.name}>
                    {stu.name}
                </MenuItem>

            ))}
            
            </TextField> */}
            

<Button onClick={submit}>submit</Button>
            </form>
            </>
    )
}