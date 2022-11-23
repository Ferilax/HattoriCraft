"use strict";

const anchors = document.querySelectorAll('a[href*="#"]');

for (let anchor of anchors) {
	anchor.addEventListener("click", function(e) {
		e.preventDefault();
		const blockID = anchor.getAttribute('href');
		document.querySelector('' + blockID).scrollIntoView({
			behavior: "smooth",
			block: "start"
		})
	})
}

new ClipboardJS('.btn');

function deleteThis() {
	thisMessage.classList.remove('active');
}

const button = document.querySelector('.start__button');
const thisMessage = document.querySelector('.wrapper__clipboard')
button.addEventListener("click", function(e) {
	thisMessage.classList.add('active');
	setTimeout(deleteThis, 1000);
})