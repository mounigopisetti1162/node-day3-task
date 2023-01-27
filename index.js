import * as dotenv from 'dotenv'
import express from 'express'
import { MongoClient,ObjectId } from 'mongodb'
import cors from 'cors'
const app=express()
dotenv.config()
const PORT=process.env.PORT
const MONGO_URL=process.env.MONGO_URL
const client =new MongoClient(MONGO_URL)
await client.connect()
console.log("mongo db")

app.use(express.json())
app.use(cors());
app.get('/',function(request,responce)
{
    responce.send("this is an student and teacher server  student=/students,mentor=/mentors ")
})
app.post("/students",async function(request,responce)
{
    const data=request.body
    const student=await client.db("test").collection('student').insertOne(data)
    responce.send(student)

})
app.post("/mentors",async function(request,responce)
{
    const data=request.body
    const mentor=await client.db("test").collection('mentor').insertOne(data)

    responce.send(mentor)

})
app.get("/students",async function(request,responce)
{
    const students=await client.db("test").collection("student").find({}).toArray()
    responce.send(students)
})
app.get("/mentors",async function(request,responce)
{
    const mentor=await client.db("test").collection("mentor").find({}).toArray()
    console.log("sfgdd")

    responce.send(mentor)
})
app.delete("/students/:id",async function(request,responce)
{
    const {id}=request.params
    console.log("student")
    const students=await client.db("test").collection("student").deleteOne({_id: ObjectId(id)})
    
    responce.send(students)
})
app.delete("/mentors/:id",async function(request,responce)
{
    const {id}=request.params
    console.log("mentor")
    const mentors=await client.db("test").collection("mentor").deleteOne({_id: ObjectId(id)})
    
    responce.send(mentors)
})

app.listen(PORT,()=>console.log(`the server is connected to server ${PORT}`))
export {client}