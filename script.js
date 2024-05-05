
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

// Responsive smooth scroll

// scrollLinks.forEach(function(l){
//     l.addEventListener("click", function(e){
//         // prevent default
//         e.preventDefault();
//         // navigate to specific spot
//         const id = e.currentTarget.getAttribute("href").slice(1);
//         const element = document.getElementById(id);
//         // calculate the heights
//         const navHeight = navbar.getBoundingClientRect().height;
//         const containerHeight = linksContainer.getBoundingClientRect().height;
//         const fixedNav = navbar.classList.contains("fixed-nav");
//         let position = element.offsetTop - navHeight;

//         if (!fixedNav) {
//             position = position - navHeight;
//         }
//         if (navHeight > 82) {
//             position = position + containerHeight;
//         }

//         window.scrollTo({
//             left: 0, top: position
//         })
//         linksContainer.style.height = 0;
//     })
// })