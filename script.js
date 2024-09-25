// Get elements
const warningPopup = document.getElementById('warning-popup');
const acceptButton = document.getElementById('accept-button');
const declineButton = document.getElementById('decline-button');
const portalNavigation = document.getElementById('portal-navigation');
const portalButtons = portalNavigation.children;
const portalContent = document.getElementById('portal-content');
const portals = portalContent.children;

// Show warning popup on page load
window.onload = () => {
    warningPopup.style.display = 'flex';
};

// Accept button click event
acceptButton.addEventListener('click', () => {
    warningPopup.style.display = 'none';
});

// Decline button click event
declineButton.addEventListener('click', () => {
    window.location.href = 'https://www.google.com'; // Redirect to a safe website
});

// Portal navigation click event
portalButtons.forEach((button) => {
    button.addEventListener('click', () => {
        // Remove active class from all portal buttons
        portalButtons.forEach((btn) => {
            btn.classList.remove('active');
        });

        // Add active class to the clicked portal button
        button.classList.add('active');

        // Hide all portals
        portals.forEach((portal) => {
            portal.classList.remove('active');
        });

        // Show the clicked portal
        const portalId = button.id.replace('-button', '');
        const portalElement = document.getElementById(portalId);
        portalElement.classList.add('active');
    });
});