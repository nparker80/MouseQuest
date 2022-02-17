$(document).ready(function() {
	const emailField = $('#email_Input');
	const usernameField = $('#create_username_Input');
	const passwordField = $('#create_password_Input');
	const signupBtn = $('#signUp_Button');
	signupBtn.on('click', async function(event) {
		event.preventDefault();
		await $.post('/api/users/signup', {
			email: emailField.val(),
			username: usernameField.val(),
			password: passwordField.val(),
		});

		window.location.href = '/login';
	});
});