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
    threshold: 0.1,  // Trigger when 10% of element is visible
    rootMargin: '0px 0px -50px 0px'  // Trigger slightly before element enters viewport
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('scroll-visible');
            // Optional: Stop observing after animation to improve performance
            // observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all elements with scroll animation classes when page loads
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll(
        '.scroll-hidden, .scroll-fade-left, .scroll-fade-right, .scroll-scale'
    );
    
    animatedElements.forEach(element => {
        observer.observe(element);
    });
});

// Observe all elements with scroll animation classes when page loads
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll(
        '.scroll-hidden, .scroll-fade-left, .scroll-fade-right, .scroll-scale'
    );
    
    animatedElements.forEach(element => {
        observer.observe(element);
    });
});