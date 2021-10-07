const http = require('http')

const server = http.createServer((req,res)=>{
const url = req.url;

    if (url==='/') {
        res.writeHead(200,{"Context-Type":"text/html"});
        res.write("Index Page")
    }
    else if(url==='about'){
        res.writeHead(200,{"Context-Type":"text/html"});
        res.write("About Page")
    }
    else if(url ==='contact'){
        res.writeHead(200,{"Context-Type":"text/html"});
        res.write("Contact Page")

    }
    else{
        res.writeHead(404,{"Context-Type":"text/html"});
        res.write("Page Not Found")
    }

    res.end()
})


const port = 3000;

server.listen(port,()=>{

console.log(`server çalışıyor ${port}...`)
})