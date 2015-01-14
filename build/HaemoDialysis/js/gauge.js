		/*
		Author : Subh Kriti Anand
		I-Value Bridge software solution
		Date : 11/11/11
		*/
		/* Code for Pressure Gauge */
		
		//Start and end values, leave these as is...

		var sVal   = 0; // init start value,
		var fVal   = 1; // init end value
		var cVal   = sVal;
		var s1Val   = 0; // init start value,
		var f1Val   = 1; // init end value
		var c1Val   = s1Val;
		var id;
		var id1;
		var casing = new Image();
		//testing a loop javascript requesting live data via Ajax...
		var int=self.setInterval("updateData()",1000);
		function getRandomArbitary (min, max) 
		{
			return Math.random() * (max - min) + min;
		}
		function updateData() {
		//some ajax code to get live data....
		// Your live values/data go here.
		
		var HB = $("#textInletP").val();
		var BPO= $("#textOutletP").val();
		//console.log(BPO);
		if(!!HB)
		sVal  = parseInt(HB); // SET START VALUE
		fVal  = parseInt(sVal+10); // SET END VALUE
		//console.log([sVal,fVal]);
		cVal = sVal;
		
		if(!!BPO)
			s1Val=parseInt(BPO);
			f1Val=parseInt(s1Val+10);
			c1Val=s1Val;
			
		clearInterval(id);
		clearInterval(id1);
		initGauge();
		}
		
		
		function initGauge(){
		  casing.src = 'images/gauge_button.png';
		  drawGauge();
		  id = setInterval(drawGauge,100); 
		  id1 = setInterval(drawGauge1,100); 
		}
		
		function drawGauge() {

		  if(sVal == fVal){
			clearInterval(id);
			return ;
		  }else if (sVal < fVal && cVal >= fVal) {
			clearInterval(id);
		  }else if (sVal > fVal && cVal <= fVal) {
			clearInterval(id);
		  }
		  var inc  = 1;
		  var perc = (Math.abs(fVal-cVal)/Math.abs(fVal-sVal));
		  if (perc < .2) { inc *= perc*7; }
		  if (inc < .5) { inc = .5; }
		  var dVal = -.5*Math.PI + (cVal/100)*2*Math.PI;
		  cVal += (sVal < fVal) ? inc : -inc;
		  var ctx = document.getElementById('gOneCanvas').getContext('2d');
		  // Create the canvas gauge.

		  ctx.globalCompositeOperation = 'destination-over';
		  ctx.clearRect(0,0,100,100); // clear canvas
		  ctx.fillStyle = 'rgba(125,125,125,1.0)';
		  ctx.strokeStyle = 'rgba(255, 0, 0 ,1.0)';
		  ctx.save();
		  ctx.translate(50,52.5);
		  // rotate the needle

		  ctx.rotate(dVal);
		  // draw the needle; could be an image.
		  
		  ctx.lineWidth = 3;
		  ctx.lineCap = "round";
          ctx.moveTo(1.9,0);
          ctx.lineTo(30,0);
          ctx.stroke();
		  ctx.restore();
		  ctx.beginPath();
		  // Add the cap on the needle
		  ctx.drawImage(casing,0,0,casing.width,casing.height);
	}
		 
		 function drawGauge1() {

		  if(s1Val == f1Val){
			clearInterval(id1);
			return ;
		  }else if (s1Val < f1Val && c1Val >= f1Val) {
			clearInterval(id1);
		  }else if (s1Val > f1Val && c1Val <= f1Val) {
			clearInterval(id1);
		  }
		  var inc1  = 1;
		  var perc1 = (Math.abs(f1Val-cVal)/Math.abs(f1Val-s1Val));
		  if (perc1 < .2) { inc1 *= perc1*7; }
		  if (inc1 < .5) { inc1 = .5; }
		  var d1Val = -.5*Math.PI + (c1Val/100)*2*Math.PI;
		  c1Val += (s1Val < f1Val) ? inc1 : -inc1;
		  
		  var ctx2 = document.getElementById('gTwoCanvas').getContext('2d');
		  // Create the canvas gauge.
		  ctx2.globalCompositeOperation = 'destination-over';
		  ctx2.clearRect(0,0,100,100); // clear canvas
		  ctx2.fillStyle = 'rgba(125,125,125,1.0)';
		  ctx2.strokeStyle = 'rgba(255, 0, 0 ,1.0)';
		  ctx2.save();
		  ctx2.translate(50,52.5);
		  
		  ctx2.rotate(d1Val);
		  // draw the needle; could be an image.
		  ctx2.lineWidth = 3;
		  ctx2.lineCap = "round";
          ctx2.moveTo(1.9,0);
          ctx2.lineTo(30,0);
          ctx2.stroke();
		  ctx2.restore();
		  ctx2.beginPath();
		  // Add the cap on the needle
		  ctx2.drawImage(casing,10,10,casing.width,casing.height);
		}
		 