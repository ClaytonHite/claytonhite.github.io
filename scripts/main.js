const mobileMenuButton = document.getElementById('mobileNavMenu');
const mobileMenu = document.querySelector('.nav-links-container');

mobileMenuButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('open-nav-links');
    mobileMenuButton.classList.toggle('open-nav-links');
})