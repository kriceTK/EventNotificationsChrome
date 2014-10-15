var p = $(".ev-match div:contains('Tinker') .ev-timer").first().text()

var n = new Date();
var m = 0;

if (p[3] != '0' || p[4] != '0') {
	m = parseInt(p[3]+p[4]);
	m = m * 60000;
}

p = parseInt(p);
var now = n.getHours();
var soon = p-now;
var soon = soon * 3600000 + m;

setTimeout(function(){alert('Tinker is playing now!')}, soon)