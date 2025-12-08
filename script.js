function toggleMenu() {
    const menu = document.getElementById("mobile-menu");
    const icon = document.querySelector(".hamburger-icon-small");
    if (menu) {
        menu.classList.toggle("open");
    }
    if (icon) {
        icon.classList.toggle("open");
    }
}

// Smooth scroll to contact section
function scrollToContact() {
    const contactSection = document.getElementById("contact");
    
    if (contactSection) {
        const offset = 100;
        const elementPosition = contactSection.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;

        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
    }
}

// Scroll Animation Observer
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Element enters viewport -> show animation
            entry.target.classList.add('scroll-visible');
        } else {
            // Element leaves viewport -> reset animation
            entry.target.classList.remove('scroll-visible');
        }
    });
}, observerOptions);

document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll(
        '.scroll-hidden, .scroll-fade-left, .scroll-fade-right, .scroll-scale'
    );
    
    animatedElements.forEach(element => {
        observer.observe(element);
    });
});


// Section Indicator
const sectionIndicator = document.getElementById('section-indicator');
const sections = [
    { id: 'profile', name: 'Home' },
    { id: 'skills', name: 'Skills' },
    { id: 'about', name: 'About' },
    { id: 'portfolio', name: 'Portfolio' },
    { id: 'contact', name: 'Contact' }
];

const sectionObserverOptions = {
    threshold: 0.3,
    rootMargin: '-100px 0px -50% 0px'
};

const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const sectionId = entry.target.id;
            const section = sections.find(s => s.id === sectionId);
            if (section && sectionIndicator) {
                sectionIndicator.textContent = section.name;
                sectionIndicator.classList.add('active');
            }
        }
    });
}, sectionObserverOptions);

// Observe all sections
sections.forEach(section => {
    const element = document.getElementById(section.id);
    if (element) {
        sectionObserver.observe(element);
    }
});

// Set initial section on page load
window.addEventListener('load', () => {
    const scrollPosition = window.scrollY + 150;
    let currentSection = sections[0];
    
    sections.forEach(section => {
        const element = document.getElementById(section.id);
        if (element) {
            const rect = element.getBoundingClientRect();
            const elementTop = rect.top + window.scrollY;
            if (scrollPosition >= elementTop) {
                currentSection = section;
            }
        }
    });
    
    if (sectionIndicator) {
        sectionIndicator.textContent = currentSection.name;
        sectionIndicator.classList.add('active');
    }
});