const comment = document.querySelector('#addComment');
const showCommentField = document.querySelector('#toggleComment');
const submitComment = document.querySelector('#submitComment');


const addComment = () => {
	if (showCommentField.getAttribute('style') === 'display:none') {
		showCommentField.setAttribute('style', 'display:visible');
	} else {
		showCommentField.setAttribute('style', 'display:none');
	}
};

const commentFormHandler = async (event) => {
    event.preventDefault();
	const commentText = document.querySelector('#commentText').value.trim();
	const gameId = document.querySelector('#gameId').textContent;
	if (commentText) {
		const response = await fetch('/api/comment/', {
			method: 'POST',
			body: JSON.stringify({ commentText, gameId}),
			headers: { 'Content-Type': 'application/json' },
		});
		if (response.ok) {
			addComment();
			document.location.replace('/');
		} else {
			alert('Failed to create comment.');
		}
	}
};

submitComment.addEventListener('click', commentFormHandler);
comment.addEventListener('click', addComment);
