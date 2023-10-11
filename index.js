const bigSCreenShareIcon = document.querySelector(".share-icon-container");
let animateSmallScreenShareIcon = document.querySelector(".animate-share-icon");
let smallScreenShareIcon =document.querySelector(".share-icon-container-sm");
let slideAnimation = document.querySelector(".share-animation");
let popUpAnimation = document.querySelector(".social-media-icons-container");
let iconColor = document.querySelector(".icon path");
let Buttonclicked = false;
bigSCreenShareIcon.addEventListener("click", function() {
    bigScreenAnimation();
})
animateSmallScreenShareIcon.addEventListener("click", function(){
    slideAnimation.classList.add("remove-slide-animation");
    bigScreenAnimation();
})
smallScreenShareIcon.addEventListener("click", function(){
    slideAnimation.classList.remove("remove-slide-animation");
    slideAnimation.classList.add("show-slide-animation");

})
function bigScreenAnimation() {
    if (Buttonclicked !==true) {
        popUpAnimation.classList.remove("remove-pop-up");
        popUpAnimation.classList.add("show-pop-up");
        bigSCreenShareIcon.style.backgroundColor = " hsl(217, 19%, 35%)";
        iconColor.style.fill="white";
        Buttonclicked = true;
    }
    else{
        document.querySelector(".social-media-icons-container").classList.add("remove-pop-up");
        iconColor.style.fill=" hsl(214, 17%, 51%)";
        bigSCreenShareIcon.style.backgroundColor = "  hsl(210, 46%, 95%)";
        Buttonclicked = false;
    }
}

