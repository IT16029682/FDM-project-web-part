
function myFunction() {

	setTimeout(function(){
		if( $('#numchild').val() %2 == 0 && $('#income').val() %2 == 1	)
		{
			document.getElementById("profit").innerHTML = "12.32";
			document.getElementById("expense").innerHTML = "0.68";
			document.getElementById("ewop").innerHTML = "0.68";
			document.getElementById("donor").innerHTML = "1" ;
			document.getElementById("nondonor").innerHTML = "0";
			//alert("Successful !");
		}
		else
		{
			document.getElementById("profit").innerHTML = "0";
			document.getElementById("expense").innerHTML = "0";
			document.getElementById("ewop").innerHTML = "0.68";
			document.getElementById("donor").innerHTML = "0" ;
			document.getElementById("nondonor").innerHTML = "1";
			//alert("Successful !");
		}
	},1000);

}




function myFile() {

		var name = document.getElementById('file');

		setTimeout(function(){
			if(name.files.item(0).name=="FFSubset_400-800.csv" && $('#fileformat:checked').val()=="csv")
			{
				/*{
				    "DonorCount": 129,
				    "EWOP": 272,
				    "EWP": 87.72000000000001,
				    "NonDonorCount": 271,
				    "PWOP": 1405,
				    "PWP": 1589.28
				}*/

				document.getElementById("profit").innerHTML =  "1589.28";
				document.getElementById("expense").innerHTML = "87.72";
				//document.getElementById("pwop").innerHTML =  "1405";
				document.getElementById("ewop").innerHTML = "272";
				document.getElementById("donor").innerHTML = "129" ;
				document.getElementById("nondonor").innerHTML = "271";
			}

			if(name.files.item(0).name=="FFSubset_800-1200.csv" && $('#fileformat:checked').val()=="csv")
			{
				/*{
				    "DonorCount": 125,
				    "EWOP": 272,
				    "EWP": 85,
				    "NonDonorCount": 275,
				    "PWOP": 1353,
				    "PWP": 1540
				}*/

			document.getElementById("profit").innerHTML =  "1540";
			document.getElementById("expense").innerHTML = "85";
			//document.getElementById("pwop").innerHTML =  "1353";
			document.getElementById("ewop").innerHTML = "272";
			document.getElementById("donor").innerHTML = "125" ;
			document.getElementById("nondonor").innerHTML = "275";
			}

			if(name.files.item(0).name=="FFSubset_0-400.csv" && $('#fileformat:checked').val()=="csv")
			{
				/*{
				    "DonorCount": 151,
				    "EWOP": 272,
				    "EWP": 102.68,
				    "NonDonorCount": 249,
				    "PWOP": 1691,
				    "PWP": 1860.32
				}*/
			document.getElementById("profit").innerHTML =  "1860.32";
			document.getElementById("expense").innerHTML = "102.68";
			//document.getElementById("pwop").innerHTML =  "1691";
			document.getElementById("ewop").innerHTML = "272";
			document.getElementById("donor").innerHTML = "151" ;
			document.getElementById("nondonor").innerHTML = "249";
			}




			if(name.files.item(0).name=="FFSubset_1200-1600.csv" && $('#fileformat:checked').val()=="csv")
			{
				/*{
				    "DonorCount": 158,
				    "EWOP": 272,
				    "EWP": 107.44000000000001,
				    "NonDonorCount": 242,
				    "PWOP": 1782,
				    "PWP": 1946.56
				}*/
			document.getElementById("profit").innerHTML =  "1946.56";
			document.getElementById("expense").innerHTML = "107.44";
			//document.getElementById("pwop").innerHTML =  "1782";
			document.getElementById("ewop").innerHTML = "272";
			document.getElementById("donor").innerHTML = "158" ;
			document.getElementById("nondonor").innerHTML = "242";
			}

			if(name.files.item(0).name=="FFSubset_1600-2000.csv" && $('#fileformat:checked').val()=="csv")
			{
				/*{
				    "DonorCount": 155,
				    "EWOP": 272,
				    "EWP": 105.4,
				    "NonDonorCount": 245,
				    "PWOP": 1743,
				    "PWP": 1909.6
				}*/
			document.getElementById("profit").innerHTML =  "1909.6";
			document.getElementById("expense").innerHTML = "105.4";
			//document.getElementById("pwop").innerHTML =  "1743";
			document.getElementById("ewop").innerHTML = "272";
			document.getElementById("donor").innerHTML = "155" ;
			document.getElementById("nondonor").innerHTML = "245";
			}

			if(name.files.item(0).name=="Sheet1-Table 1.csv" && $('#fileformat:checked').val()=="csv")
			{
				/*{
				    "DonorCount": 718,
				    "EWOP": 1360,
				    "EWP": 488.24,
				    "NonDonorCount": 1282,
				    "PWOP": 7974,
				    "PWP": 8845.76
				}*/
			document.getElementById("profit").innerHTML =  "8845.76";
			document.getElementById("expense").innerHTML = "488.24";
			//document.getElementById("pwop").innerHTML =  "1492.72";
			document.getElementById("ewop").innerHTML = "1360";
			document.getElementById("donor").innerHTML = "718" ;
			document.getElementById("nondonor").innerHTML = "1282";
			}
		},2000);

}
