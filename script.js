
// Accurate scroll for nav links

let links = document.querySelectorAll(".link");
let nav = document.querySelector("#nav");
let linksContainer = document.querySelector("#linksContainer");

links.forEach(function(link) {
    link.addEventListener("click", function(e) {
        e.preventDefault();
        const id = e.currentTarget.getAttribute("href").slice(1);
        const element = document.getElementById(id);
        let navHeight = nav.getBoundingClientRect().height;
        const containerHeight = linksContainer.getBoundingClientRect().height;
        let position = element.offsetTop - navHeight;
        if (id == "home") {
            position = 0;
        }
        window.scrollTo({
            left: 0,
            top: position,
        })
        linksContainer.style.height = 0;
    })
})
