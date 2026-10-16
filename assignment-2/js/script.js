// ==========================================
ؤ// 1. DYNAMIC CONTENT & LOCALSTORAGE (Theme Toggle)
// ==========================================
const themeToggleBtn = document.getElementById('theme-toggle');

// Check for saved user preference in localStorage on page load
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
    document.body.classList.add('dark-mode');
    themeToggleBtn.textContent = '☀️ Light Mode';
} else {
    themeToggleBtn.textContent = '🌙 Dark Mode';
}

// Toggle theme and save preference to localStorage
themeToggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    
    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
        themeToggleBtn.textContent = '☀️ Light Mode';
    } else {
        localStorage.setItem('theme', 'light');
        themeToggleBtn.textContent = '🌙 Dark Mode';
    }
});


// ==========================================
// 2. FORM VALIDATION & USER FEEDBACK (Data Handling)
// ==========================================
const contactForm = document.querySelector('.contact-form');

if (contactForm) {
    // Create a container for feedback messages dynamically
    const feedbackMsg = document.createElement('div');
    feedbackMsg.style.marginTop = '15px';
    feedbackMsg.style.fontWeight = '600';
    contactForm.appendChild(feedbackMsg);

    contactForm.addEventListener('submit', (e) => {
        e.preventDefault(); // Prevent default submission to handle via JS

        const nameInput = document.getElementById('name').value.trim();
        const emailInput = document.getElementById('email').value.trim();
        const messageInput = document.getElementById('message').value.trim();

        // Simple validation check
        if (!nameInput || !emailInput || !messageInput) {
            feedbackMsg.style.color = '#e74c3c'; // Error red
            feedbackMsg.textContent = '❌ Error: Please fill in all required fields before submitting.';
            return;
        }

        // Email basic format check
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+rit$/; // Just checking standard format
        if (!emailInput.includes('@') || !emailInput.includes('.')) {
            feedbackMsg.style.color = '#e74c3c';
            feedbackMsg.textContent = '❌ Error: Please enter a valid email address containing "@" and ".".';
            return;
        }

        // Success Feedback
        feedbackMsg.style.color = '#27ae60'; // Success green
        feedbackMsg.textContent = '✅ Success! Thank you for your message, ' + nameInput + '.';
        
        // Clear form inputs after successful submission
        contactForm.reset();

        // Remove success message after 5 seconds
        setTimeout(() => {
            feedbackMsg.textContent = '';
        }, 5000);
    });
}


// ==========================================
// 3. ANIMATIONS & TRANSITIONS (Fade-in effect on scroll/load)
// ==========================================
window.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section');
    sections.forEach((section, index) => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        
        setTimeout(() => {
            section.style.opacity = '1';
            section.style.transform = 'translateY(0)';
        }, 150 * (index + 1));
    });
});
