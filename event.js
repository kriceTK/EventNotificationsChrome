$(document).ready(function() {
	var p = $(".ev-match div:contains('Tinker') .ev-timer").first().text();
	var n = new Date();
	var h = p.split(":");

	var soon = (h[0]-n.getHours())* 3600000 + (h[1]-n.getMinutes())*60000;
	if (soon > 0) {
		alert('You will be alerted in '+parseInt(soon/1000/60/60,10)+'h '+parseInt(soon/1000/60%60,10)+'m');
		setTimeout(function () {alert('Watch Dota!')}, soon);
		return false;
	}
});