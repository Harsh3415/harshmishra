// Portfolio Website JavaScript

// Project data
const projectsData = [
    {
        id: 1,
        title: "Website for RR infotech",
        category: "web",
        description: "website consisting frontend mainly for an organization ",
        technologies: ["React", "Node.js"],
        demo: "https://rrinfotechpune.com/",
        longDescription: "As a frontend developer, I craft engaging and intuitive web experiences that captivate users. My passion lies in bringing designs to life with pixel-perfect precision and ensuring every interaction is smooth and enjoyable. This portfolio showcases my dedication to clean code, responsive design, and exceptional user interface",
        features: [
            "Intuitive User Interfaces (UI)",
            "Product catalog with search and filters",
            "Pixel-Perfect Implementations",
            "Resource & Knowledge Base",
            "Admin dashboard for management",
            "Responsive design for all devices"
        ]
    },
    {
        id: 2,
        title: "website for Trendsurge",
        category: "web",
        description: "Developed the frontend for TrendSurge's website, focusing on creating a highly intuitive, responsive, and visually engaging online presence.",
        technologies: ["HTML5","CSS3","Javascript"],
        demo: "https://trendsurge.in/",
        longDescription: "For TrendSurge, I developed a frontend-focused website aimed at providing a highly intuitive and visually engaging online presence. My role involved meticulously translating design concepts into a pixel-perfect, responsive interface, ensuring a seamless and enjoyable user experience across all devices. This project showcases my commitment to writing clean, optimized code and delivering beautiful, functional web solutions that prioritize user interaction and visual fidelity.",
        features: [
            "Responsive Layout",
            "Responsive Layout",
            "Pixel-Perfect Design Translation",
            "Performance Optimization",
            "Performance Optimization",
            "Cross-platform compatibility"
        ]
    },
    {
        id: 3,
        title: "website for vibrantply",
        category: "web",
        description: "eveloped the frontend for Vibrantply's website, focusing on creating a highly intuitive, responsive, and visually engaging online presence.",
        technologies: ["HTML5","CSS3","Javascript"],
        demo: "https://vibrantply.in/",
        longDescription: "For Vibrantply, I developed a frontend-focused website aimed at providing a highly intuitive and visually engaging online presence. My work involved meticulously translating design concepts into a pixel-perfect, responsive interface, ensuring a seamless and enjoyable user experience across all devices. This project showcases my commitment to writing clean, optimized code and delivering beautiful, functional web solutions that prioritize user interaction and visual fidelity.",
        features: [
            "Responsive Layout",
            "Pixel-Perfect Design Translation",
            "Intuitive User Interface (UI)",
            "Cross-Browser Compatibility",
        ]
    },
    {
        id: 4,
        title: "website for Topaz FRP",
        category: "web",
        description: "Developed the frontend for Topaz FRP, a website showcasing plain tiles and interlocking pavers, focusing on a professional, responsive, and product-centric user experience.",
        technologies: ["HTML5","CSS3","Javascript"],
        demo: "https://www.topazfrp.in/",
        longDescription: "For Topaz FRP, a specialist in plain tiles and interlocking pavers, I developed a frontend-focused website designed to highlight their product range with clarity and professionalism. My work involved meticulously translating design concepts into a clean, responsive interface, ensuring a seamless and intuitive user experience for potential clients exploring their offerings. This project showcases my commitment to building visually appealing, highly functional web solutions, particularly in presenting detailed product information effectively within a user-friendly environment. I focused on intuitive navigation, compelling product galleries, and robust cross-device compatibility.",
        features: [
            "Product Gallery Implementation",
            "Responsive Layout Design",
            "Clean UI/UX Implementation",
            "Performance Optimization",
        ]
    }
    
];

// Global variables
let currentTheme = 'light';

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    console.log('Portfolio website loaded successfully');
    initTheme();
    initNavigation();
    initProjects();
    initSkillBars();
    initContactForm();
    initScrollAnimations();
    initModalEventListeners();
    initSmoothScrolling();
});

// Theme Management
function initTheme() {
    const themeToggle = document.getElementById('theme-toggle');
    if (!themeToggle) return;
    
    // Load saved theme or default to light
    currentTheme = localStorage.getItem('portfolio-theme') || 'light';
    document.documentElement.setAttribute('data-color-scheme', currentTheme);
    updateThemeToggleIcon(currentTheme);
    
    themeToggle.addEventListener('click', toggleTheme);
}

function toggleTheme() {
    currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-color-scheme', currentTheme);
    localStorage.setItem('portfolio-theme', currentTheme);
    updateThemeToggleIcon(currentTheme);
    console.log('Theme switched to:', currentTheme);
}

function updateThemeToggleIcon(theme) {
    const themeToggle = document.getElementById('theme-toggle');
    const icon = themeToggle?.querySelector('.theme-toggle__icon');
    if (icon) {
        icon.textContent = theme === 'dark' ? '☀️' : '🌙';
    }
}

// Navigation Management
function initNavigation() {
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navbar = document.getElementById('navbar');
    
    // Mobile menu toggle
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('show');
            navToggle.classList.toggle('active');
        });
    }
    
    // Close mobile menu when clicking on nav links
    const navLinks = document.querySelectorAll('.nav__link');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (navMenu) {
                navMenu.classList.remove('show');
            }
            if (navToggle) {
                navToggle.classList.remove('active');
            }
        });
    });
    
    // Active section highlighting
    initActiveSection();
    
    // Navbar background on scroll
    if (navbar) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 50) {
                navbar.style.background = currentTheme === 'dark' 
                    ? 'rgba(38, 40, 40, 0.95)' 
                    : 'rgba(255, 255, 255, 0.95)';
            } else {
                navbar.style.background = currentTheme === 'dark' 
                    ? 'rgba(38, 40, 40, 0.1)' 
                    : 'rgba(255, 255, 255, 0.1)';
            }
        });
    }
}

function initActiveSection() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav__link');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.getAttribute('id');
                
                // Remove active class from all links
                navLinks.forEach(link => link.classList.remove('active'));
                
                // Add active class to current section link
                const activeLink = document.querySelector(`.nav__link[href="#${id}"]`);
                if (activeLink) {
                    activeLink.classList.add('active');
                }
            }
        });
    }, {
        threshold: 0.3
    });
    
    sections.forEach(section => observer.observe(section));
}

// Smooth Scrolling Implementation
function initSmoothScrolling() {
    // Add smooth scrolling for all navigation links
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const navbar = document.getElementById('navbar');
                const navbarHeight = navbar ? navbar.offsetHeight : 0;
                const targetPosition = targetElement.offsetTop - navbarHeight - 20;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
                
                console.log('Scrolling to section:', targetId);
            }
        });
    });
}

// Projects Management
function initProjects() {
    const projectsGrid = document.getElementById('projects-grid');
    if (!projectsGrid) return;
    
    renderProjects(projectsData);
    initProjectFilters();
    console.log('Projects initialized with', projectsData.length, 'projects');
}

function renderProjects(projects) {
    const projectsGrid = document.getElementById('projects-grid');
    if (!projectsGrid) return;
    
    projectsGrid.innerHTML = '';
    
    projects.forEach((project, index) => {
        const projectCard = createProjectCard(project);
        projectCard.style.animationDelay = `${index * 0.1}s`;
        projectsGrid.appendChild(projectCard);
    });
}

function createProjectCard(project) {
    const card = document.createElement('div');
    card.className = `project-card ${project.category}`;
    card.setAttribute('data-category', project.category);
    
    card.innerHTML = `
        <div class="project-card__image">
            ${getProjectIcon(project.category)}
        </div>
        <div class="project-card__content">
            <h3 class="project-card__title">${project.title}</h3>
            <p class="project-card__category">${project.category.toUpperCase()}</p>
            <p class="project-card__description">${project.description}</p>
            <div class="project-card__tech">
                ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
            </div>
        </div>
    `;
    
    // Add click event to open modal
    card.addEventListener('click', function() {
        openProjectModal(project);
    });
    
    // Add hover effect
    card.style.cursor = 'pointer';
    
    return card;
}

function getProjectIcon(category) {
    const icons = {
        'web': '🌐',
        'mobile': '📱',
        'ai/ml': '🤖'
    };
    return icons[category] || '💻';
}

function initProjectFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            const filter = e.target.getAttribute('data-filter');
            
            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            e.target.classList.add('active');
            
            // Filter projects
            filterProjects(filter);
            
            console.log('Filtering projects by:', filter);
        });
    });
}

function filterProjects(filter) {
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
        const category = card.getAttribute('data-category');
        
        if (filter === 'all' || category === filter) {
            card.classList.remove('hidden');
            card.style.animation = 'slideUp 0.6s ease-out forwards';
        } else {
            card.classList.add('hidden');
        }
    });
}

// Project Modal Management
function initModalEventListeners() {
    const modalClose = document.getElementById('modal-close');
    const modalOverlay = document.getElementById('modal-overlay');
    
    if (modalClose) {
        modalClose.addEventListener('click', closeProjectModal);
    }
    
    if (modalOverlay) {
        modalOverlay.addEventListener('click', closeProjectModal);
    }
    
    // Close modal on Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            const projectModal = document.getElementById('project-modal');
            if (projectModal && projectModal.classList.contains('show')) {
                closeProjectModal();
            }
        }
    });
}

function openProjectModal(project) {
    const projectModal = document.getElementById('project-modal');
    const modalBody = document.getElementById('modal-body');
    
    if (!projectModal || !modalBody) return;
    
    modalBody.innerHTML = `
        <div class="project-modal">
            <div class="project-modal__header">
                <div class="project-modal__icon">
                    ${getProjectIcon(project.category)}
                </div>
                <div>
                    <h2 class="project-modal__title">${project.title}</h2>
                    <p class="project-modal__category">${project.category.toUpperCase()}</p>
                </div>
            </div>
            
            <div class="project-modal__description">
                <p>${project.longDescription}</p>
            </div>
            
            <div class="project-modal__features">
                <h3>Key Features</h3>
                <ul>
                    ${project.features.map(feature => `<li>${feature}</li>`).join('')}
                </ul>
            </div>
            
            <div class="project-modal__tech">
                <h3>Technologies Used</h3>
                <div class="tech-tags">
                    ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                </div>
            </div>
            
            <div class="project-modal__links">
               
                <a href="${project.demo}" target="_blank" class="btn btn--primary">
                    🚀 website
                </a>
            </div>
        </div>
    `;
    
    projectModal.classList.add('show');
    document.body.style.overflow = 'hidden';
    
    console.log('Opened modal for project:', project.title);
}

function closeProjectModal() {
    const projectModal = document.getElementById('project-modal');
    
    if (projectModal) {
        projectModal.classList.remove('show');
        document.body.style.overflow = 'auto';
        console.log('Closed project modal');
    }
}

// Skill Bars Animation
function initSkillBars() {
    const skillBars = document.querySelectorAll('.skill-bar');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const skillBar = entry.target;
                const fill = skillBar.querySelector('.skill-bar__fill');
                const percentage = skillBar.getAttribute('data-skill');
                
                setTimeout(() => {
                    if (fill) {
                        fill.style.width = `${percentage}%`;
                    }
                }, 200);
                
                observer.unobserve(skillBar);
            }
        });
    }, {
        threshold: 0.5
    });
    
    skillBars.forEach(bar => observer.observe(bar));
}

// Contact Form Management
function initContactForm() {
    const contactForm = document.getElementById('contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', handleFormSubmission);
        console.log('Contact form initialized');
    }
}

function handleFormSubmission(e) {
    e.preventDefault();
    
    const contactForm = document.getElementById('contact-form');
    const formData = new FormData(contactForm);
    const data = {
        name: formData.get('name'),
        email: formData.get('email'),
        subject: formData.get('subject'),
        message: formData.get('message')
    };
    
    console.log('Contact form submitted with data:', data);
    
    // Simulate form submission
    const submitButton = contactForm.querySelector('button[type="submit"]');
    const originalText = submitButton.textContent;
    
    submitButton.textContent = 'Sending...';
    submitButton.disabled = true;
    submitButton.style.opacity = '0.7';
    
    setTimeout(() => {
        showNotification('✅ Message sent successfully! I\'ll get back to you soon.', 'success');
        contactForm.reset();
        submitButton.textContent = originalText;
        submitButton.disabled = false;
        submitButton.style.opacity = '1';
        
        console.log('Contact form submission completed');
    }, 2000);
}

function showNotification(message, type = 'success') {
    // Remove existing notifications
    const existingNotifications = document.querySelectorAll('.notification');
    existingNotifications.forEach(notification => notification.remove());
    
    const notification = document.createElement('div');
    notification.className = `notification notification--${type}`;
    notification.textContent = message;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 16px 24px;
        border-radius: 8px;
        color: white;
        font-weight: 500;
        z-index: 3000;
        animation: slideInRight 0.3s ease-out;
        max-width: 400px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        font-size: 14px;
    `;
    
    if (type === 'success') {
        notification.style.background = 'linear-gradient(135deg, #10B981, #059669)';
    } else if (type === 'error') {
        notification.style.background = 'linear-gradient(135deg, #EF4444, #DC2626)';
    }
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease-in forwards';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, 5000);
}

// Scroll Animations
function initScrollAnimations() {
    const animatedElements = document.querySelectorAll('.skill-category, .about__info-item, .certification-card, .timeline__item');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });
    
    animatedElements.forEach((element, index) => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(50px)';
        element.style.transition = `opacity 0.6s ease-out ${index * 0.1}s, transform 0.6s ease-out ${index * 0.1}s`;
        observer.observe(element);
    });
}

// Add CSS for animations and modal
const animationStyles = document.createElement('style');
animationStyles.textContent = `
    @keyframes slideInRight {
        from {
            opacity: 0;
            transform: translateX(100px);
        }
        to {
            opacity: 1;
            transform: translateX(0);
        }
    }
    
    @keyframes slideOutRight {
        from {
            opacity: 1;
            transform: translateX(0);
        }
        to {
            opacity: 0;
            transform: translateX(100px);
        }
    }
    
    .project-modal {
        max-width: 600px;
    }
    
    .project-modal__header {
        display: flex;
        align-items: center;
        gap: 16px;
        margin-bottom: 24px;
    }
    
    .project-modal__icon {
        font-size: 3rem;
        width: 80px;
        height: 80px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: var(--portfolio-gradient-bg);
        border-radius: 12px;
    }
    
    .project-modal__title {
        font-size: var(--font-size-2xl);
        margin: 0;
    }
    
    .project-modal__category {
        color: var(--color-primary);
        font-size: var(--font-size-sm);
        font-weight: var(--font-weight-medium);
        margin: 4px 0 0 0;
    }
    
    .project-modal__description {
        margin-bottom: 24px;
        line-height: 1.6;
        color: var(--color-text-secondary);
    }
    
    .project-modal__features {
        margin-bottom: 24px;
    }
    
    .project-modal__features h3,
    .project-modal__tech h3 {
        font-size: var(--font-size-xl);
        margin-bottom: 12px;
        color: var(--color-text);
    }
    
    .project-modal__features ul {
        list-style: none;
        padding: 0;
        margin: 0;
    }
    
    .project-modal__features li {
        padding: 8px 0;
        padding-left: 20px;
        position: relative;
        color: var(--color-text-secondary);
    }
    
    .project-modal__features li::before {
        content: '✓';
        position: absolute;
        left: 0;
        color: var(--color-primary);
        font-weight: bold;
    }
    
    .project-modal__tech {
        margin-bottom: 32px;
    }
    
    .tech-tags {
        display: flex;
        flex-wrap: wrap;
        gap: 8px;
    }
    
    .project-modal__links {
        display: flex;
        gap: 16px;
        flex-wrap: wrap;
    }
    
    .project-modal__links .btn {
        flex: 1;
        min-width: 140px;
    }
`;

document.head.appendChild(animationStyles);

// Error handling
window.addEventListener('error', function(e) {
    console.error('JavaScript error:', e.error);
});

console.log('Portfolio website JavaScript fully loaded');