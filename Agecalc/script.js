function calculateDetailedAge(birthDateString) {
	const today = new Date();
	const birthDate = new Date(birthDateString);

	let age = today.getFullYear() - birthDate.getFullYear();
	const m = today.getMonth() - birthDate.getMonth();

	if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
		age--;
	}

	// Calculate remaining months and days
	let months = today.getMonth() - birthDate.getMonth();
	if (months < 0 || (months === 0 && today.getDate() < birthDate.getDate())) {
		months += 12;
	}

	let days = today.getDate() - birthDate.getDate();
	if (days < 0) {
		const tempDate = new Date(today.getFullYear(), today.getMonth(), 0);
		days += tempDate.getDate();
		months--;
	}

	// Calculate remaining hours and minutes
	const diffInMilliseconds = Math.abs(today - birthDate);

	const years = age;
	const hours = Math.floor(diffInMilliseconds / (1000 * 60 *60));
	const minutes = Math.floor(diffInMilliseconds / (1000 *60)) %60;

	return { years, months, days, hours, minutes };
}

function displayAge() {
	const birthdateString = document.getElementById('birthdate').value;

	if (birthdateString) {
		const detailedAge = calculateDetailedAge(birthdateString);
		document.getElementById('age').textContent =
			`You are ${detailedAge.years} years, ${detailedAge.months} months,
			and ${detailedAge.days} days old. Additionally, you have lived for 
			${detailedAge.hours} hours and ${detailedAge.minutes} minutes.`
    }
	else{
	document.getElementById('age').textContent ='Please enter your date of birth';
}
}
