
// Smooth scroll

let links = document.querySelectorAll(".link");
let navbar = document.querySelector("#nav");

links.forEach(function(l){
    l.addEventListener("click", function(e){
        e.preventDefault();
        const id = e.currentTarget.getAttribute("href").slice(1);
        const element = document.getElementById(id);
        const navHeight = navbar.getBoundingClientRect().height;
        let position = element.offsetTop - 150;
        
        window.scrollTo({
            left: 0, top: position
        })
    })
    
})
