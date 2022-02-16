$(document).ready(function() {
	const helmetFeild= $('#user_Helmet');
	const armorField = $('#user_Armor');
	const weaponsField = $('#user_Weapons');
    const capeField = $('#user_Cape');
    const aboutField = $('#user_About');
	const postBtn = $('#post_Button');
	postBtn.on('click', async function(event) {
		event.preventDefault();
		await $.post('/api/users/signup', {
			helmet: helmetFeild.val(),
			armor: armorField.val(),
            weapon: weaponsField.val(),
            cape: capeField.val(),
            about: aboutField.val(),
		});

		window.location.href = '/login';
	});
});
