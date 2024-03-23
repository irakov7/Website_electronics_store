
function timer () {

	//timer
	const endDate = new Date();
	endDate.setDate(endDate.getDate() + 3);

	//const endDate = new Date('2024-03-20');
	
	const daysElement = document.querySelector('#days');
	const hoursElement = document.querySelector('#hours');
	const minutesElement = document.querySelector('#minutes');
	const secondsElement = document.querySelector('#seconds');

	let  timerInterval;

	function getZero(num) {
		if (num >= 0 && num < 10) {
			return `0${num}`;
		}else {
			return num;
		}
	}

	function updateTimer() {
		const now = new Date();
		const t = endDate - now;

		if (t <= 0) {
			daysElement.innerText = '00';
			hoursElement.innerText = '00';
			minutesElement.innerText = '00';
			secondsElement.innerText = '00';
			clearInterval(timerInterval);
			return
		}

		const days = Math.floor(t / (1000 * 60 * 60 * 24));
		const hours = Math.floor((t / (1000 * 60 * 60) % 24));
		const minutes = Math.floor((t / 1000 / 60) % 60);
		const seconds = Math.floor((t / 1000) % 60);
		
		daysElement.innerText = getZero(days);
		hoursElement.innerText = getZero(hours);
		minutesElement.innerText = getZero(minutes);
		secondsElement.innerText = getZero(seconds);

	}
	updateTimer();
	timerInterval = setInterval(updateTimer, 1000);
	
}
export default timer;