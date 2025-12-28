// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Animate skill bars on scroll
const observerOptions = {
    threshold: 0.5,
    rootMargin: '0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const skillProgress = entry.target.querySelector('.skill-progress');
            if (skillProgress) {
                const width = skillProgress.style.width;
                skillProgress.style.width = '0%';
                setTimeout(() => {
                    skillProgress.style.width = width;
                }, 100);
            }
        }
    });
}, observerOptions);

document.querySelectorAll('.skill-item').forEach(item => {
    observer.observe(item);
});

// Initialize EmailJS (Replace with your Public Key after setup)
emailjs.init("YOUR_PUBLIC_KEY"); // You'll get this from EmailJS dashboard

// Form submission handler with EmailJS
const contactForm = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');
const submitBtn = document.getElementById('submitBtn');
const submitText = document.getElementById('submitText');
const submitLoader = document.getElementById('submitLoader');

// Function to save form data to localStorage
function saveFormSubmission(formData) {
    try {
        let submissions = JSON.parse(localStorage.getItem('contactSubmissions')) || [];
        submissions.push({
            ...formData,
            timestamp: new Date().toISOString()
        });
        // Keep only last 50 submissions
        if (submissions.length > 50) {
            submissions = submissions.slice(-50);
        }
        localStorage.setItem('contactSubmissions', JSON.stringify(submissions));
        console.log('Form submission saved to localStorage');
    } catch (error) {
        console.error('Error saving to localStorage:', error);
    }
}

// Function to get all submissions
function getFormSubmissions() {
    try {
        return JSON.parse(localStorage.getItem('contactSubmissions')) || [];
    } catch (error) {
        console.error('Error reading from localStorage:', error);
        return [];
    }
}

// Function to show message
function showMessage(message, type = 'success') {
    formMessage.textContent = message;
    formMessage.className = `form-message ${type}`;
    
    setTimeout(() => {
        formMessage.className = 'form-message form-message-hidden';
    }, 5000);
}

// Function to show loading state
function setLoading(isLoading) {
    if (isLoading) {
        submitBtn.disabled = true;
        submitText.style.display = 'none';
        submitLoader.classList.remove('submit-loader-hidden');
    } else {
        submitBtn.disabled = false;
        submitText.style.display = 'inline';
        submitLoader.classList.add('submit-loader-hidden');
    }
}

if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        // Get form values
        const formData = {
            name: document.getElementById('userName').value.trim(),
            email: document.getElementById('userEmail').value.trim(),
            message: document.getElementById('userMessage').value.trim()
        };
        
        // Validate
        if (!formData.name || !formData.email || !formData.message) {
            showMessage('Please fill all fields!', 'error');
            return;
        }
        
        setLoading(true);
        
        // Save to localStorage first (backup)
        saveFormSubmission(formData);
        
        // Try to send email via EmailJS
        try {
            // Replace these with your EmailJS Service ID, Template ID, and Public Key
            // Get these from: https://www.emailjs.com/
            const serviceID = 'YOUR_SERVICE_ID';
            const templateID = 'YOUR_TEMPLATE_ID';
            
            // If EmailJS is configured, send email
            if (serviceID !== 'YOUR_SERVICE_ID' && templateID !== 'YOUR_TEMPLATE_ID') {
                await emailjs.send(serviceID, templateID, {
                    from_name: formData.name,
                    from_email: formData.email,
                    message: formData.message,
                    to_email: 'gayatrijagadale7272@gmail.com'
                });
                
                showMessage('✅ Message sent successfully! I will get back to you soon.', 'success');
                contactForm.reset();
            } else {
                // Fallback: Use mailto if EmailJS not configured
                const mailtoLink = `mailto:gayatrijagadale7272@gmail.com?subject=Contact from ${encodeURIComponent(formData.name)}&body=${encodeURIComponent(formData.message + '\n\nFrom: ' + formData.email)}`;
                window.location.href = mailtoLink;
                showMessage('✅ Form submitted! Opening email client...', 'success');
                contactForm.reset();
            }
        } catch (error) {
            console.error('Error sending email:', error);
            // Even if email fails, data is saved in localStorage
            showMessage('⚠️ Form saved! But email might not have sent. Check console for details.', 'warning');
        } finally {
            setLoading(false);
        }
    });
}

// Function to display all submissions in console (for debugging)
// You can call this in browser console: displayAllSubmissions()
window.displayAllSubmissions = function() {
    const submissions = getFormSubmissions();
    console.table(submissions);
    return submissions;
};

// Function to export submissions as JSON
window.exportSubmissions = function() {
    const submissions = getFormSubmissions();
    const dataStr = JSON.stringify(submissions, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `contact_submissions_${new Date().toISOString().split('T')[0]}.json`;
    link.click();
    console.log('Submissions exported!');
};

// Navbar background on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
    }
});

// Check if profile photo exists and hide placeholder
const profilePhoto = document.getElementById('profile-photo');
if (profilePhoto) {
    // Hide placeholder if image is already loaded
    if (profilePhoto.complete && profilePhoto.naturalHeight !== 0) {
        const placeholder = document.getElementById('photo-placeholder');
        if (placeholder) {
            placeholder.style.display = 'none';
        }
        profilePhoto.style.display = 'block';
    }
    
    profilePhoto.addEventListener('error', function() {
        this.style.display = 'none';
        const placeholder = document.getElementById('photo-placeholder');
        if (placeholder) {
            placeholder.style.display = 'flex';
        }
    });
    
    profilePhoto.addEventListener('load', function() {
        this.style.display = 'block';
        const placeholder = document.getElementById('photo-placeholder');
        if (placeholder) {
            placeholder.style.display = 'none';
        }
    });
}

