/*
Creator: Jake White
Date created: 09/30/2019
Date last modified: 10/26/2019 
*/


function setMinDate() {
	var date = new Date();
	var y = date.getFullYear();
	var m = date.getMonth() + 1;
	var d = date.getDate() + 1;
	if (m < 10) {
		m = "0" + m;
	}
	if (d < 10) {
		d = "0" + d;
	}
	var today = y + "-" + m + "-" + d;
	document.getElementById("dayDue").min = today;
}

function createTask() {
	var task = document.getElementById("taskName").value;
	var daysDue = calcDaysDue();
	if (daysDue === 1) {
	var string = '<span>' + task + '</span>' +
		'<button type="button" class="close" data-dismiss="alert" aria-label="Close" style="padding: 5px 10px 5px 10px;">' +
			'<span aria-hidden="true">&times;</span>' +
		'</button>' +
		'<br>' + daysDue + " day";
	} else {
	var string = '<span>' + task + '</span>' +
		'<button type="button" class="close" data-dismiss="alert" aria-label="Close" style="padding: 5px 10px 5px 10px;">' +
			'<span aria-hidden="true">&times;</span>' +
		'</button>' +
		'<br>' + daysDue + " day(s)";
	}
	var node = document.createElement("div");
	styleTask(node, daysDue);
	node.innerHTML = string;
	document.getElementById("toDoList").appendChild(node);
}

function styleTask(elmnt, day) {
	elmnt.setAttribute("class", "col-xs-auto alert alert-warning alert-dismissible show");
	elmnt.setAttribute("role", "alert");
	elmnt.style.order = day;
	elmnt.style.padding = "5px 35px 5px 5px";
	elmnt.style.borderRadius = "10px 10px 10px 10px";
	if (day >= 7) {
		elmnt.style.backgroundColor = "rgba(128, 128, 128, 0.5)";
	}
	if (day < 7 && day >= 3) {
		elmnt.style.backgroundColor = "rgba(255, 255, 0, 0.5)";
	}
	if (day < 3 && day >= 1) {
		elmnt.style.backgroundColor = "rgba(255, 0, 0, 0.5)";
	}	
	return elmnt;
}

function calcDaysDue() {
	var dueDate = new Date(document.getElementById("dayDue").value);
	var currentDate = new Date();
	var milliDue = Math.abs(currentDate - dueDate);
	var partDayDue = milliDue/(1000 * 60 * 60 * 24);
	var daysDue = Math.ceil(partDayDue);
	return daysDue;
}