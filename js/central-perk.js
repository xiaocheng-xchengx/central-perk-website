function toggleMenu() {
	var x = document.getElementById("hamburger");
	x.classList.toggle("change");
	  
	var y = document.getElementById("mobile-menu");
	if (y.style.display === "block") {
		y.style.display = "none";
	} else {
		y.style.display = "block";
	}
}