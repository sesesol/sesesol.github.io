// Mobile Navigation Toggle
document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.querySelector('.nav-toggle');
    const mainNav = document.querySelector('.main-nav');
    
    if (navToggle) {
        navToggle.addEventListener('click', function() {
            mainNav.classList.toggle('active');
            navToggle.classList.toggle('active');
            
            // Animate hamburger icon
            const spans = navToggle.querySelectorAll('span');
            if (navToggle.classList.contains('active')) {
                spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
                spans[1].style.opacity = '0';
                spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
            } else {
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            }
        });
    }
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', function(event) {
        if (mainNav && mainNav.classList.contains('active')) {
            if (!mainNav.contains(event.target) && !navToggle.contains(event.target)) {
                mainNav.classList.remove('active');
                navToggle.classList.remove('active');
                
                const spans = navToggle.querySelectorAll('span');
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            }
        }
    });
});

// Smooth Scroll for anchor links
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

// Contact Form Handling
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form values
        const formData = {
            name: document.getElementById('name').value,
            phone: document.getElementById('phone').value,
            email: document.getElementById('email').value,
            subject: document.getElementById('subject').value,
            message: document.getElementById('message').value
        };
        
        // Simple validation
        if (!formData.name || !formData.phone || !formData.message) {
            alert('لطفاً تمام فیلدهای الزامی را پر کنید.');
            return;
        }
        
        // Here you would normally send the data to a server
        // For now, we'll just show a success message
        alert('پیام شما با موفقیت ارسال شد. به زودی با شما تماس خواهیم گرفت.');
        
        // Reset form
        contactForm.reset();
        
        // In a real implementation, you would do something like:
        /*
        fetch('/api/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData)
        })
        .then(response => response.json())
        .then(data => {
            alert('پیام شما با موفقیت ارسال شد.');
            contactForm.reset();
        })
        .catch(error => {
            alert('خطایی رخ داد. لطفاً دوباره تلاش کنید.');
        });
        */
    });
}

// Scroll to Top Button (optional enhancement)
const createScrollToTop = () => {
    const button = document.createElement('button');
    button.innerHTML = '↑';
    button.className = 'scroll-to-top';
    button.style.cssText = `
        position: fixed;
        bottom: 30px;
        left: 30px;
        width: 50px;
        height: 50px;
        background: var(--primary);
        color: white;
        border: none;
        border-radius: 50%;
        font-size: 24px;
        cursor: pointer;
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        z-index: 999;
    `;
    
    document.body.appendChild(button);
    
    // Show/hide button on scroll
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            button.style.opacity = '1';
            button.style.visibility = 'visible';
        } else {
            button.style.opacity = '0';
            button.style.visibility = 'hidden';
        }
    });
    
    // Scroll to top on click
    button.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
};

// Initialize scroll to top button
createScrollToTop();

// Add fade-in animation to elements as they come into view
const observeElements = () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1
    });
    
    // Observe cards and sections
    document.querySelectorAll('.service-card, .info-card, .qualifications').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
};

// Initialize observers when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', observeElements);
} else {
    observeElements();
}

// Active navigation highlighting based on current page
const setActiveNav = () => {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.main-nav a');
    
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage || (currentPage === '' && href === 'index.html')) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
};

setActiveNav();

// Click-to-call functionality for phone numbers
document.querySelectorAll('.phone-number, a[href^="tel:"]').forEach(element => {
    element.style.cursor = 'pointer';
    
    // Add hover effect
    element.addEventListener('mouseenter', function() {
        this.style.textDecoration = 'underline';
    });
    
    element.addEventListener('mouseleave', function() {
        this.style.textDecoration = 'none';
    });
});

// Form input validation styling
const formInputs = document.querySelectorAll('input, textarea, select');
formInputs.forEach(input => {
    input.addEventListener('blur', function() {
        if (this.value.trim() !== '') {
            this.style.borderColor = 'var(--success)';
        } else if (this.hasAttribute('required')) {
            this.style.borderColor = 'var(--error)';
        } else {
            this.style.borderColor = 'var(--neutral-200)';
        }
    });
    
    input.addEventListener('focus', function() {
        this.style.borderColor = 'var(--primary)';
    });
});

// Print page functionality (optional)
const addPrintStyles = () => {
    const style = document.createElement('style');
    style.textContent = `
        @media print {
            .main-header,
            .main-footer,
            .hero-actions,
            .btn,
            .nav-toggle,
            .scroll-to-top {
                display: none !important;
            }
            
            body {
                font-size: 12pt;
                line-height: 1.5;
            }
            
            .container {
                max-width: 100%;
            }
            
            .info-card,
            .service-card,
            .qualifications {
                page-break-inside: avoid;
            }
        }
    `;
    document.head.appendChild(style);
};

addPrintStyles();

// Loading animation for images
const images = document.querySelectorAll('img');
images.forEach(img => {
    img.addEventListener('load', function() {
        this.style.opacity = '1';
    });
    
    img.style.opacity = '0';
    img.style.transition = 'opacity 0.5s ease';
});

console.log('Website loaded successfully! 🏥');
