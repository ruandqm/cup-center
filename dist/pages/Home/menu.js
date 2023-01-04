"use strict";
const menuButton = document.querySelector('.MenuColapsado');
const navBar = document.querySelector('nav');
menuButton === null || menuButton === void 0 ? void 0 : menuButton.addEventListener('click', () => {
    if (navBar.style.display === 'flex') {
        navBar.style.display = 'none';
    }
    else {
        navBar.style.display = 'flex';
    }
});
//# sourceMappingURL=menu.js.map