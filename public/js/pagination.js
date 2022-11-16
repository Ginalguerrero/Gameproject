const windowVal = window.location.href.split('/');
const pageCategory = windowVal[windowVal.length - 2];
let pageNum = windowVal[windowVal.length - 1];

let href5 = document.querySelector('#href5');
let href4 = document.querySelector('#href4');
let href3 = document.querySelector('#href3');
let href2 = document.querySelector('#href2');
let href1 = document.querySelector('#href1');
let href0 = document.querySelector('#href0');

const displayPagination = () => {
	console.log(pageNum);
	if (pageNum >= 3) {
		href0.setAttribute('href', `/0`);
		href0.textContent = 'Home';
	} else {
		href0.setAttribute('style', 'display:none');
	}
	if (pageNum === 1) {
		pageNum-= 1;
        console.log(pageNum);
		href1.setAttribute('href', `/${pageNum}`);
		href1.textContent = `${pageNum}`;
		pageNum++;
		href2.setAttribute('href', `/${pageNum}`);
		href2.textContent = `${pageNum}`;
		href2.setAttribute('class', 'page active');
		pageNum++;
		href3.setAttribute('href', `/${pageNum}`);
		href3.textContent = `${pageNum}`;
		pageNum++;
		href4.setAttribute('href', `/${pageNum}`);
		href4.textContent = `${pageNum}`;
		pageNum++;
		href5.setAttribute('href', `/${pageNum}`);
		href5.textContent = `${pageNum}`;
	} else if (pageNum >= 2) {
		href1.setAttribute('href', `/${pageNum - 2}`);
		href1.textContent = `${pageNum - 2}`;
		href2.setAttribute('href', `/${pageNum - 1}`);
		href2.textContent = `${pageNum - 1}`;
		href3.setAttribute('href', `/${pageNum}`);
		href3.setAttribute('class', 'page active');
		href3.textContent = `${pageNum}`;
		pageNum++;
		href4.setAttribute('href', `/${pageNum}`);
		href4.textContent = `${pageNum}`;
		pageNum++;
		href5.setAttribute('href', `/${pageNum}`);
		href5.textContent = `${pageNum}`;
	} else {
		href1.setAttribute('href', `/${pageNum}`);
		href1.setAttribute('class', 'page active');
		href1.textContent = `${pageNum}`;
		pageNum++;
		href2.setAttribute('href', `/${pageNum}`);
		href2.textContent = `${pageNum}`;
		pageNum++;
		href3.setAttribute('href', `/${pageNum}`);
		href3.textContent = `${pageNum}`;
		pageNum++;
		href4.setAttribute('href', `/${pageNum}`);
		href4.textContent = `${pageNum}`;
		pageNum++;
		href5.setAttribute('href', `/${pageNum}`);
		href5.textContent = `${pageNum}`;
	}
};

displayPagination();
