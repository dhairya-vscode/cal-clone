document.addEventListener('DOMContentLoaded', () => {
    const navContent = document.querySelector('.nav-content');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 20) {
            navContent.classList.add('scrolled');
        } else {
            navContent.classList.remove('scrolled');
        }
    });
});