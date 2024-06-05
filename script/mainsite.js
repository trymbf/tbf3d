document.getElementById('programmerText').addEventListener('mouseover', function() {
    document.body.style.backgroundImage = 'url("path/to/your/image.jpg")';
});

document.getElementById('ggbGameDevText').addEventListener('mouseover', function() {
    document.body.style.background = 'url("path/to/your/video.mp4") no-repeat center center fixed';
    document.body.style.backgroundSize = 'cover';
});

document.getElementById('tinkererText').addEventListener('mouseover', function() {
    var video = document.getElementById('bgvideo');
    video.src = "../assets/video/MCPLaunch1Clip.mp4";
    video.play();
    video.style.display = 'block';
});

document.getElementById('tinkererText').addEventListener('mouseout', function() {
    var video = document.getElementById('bgvideo');
    video.pause();
    video.style.display = 'none';
});
