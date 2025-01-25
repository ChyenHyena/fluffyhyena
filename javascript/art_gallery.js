    /* SCRIPT FOR ART GALLERY */
    
	function displayDesc(id,descr) {
		
		var x = document.getElementById(id).alt;
			
			document.getElementById(descr).style.display = "inline-block";

		document.getElementById(id).style.display = "none";
		document.getElementById(descr).innerHTML = x;	
	
  }

	function hideDesc(id,descr) {
	  
		document.getElementById(descr).style.display = "none";
		if (document.getElementById(id).style.display == "none") {
			
			document.getElementById(id).style.display = "inline-block";
			
		}
		
	}