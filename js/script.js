// Toggle class active
const navbarNav = document.querySelector('.navbar-nav');
// ketika hamburger menu diklik
document.querySelector('#hamburger-menu').onclick = () => {
    navbarNav.classList.toggle('active');
};

// klik diluar sidebar untuk menghilangkan navigasi side bar
const hamburger = document.querySelector('#hamburger-menu');
// ketika klik dmnapun dihalaman, maka sidebar disembunyikan
document.addEventListener('click', function (e) {
    // jika klik diluar hamburger dan navigasi bar maka akan tertutup sidebarnya
    if(!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active');
    }
});