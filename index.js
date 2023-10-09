const bigSCreenShareIcon = document.querySelector(".share-icon-container");
let animateSmallScreenShareIcon = document.querySelector(".animate-share-icon");
let smallScreenShareIcon =document.querySelector(".share-icon-container-sm");
let Buttonclicked = false;
bigSCreenShareIcon.addEventListener("click", function() {
    bigScreenAnimation();
})
animateSmallScreenShareIcon.addEventListener("click", function(){
    document.querySelector(".share-animation").classList.add("remove-slide-animation");
    bigScreenAnimation();
})
smallScreenShareIcon.addEventListener("click", function(){
    // bigScreenAnimation();
    document.querySelector(".share-animation").classList.remove("remove-slide-animation");
    document.querySelector(".share-animation").classList.add("show-slide-animation");

})
function bigScreenAnimation() {
    if (Buttonclicked !==true) {
        document.querySelector(".social-media-icons-container").classList.remove("remove-pop-up");
        document.querySelector(".social-media-icons-container").classList.add("show-pop-up");
        bigSCreenShareIcon.style.backgroundColor = " hsl(217, 19%, 35%)";
        document.querySelector(".icon path").style.fill="white";
        Buttonclicked = true;
    }
    else{
        document.querySelector(".social-media-icons-container").classList.add("remove-pop-up");
        document.querySelector(".icon path").style.fill=" hsl(214, 17%, 51%)";
        bigSCreenShareIcon.style.backgroundColor = "  hsl(210, 46%, 95%)";
        Buttonclicked = false;
    }
}

function smallScreenAnimation() {
    
}
