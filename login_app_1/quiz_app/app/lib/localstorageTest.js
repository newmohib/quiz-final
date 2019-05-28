
//typeof(Storage) !== "undefined"

//start test conditon privius
 var Questions=localStorage.getItem("questions");
 var hasData=localStorage.getItem("hasData");
 var userId=localStorage.getItem("userId");

 if (localStorage) {
 	if (Questions || hasData || userId) {
	localStorage.removeItem("questions");
	localStorage.removeItem("hasData");
	localStorage.removeItem("userId");
	
	}

 }else{
 	//if localstorage not found
 }
