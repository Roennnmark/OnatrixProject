document.addEventListener('DOMContentLoaded', function () {
    const currentLocation = window.location.pathname;
    const menuLinks = document.querySelectorAll('.nav-menu a');
    
    menuLinks.forEach(link => {
        if (link.getAttribute('href') === currentLocation) {
            link.classList.add('active');
        }
    });
});