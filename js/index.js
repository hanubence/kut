const dropdown = document.querySelector(".navbar-dropdown");
const dropdownContent = document.querySelector(".dropdown-content");
dropdown.addEventListener("click", () => {
	dropdownContent.classList.toggle("open");
});
