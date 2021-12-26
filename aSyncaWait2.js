// console.log('person1: shows Tickets')
// console.log('person2: shows Tickets')

// const bringTickets = new Promise ((resolve,reject) => {
//     setTimeout(()=>{
//         resolve('ticket')
//     }, 3000);
// });

// const getPopcorn = bringTickets.then((ticket) => {
//     console.log('person3: shows Tickets')
//     console.log("I am hungry");
//     return new Promise ((resolve,reject) => resolve('tickets popcorn'))
// });

// getPopcorn.then((ticket) => {
//     console.log(ticket)
// })

// console.log('person4: shows Tickets')
// console.log('person5: shows Tickets')

console.log('person1: shows Tickets')
console.log('person2: shows Tickets')

const preMovie = async() => {
    const bringTickets = new Promise((resolve,reject) =>{
        setTimeout(()=>{
            resolve('ticket')
        },3000)
    })

let ticket = await bringTickets;
console.log("waiting")
return ticket;
}

preMovie().then((m)=>console.log(m));

console.log('person4: shows Tickets')
console.log('person5: shows Tickets')