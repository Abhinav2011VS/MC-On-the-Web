// main-script.js

document.addEventListener('DOMContentLoaded', function() {
    const shareBtn = document.getElementById('share-btn');
    const fullscreenBtn = document.getElementById('fullscreen-btn');
    const iframe = document.querySelector('.iframe-container iframe');

    // Share button functionality
    shareBtn.addEventListener('click', () => {
        const url = 'https://mc-otw.pages.dev/play/v1.00.0/';
        navigator.clipboard.writeText(url)
            .then(() => {
                alert('Link has been copied for sharing');
            })
            .catch(error => console.error('Error copying to clipboard:', error));
    });

    // Fullscreen button functionality
    fullscreenBtn.addEventListener('click', () => {
        if (iframe.requestFullscreen) {
            iframe.requestFullscreen();
        } else if (iframe.mozRequestFullScreen) { /* Firefox */
            iframe.mozRequestFullScreen();
        } else if (iframe.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
            iframe.webkitRequestFullscreen();
        } else if (iframe.msRequestFullscreen) { /* IE/Edge */
            iframe.msRequestFullscreen();
        }
    });
});
