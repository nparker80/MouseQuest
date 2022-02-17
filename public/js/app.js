// test
$(document).ready(function() {
	const usernameField = $('#username_Input');
	const emailField = $('#emailField');
	const passwordField = $('#password_Input');
	const signinBtn = $('#login_Button');
	const logoutBtn = $('#logout');
	signinBtn.on('click', async function(event) {
		event.preventDefault();
		await $.post('/api/users/login', {
			username: usernameField.val().trim(),
			password: passwordField.val().trim(),
		});
		window.location.href = '/';
	});
	logoutBtn.on('click', async function() {
		await $.post('/api/users/logout');
		window.location.href = '/';
	});
});