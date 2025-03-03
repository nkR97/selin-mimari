const bg = [
    "./bg/1.jpg",
    "./bg/2.jpg",
    "./bg/3.jpg"
];

window.onload = function() {
    let bgElement = document.getElementById('bg');
    let previousButton = document.getElementById('previous');
    let nextButton = document.getElementById('next');
    
    let counter = 0;
    let interval;

    function updateBackground() {
        bgElement.classList.add('fade-out'); // Start fade-out effect
        setTimeout(() => {
            bgElement.style.backgroundImage = `url('${bg[counter]}')`; // Change the background image
            bgElement.classList.remove('fade-out'); // Remove fade-out effect to start fade-in
        }, 300); // Shorter delay to match the 300ms opacity transition (from CSS)
    }

    function resetInterval() {
        clearInterval(interval);
        interval = setInterval(function() {
            counter = (counter + 1) % bg.length;
            updateBackground();
        }, 5000); // Interval to change background every 5 seconds
    }

    updateBackground();
    resetInterval();

    previousButton.addEventListener('click', function() {
        counter = (counter - 1 + bg.length) % bg.length; // Decrement counter and loop back
        updateBackground();
        resetInterval(); // Reset the interval to maintain the 5-second timing
    });

    nextButton.addEventListener('click', function() {
        counter = (counter + 1) % bg.length; // Increment counter and loop back
        updateBackground();
        resetInterval(); // Reset the interval to maintain the 5-second timing
    });
};