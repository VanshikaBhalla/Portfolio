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

        // Remove 'active' class from all links and sections
        navLinks.forEach(lnk => lnk.classList.remove('active'));
        sections.forEach(sec => sec.classList.remove('active'));

        // Add 'active' class to the clicked link
        this.classList.add('active');

        // Get the target section ID from href and make it active
        const targetId = this.getAttribute('href').replace('#', '');
        // For the "Home" link which has href="#", we handle it specifically
        if (targetId === "") {
            document.querySelector('.home').classList.add('active');
        } else {
            document.getElementById(targetId).classList.add('active');
        }
    });
});