document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelector('.nav-links');
    const button = document.querySelector('button');

    button.addEventListener('click', function () {
        navLinks.classList.toggle('show');
    });
});
