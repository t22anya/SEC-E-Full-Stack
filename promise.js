// Promise is a container/object for future values
// States => fulfilled , Pending ,Reject
// Fulfilled => value
//Pending  and Reject => Undefined
// Promise have creator and consumer
//It is similar to error handling

//Code:

 let p= new Promise((resolve,reject)=>{
     let a=20;
     let b=30;
    if(a+b>55){
         return resolve(a+b);
     }
     else{
         return reject("sum of a and b is less than 55");
     }
 })
 consumer
 p.then((res)=>{
     console.log(res)
 }).catch((err)=>{
     console.log(err)
 })

//2 code
  const sum = (a,b)=>{
     return new Promise((resolve,reject)=>{
         if(a + b>55){
             return resolve(a+b);
         }
         else{
             return reject("sum of a&b is less thn 55");
         }
     })
  }

//  //consumer
  sum(30,60).then((res)=>{
     console.log(res);
 }).catch((err)=>{
         console.log(err)
      }).finally(()=>{
         console.log("Execution done");
      })

//3 code
 const sum=(a,b)=>{
     return new Promise((resolve,reject)=>{
         if(a + b>55){
             return resolve(new Promise(()=>{
                 console.log(a+b);
             }));
         }
         else{
             return reject("sum of a&b is less thn 55");
         }
     })
  }

//  //consumer
  sum(50,3).then((res)=>{
     console.log(res);
 }).then(()=>{

 })
 .catch((err)=>{
         console.log(err)
      }).finally(()=>{
         console.log("Execution done");
      })


//fetch

fetch("https://jsonplaceholder.typicode.com/posts")
.then((res)=>{
    return res.json();
 }).then((data)=>{
    console.log(data) //if this again return promise then we use .then method
 }).catch((err)=>{
    console.log(err)
  })