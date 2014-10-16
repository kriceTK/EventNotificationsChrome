var team = "";
var getLocal = function() {
	chrome.extension.sendRequest({
		method: "getLocalStorage", key: "team"},
		function(response) {
			if (response.data == '') {
				setTimeout(function(){
					getLocal();
				},3000);
			} else {
				team = response.data;
				teamAlert(team);
			}
		}
	);
}
var teamAlert = function(team) {
	var p = $(".ev-match div:contains("+team+''+") .ev-timer").first().text();
	var n = new Date();
	var h = p.split(":");
	var k = n.getHours();
	if (k >= 12) k = k-12;

	var soon = (h[0]-k)* 3600000 + (h[1]-n.getMinutes())*60000;
	if (soon > 0) {
		alert('You will be alerted in '+parseInt(soon/1000/60/60,10)+'h '+parseInt(soon/1000/60%60,10)+'m for Team ' + team);
		setTimeout(function () {alert('Watch Dota!')}, soon);
		return false;
	}
}
getLocal();