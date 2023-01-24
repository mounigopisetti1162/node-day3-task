import * as dotenv from 'dotenv'
import express from 'express'
import { MongoClient } from 'mongodb'
const app=express()
dotenv.config()
const PORT=process.env.PORT
const MONGO_URL=process.env.MONGO_URL
const client =new MongoClient(MONGO_URL)
await client.connect()
console.log("mongo db")


app.get('/',function(request,responce)
{
    responce.send("this is an student and teacher server ")
})
app.post("/students",async function(request,responce)
{
    const data=request.body()
    const student=await client.db("test").collection('student').insertMany(data)
    responce.send(student)

})
app.post("/mentors",async function(request,responce)
{
    const data=request.body()
    const mentor=await client.db("test").collection('mentor').insertMany(data)

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
    responce.send(mentor)
})

app.listen(PORT,()=>console.log(`the server is connected to server ${PORT}`))
export {client}