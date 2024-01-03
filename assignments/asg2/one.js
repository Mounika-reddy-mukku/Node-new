const fs=require('fs')

fs.readFile('emp.json','utf-8',(err,data)=>{
    if(err) throw err
    let emp_data=JSON.parse(data)
    let female_Emp = []
    let male_Emp = []
    let others=[]
    
    for(emp of emp_data){
        if(emp.gender =="Male"){
                male_Emp.push(emp)

        }
        else if(emp.gender == "Female"){
            female_Emp.push(emp)
        }
        else{
            others.push(emp)
        }
        
    }
    fs.writeFile('female.json',JSON.stringify(female_Emp),(err)=>{ if(err) throw err})
    fs.writeFile('male.json',JSON.stringify(male_Emp),(err)=>{ if(err) throw err})
    fs.writeFile('others.json',JSON.stringify(others),(err)=>{ if(err) throw err})
    
   /*  for(emp of emp_data){
        if(emp.gender=="Female"){
            fs.writeFile('female.json',JSON.stringify(emp),(err)=>{ if(err) throw err})
        }
        else if(emp.gender=="Male"){
            fs.writeFile('male.json',JSON.stringify(emp),(err)=>{ if(err) throw err})
        }
        else{
            fs.writeFile('others.json',JSON.stringify(emp),(err)=>{ if(err) throw err})
        }
    } */
});