var clickedTime;
var createdTime;
var reactionTime; 
var highscore = 999999;


function makeDrake()  {

	
	
	var time = Math.random();

	time = time*5000;


	setTimeout(function() {
		
		if (Math.random()>0.33 && Math.random() < 0.67) {

			document.getElementById( 'drake' ).src="drake.png";
			document.getElementById("drake").style.height = "130px";
			 document.getElementById("drake").style.width = "200px";
		      } else if(Math.random()>0.67 && Math.random()< 0.67) {
		    	 
		    	  document.getElementById( 'drake' ).src="drake2.png";
		    	 document.getElementById("drake").style.height = "80px";
		    	 document.getElementById("drake").style.width = "80px";
		      } else {
		    	  
		    	  document.getElementById( 'drake' ).src="drake3.png";
			    	 document.getElementById("drake").style.height = "100px";
			    	 document.getElementById("drake").style.width = "70px";
		    	  
		    	  
		      }


		
		var top = Math.random();
		top = top*500;
		
		var left = Math.random();
		
		left = left*1000;
		
		
        
        document.getElementById("drake").style.marginTop=top+"px";
        document.getElementById("drake").style.marginLeft=left+"px";
        
		document.getElementById("drake").style.display = "block";
		
		createdTime = Date.now();
		
	}, time);
}




$(document).ready(function() {
	


$("#drake").click(function() {
	
	clickedTime = Date.now();
	
	reactionTime = (clickedTime - createdTime)/1000;
	
	document.getElementById("time").innerHTML=reactionTime;
	
	this.style.display = "none";
	
	if (reactionTime < highscore) {
		
		document.getElementById("highscore").innerHTML = reactionTime;
		
		
		
		highscore = reactionTime;
		
	}
	
	makeDrake();
	
});


});

makeDrake();


