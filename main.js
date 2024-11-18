const imageUrls = [
    "https://cmlwebcam.transurban.com/wimages/webcam01.jpg",
    "https://cmlwebcam.transurban.com/wimages/webcam02.jpg",
    "https://cmlwebcam.transurban.com/wimages/webcam03.jpg",
    "https://cmlwebcam.transurban.com/wimages/webcam04.jpg",
    "https://cmlwebcam.transurban.com/wimages/webcam05.jpg",
    "https://cmlwebcam.transurban.com/wimages/webcam06.jpg",
    "https://cmlwebcam.transurban.com/wimages/webcam07.jpg",
    "https://cmlwebcam.transurban.com/wimages/webcam08.jpg",
    "https://cmlwebcam.transurban.com/wimages/webcam09.jpg",
    "https://cmlwebcam.transurban.com/wimages/webcam10.jpg",
    "https://cmlwebcam.transurban.com/wimages/webcam11.jpg",
    "https://cmlwebcam.transurban.com/wimages/webcam12.jpg",
    "https://cmlwebcam.transurban.com/wimages/webcam13.jpg",
    "https://cmlwebcam.transurban.com/wimages/webcam14.jpg",
];

function updateImages() {
    imageUrls.forEach((url, index) => {
        const imgElement = document.getElementById(`webcam${index + 1}`);
        imgElement.src = `${url}?t=${Date.now()}`;
    });
}

setInterval(updateImages, 200);

// Assigning onclick events to each webcam div
document.getElementById('webcam1').onclick = function() {
    window.location.href = 'cam.html?link=https://cmlwebcam.transurban.com/wimages/webcam01.jpg';  // Webcam 1 URL
};

document.getElementById('webcam2').onclick = function() {
    window.location.href = 'cam.html?link=https://cmlwebcam.transurban.com/wimages/webcam02.jpg';  // Webcam 2 URL
};

document.getElementById('webcam3').onclick = function() {
    window.location.href = 'cam.html?link=https://cmlwebcam.transurban.com/wimages/webcam03.jpg';  // Webcam 3 URL
};

document.getElementById('webcam4').onclick = function() {
    window.location.href = 'cam.html?link=https://cmlwebcam.transurban.com/wimages/webcam04.jpg';  // Webcam 4 URL
};

document.getElementById('webcam5').onclick = function() {
    window.location.href = 'cam.html?link=https://cmlwebcam.transurban.com/wimages/webcam05.jpg';  // Webcam 5 URL
};

document.getElementById('webcam6').onclick = function() {
    window.location.href = 'cam.html?link=https://cmlwebcam.transurban.com/wimages/webcam06.jpg';  // Webcam 6 URL
};

document.getElementById('webcam7').onclick = function() {
    window.location.href = 'cam.html?link=https://cmlwebcam.transurban.com/wimages/webcam07.jpg';  // Webcam 7 URL
};

document.getElementById('webcam8').onclick = function() {
    window.location.href = 'cam.html?link=https://cmlwebcam.transurban.com/wimages/webcam08.jpg';  // Webcam 8 URL
};

document.getElementById('webcam9').onclick = function() {
    window.location.href = 'cam.html?link=https://cmlwebcam.transurban.com/wimages/webcam09.jpg';  // Webcam 9 URL
};

document.getElementById('webcam10').onclick = function() {
    window.location.href = 'cam.html?link=https://cmlwebcam.transurban.com/wimages/webcam10.jpg';  // Webcam 10 URL
};

document.getElementById('webcam11').onclick = function() {
    window.location.href = 'cam.html?link=https://cmlwebcam.transurban.com/wimages/webcam11.jpg';  // Webcam 11 URL
};

document.getElementById('webcam12').onclick = function() {
    window.location.href = 'cam.html?link=https://cmlwebcam.transurban.com/wimages/webcam12.jpg';  // Webcam 12 URL
};

document.getElementById('webcam13').onclick = function() {
    window.location.href = 'cam.html?link=https://cmlwebcam.transurban.com/wimages/webcam13.jpg';  // Webcam 13 URL
};

document.getElementById('webcam14').onclick = function() {
    window.location.href = 'cam.html?link=https://cmlwebcam.transurban.com/wimages/webcam14.jpg';  // Webcam 14 URL
};
