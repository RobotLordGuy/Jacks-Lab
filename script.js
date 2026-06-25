// projects array is loaded from projects-data.js (included before this script in index.html)

// ===== MOBILE MENU TOGGLE =====
const hamburger = document.getElementById('hamburger');
const navMenu = document.querySelector('.nav-menu');
const projectsSection = document.querySelector('.js-projects-grid');

let projectsHTML = '';

if (hamburger) {
    hamburger.addEventListener('click', () => {
        navMenu.style.display = navMenu.style.display === 'flex' ? 'none' : 'flex';
    });
}

// ===== PROJECT FILTERING =====
const filterBtns = document.querySelectorAll('.filter-btn');

// ===== SMOOTH SCROLL FOR NAVIGATION LINKS =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            if (navMenu && navMenu.style.display === 'flex') {
                navMenu.style.display = 'none';
            }
        }
    });
});

// ===== CLOSE MOBILE MENU WHEN CLICKING OUTSIDE =====
document.addEventListener('click', (e) => {
    if (navMenu && navMenu.style.display === 'flex' && !e.target.closest('nav')) {
        navMenu.style.display = 'none';
    }
});

// ===== SCROLL ANIMATION FOR PROJECT CARDS =====
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.classList.contains('animated')) {
            entry.target.classList.add('animated');
            entry.target.style.animation = 'fadeInUp 0.6s ease';
        }
    });
}, observerOptions);

console.log('Script loaded successfully!');

// ===== BUILD PROJECT CARDS =====
projects.forEach((project, index) => {
    const skillsHTML = project.skills.map(skill => `<span class="tag">${skill}</span>`).join('');

    projectsHTML += `
    <div class="project-card" data-category="${project.field}">
        <img class="project-image" src="${project.thumbnail}" alt="${project.title}">
        <div class="project-content">
            <h3>${project.title}</h3>
            <p class="project-category">${project.field}</p>
            <p class="project-description">${project.description}</p>
            <div class="project-tags">
                ${skillsHTML}
            </div>
            <a href="project.html?id=${index}" class="project-link">Learn More →</a>
        </div>
    </div>
    `;
});

projectsSection.innerHTML = projectsHTML;

// Now that project cards are in the DOM, set up filtering and observers
const projectCards = document.querySelectorAll('.project-card');

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const filterValue = btn.getAttribute('data-filter');

        projectCards.forEach(card => {
            const cardCategory = card.getAttribute('data-category');
            if (filterValue === 'all' || cardCategory === filterValue) {
                card.classList.remove('hidden');
            } else {
                card.classList.add('hidden');
            }
        });
    });
});

projectCards.forEach(card => observer.observe(card));
