/***********************************************************************************

Coding Challenge

App Name: To-Do App
Co.: WEVENTURE
Author: David G. Bonacho

Date: 21/10/2021 15:51

***********************************************************************************/

var tasks = new Array();
var index = 0;

//
// build object task
//
class task 
{
	constructor(description)
	{
		this.task = description;
		this.status = 1;
	}
}

//
// drawTasks function write the list of task and its status
//
function drawTasks() {
	var html = '<ul>';
	for(n=0;n<=tasks.length-1;n++){
		cssstatus = 'active';
		if(tasks[n].status!=1)cssstatus = 'close';
		html+='<li class="'+cssstatus+'">'+tasks[n].task+'	<div class="botonder"><input name="uno" type="button" onClick="finishtask('+n+')" value="Delete"></div></li>';
	}
	html+='</ul>';
	
	// if there are items, draw 'Clear all' button
	if(tasks.length>0)
	html+='<br clear="all" /><div align="right"><input name="uno" type="button" onClick="clearall()" value="Clear all"></div>';
	
	document.querySelector('#lista').innerHTML = html;
	
	// reset placeholder text in input task
	document.getElementsByName("entrada")[0].value='';
	document.getElementsByName("entrada")[0].placeholder='any more tasks to do?';

}


//
// finish the task 
// on the selected item
//
function finishtask(cual) {
	tasks[cual].status = 0;
	drawTasks();
}

//
// embty array and objects
//
function clearall() {
	tasks = [];
	drawTasks();
}

//
// detect enter key and add task 
//
document.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
		textoin = document.getElementById('entrada').value
        if(textoin=='') {
			alert("Please, enter the task you want to add...");
		}else{
			// add task to tasks
			tasks.push(new task(textoin));
			
			// draw all task in div lista
			drawTasks();
		}
    }
});