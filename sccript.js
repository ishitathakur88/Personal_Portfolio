document.addEventListener('DOMContentLoaded', () => {
    const toggler = document.querySelector('.toggler');
    const navLinks = document.querySelector('.nav-links');
    const navItems = document.querySelectorAll('.nav-item');

    toggler.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    navItems.forEach(item => {
        item.addEventListener('click', () => {
            navItems.forEach(link => link.classList.remove('nav-item-active'));
            item.classList.add('nav-item-active');
        });
    });
});
