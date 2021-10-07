const koa = require("koa")


const app =new koa();


app.use( async (ctx)=>{

    ctx.body="Hello from Koa"
})

const port =3000;
app.listen(port,()=>{
    console.log("Server Started")
})