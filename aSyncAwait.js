// Async and Await 

function func(){
    return new Promise ((resolve,reject) =>{
        setTimeout(()=>{
            resolve ('Response in 2 sec ')
        }, 2000);
    });
}

// func().then(resp => {
//     console.log(resp)
// })
// console.log("End")

async function asyncFunc(){
    console.log("Inside my Async Func")
    const Response = await func();
    console.log(Response)
}

asyncFunc();
console.log("End is here")

