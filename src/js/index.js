document.cookie = "SameSite=Lax";

function toggleNav(event) {
	let nav = document.querySelector(".mobile-nav");
	let burger = document.querySelector(".hamburger");
	let kereszt = document.querySelector(".kereszt");

	nav.classList.toggle("left-1/4");
	nav.classList.toggle("left-full");

	burger.classList.toggle("visible");
	burger.classList.toggle("block");
	burger.classList.toggle("invisible");
	burger.classList.toggle("hidden");

	kereszt.classList.toggle("visible");
	kereszt.classList.toggle("block");
	kereszt.classList.toggle("invisible");
	kereszt.classList.toggle("hidden");
}
