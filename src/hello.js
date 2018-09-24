/* global myApi, document */

myApi.get('/hello')
	.then(function (response) {
		console.log(response)
		document.getElementById('msg').textContent = response.data.msg
	})
	.catch(function (error) {
		console.error(error)
	})
