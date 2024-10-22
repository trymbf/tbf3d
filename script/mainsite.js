let video1 = document.getElementById("video1");
let video2 = document.getElementById("video2");
let video3 = document.getElementById("video3");

let videosDiv = document.getElementById("bgvideosDiv")

function switchToVid(vidElement) {
    let videos = videosDiv.children
    for (let i = 0; i < videos.length; i++) {
        videos[i].style.display = "none";
    }
    console.log("Switching to video:", vidElement.id); 
    vidElement.style.display = "block";
}

let programmerText = document.getElementById("programmerText")
let thinkererText = document.getElementById("tinkererText")
let ggbGameDevText = document.getElementById("ggbGameDevText")

ggbGameDevText.addEventListener("mouseover", function (){
    switchToVid(video2);
})

thinkererText.addEventListener("mouseover", function (){
    switchToVid(video1);
})

programmerText.addEventListener("mouseover", function (){
    switchToVid(video3);
})