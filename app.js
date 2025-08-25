// Initialize EmailJS
// (function() {
//     emailjs.init("c6jrfJorFjSKV6HpW"); // Replace with your actual EmailJS public key
// })();

// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all functions
    initCustomCursor();
    initMobileMenu();
    initSmoothScrolling();
    initScrollAnimations();
    initNavigationHighlight();
    initContactForm();
    initNavbarScroll();
    initCardHoverEffects();
    initFormEffects();
    initSkillsAnimation();
    initResumeDownload();
});

// Custom Cursor Implementation
function initCustomCursor() {
    const cursor = document.querySelector('.cursor');
    const cursorFollower = document.querySelector('.cursor-follower');
    
    if (!cursor || !cursorFollower) return;
    
    let mouseX = 0, mouseY = 0;
    let followerX = 0, followerY = 0;
    
    // Update mouse position
    document.addEventListener('mousemove', function(e) {
        mouseX = e.clientX;
        mouseY = e.clientY;
        
        cursor.style.left = mouseX + 'px';
        cursor.style.top = mouseY + 'px';
    });
    
    // Smooth follower animation
    function animateFollower() {
        followerX += (mouseX - followerX) * 0.1;
        followerY += (mouseY - followerY) * 0.1;
        
        cursorFollower.style.left = followerX + 'px';
        cursorFollower.style.top = followerY + 'px';
        
        requestAnimationFrame(animateFollower);
    }
    animateFollower();
    
    // Hover effects for interactive elements
    const hoverElements = document.querySelectorAll('a, button, .btn, .project-card, .cert-card, .skill-category, input, textarea');
    
    hoverElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursor.classList.add('expand');
        });
        
        el.addEventListener('mouseleave', () => {
            cursor.classList.remove('expand');
        });
    });
    
    // Hide cursor when leaving window
    document.addEventListener('mouseleave', () => {
        cursor.style.opacity = '0';
        cursorFollower.style.opacity = '0';
    });
    
    document.addEventListener('mouseenter', () => {
        cursor.style.opacity = '1';
        cursorFollower.style.opacity = '1';
    });
}

// Resume Download Functionality
function initResumeDownload() {
    const downloadBtn = document.getElementById('download-resume');
    const navDownloadBtn = document.getElementById('nav-download');
    
    // Create a sample resume content (in real scenario, this would be a PDF file)
    // const resumeContent = `
    //     LAKSHYA GUPTA
    //     Computer Science Engineering Student
        
    //     Contact Information:
    //     Email: lakshyagupta628@gmail.com
    //     Phone: +91-9555631256
    //     Location: Kanpur Nagar, India
        
    //     Objective:
    //     Aspiring Computer Science engineer with hands-on experience in Python, SQL, and web development. 
    //     Built real-world projects like a music recommender and password generator. 
    //     Eager to solve scalable, user-centric problems.
        
    //     Education:
    //     B.Tech in CSE (Data Science) | 2022 – Present
    //     Maharana Pratap Engineering College, Kanpur
        
    //     Intermediate (ICSE) | 2021 – 2022
    //     RK Memorial Education Centre
        
    //     Matriculate (ICSE) | 2019 – 2020
    //     RK Memorial Education Centre
        
    //     Skills:
    //     Programming Languages: Python (80%), HTML (85%), CSS (80%), SQL (75%), C (70%)
    //     Frameworks & Libraries: Tailwind CSS (70%), Tkinter (65%)
        
    //     Projects:
    //     1. Vibe Finder – Music Recommendation System
    //        - Suggested songs based on user mood using ML
    //        - Built with Python, Streamlit, and Google Colab
        
    //     2. Portfolio Website
    //        - Static personal website built using HTML & CSS
        
    //     3. Password Generator
    //        - GUI tool to generate secure passwords using Python & Tkinter
        
    //     4. Timetable Manager
    //        - Simple UI to auto-generate class schedules
    //        - Built with Tailwind CSS
        
    //     5. Virtual Mouse
    //        - Gesture-controlled virtual mouse using OpenCV and ML
        
    //     Experience:
    //     Software Intern | Optifyx Technology | Aug 2024 – Sep 2024
        
    //     Certifications:
    //     - Flipkart Grid 6.0 – Qualified Software Development Track Level 1.1
    //     - IBM Certified – Web Dev Fundamentals, Data Fundamentals
    //     - HackerRank Certified – Problem Solving, Python, SQL, Software Engineering Intern
    //     - IIT Kanpur – Java Training (Online Vocational Program)
        
    //     Achievements:
    //     - Google Arcade Premium Milestone Achiever (2024)
    // `;
    
    // function downloadResume() {
    //     // Create a blob with the resume content
    //     const blob = new Blob([resumeContent], { type: 'text/pdf' });
    //     const url = window.URL.createObjectURL(blob);
        
    //     // Create a temporary download link
    //     const a = document.createElement('a');
    //     a.href = url;
    //     a.download = 'Lakshya_Gupta_Resume.txt';
    //     document.body.appendChild(a);
    //     a.click();
        
    //     // Clean up
    //     document.body.removeChild(a);
    //     window.URL.revokeObjectURL(url);
        
    //     // Show success message
    //     showDownloadMessage('Resume downloaded successfully!');
    // }
    
    function showDownloadMessage(message) {
        const messageDiv = document.createElement('div');
        messageDiv.textContent = message;
        messageDiv.style.cssText = `
            position: fixed;
            top: 100px;
            right: 20px;
            background: #921A40;
            color: white;
            padding: 1rem 2rem;
            border-radius: 10px;
            font-weight: 600;
            z-index: 10000;
            box-shadow: 0 10px 30px rgba(146, 26, 64, 0.3);
            animation: slideIn 0.3s ease;
        `;
        
        document.body.appendChild(messageDiv);
        
        setTimeout(() => {
            messageDiv.style.animation = 'slideOut 0.3s ease forwards';
            setTimeout(() => {
                document.body.removeChild(messageDiv);
            }, 300);
        }, 3000);
    }
    
    // Add CSS for message animations
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideIn {
            from { transform: translateX(100%); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
        }
        @keyframes slideOut {
            from { transform: translateX(0); opacity: 1; }
            to { transform: translateX(100%); opacity: 0; }
        }
    `;
    document.head.appendChild(style);
    
    // Add event listeners
    if (downloadBtn) {
        downloadBtn.addEventListener('click', function(e) {
            e.preventDefault();
            downloadResume();
        });
    }
    
    if (navDownloadBtn) {
        navDownloadBtn.addEventListener('click', function(e) {
            e.preventDefault();
            downloadResume();
        });
    }
}

// Skills Progress Bar Animation - FIXED
function initSkillsAnimation() {
    const skillBars = document.querySelectorAll('.skill-progress');
    const skillsSection = document.querySelector('#skills');
    
    if (!skillsSection) return;
    
    const skillsObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Animate all skill bars when the skills section comes into view
                skillBars.forEach((skillBar, index) => {
                    const width = skillBar.getAttribute('data-width');
                    
                    setTimeout(() => {
                        skillBar.style.width = width + '%';
                    }, index * 200); // Staggered animation
                });
                
                skillsObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.3,
        rootMargin: '0px 0px -50px 0px'
    });
    
    skillsObserver.observe(skillsSection);
}

// Mobile Menu Toggle
function initMobileMenu() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
        
        // Close menu when clicking nav links
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            }
        });
    }
}

// Smooth Scrolling Navigation - FIXED
function initSmoothScrolling() {
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Skip if it's just "#" or empty
            if (!href || href === '#') {
                return;
            }
            
            e.preventDefault();
            
            // Handle home link specially
            if (href === '#home') {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
                updateActiveNavigation('home');
                return;
            }
            
            const targetSection = document.querySelector(href);
            
            if (targetSection) {
                const headerOffset = 80; // Account for fixed navbar
                const elementPosition = targetSection.offsetTop;
                const offsetPosition = elementPosition - headerOffset;
                
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
                
                // Update active navigation immediately
                updateActiveNavigation(href.substring(1));
            }
        });
    });
}

// Update Active Navigation
function updateActiveNavigation(sectionId) {
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
        }
    });
}

// Scroll Animations using Intersection Observer
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-up');
                
                // Add staggered animation for cards within the same container
                const cards = entry.target.querySelectorAll('.project-card, .cert-card, .education-card, .skill-category');
                cards.forEach((card, index) => {
                    setTimeout(() => {
                        card.classList.add('fade-in-up');
                    }, index * 150);
                });
            }
        });
    }, observerOptions);
    
    // Observe all sections and main containers
    const sectionsToAnimate = document.querySelectorAll(
        'section, .about-card, .experience-card, .contact-info-card, .contact-form-card, .achievement-card'
    );
    
    sectionsToAnimate.forEach(element => {
        observer.observe(element);
    });
}

// Navigation Highlight Based on Scroll Position
function initNavigationHighlight() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    const observerOptions = {
        threshold: 0.3,
        rootMargin: '-100px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const currentSection = entry.target.getAttribute('id');
                
                // Remove active class from all nav links
                navLinks.forEach(link => {
                    link.classList.remove('active');
                });
                
                // Add active class to current section's nav link
                const activeLink = document.querySelector(`.nav-link[href="#${currentSection}"]`);
                if (activeLink) {
                    activeLink.classList.add('active');
                }
            }
        });
    }, observerOptions);
    
    sections.forEach(section => {
        observer.observe(section);
    });
    
    // Set initial active state for home
    window.addEventListener('load', () => {
        if (window.scrollY < 100) {
            const homeLink = document.querySelector('.nav-link[href="#home"]');
            if (homeLink) {
                homeLink.classList.add('active');
            }
        }
    });
}

// Navbar Scroll Effect
function initNavbarScroll() {
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', throttle(function() {
        if (window.scrollY > 100) {
            navbar.style.background = 'rgba(32, 36, 37, 0.98)';
            navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.3)';
        } else {
            navbar.style.background = 'rgba(32, 36, 37, 0.95)';
            navbar.style.boxShadow = 'none';
        }
    }, 16));
}

// Contact Form with EmailJS Integration
function initContactForm() {
    const form = document.getElementById('contact-form');
    const formStatus = document.getElementById('form-status');
    
    if (form && formStatus) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Show loading state
            const submitBtn = form.querySelector('button[type="submit"]');
            const originalText = submitBtn.innerHTML;
            submitBtn.innerHTML = '<span class="loading"></span> Sending...';
            submitBtn.disabled = true;
            
            // Hide previous status
            formStatus.classList.add('hidden');
            formStatus.classList.remove('success', 'error');
            
            // Get form data
            const formData = {
                from_name: form.name.value.trim(),
                from_email: form.email.value.trim(),
                subject: form.subject.value.trim(),
                message: form.message.value.trim(),
                to_name: 'Lakshya Gupta'
            };
            
            // Validate form data
            if (!formData.from_name || !formData.from_email || !formData.subject || !formData.message) {
                showFormStatus('Please fill in all fields.', 'error');
                resetSubmitButton(submitBtn, originalText);
                return;
            }
            
            if (!isValidEmail(formData.from_email)) {
                showFormStatus('Please enter a valid email address.', 'error');
                resetSubmitButton(submitBtn, originalText);
                return;
            }
            
            // Simulate form submission (replace with actual EmailJS integration)
            setTimeout(() => {
                showFormStatus('Message sent successfully! I\'ll get back to you soon.', 'success');
                form.reset();
                resetSubmitButton(submitBtn, originalText);
            }, 2000);
        });
    }
    
    function showFormStatus(message, type) {
        formStatus.textContent = message;
        formStatus.classList.remove('hidden');
        formStatus.classList.add(type);
        
        // Auto hide after 8 seconds
        setTimeout(() => {
            formStatus.classList.add('hidden');
            formStatus.classList.remove(type);
        }, 8000);
    }
    
    function resetSubmitButton(button, originalText) {
        button.innerHTML = originalText;
        button.disabled = false;
    }
    
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
}

// Enhanced Card Hover Effects
function initCardHoverEffects() {
    const cards = document.querySelectorAll('.project-card, .cert-card, .skill-category, .education-card');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transition = 'all 0.3s ease';
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
    
    // Special hover effects for buttons
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-3px)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
}

// Form Input Focus Effects
function initFormEffects() {
    const formInputs = document.querySelectorAll('.form-input');
    
    formInputs.forEach(input => {
        input.addEventListener('focus', function() {
            this.style.borderColor = '#921A40';
            this.style.transform = 'translateY(-2px)';
        });
        
        input.addEventListener('blur', function() {
            this.style.transform = 'translateY(0)';
            
            // Add validation visual feedback
            if (this.value.trim() === '' && this.hasAttribute('required')) {
                this.style.borderColor = '#ff6b6b';
            } else if (this.type === 'email' && this.value.trim() !== '') {
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailRegex.test(this.value)) {
                    this.style.borderColor = '#ff6b6b';
                } else {
                    this.style.borderColor = '#921A40';
                }
            } else if (this.value.trim() !== '') {
                this.style.borderColor = '#921A40';
            } else {
                this.style.borderColor = 'rgba(255, 255, 255, 0.2)';
            }
        });
        
        input.addEventListener('input', function() {
            // Reset border color while typing
            if (this.style.borderColor === 'rgb(255, 107, 107)') {
                this.style.borderColor = 'rgba(255, 255, 255, 0.2)';
            }
        });
    });
}

// Throttle function for performance optimization
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// Scroll Progress Indicator
function updateScrollProgress() {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    
    // Update any progress bars if they exist
    const progressBar = document.querySelector('.scroll-progress');
    if (progressBar) {
        progressBar.style.width = scrolled + "%";
    }
}

// Initialize additional features
document.addEventListener('DOMContentLoaded', function() {
    // Add smooth reveal animations to elements
    const elementsToReveal = document.querySelectorAll('.fade-in-up');
    elementsToReveal.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.6s ease';
        
        setTimeout(() => {
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
        }, index * 100);
    });
    
    // Initialize parallax effect for hero section
    const heroSection = document.querySelector('.hero-section');
    if (heroSection) {
        window.addEventListener('scroll', throttle(() => {
            const scrolled = window.pageYOffset;
            const parallax = scrolled * 0.5;
            heroSection.style.transform = `translateY(${parallax}px)`;
        }, 16));
    }
});

// Apply throttling to scroll events for better performance
window.addEventListener('scroll', throttle(function() {
    updateScrollProgress();
}, 16));

// Error handling for EmailJS
window.addEventListener('error', function(e) {
    if (e.error && e.error.message && e.error.message.includes('emailjs')) {
        console.warn('EmailJS not properly configured. Please add your service ID, template ID, and public key.');
    }
});

// Accessibility enhancements
function initAccessibility() {
    // Add skip to content link
    const skipLink = document.createElement('a');
    skipLink.href = '#home';
    skipLink.textContent = 'Skip to main content';
    skipLink.className = 'skip-link';
    skipLink.style.cssText = `
        position: absolute;
        top: -40px;
        left: 6px;
        background: #921A40;
        color: #fff;
        padding: 8px;
        text-decoration: none;
        border-radius: 4px;
        z-index: 10000;
        transition: top 0.3s ease;
    `;
    
    skipLink.addEventListener('focus', function() {
        this.style.top = '6px';
    });
    
    skipLink.addEventListener('blur', function() {
        this.style.top = '-40px';
    });
    
    document.body.insertBefore(skipLink, document.body.firstChild);
    
    // Ensure all interactive elements are focusable
    const interactiveElements = document.querySelectorAll('button, a, input, textarea, select');
    interactiveElements.forEach(el => {
        if (!el.hasAttribute('tabindex')) {
            el.setAttribute('tabindex', '0');
        }
    });
}

// Initialize accessibility features
document.addEventListener('DOMContentLoaded', initAccessibility);

// Performance monitoring
window.addEventListener('load', function() {
    const loadTime = performance.now();
    console.log(`⚡ Page loaded in ${Math.round(loadTime)}ms`);
    
    // Initialize any post-load animations
    setTimeout(() => {
        const heroTitle = document.querySelector('.hero-title');
        if (heroTitle) {
            heroTitle.style.opacity = '0';
            heroTitle.style.transform = 'translateY(30px)';
            heroTitle.style.transition = 'all 1s ease';
            
            setTimeout(() => {
                heroTitle.style.opacity = '1';
                heroTitle.style.transform = 'translateY(0)';
            }, 200);
        }
    }, 100);
});

// Console welcome message
console.log('%c🚀 Welcome to Lakshya\'s Modern Portfolio!', 'color: #921A40; font-size: 18px; font-weight: bold;');
console.log('%c✨ Built with sophisticated two-color design and custom cursor', 'color: #921A40; font-size: 14px;');
console.log('%c📧 Contact: lakshyagupta628@gmail.com', 'color: #ffffff; font-size: 12px;');
console.log('%c📄 Resume download functionality implemented', 'color: #921A40; font-size: 12px;');

// Dynamic year update
function updateYear() {
    const yearElements = document.querySelectorAll('.current-year');
    const currentYear = new Date().getFullYear();
    yearElements.forEach(el => el.textContent = currentYear);
}

document.addEventListener('DOMContentLoaded', updateYear);

// Keyboard navigation enhancements
document.addEventListener('keydown', function(e) {
    // Allow keyboard navigation for download buttons
    if ((e.key === 'Enter' || e.key === ' ') && (e.target.id === 'download-resume' || e.target.id === 'nav-download')) {
        e.preventDefault();
        e.target.click();
    }
});

// Add smooth transitions for all interactive elements
function addSmoothTransitions() {
    const style = document.createElement('style');
    style.textContent = `
        * {
            transition: color 0.3s ease, background-color 0.3s ease, border-color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease;
        }
        
        .skill-progress {
            transition: width 1.5s cubic-bezier(0.4, 0, 0.2, 1) !important;
        }
    `;
    document.head.appendChild(style);
}

// Initialize smooth transitions
document.addEventListener('DOMContentLoaded', addSmoothTransitions);