document.addEventListener('DOMContentLoaded', function() {
    const playBox = document.getElementById('play-box');
    const progressBar = document.getElementById('progress-bar');
    const shareBtn = document.getElementById('share-btn');
    const fullscreenBtn = document.getElementById('fullscreen-btn');
    const iframe = document.querySelector('.iframe-container iframe');
    const progressBox = document.getElementById('progress-box');

    // Play button functionality
    playBox.addEventListener('click', () => {
        playBox.style.display = 'none';
        progressBox.style.display = 'block';
        progressBar.style.width = '0%';

        const stages = ['Generating Water', 'Generating Beaches', 'Generating Land', 'Generating Trees', 'Generating Clouds', 'Activating Player Controls'];

        stages.forEach((stage, index) => {
            setTimeout(() => {
                progressBar.style.width = `${(index + 1) * (100 / stages.length)}%`;
                console.log(stage); // Display each stage in the console
            }, (index * 3000) + 1000); // Each stage takes 3 seconds, with a 1 second gap
        });

        // Load the game after the loading sequence
        setTimeout(() => {
            iframe.src = '/v1.00.0/index.html'; // Replace iframe source to start loading the game
            progressBox.style.display = 'none'; // Hide progress bar after loading
        }, stages.length * 3000 + 1000); // Wait for the loading sequence to finish
    });

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
