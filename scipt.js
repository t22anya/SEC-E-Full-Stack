//OBJECT: Collection of key value pair

let obj={}

let person={
    fullname:"Tanya",
    age:24, 
    salary: 5769,
    id:233,
    projectdetails:{
        projectId:2928,
        projectTitile:"Code js"
    }
}
// console.log(person.age);//access for paticular variable:- .  and []

console.log(person.projectdetails.projectTitile);
console.log(person["age"]);

for(let key in person){
    console.log(person[key]);
}