function createEmployee(){
	var org=getOrg();
	var obj=new Array({no:document.getElementById(org+"_no").value, name:document.getElementById(org+"_name").value, ph:document.getElementById(org+"_ph").value, pm:document.getElementById(org+"_pm").value});
	addRecord(obj,org);
}
function employeeTable(count,getObj){
	var codeBlock="";
	for(var i=0;i<count;i++){
		codeBlock=codeBlock+"<tr><td>"+getObj[i].no+"</td><td>"+getObj[i].name+"</td><td>"+getObj[i].ph+"</td><td>"+getObj[i].pm+"</td><td class='update_btns'><button class='btn btn-primary btn-md' onclick='getEmp("+i+")'>Edit</button></td><td class='update_btns'><button class='btn btn-danger btn-md' onclick='deleteEmp("+i+")'>Delete</button></td></tr>";
	}
	return codeBlock;
}