// 1. Theme Persistence Logic
const applyTheme = () => {
    const savedTheme = localStorage.getItem('theme');
    const toggle = document.getElementById('theme-toggle');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
        if (toggle) toggle.checked = true;
    }
};

// 2. One-Time Loader Logic
const visited = sessionStorage.getItem('visited');
const preloader = document.getElementById('preloader');
const progressText = document.getElementById('progress');

if (preloader) {
    if (!visited) {
        let progress = 0;
        let loaderInterval = setInterval(() => {
            progress++;
            if (progressText) progressText.textContent = `${progress}%`;
            if (progress >= 100) {
                clearInterval(loaderInterval);
                sessionStorage.setItem('visited', 'true');
                preloader.style.display = 'none';
            }
        }, 20);
    } else {
        preloader.style.display = 'none';
    }
}

// 3. Dark Mode Toggle Listener
const toggle = document.getElementById('theme-toggle');
if (toggle) {
    toggle.addEventListener('change', () => {
        const isDark = document.body.classList.toggle('dark-mode');
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
    });
}

// 4. Bar Graph Animation (About page)
const animateSkills = () => {
    const bars = document.querySelectorAll('.bar-fill');
    bars.forEach(bar => {
        const percentage = bar.getAttribute('data-percent');
        setTimeout(() => { bar.style.width = percentage + '%'; }, 300);
    });
};

// Initialize on Load
document.addEventListener('DOMContentLoaded', () => {
    applyTheme();
    if (document.querySelector('.skills-container')) animateSkills();
});

// 5. Hero Vanta.js (Home page)
if(document.getElementById('hero')){
    VANTA.NET({
        el: "#hero", mouseControls: true, touchControls: true, minHeight: 200.00,
        minWidth: 200.00, scale: 1.00, scaleMobile: 1.00, backgroundAlpha: 0,
        color: 0x4aa3ff, points: 10, spacing: 15
    });
}

// 6. Accordion (Gallery)
const accordionItems = document.querySelectorAll(".accordion-item");
accordionItems.forEach(item => {
    const header = item.querySelector(".accordion-header");
    if(header) {
        header.addEventListener("click", () => {
            const openItem = document.querySelector(".accordion-item.active");
            if(item.classList.contains("active")) {
                item.querySelector(".accordion-content").style.maxHeight = null;
                item.classList.remove("active");
            } else {
                item.querySelector(".accordion-content").style.maxHeight = item.querySelector(".accordion-content").scrollHeight + "px";
                item.classList.add("active");
                if(openItem && openItem !== item) {
                    openItem.querySelector(".accordion-content").style.maxHeight = null;
                    openItem.classList.remove("active");
                }
            }
        });
    }
});