let arr=[2,3,4,5,6];

let arr1=[7,8,9,10,11];

let arr2=[...arr, ...arr1];//... is spread operator-- the array will merge with spread operator

// let arr1=arr;

// let arr2=arr.slice(0);

arr1.push("Hello");

let arr3=arr.concat(arr1);

console.log(arr);

// console.log(arr1);

console.log(arr2);
console.log(arr3);



