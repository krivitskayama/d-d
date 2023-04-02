const DragandDrop=()=>{
  const card=document.querySelector(".drag");
  const cont=document.querySelectorAll(".card-conteiner");
  const DragStart=function(){
    setTimeout(()=>this.classList.add("hide"),0);
  }
card.addEventListener("dragstart",DragStart);
const DragEnd=function(){
    this.classList.remove("hide");
  } 
card.addEventListener("dragend",DragEnd);
 const DragOver=function(evt){
//console.log(“over”);
    evt.preventDefault();
  } 
cont.forEach((cel)=>cel.addEventListener("dragover",DragOver))
 const DragEnter=function(){
   this.classList.add("hovered");
  } 
cont.forEach((cel)=>cel.addEventListener("dragenter",DragEnter))
const DragLeave=function(){
   this.classList.remove("hovered");
  } 
       const DragDrop=function(){
    this.append(card);
  }
  cont.forEach((cel)=>cel.addEventListener("dragover",DragOver))
  cont.forEach((cel)=>cel.addEventListener("dragenter",DragEnter))
  cont.forEach((cel)=>cel.addEventListener("dragleave",DragLeave))

cont.forEach((cel)=>cel.addEventListener("drop",DragDrop))

}
DragandDrop()
