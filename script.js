function toggleMenu(){
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle(".open")
}

// function toggleNavigation() {
//     const desktopNav = document.getElementById('desktop-nav');
//     const hamburgerNav = document.getElementById('hamburger-nav');

//     if (window.innerWidth < 1200) { // Adjust the screen width as needed
//         desktopNav.style.display = 'none';
//         hamburgerNav.style.display = 'flex';
//     } else {
//         desktopNav
//         desktopNav.style.display = ''; // using default format on css
//         hamburgerNav.style.display = 'none';
//     }
// }

// // Call the function on page load and when the window is resized
// window.addEventListener('load', toggleNavigation);
// window.addEventListener('resize', toggleNavigation);
