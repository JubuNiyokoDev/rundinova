// Global variables
let particlesArray = [];
let animationId;

// Project details data
const projectDetails = {
    comlab: {
        title: "ComLab - Plateforme d'Innovation Collaborative",
        description: "ComLab est une plateforme révolutionnaire qui connecte l'écosystème entrepreneurial burundais et africain. Elle facilite la mise en relation entre talents, experts, mentors, startups, entreprises et ONG pour créer un environnement collaboratif d'innovation.",
        features: [
            {
                icon: "fas fa-handshake",
                title: "Matching Intelligent",
                description: "Algorithme avancé pour connecter les talents avec les experts et mentors appropriés selon leurs besoins et compétences."
            },
            {
                icon: "fas fa-graduation-cap",
                title: "Formations Certifiées",
                description: "Cours en ligne certifiés pour étudiants avec suivi personnalisé et certification reconnue."
            },
            {
                icon: "fas fa-rocket",
                title: "Accompagnement Projets",
                description: "Support complet pour le développement et la mise en œuvre de projets innovants."
            },
            {
                icon: "fas fa-globe",
                title: "Multilingue",
                description: "Interface disponible en Français, Anglais et Kirundi pour une accessibilité maximale."
            }
        ],
        technologies: ["React", "Node.js", "MongoDB", "Socket.io", "AI/ML"],
        website: "https://comlab-burundi.com",
        status: "En production"
    },
    techsafe: {
        title: "TechSafe - Protection Intelligente contre la VBG",
        description: "TechSafe est une application mobile innovante utilisant l'intelligence artificielle pour lutter contre la violence basée sur le genre (VBG). Elle offre un système de signalement intelligent, des informations sur les droits des femmes et un système d'alerte d'urgence.",
        features: [
            {
                icon: "fas fa-brain",
                title: "Intelligence Artificielle",
                description: "IA intégrée pour analyser les signalements et fournir des recommandations personnalisées."
            },
            {
                icon: "fas fa-mobile-alt",
                title: "Application Mobile",
                description: "Interface mobile intuitive optimisée pour une utilisation rapide en situation d'urgence."
            },
            {
                icon: "fas fa-exclamation-triangle",
                title: "Alerte d'Urgence",
                description: "Système d'alerte rapide pour contacter les services d'aide en cas de danger immédiat."
            },
            {
                icon: "fas fa-language",
                title: "Interface Kirundi",
                description: "Application entièrement traduite en Kirundi pour servir les communautés locales."
            }
        ],
        technologies: ["React Native", "TensorFlow", "Firebase", "Geolocation API"],
        status: "En développement"
    },
    iwanje: {
        title: "Iwanje - E-commerce Intelligent Multi-vendeurs",
        description: "Iwanje est une plateforme e-commerce avancée qui révolutionne le commerce en ligne au Burundi. Avec la blockchain intégrée, des filtres intelligents et la géolocalisation, elle offre une expérience d'achat unique pour produits, services et immobilier.",
        features: [
            {
                icon: "fab fa-ethereum",
                title: "Blockchain Intégrée",
                description: "Sécurisation des transactions et traçabilité des produits grâce à la technologie blockchain."
            },
            {
                icon: "fas fa-map-marker-alt",
                title: "Géolocalisation Avancée",
                description: "Système de localisation intelligent pour trouver produits et services à proximité."
            },
            {
                icon: "fas fa-home",
                title: "Marché Immobilier",
                description: "Section dédiée à la vente et location immobilière avec visite virtuelle."
            },
            {
                icon: "fas fa-robot",
                title: "Recommandations IA",
                description: "Système de recommandations automatiques basé sur l'intelligence artificielle."
            }
        ],
        technologies: ["Vue.js", "Blockchain", "AI/ML", "Geolocation", "Payment Gateway"],
        status: "En développement"
    }
};

// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize loading screen
    initLoadingScreen();
    
    // Initialize particles
    initParticles();
    
    // Initialize navigation
    initNavigation();
    
    // Initialize scroll animations
    initScrollAnimations();
    
    // Initialize counters
    initCounters();
    
    // Initialize smooth scrolling
    initSmoothScrolling();
    
    // Initialize contact form
    initContactForm();
    
    // Initialize navbar scroll effect
    initNavbarScroll();
    
    // Initialize intersection observer for animations
    initIntersectionObserver();
    
    // Initialize project interactions
    initProjectInteractions();
});

// Loading Screen
function initLoadingScreen() {
    const loadingScreen = document.getElementById('loading-screen');
    const progressBar = document.querySelector('.loading-progress');
    
    // Animate progress bar
    setTimeout(() => {
        progressBar.style.width = '100%';
    }, 500);
    
    // Hide loading screen after animation
    setTimeout(() => {
        loadingScreen.classList.add('hidden');
        document.body.style.overflow = 'auto';
    }, 3500);
}

// Particles System
function initParticles() {
    const container = document.getElementById('particles-container');
    
    function createParticle() {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDuration = (Math.random() * 15 + 10) + 's';
        particle.style.animationDelay = Math.random() * 5 + 's';
        container.appendChild(particle);
        
        // Remove particle after animation
        setTimeout(() => {
            if (particle.parentNode) {
                particle.parentNode.removeChild(particle);
            }
        }, 25000);
    }
    
    // Create initial particles
    for (let i = 0; i < 50; i++) {
        setTimeout(() => createParticle(), Math.random() * 5000);
    }
    
    // Continuously create new particles
    setInterval(createParticle, 500);
}

// Navigation
function initNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                
                // Update active nav link
                navLinks.forEach(l => l.classList.remove('active'));
                this.classList.add('active');
            }
        });
    });
}

// Navbar Scroll Effect
function initNavbarScroll() {
    const navbar = document.getElementById('mainNav');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
}

// Scroll Animations
function initScrollAnimations() {
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    animatedElements.forEach(el => {
        observer.observe(el);
    });
}

// Counters Animation
function initCounters() {
    const counters = document.querySelectorAll('.stat-number');
    let hasAnimated = false;
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !hasAnimated) {
                hasAnimated = true;
                counters.forEach(counter => {
                    animateCounter(counter);
                });
            }
        });
    }, { threshold: 0.5 });
    
    if (counters.length > 0) {
        observer.observe(counters[0].closest('.hero-stats'));
    }
}

function animateCounter(counter) {
    const target = parseInt(counter.getAttribute('data-count'));
    const increment = target / 100;
    let current = 0;
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            current = target;
            clearInterval(timer);
        }
        counter.textContent = Math.floor(current);
    }, 30);
}

// Smooth Scrolling
function initSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
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
}

// Contact Form
function initContactForm() {
    const form = document.querySelector('.contact-form');
    
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Simulate form submission
            const submitBtn = form.querySelector('button[type="submit"]');
            const originalText = submitBtn.innerHTML;
            
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin me-2"></i>Envoi en cours...';
            submitBtn.disabled = true;
            
            setTimeout(() => {
                submitBtn.innerHTML = '<i class="fas fa-check me-2"></i>Message Envoyé!';
                submitBtn.style.background = 'linear-gradient(135deg, #28a745, #20c997)';
                
                setTimeout(() => {
                    submitBtn.innerHTML = originalText;
                    submitBtn.disabled = false;
                    submitBtn.style.background = '';
                    form.reset();
                }, 3000);
            }, 2000);
        });
    }
}

// Project Interactions
function initProjectInteractions() {
    const projectItems = document.querySelectorAll('.project-item[data-project]');
    
    projectItems.forEach(item => {
        item.addEventListener('click', function() {
            const projectKey = this.getAttribute('data-project');
            if (projectDetails[projectKey]) {
                showProjectModal(projectDetails[projectKey]);
            }
        });
        
        // Add hover effect
        item.style.cursor = 'pointer';
    });
}

function showProjectModal(project) {
    const modal = document.getElementById('projectModal');
    const modalTitle = document.getElementById('projectModalTitle');
    const modalBody = document.getElementById('projectModalBody');
    
    modalTitle.textContent = project.title;
    
    modalBody.innerHTML = `
        <div class="project-modal-content">
            <p class="lead mb-4">${project.description}</p>
            
            <h5 class="mb-3">Fonctionnalités Principales</h5>
            <div class="row mb-4">
                ${project.features.map(feature => `
                    <div class="col-md-6 mb-3">
                        <div class="feature-detail">
                            <div class="feature-detail-icon">
                                <i class="${feature.icon}"></i>
                            </div>
                            <div class="feature-detail-content">
                                <h6>${feature.title}</h6>
                                <p class="mb-0">${feature.description}</p>
                            </div>
                        </div>
                    </div>
                `).join('')}
            </div>
            
            <h5 class="mb-3">Technologies Utilisées</h5>
            <div class="technologies mb-4">
                ${project.technologies.map(tech => `
                    <span class="tech-badge">${tech}</span>
                `).join('')}
            </div>
            
            <div class="project-status mb-3">
                <strong>Statut:</strong> <span class="status-badge">${project.status}</span>
            </div>
            
            ${project.website ? `
                <div class="project-actions">
                    <a href="${project.website}" target="_blank" class="btn btn-primary">
                        <i class="fas fa-external-link-alt me-2"></i>Visiter le Site
                    </a>
                </div>
            ` : ''}
        </div>
    `;
    
    // Add modal styles
    const style = document.createElement('style');
    style.textContent = `
        .feature-detail {
            display: flex;
            gap: 15px;
            padding: 20px;
            background: rgba(0, 255, 136, 0.05);
            border-radius: 10px;
            border: 1px solid rgba(0, 255, 136, 0.1);
        }
        
        .feature-detail-icon {
            width: 40px;
            height: 40px;
            background: var(--gradient-primary);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            flex-shrink: 0;
        }
        
        .feature-detail-content h6 {
            margin-bottom: 0.5rem;
            color: var(--dark-green);
            font-weight: 600;
        }
        
        .feature-detail-content p {
            color: #666;
            font-size: 0.9rem;
        }
        
        .technologies {
            display: flex;
            gap: 10px;
            flex-wrap: wrap;
        }
        
        .tech-badge {
            background: var(--gradient-primary);
            color: white;
            padding: 5px 12px;
            border-radius: 15px;
            font-size: 0.8rem;
            font-weight: 500;
        }
        
        .status-badge {
            background: rgba(40, 167, 69, 0.1);
            color: #28a745;
            padding: 3px 10px;
            border-radius: 10px;
            font-size: 0.9rem;
            font-weight: 500;
        }
        
        .project-actions {
            text-align: center;
            margin-top: 2rem;
        }
    `;
    
    if (!document.querySelector('#project-modal-styles')) {
        style.id = 'project-modal-styles';
        document.head.appendChild(style);
    }
    
    // Show modal
    const bootstrapModal = new bootstrap.Modal(modal);
    bootstrapModal.show();
}

// Intersection Observer for complex animations
function initIntersectionObserver() {
    // Solution items animation
    const solutionItems = document.querySelectorAll('.solution-item');
    
    const solutionObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add('animate');
                }, index * 200);
            }
        });
    }, { threshold: 0.3 });
    
    solutionItems.forEach(item => {
        solutionObserver.observe(item);
    });
    
    // Project items animation
    const projectItems = document.querySelectorAll('.project-item');
    
    const projectObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add('animate');
                }, index * 200);
            }
        });
    }, { threshold: 0.3 });
    
    projectItems.forEach(item => {
        projectObserver.observe(item);
    });
    
    // Service cards stagger animation
    const serviceCards = document.querySelectorAll('.service-card');
    
    const serviceObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, index * 100);
            }
        });
    }, { threshold: 0.2 });
    
    serviceCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(50px)';
        card.style.transition = 'all 0.6s ease';
        serviceObserver.observe(card);
    });
    
    // Value cards animation
    const valueCards = document.querySelectorAll('.value-card');
    
    const valueObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0) scale(1)';
                }, index * 150);
            }
        });
    }, { threshold: 0.3 });
    
    valueCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px) scale(0.9)';
        card.style.transition = 'all 0.5s ease';
        valueObserver.observe(card);
    });
    
    // Team cards animation
    const teamCards = document.querySelectorAll('.team-card');
    
    const teamObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0) rotateY(0)';
                }, index * 100);
            }
        });
    }, { threshold: 0.2 });
    
    teamCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(50px) rotateY(45deg)';
        card.style.transition = 'all 0.6s ease';
        teamObserver.observe(card);
    });
    
    // Developer cards animation
    const developerCards = document.querySelectorAll('.developer-card');
    
    const developerObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateX(0) scale(1)';
                }, index * 80);
            }
        });
    }, { threshold: 0.3 });
    
    developerCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = index % 2 === 0 ? 'translateX(-50px) scale(0.8)' : 'translateX(50px) scale(0.8)';
        card.style.transition = 'all 0.5s ease';
        developerObserver.observe(card);
    });
    
    // Sector cards wave animation
    const sectorCards = document.querySelectorAll('.sector-card');
    
    const sectorObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, index * 100);
            }
        });
    }, { threshold: 0.2 });
    
    sectorCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(40px)';
        card.style.transition = 'all 0.4s ease';
        sectorObserver.observe(card);
    });
}

// Mouse parallax effect for hero section
document.addEventListener('mousemove', function(e) {
    const hero = document.querySelector('.hero-section');
    const shapes = document.querySelectorAll('.shape');
    const floatingCards = document.querySelectorAll('.floating-card');
    
    if (hero && window.innerWidth > 768) {
        const mouseX = e.clientX / window.innerWidth;
        const mouseY = e.clientY / window.innerHeight;
        
        shapes.forEach((shape, index) => {
            const speed = (index + 1) * 0.5;
            const x = mouseX * speed * 10;
            const y = mouseY * speed * 10;
            shape.style.transform = `translate(${x}px, ${y}px)`;
        });
        
        floatingCards.forEach((card, index) => {
            const speed = (index + 1) * 0.3;
            const x = mouseX * speed * 5;
            const y = mouseY * speed * 5;
            card.style.transform = `translate(${x}px, ${y}px)`;
        });
    }
});

// Scroll progress indicator
function initScrollProgress() {
    const progressBar = document.createElement('div');
    progressBar.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 0%;
        height: 3px;
        background: linear-gradient(90deg, #00ff88, #00cc6a);
        z-index: 9999;
        transition: width 0.3s ease;
    `;
    document.body.appendChild(progressBar);
    
    window.addEventListener('scroll', () => {
        const windowHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrolled = (window.scrollY / windowHeight) * 100;
        progressBar.style.width = scrolled + '%';
    });
}

// Initialize scroll progress
initScrollProgress();

// Dynamic text animations
function initTextAnimations() {
    const textElements = document.querySelectorAll('[data-animate-text]');
    
    textElements.forEach(element => {
        const text = element.textContent;
        element.innerHTML = '';
        
        text.split('').forEach((char, index) => {
            const span = document.createElement('span');
            span.textContent = char === ' ' ? '\u00A0' : char;
            span.style.opacity = '0';
            span.style.transform = 'translateY(50px)';
            span.style.transition = `all 0.5s ease ${index * 0.05}s`;
            element.appendChild(span);
        });
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const spans = entry.target.querySelectorAll('span');
                    spans.forEach(span => {
                        span.style.opacity = '1';
                        span.style.transform = 'translateY(0)';
                    });
                }
            });
        }, { threshold: 0.5 });
        
        observer.observe(element);
    });
}

// Initialize text animations
initTextAnimations();

// Window resize handler
window.addEventListener('resize', function() {
    // Recalculate animations on resize
    if (window.innerWidth <= 768) {
        // Disable some animations on mobile
        document.querySelectorAll('.floating-card').forEach(card => {
            card.style.transform = 'none';
        });
    }
});

// Performance optimization: pause animations when tab is not visible
document.addEventListener('visibilitychange', function() {
    const particles = document.querySelectorAll('.particle');
    
    if (document.hidden) {
        particles.forEach(particle => {
            particle.style.animationPlayState = 'paused';
        });
    } else {
        particles.forEach(particle => {
            particle.style.animationPlayState = 'running';
        });
    }
});

// Newsletter form handler
document.addEventListener('DOMContentLoaded', function() {
    const newsletterForm = document.querySelector('.newsletter-form');
    
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const input = this.querySelector('input');
            const button = this.querySelector('button');
            
            if (input.value.trim()) {
                button.innerHTML = '<i class="fas fa-check"></i>';
                button.style.background = '#28a745';
                
                setTimeout(() => {
                    button.innerHTML = '<i class="fas fa-paper-plane"></i>';
                    button.style.background = '';
                    input.value = '';
                }, 2000);
            }
        });
    }
});

// Add floating animation to partnership icons
function initPartnershipAnimations() {
    const partnerIcons = document.querySelectorAll('.partner-icon');
    
    partnerIcons.forEach((icon, index) => {
        icon.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) rotate(10deg) scale(1.1)';
        });
        
        icon.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) rotate(0deg) scale(1)';
        });
    });
}

// Initialize partnership animations
setTimeout(initPartnershipAnimations, 1000);

// Lazy loading for heavy elements
function initLazyLoading() {
    const lazyElements = document.querySelectorAll('[data-lazy]');
    
    const lazyObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const element = entry.target;
                element.classList.add('loaded');
                lazyObserver.unobserve(element);
            }
        });
    });
    
    lazyElements.forEach(element => {
        lazyObserver.observe(element);
    });
}

// Initialize lazy loading
initLazyLoading();