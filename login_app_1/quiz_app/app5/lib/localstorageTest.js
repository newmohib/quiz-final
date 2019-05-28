
//typeof(Storage) !== "undefined"

//start test conditon privius
 var Questions=localStorage.getItem("questions");

 if (localStorage) {
 	if (Questions) {
	alert("localStorage still")
	localStorage.removeItem("questions");
	localStorage.removeItem("hasData");
	
	}else{

	}

 }else{
		alert("Sorry! Your Browser is  No Web Storage support..")
 }
