// let button=document.querySelector('.btn');
// console.log(button);

// let para=document.querySelector('.text')
// para.innerText ="Hello world";
// console.log(para);

// let para=document.querySelector('.text')
// para.innerText="<h1>Good morning</h1>"
// console.log(para);

// let para=document.querySelector('.text')
// para.innerHTML="<h1>Good morning</h1>"
// para.classList.add("para4");

// // para.style.color="red"
// para.style.border="2px solid green"
// para.style.backgroundColor="grey"

// console.log(para);

let button=document.getElementById("btn")
let para=document.querySelector('.text')
button.addEventListener("click",()=>{
    para.innerHTML="<h1>Good morning</h1>"
    para.classList.add("para4");
    
    // para.style.color="red"
    para.style.border="2px solid green"
    para.style.backgroundColor="grey"
})
