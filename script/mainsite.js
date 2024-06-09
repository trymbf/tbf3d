document.getElementById('programmerText').addEventListener('mouseover', function() {
    var video = document.getElementById('bgvideo');
    video.src = "../assets/video/anydino.webm";
    video.style.display = 'block';
});

// Do the same for 'ggbGameDevText' and 'tinkererText'

document.getElementById('programmerText').addEventListener('mouseout', function() {
    var video = document.getElementById('bgvideo');
    video.pause();
    video.classList.add('fade-out');

    setTimeout(function() {
        video.style.display = 'none';
        video.classList.remove('fade-out');
    }, 500); // match this with the transition duration in your CSS
});


document.getElementById('ggbGameDevText').addEventListener('mouseover', function() {
    var video = document.getElementById('bgvideo');
    video.src = "../assets/video/ggbdash.mp4";
    video.play();
    video.style.display = 'block';
});

document.getElementById('ggbGameDevText').addEventListener('mouseout', function() {
    var video = document.getElementById('bgvideo');
    video.pause();
    video.classList.add('fade-out');

    setTimeout(function() {
        video.style.display = 'none';
        video.classList.remove('fade-out');
    }, 500); // match this with the transition duration in your CSS

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
    video.classList.add('fade-out');

    setTimeout(function() {
        video.style.display = 'none';
        video.classList.remove('fade-out');
    }, 500); // match this with the transition duration in your CSS
});