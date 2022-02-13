document.getElementById("menu-open-close").addEventListener("click", openClose)

const isActive = document.querySelector(".side-bar-active")
const footerIsActive = document.querySelector(".footer-active")

function openClose() {

    if(isActive.classList.contains("side-bar-active")) {
		isActive.classList.remove("side-bar-active");
        isActive.classList.add("side-bar-inactive");
		footerIsActive.classList.remove("footer-active");
		footerIsActive.classList.add("footer-deactive");
	}

	else {
		isActive.classList.add("side-bar-active");
        isActive.classList.remove("side-bar-inactive");
		footerIsActive.classList.remove("footer-deactive");
		footerIsActive.classList.add("footer-active");
	}
}

