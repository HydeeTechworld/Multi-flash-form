document.getElementById("btn1").addEventListener("click",()=>{
let openBtn1=document.querySelector(".openBtn1");
if(openBtn1){
let c=confirm("Click Cancel to cancel or Ok to view the login box.")
if(c){
openBtn1.style.display="block";
}else{
openBtn1.style.display="none";
}
}
})
document.getElementById("btn2").addEventListener("click",()=>{
let openBtn2=document.querySelector(".openBtn2");
if(openBtn2){
let c=confirm("Click Cancel to cancel or Ok to view the register box.")
if(c){
openBtn2.style.display="block"
}else{
openBtn2.style.display="none"
}
}
})
document.getElementById("btn4").addEventListener("click",()=>{
let openBtn1=document.querySelector(".openBtn1");
if(openBtn1){
openBtn1.style.display="none"
}
})
document.getElementById("btn6").addEventListener("click",()=>{
let openBtn2=document.querySelector(".openBtn2");
if(openBtn2){
openBtn2.style.display="none"
}
})