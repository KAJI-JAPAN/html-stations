function exec() {
	var result = station.getData();
	var elem = document.getElementById("result");
	elem.innerHTML = result;
}