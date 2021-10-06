const posts=[
    {title:"Post1",author:"user1"},
    {title:"Post2",author:"user2"}
]


const getPosts=()=>{

    return posts.map(p=>{
        console.log(`başlık : ${p.title}, yazar : ${p.author}`)
    })
}


const post=(newPost)=>{

const promise = new Promise((resolve,reject)=>{
    posts.push(newPost)
    resolve(getPosts())
    reject("hata oluştu")
    

})
return promise;
}

const addPost =async (title,author)=>{

    try {
        await post({title,author})

    } catch (error) {
        console.log(error)
    }
}


addPost("first blog ","user9")