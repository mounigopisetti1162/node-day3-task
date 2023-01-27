import * as React from 'react';
import Card from '@mui/material/Card';
import { useContext } from 'react';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import { CardTitle,CardSubtitle, CardBody } from 'reactstrap';
import Context from './Context';

export default function CardComponent({data})

{
  const context=useContext(Context)
    const navigate=useNavigate()
    const {name,course,mentor}=data
    // console.log(data._id)
    const Deleted=(id)=>{
      // console.log("helo")
      context.deletementor(id)
      context.deletestudent(id)
      
      // context
    }
    return(
        <>
        <div className='card'>
        <Card >
<CardBody className='cardbody'>
        <CardTitle tag="h5">{name}</CardTitle>
        <CardSubtitle className="mb-2 text-muted" tag="h6">
          {course}
        </CardSubtitle>
        <CardSubtitle className="mb-2 text-muted" tag="h6">
          {mentor}
        </CardSubtitle>
    
<Button color="error"
      onClick={()=> Deleted(data._id)}
                    > Delete</Button>
               

</CardBody>
</Card>
</div>
</>
    )
}