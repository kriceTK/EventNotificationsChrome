var saveteam = function () {
	var team = document.getElementById("name");
	localStorage["team"] = team.value;
}

document.getElementById('teamName').onclick = saveteam;