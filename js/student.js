function selectChange(orga){
	if(orga==="stu"){
		
		document.getElementById("slideshow").innerHTML = "<img src='images/student-management.jpg' class='banner mySlides w3-animate-fading' alt='banner'></div>";
	}
	else{
		document.getElementById("slideshow").innerHTML = "<img src='images/employee.jpg' class='banner mySlides w3-animate-fading' alt='banner'></div>";
	}
}
function addRecord(obj,org){
	var totalObj;
	var count=localStorage.getItem(org+"_count");
	if(count==0){
		totalObj=JSON.stringify(obj);
	}
	else{
		var getStringObj=localStorage.getItem(org+"_data");
		var getObj = JSON.parse(getStringObj);
		var totalObjString=getObj.concat(obj);
		totalObj=JSON.stringify(totalObjString);
	}
	localStorage.setItem(org+"_data", totalObj);
	count++;
	localStorage.setItem(org+"_count",count);
	start();
}
function createStudent(){
	var org=getOrg();
	var obj=new Array({roll:document.getElementById(org+"_roll").value, name:document.getElementById(org+"_name").value, class:document.getElementById(org+"_class").value, advisor:document.getElementById(org+"_advisor").value});
	addRecord(obj,org);
}
function studentTable(count,getObj){
	var codeBlock="";
	for(var i=0;i<count;i++){
		codeBlock=codeBlock+"<tr><td>"+getObj[i].roll+"</td><td>"+getObj[i].name+"</td><td>"+getObj[i].class+"</td><td>"+getObj[i].advisor+"</td><td class='update_btns'><button class='btn btn-primary btn-md' onclick='getStu("+i+")'>Edit</button></td><td class='update_btns'><button class='btn btn-danger btn-md' onclick='deleteStu("+i+")'>Delete</button></td></tr>";
	}
	return codeBlock;
}
function putData(org){
	var codeBlock="";
	var count=localStorage.getItem(org+"_count");
	var getStringObj=localStorage.getItem(org+"_data");
	var getObj = JSON.parse(getStringObj);
	if(org=="stu"){
		codeBlock=studentTable(count,getObj);
	}
	else{
		codeBlock=employeeTable(count,getObj);
	}
	document.getElementById(org+"_body").innerHTML = codeBlock;
}
function getOrg(){
	var x = document.getElementById("org_id").value;
	return x;
}
function start(){
	document.getElementById("stu_section").style.display = "none";
	document.getElementById("emp_section").style.display = "none";
	document.getElementById("stu_table").style.display = "none";
	document.getElementById("emp_table").style.display = "none";
	var org=getOrg();
	selectChange(org);
	if (localStorage.getItem(org+"_count") === null) {
		localStorage.setItem(org+"_count", 0);
	}
	var count=localStorage.getItem(org+"_count");
	putData(org);
	var getStringObj=localStorage.getItem(org+"_data");
	document.getElementById(org+"_table").style.display = "block";
}
function showAdd(){
	var org=getOrg();
	document.getElementById(org+"_table").style.display = "none";
	document.getElementById(org+"_section").style.display = "block";
}