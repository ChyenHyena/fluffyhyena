function showMenu() {
	
	  var x = document.getElementById("menuhid");
	  
	  if (x.style.display === "block") {
		x.style.display = "none";
	  } else {
		x.style.display = "block";
	  }

	}   
	
function unHide() {
	var w = window.innerWidth;
	var y = document.getElementById("menuhid");
	if (w < "820") {
		y.style.display = "none";
	}
	else {
		y.style.display = "block";
	  }
}