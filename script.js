const navbarHamburger = document.getElementById("navbar-hamburger");
const sidebarContainer = document.getElementsByClassName("sidebar-container")[0];
const sidebarCloseBtn = document.getElementsByClassName("sidebar-close-btn")[0];

// Show the sidebar when hamburger is clicked
navbarHamburger.addEventListener("click", function () {
    sidebarContainer.classList.add("show"); // Show sidebar with animation
});

// Hide the sidebar when close button is clicked
sidebarCloseBtn.addEventListener("click", function () {
    sidebarContainer.classList.remove("show"); // Hide sidebar with animation
});
