const fs =require('fs');

//Create
// fs.writeFile("employees.json", '{"name": "Employee 1 Name", "salary": 2000}','utf-8',(err)=>{

//     if(err){
//         console.log(err)
//     }
// })

//Read
// fs.readFile('./employees.json','utf-8',(err,data)=>{

//     if(err) console.log(err);

//     console.log(data)

// })


//Update
// fs.writeFile("employees.json",'{"name":"Employer 9 Name","Salary":5000}','utf-8',(err)=>{

//     if(err) console.log(err);
// })


//Delete
fs.unlink("employees.json",(err)=>{

    if(err) console.log(err);
    console.log("file deleted")
})