const primary = document.querySelector("#primary");
const screenshots = document.querySelector("#screenShots");

screenshots.addEventListener('click', (event) => {
	const source = event.target.getAttribute('src');
	const description = event.target.getAttribute('alt');
	primary.setAttribute('src', source);
	primary.setAttribute('alt', description);
});