/*
Creator: Jake White
Date created: 09/30/2019
Date last modified: 10/02/2019 
*/


function createTask() {
	var task = document.getElementById("taskName").value;
	var dueDate = document.getElementById("dayDue").value;
	var string = '<span>' + task + '</span>' +
		'<button type="button" class="close" data-dismiss="alert" aria-label="Close" style="padding: 5px 10px 5px 10px;">' +
			'<span aria-hidden="true">&times;</span>' +
		'</button>' +
		'<br>' + dueDate + " day(s)";
	var node = document.createElement("div");
	styleTask(node, dueDate);
	node.innerHTML = string;
	document.getElementById("toDoList").appendChild(node);
}

function styleTask(elmnt, day) {
	elmnt.setAttribute("class", "col-xs-auto alert alert-warning alert-dismissible show");
	elmnt.setAttribute("role", "alert");
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
