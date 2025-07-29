// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Navbar scroll behavior
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('navbar-scrolled');
    } else {
        navbar.classList.remove('navbar-scrolled');
    }
});

// Initialize tooltips
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
});

// Counter animation for statistics
function animateCounter(element, target, duration) {
    let start = 0;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
        start += increment;
        element.textContent = Math.floor(start);
        if (start >= target) {
            element.textContent = target;
            clearInterval(timer);
        }
    }, 16);
}

// Load more news function
function loadMoreNews() {
    // Add AJAX call to load more news
    console.log('Loading more news...');
}

// Form validation
function validateForm(formId) {
    const form = document.getElementById(formId);
    if (!form) return;

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Add your form validation logic here
        let isValid = true;
        
        // Example validation
        const requiredFields = form.querySelectorAll('[required]');
        requiredFields.forEach(field => {
            if (!field.value) {
                isValid = false;
                field.classList.add('is-invalid');
            } else {
                field.classList.remove('is-invalid');
            }
        });

        if (isValid) {
            // Submit form
            console.log('Form is valid, submitting...');
            // Add your form submission logic here
        }
    });
}

// Initialize all forms with validation
document.addEventListener('DOMContentLoaded', function() {
    validateForm('contactForm');
    // Add more forms as needed
});

// Function to format date and time
function formatDateTime(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');
    
    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
}

// Function to update date and time
function updateDateTime() {
    try {
        const now = new Date();
        const formattedDateTime = formatDateTime(now);
        
        // Update the element that displays date and time
        const dateTimeElement = document.getElementById('current-datetime');
        if (dateTimeElement) {
            dateTimeElement.textContent = formattedDateTime;
        }
    } catch (error) {
        console.error('Error updating date and time:', error);
    }
}

// Update time every second
setInterval(updateDateTime, 1000);

// Initial update
updateDateTime();

// Rest of your existing JavaScript code
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Navbar scroll behavior
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('navbar-scrolled');
    } else {
        navbar.classList.remove('navbar-scrolled');
    }
});

// Initialize tooltips
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
});

document.addEventListener('DOMContentLoaded', function() {
    const potensiButtons = document.querySelectorAll('.potensi-btn');
    
    potensiButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            potensiButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            // Get category from data attribute
            const category = this.getAttribute('data-category');
            
            // Hide all images and descriptions
            document.querySelectorAll('.potensi-images').forEach(el => el.classList.add('d-none'));
            document.querySelectorAll('.potensi-desc').forEach(el => el.classList.add('d-none'));
            
            // Show selected category
            document.getElementById(`${category}-images`).classList.remove('d-none');
            document.getElementById(`${category}-desc`).classList.remove('d-none');
        });
    });
});
