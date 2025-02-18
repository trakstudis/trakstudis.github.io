function fetchCountry() {
	return fetch('https://ipapi.co/json/')
		.then(response => response.json())
		.then(data => data.country_name)
		.catch(error => {
			console.error('Error fetching country:', error);
			return '';
		});
}

const typewriter = new Typewriter(document.getElementById('typewriter'), {
	loop: false,
	delay: 90
});

fetchCountry().then(countryName => {
	const message = 'Welcome from ' + (countryName);
	const message2 = '@trakstudis'
	typewriter.pauseFor(2000);
	typewriter.typeString(message).start();
	typewriter.pauseFor(2000);
	typewriter.deleteAll(110);
	typewriter.typeString(message2);
});