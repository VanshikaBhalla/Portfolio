const resumeBtns = document.querySelectorAll('.resume-btn');

resumeBtns.forEach((btn, i) => {
    btn.addEventListener('click',() => {
        const resumeDetails = document.querySelectorAll('.resume-detail');
        
        resumeBtns.forEach(btn => {
            btn.classList.remove('active');
        });
        
        btn.classList.add('active');

        resumeDetails.forEach(detail => {
            detail.classList.remove('active');
        });

        resumeDetails[i].classList.add('active');
    });
});

const navLinks = document.querySelectorAll('.redirect');
const sections = document.querySelectorAll('section');

navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();

        navLinks.forEach(lnk => lnk.classList.remove('active'));
        sections.forEach(sec => sec.classList.remove('active'));

        this.classList.add('active');

        const targetId = this.getAttribute('href').replace('#', '');
        if (targetId === "") {
            document.querySelector('.home').classList.add('active');
        } else {
            const target = document.getElementById(targetId);
            if (target) target.classList.add('active');
        }
    });
});

// Mobile menu toggle
const menuIcon = document.getElementById('menu-icon');
menuIcon.addEventListener('click', () => {
    document.querySelector('nav').classList.toggle('open');
});

// Close menu on nav link click
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.querySelector('nav').classList.remove('open');
    });
});

document.getElementById('year').textContent = new Date().getFullYear();