const bg = [
    "./img/bg/1.jpg",
    "./img/bg/2.jpg",
    "./img/bg/3.jpg"
];

window.onload = function() {
    let bgElement = document.getElementById('bg');
    let previousButton = document.getElementById('previous');
    let nextButton = document.getElementById('next');
    let dots = document.querySelectorAll('.dots');
    
    let counter = 0;
    let interval;

    function updateBackground(oldCounter) {
        bgElement.classList.add('fade-out');
        setTimeout(() => {
            // Update dot states
            if (oldCounter !== undefined) {
                document.getElementById(oldCounter.toString()).classList.remove("current");
            }
            document.getElementById(counter.toString()).classList.add("current");
            
            // Update background
            bgElement.style.backgroundImage = `url('${bg[counter]}')`;
            bgElement.classList.remove('fade-out');
        }, 300);
    }

    function resetInterval() {
        clearInterval(interval);
        interval = setInterval(() => {
            const oldCounter = counter;
            counter = (counter + 1) % bg.length;
            updateBackground(oldCounter);
        }, 5000);
    }

    // Initialize
    document.getElementById(counter).classList.add("current");
    bgElement.style.backgroundImage = `url('${bg[counter]}')`;
    resetInterval();

    // Navigation buttons
    previousButton.addEventListener('click', () => {
        const oldCounter = counter;
        counter = (counter - 1 + bg.length) % bg.length;
        updateBackground(oldCounter);
        resetInterval();
    });

    nextButton.addEventListener('click', () => {
        const oldCounter = counter;
        counter = (counter + 1) % bg.length;
        updateBackground(oldCounter);
        resetInterval();
    });

    // Dot click handlers
    dots.forEach(dot => {
        dot.addEventListener('click', function() {
            const newIndex = parseInt(this.id);
            if (newIndex === counter) return;
            
            const oldCounter = counter;
            counter = newIndex;
            updateBackground(oldCounter);
            resetInterval();
        });
    });
};