import express from "express";
import fs from 'fs'
import dotenv from 'dotenv'

dotenv.config({path:'config.env'})
let port=process.env.PORT
let host=process.env.HOST

let app=express();
app.use(express.json());

app.get('/',(req,resp)=>{
    resp.send("Welcome to Node.js Express")
})
//create
app.post('/create',(req,resp)=>{
    let emp=req.body
    let employees=getEmployees()

    let exist=employees.find((empx)=>{
        return emp.id==empx.id
    })
    if(exist){
        return resp.send("Employee data already exists")
    }
    else{
        employees.push(emp)
    }
    saveEmployees(employees)
    return resp.send(employees)

})
//delete
app.delete('/delete/:name',(req,resp)=>{
    let name=req.params.name
    let employees=getEmployees()
    let new_employees=employees.filter((emp)=>{return emp.name!=name})
    saveEmployees(new_employees)
    return resp.send(new_employees)
})
//read
app.get('/read',(req,resp)=>{
    let data=getEmployees()
    resp.send(data)
})
//update
app.put("/update/:id",(req,resp)=>{
    let id = req.params.id 
    let emp = req.body
     console.log(id)
    let existingEmpl=getEmployees()
    let flag =existingEmpl.find((empl)=>{
        return empl.eid ==id
    })
    console.log(flag)
    if(!flag){
        return resp.send("Employee not exits")
    }
    let employees=existingEmpl.filter((empl)=>{
       return empl.eid !=eid
    })
    
    employees.push(emp)
    saveEmployees(employees)
}
)
let getEmployees=()=>{
    let data=fs.readFileSync('data.json','utf-8')
    return JSON.parse(data)
}
let saveEmployees=(emp)=>{
    fs.writeFileSync('data.json',JSON.stringify(emp))
}


app.listen(port,host,((err)=>{ if(err) throw err
    console.log(`Server is Running on : http://${host}:${port}`)}
    
))