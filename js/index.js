let buttons = document.querySelectorAll(".navbar-item");

buttons.forEach((el) => {
	el.addEventListener("click", (e) => {
		buttons.forEach((el) => {
			el.classList.remove("selected");
		});
		if (e.target.nodeName == "LI") {
			e.target.classList.add("selected");
		} else {
			e.target.parentElement.classList.add("selected");
		}
	});
});
