// Smooth Scrolling for Navigation Links
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        document.getElementById(targetId).scrollIntoView({ behavior: 'smooth' });
    });
});

// Add hover animation effect dynamically
document.querySelectorAll('.skill').forEach(skill => {
    skill.addEventListener('mouseover', () => {
        skill.style.transform = "scale(1.2) rotate(5deg)";
    });

    skill.addEventListener('mouseleave', () => {
        skill.style.transform = "scale(1) rotate(0)";
    });
});

// Form Validation
document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const message = document.getElementById('message');

    if (name.value.trim() === "" || email.value.trim() === "" || message.value.trim() === "") {
        alert("All fields are required!");
        return;
    }

    alert("Message Sent Successfully!");
    this.reset();
});

// Sticky Header on Scroll
window.addEventListener('scroll', () => {
    let header = document.querySelector("header");
    if (window.scrollY > 50) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});

// Reveal Sections on Scroll
const sections = document.querySelectorAll('section');
const revealSection = () => {
    sections.forEach(section => {
        let rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
            section.classList.add('visible');
        }
    });
};
window.addEventListener('scroll', revealSection);
window.addEventListener('load', revealSection);

// Highlight active link based on scroll position
const navLinks = document.querySelectorAll('nav ul li a');

const highlightActiveLink = () => {
    let currentSection = "";

    sections.forEach(section => {
        let rect = section.getBoundingClientRect();
        if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
            currentSection = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href").substring(1) === currentSection) {
            link.classList.add("active");
        }
    });
};

// Add the event listener to update active link on scroll
window.addEventListener("scroll", highlightActiveLink);
document.addEventListener("DOMContentLoaded", function () {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                document.querySelectorAll(".about-list li").forEach((li, index) => {
                    setTimeout(() => {
                        li.classList.add("show");
                    }, index * 300); // Delay each item
                });
            }
        });
    }, { threshold: 0.5 });

    observer.observe(document.querySelector("#about"));
});
function toggleMenu() {
    document.getElementById('menu').classList.toggle('show');
}