const fs=require('fs')
const http=require('http')
const path=require('path')
const dotenv=require('dotenv')

dotenv.config({path:'config.env'})
let port=process.env.PORT
let host=process.env.HOST
let server=http.createServer((req,resp)=>{
    if(req.url==='/index'){
        fs.readFile("views/index.html",'utf-8',(err,data)=>{
            if(err) throw err
            resp.end(data)
        })
    }
    if(req.url==='/about'){
        fs.readFile(path.join(__dirname,"views","about.html"),'utf-8',(err,data)=>{
            if(err) throw err
            resp.end(data)
        })
    }
})
server.listen(port,host,(err)=>{ if(err) throw err})