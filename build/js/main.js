const navList=document.querySelector(".nav-list"),navLinks=document.querySelectorAll(".nav-link"),burger=document.querySelector(".burger"),body=document.querySelector("body"),html=document.querySelector("html");function toggleMenu(){body.classList.toggle("block-scroll"),html.classList.toggle("block-scroll"),navList.classList.toggle("open"),navLinks.forEach((e,t)=>{e.style.transition=`transform ${.3*t+.3}s ease-out`,e.classList.toggle("show")})}burger.addEventListener("click",toggleMenu),navLinks.forEach(e=>e.addEventListener("click",toggleMenu));