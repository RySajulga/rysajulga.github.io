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
