var shareIcon = document.querySelector(".share-icon-container");
shareIcon.addEventListener("click", function() {
    document.querySelector(".social-media-icons-container").classList.toggle("show-pop-up");
    shareIcon.style.backgroundColor = " hsl(217, 19%, 35%)";
})
