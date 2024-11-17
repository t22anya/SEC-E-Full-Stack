let container3=document.getElementById('container3');
let container2=document.getElementById('container2');
let container1=document.getElementById('container1');
container1.addEventListener('click',(e)=>{
    alert('container1')
})
container2.addEventListener('click',(e)=>{
    alert('container2')
})

container3.addEventListener('click',(e)=>{
    alert('container3')
    // e.stopPropagation(); for stop the event listner bubbling behvaiour .
})