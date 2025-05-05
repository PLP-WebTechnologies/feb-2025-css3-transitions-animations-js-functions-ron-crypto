document.addEventListener('DOMContentLoaded', () => {
    const backgroundColorInput = document.getElementById('backgroundColor');
    const animatedImage = document.getElementById('animatedImage');
    const triggerAnimationButton = document.getElementById('triggerAnimation');

    // Function to store user's preferred background color in localStorage
    function storeBackgroundColor(color) {
        localStorage.setItem('preferredBackgroundColor', color);
        document.body.style.backgroundColor = color;
    }

    // Function to retrieve and apply the preferred background color from localStorage
    function getPreferredBackgroundColor() {
        const storedColor = localStorage.getItem('preferredBackgroundColor');
        if (storedColor) {
            document.body.style.backgroundColor = storedColor;
            backgroundColorInput.value = storedColor; // Update the color input
        }
    }

    // Event listener for the color input to store the preference
    backgroundColorInput.addEventListener('input', (event) => {
        storeBackgroundColor(event.target.value);
    });

    // Retrieve the preferred background color on page load
    getPreferredBackgroundColor();

    // Function to trigger the image animation
    function triggerImageAnimation() {
        animatedImage.classList.add('fade-in-move');

        // Remove the class after the animation finishes to allow re-triggering
        setTimeout(() => {
            animatedImage.classList.remove('fade-in-move');
        }, 1000); // Matches the animation duration (1s)
    }

    // Event listener to trigger the image animation on button click
    triggerAnimationButton.addEventListener('click', triggerImageAnimation);
});