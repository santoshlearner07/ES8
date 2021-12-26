
// Object Vaalues

const data = {
    name : "Santosh",
    age : '22',
    favBook : "Revolution 2020" 
}

console.log(Object.values(data))
console.log("My name is -> " + Object.values(data.name))
console.log(Object.values(data.favBook))
console.log(Object.values(data.age))
Object.values(data);

// Object Entries 

Object.entries(data);
console.log("Object Entries -> " + Object.entries(data));