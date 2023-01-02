const posts=[
    {title : 'Post 1' , body : 'This is post 1'},
    {title : 'Post 2' , body : 'This is post 2'}
]
const user={
    username : "Rohit",
    lastActivity: new Date()
}

function updateUserActivity(){
   return new Promise((resolve,reject)=>{
    setTimeout(()=>{
        user.lastActivity=new Date()
        
    resolve()
    },1000)
    
   })
    
}
function getPosts(){
    
    setTimeout(()=>{
        let output='';
         posts.forEach((element) => {

           output+=`<li>${element.title} </li>`;
         });
         document.body.innerHTML=output;
    },1000)
}

function createPost(post){
    return new Promise((resolve,reject) => {
        setTimeout(()=>{
            updateUserActivity().then(console.log(user.lastActivity))
            posts.push(post);
            
            const error=false;

            if(!error)
            {
                resolve();
            }
            else
            {
                reject('Error : something went wrong')
            }
            
          },2000)
    })
   

}
function deletePost()
{
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
           
            updateUserActivity().then(console.log(user.lastActivity))
           const error=posts.length
           if(error>0)
            {
                
                resolve(posts.pop());
            }
            else
            {
                reject('Error : array is empty')
            }
        },5000)
    })
}


createPost({title : 'Post 3' , body : 'This is post 3'}).then(getPosts).catch(err=>console.log(err))
deletePost().then(getPosts).catch(err=>console.log(err))
deletePost().then(getPosts).catch(err=>console.log(err))
deletePost().then(getPosts).catch(err=>console.log(err))
deletePost().then(getPosts).catch(err=>console.log(err))

    setTimeout(()=>{
        createPost({title : 'Post 4' , body : 'This is post 4'}).then(getPosts).then(deletePost).then(getPosts)
.catch(err=>console.log(err))
    },1000)




const promise1=Promise.resolve("Hello")
const promise2=10;
const promise3=new Promise((resolve,reject)=>setTimeout(resolve,2000,"Goodbye"))

Promise.all([promise1,promise2,promise3]).then(values=>console.log(values))





