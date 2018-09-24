/* global myApi, document */

document.getElementById('send_btn').onclick = () => {
	myApi.get('/greetings', {
		params: {
			name: document.getElementById('name_input').value
		}
	})
		.then(function (response) {
			console.log(response)
			document.getElementById('msg').textContent = response.data.msg
		})
		.catch(function (error) {
			console.error(error)
		})
}
