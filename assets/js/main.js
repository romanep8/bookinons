const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {
    const question = item.querySelector(".faq-question");

    question.addEventListener("click", () => {
        item.classList.toggle("active");
    });
});

document.querySelectorAll('header nav a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        const headerHeight = document.getElementById('sticky-header').offsetHeight;

        if (targetElement) {
            const targetPosition = targetElement.offsetTop - headerHeight;
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

document.querySelectorAll('.logos').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        const headerHeight = document.getElementById('sticky-header').offsetHeight;

        if (targetElement) {
            const targetPosition = targetElement.offsetTop - headerHeight;
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

const burger = document.querySelector('.hbg');
const navmenu = document.querySelector('.nav-menu');
  
burger.addEventListener('click', function(e) {
    e.preventDefault();
    navmenu.classList.toggle('open');
    burger.classList.toggle('hbgcross');
});

function closeMenuOnResize() {
    if (window.innerWidth > 750) {
        navmenu.classList.remove('open');
        burger.classList.remove('hbgcross');
    }
}

window.addEventListener('resize', closeMenuOnResize);

