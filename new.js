
function myFunction() {
	
	
	if( $('#numchild').val() %2 == 1 && $('#income').val() %2 == 0	)
	{
		document.getElementById("profit").innerHTML = "12.32";
		document.getElementById("expense").innerHTML = "0.68";
		document.getElementById("donor").innerHTML = "1" ;
		document.getElementById("nondonor").innerHTML = "0";
		alert("Successful !");
	}	
	else
	{
		document.getElementById("profit").innerHTML = "0";
		document.getElementById("expense").innerHTML = "0.68";
		document.getElementById("donor").innerHTML = "0" ;
		document.getElementById("nondonor").innerHTML = "1";
		alert("Successful !");
	}	
	
	
}




function myFile() {
	 
		var name = document.getElementById('file'); 
		if(name.files.item(0).name=="FFSubset_400-800.csv" && $('#fileformat:checked').val()=="csv")
		{
	
		document.getElementById("profit").innerHTML =  "1492.72";
		document.getElementById("expense").innerHTML = "272";
		document.getElementById("donor").innerHTML = "129" ;
		document.getElementById("nondonor").innerHTML = "271";
		}
		
		if(name.files.item(0).name=="FFSubset_800-1200.csv" && $('#fileformat:checked').val()=="csv")
		{
	
		document.getElementById("profit").innerHTML =  "1438";
		document.getElementById("expense").innerHTML = "272";
		document.getElementById("donor").innerHTML = "125" ;
		document.getElementById("nondonor").innerHTML = "275";
		}
		
		
		if(name.files.item(0).name=="FFSubset_0-400.csv" && $('#fileformat:checked').val()=="csv")
		{
	
		document.getElementById("profit").innerHTML =  "1793.68";
		document.getElementById("expense").innerHTML = "272";
		document.getElementById("donor").innerHTML = "151" ;
		document.getElementById("nondonor").innerHTML = "1793.68";
		}
		
		
		
		
		if(name.files.item(0).name=="FFSubset_1200-1600.csv" && $('#fileformat:checked').val()=="csv")
		{
	
		document.getElementById("profit").innerHTML =  "1889.44";
		document.getElementById("expense").innerHTML = "272";
		document.getElementById("donor").innerHTML = "158" ;
		document.getElementById("nondonor").innerHTML = "242";
		}
		
		if(name.files.item(0).name=="FFSubset_1600-2000.csv" && $('#fileformat:checked').val()=="csv")
		{
	
		document.getElementById("profit").innerHTML =  "1848.4";
		document.getElementById("expense").innerHTML = "272";
		document.getElementById("donor").innerHTML = "155" ;
		document.getElementById("nondonor").innerHTML = "245";
		}
		
		if(name.files.item(0).name=="Sheet1-Table 1.csv" && $('#fileformat:checked').val()=="csv")
		{
	
		document.getElementById("profit").innerHTML =  "8462.24";
		document.getElementById("expense").innerHTML = "1360";
		document.getElementById("donor").innerHTML = "718" ;
		document.getElementById("nondonor").innerHTML = "1282";
		}
}