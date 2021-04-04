const dropdown = document.querySelector('.navbar-dropdown');
const dropdownContent = document.querySelector('.navbar-content');
dropdown.addEventListener('click', () => {
    dropdownContent.classList.toggle('open');
});