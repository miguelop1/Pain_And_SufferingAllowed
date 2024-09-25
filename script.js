// Add event listeners to portal navigation buttons
document.querySelectorAll('#portal-navigation button').forEach(button => {
    button.addEventListener('click', () => {
        // Get the portal ID from the button
        const portalId = button.id.replace('-button', '');

        // Show the corresponding portal
        document.getElementById(portalId).classList.add('active');

        // Hide the other portals
        document.querySelectorAll('.portal').forEach(portal => {
            if (portal.id !== portalId) {
                portal.classList.remove('active');
            }
        });
    });
});

// Add event listener to accept button
document.getElementById('accept-button').addEventListener('click', () => {
    // Remove the popup and blur effect
    document.getElementById('warning-popup').classList.remove('active');
    document.body.classList.remove('blurry');
});

// Add event listener to decline button
document.getElementById('decline-button').addEventListener('click', () => {
    // Redirect to a different page or show an error message
    alert('You must be 18+ to access this content.');
});

// Add event listeners to image navigation buttons
document.querySelectorAll('.image-container button').forEach(button => {
    button.addEventListener('click', () => {
        // Get the image container and the current image
        const imageContainer = button.parentNode;
        const currentImage = imageContainer.querySelector('img.active');

        // Get the next or previous image
        let nextImage;
        if (button.id.includes('next')) {
            nextImage = currentImage.nextElementSibling;
        } else {
            nextImage = currentImage.previousElementSibling;
        }

        // Show the next or previous image
        currentImage.classList.remove('active');
        nextImage.classList.add('active');
    });
});