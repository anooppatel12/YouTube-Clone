var menuIcon = document.querySelector(".menu-icon");
var sidebar = document.querySelector(".sidebar");
var container = document.querySelector(".container")
var btn = document.querySelector("button");


var bt = 0

btn.addEventListener("click",function(){
   if(bt == 0){
      btn.innerHTML = "Subscribed"
      btn.style.backgroundColor = "transparent"
      btn.style.color = "Black"
      bt = 1
   }
   else{
      btn.style.backgroundColor = "red"
      btn.innerHTML = "Subscribe"
      bt = 0
   }
})

menuIcon.onclick = function(){
   sidebar.classList.toggle("small-sidebar");
   container.classList.toggle("large-container")
}

