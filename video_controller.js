// const video = document.getElementById('background-video');
// const container = document.querySelector('.container');

// let isDragging = false;

// container.addEventListener('mousedown', () => {
//     isDragging = true;
//     video.pause();
// });

// document.addEventListener('mouseup', () => {
//     if (isDragging) {
//         isDragging = false;
//         video.play();
//     }
// });

// container.addEventListener('mousemove', (e) => {
//     if (isDragging) {
//         const xPos = e.clientX;
//         const containerWidth = container.offsetWidth;
//         const videoDuration = video.duration;
//         const videoPosition = (xPos / containerWidth) * videoDuration;

//         video.currentTime = videoPosition;
//     }
// });