const hambugerContainer = document.querySelector("#headerMainNav");
const hambuger = document.querySelector(".headerMainNav--Hambuger");
const links = document.querySelectorAll(".headerMainNav--Links li");

hambuger.addEventListener("click", function() {
    hambugerContainer.classList.toggle("clicked");
    links.forEach(function (link) {
            link.classList.toggle("fade");
        });
});