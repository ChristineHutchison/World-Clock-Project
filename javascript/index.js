//London
function updateTime() {
	let londonElement = document.querySelector("#london");
	let londonDateElement = londonElement.querySelector(".date");
	let londonTimeElement = londonElement.querySelector(".time");
	let londonTime = moment().tz("Europe/London");

	londonDateElement.innerHTML = londonTime.format("Do MMMM YYYY");
	londonTimeElement.innerHTML = `${londonTime.format(
		"h:mm:ss [<small>]A[</small>]"
	)}`;

	//Los Angeles
	let losAngelesElement = document.querySelector("#los-angeles");
	let losAngelesDateElement = losAngelesElement.querySelector(".date");
	let losAngelesTimeElement = losAngelesElement.querySelector(".time");
	let losAngelesTime = moment().tz("America/Los_Angeles");

	losAngelesDateElement.innerHTML = losAngelesTime.format("Do MMMM YYYY");
	losAngelesTimeElement.innerHTML = `${losAngelesTime.format(
		"h:mm:ss [<small>]A[</small>]"
	)}`;

	//Sydney
	let sydneyElement = document.querySelector("#sydney");
	let sydneyDateElement = sydneyElement.querySelector(".date");
	let sydneyTimeElement = sydneyElement.querySelector(".time");
	let sydneyTime = moment().tz("Australia/Sydney");

	sydneyDateElement.innerHTML = sydneyTime.format("Do MMMM YYYY");
	sydneyTimeElement.innerHTML = `${sydneyTime.format(
		"h:mm:ss [<small>]A[</small>]"
	)}`;
}
updateTime();
setInterval(updateTime, 1000);
