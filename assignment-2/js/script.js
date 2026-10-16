// Select the toggle button
const themeToggleBtn = document.getElementById('theme-toggle');

// Add a click event listener
themeToggleBtn.addEventListener('click', () => {
    // Toggle a 'dark mode' class on the body element
    document.body.classList.toggle('dark-mode');
});
