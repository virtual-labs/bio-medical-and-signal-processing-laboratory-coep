var circle1;
	var line1;
	var line2;
	var line3;
	var arrow1;
	var curve1;
	var x = 100 ;
	var x1 = 295;
	var S1=280;
	var s=70;
	var r;
var moveline = function ()
{

 line2= r.path("M "+x+" 230 l "+x1+" 0")  //295
			 line1 = r.path("M "+x+" 395 l "+x1+" 0")//295
		curve1=r.path("M  "+s+" 320 l 30 0 s -0 100 15,1 l "+S1+" 0" ).attr({stroke:"blue"});	
	
	//alert("x "+x+" x1 "+x1)
}

		


function diagram()
{
l=100;
 r=new  Raphael(document.getElementById('First'),1340,500);
  //var curve=r.path("M360 120 s -10 10 0,10");
				var ph1=r.path("M100 150 s -0 -10 -80,-47");
				var ph1=r.path("M100 190 s -0 -10 -80,47");
				var ph1=r.path("M100 190 s 0 30 100,10");
				var ph1=r.path("M100 150 s 0 -30 100,10");
				var ph1=r.path("M200 200 s 0 20 150,10");
				var ph1=r.path("M200 160 s 0 -20 150,10");
				var ph1=r.path("M350 170 s 0 10 60,-20");
				   
	   
				var curve=r.path("M410 150 s 30 -10 0,10");//peru
				var curve=r.path("M460 170 s 18 5 0,10");//ahllkatti
				var curve=r.path("M450 200 s 18 5 0,10");//last finger
				var curve=r.path("M465 190 s 18 5 0,10");//left to  center
				var curve=r.path("M480 180 s 18 5 0,10");//center
				
				

	//two dots	
				circle1 = r.circle(100,180, 4).attr({fill:"black"});
				var circle = r.circle(395,180, 4).attr({fill:"black"});
	//dash lines h
				var line=r.path("M40 180 l 10 0"+"M55 180 l 10 0"+"M70 180 l 10 0"+"M85 180 l 10 0"+"M100 180 l 10 0"+"M115 180 l 10 0"+"M130 180 l 10 0"+"M145 180 l 10 0"+"M160 180 l 10 0"+"M175 180 l 10 0"+"M190 180 l 10 0"
							+"M205 180 l 10 0"+"M220 180 l 10 0"+"M235 180 l 10 0"+"M250 180 l 10 0"+"M265 180 l 10 0"+"M280 180 l 10 0"+"M295 180 l 10 0"+"M310 180 l 10 0"+"M325 180 l 10 0"+"M340 180 l 10 0"+"M355 180 l 10 0"
							+"M370 180 l 10 0"+"M385 180 l 10 0")		 
				 line3=r.path("M100 180 l 0 10"+"M100 195 l 0 10"+"M100 210 l 0 10"+"M100 225 l 0 10"+"M100 225 l 0 10"+"M100 240 l 0 10"+"M100 255 l 0 10"+"M100 270 l 0 10"+"M100 285 l 0 10"+"M100 300 l 0 10"+"M100 315 l 0 10"
							+"M100 330 l 0 10"+"M100 345 l 0 10"+"M100 360 l 0 10"+"M100 375 l 0 10"+"M100 390 l 0 10"+"M100 405 l 0 10")
				var line=r.path("M395 180 l 0 10"+"M395 195 l 0 10"+"M395 210 l 0 10"+"M395 225 l 0 10"+"M395 240 l 0 10"
							+"M395 255 l 0 10"+"M395 270 l 0 10"+"M395 285 l 0 10"+"M395 300 l 0 10"+"M395 315 l 0 10"+"M395 330 l 0 10"+"M395 345 l 0 10"+"M395 360 l 0 10"+"M395 375 l 0 10"+"M395 390 l 0 10"+"M395 405 l 0 10")
	//Waveform
				var ph1=r.path("M415 320 s -0 -150 -20,7").attr({stroke:"blue"});
				var ph1=r.path("M415 320 s 0 120 18,5").attr({stroke:"blue"});
				var ph1=r.path("M434 327 s -2 -3 1,-7").attr({stroke:"blue"});
				//var ph1=r.path("M100 320 s -0 70 10,0").attr({stroke:"blue"});
				//var ph1=r.path("M110 322 s -0 -3 10,-2").attr({stroke:"blue"});		
	//Wave form line		
				var line=r.path("M 435 320 l 50 0").attr({fill:"Green",stroke:"blue"});	
	//arrow line
				
			moveline();
			
			
				 arrow1=r.path("M105 225 l -5 5 l 5 5 l -2 -5.5 l 2 -4"+"M105 390 l -5 5 l 5 5 l -2 -5.5 l 2 -4").attr({fill:"black"});
				 var arrow2=r.path( "M390 235 l 5 -5 l -5 -5 l 2 5.5 l -2 4"+"M390 400 l 5 -5 l -5 -5 l 2 5.5 l -2 4").attr({fill:"black"});
			 //curve1=r.path("M70  320 l 30 0 s -0 90 15,1 l 279 0" ).attr({stroke:"blue"});
	//Total text
	
	
	
				var t1=r.text(60,170," l").attr({"font-size":14});
				var t1=r.text(60,230," t").attr({"font-size":14});
				var t1=r.text(60,300,"l").attr({"font-size":14});
				var t1=r.text(60,380," t").attr({"font-size":14});
				
				var t1=r.text(65,175," 1").attr({"font-size":14});
				var t1=r.text(65,235," 1").attr({"font-size":14});
				var t1=r.text(65,305,"2").attr({"font-size":14});
				var t1=r.text(65,385," 2").attr({"font-size":14});
				
				var t1=r.text(85,170," mm").attr({"font-size":14});
				var t1=r.text(85,230," ms").attr({"font-size":14});
				var t1=r.text(85,300,"mm").attr({"font-size":14});
				var t1=r.text(85,380," ms").attr({"font-size":14});
				
				var t1=r.text(120,70," Simulation").attr({"font-size":14});
				var t1=r.text(400,70," EMG Electrode").attr({"font-size":14});
				var t1=r.text(230,300," Distance l").attr({"font-size":14});
				var t1=r.text(265,305,"1").attr({"font-size":14});
				var t1=r.text(275,300,"=").attr({"font-size":14});
				var t1=r.text(310,300,"310mm").attr({"font-size":14});
				var t1=r.text(230,380," Latency t").attr({"font-size":14});
				var t1=r.text(265,385,"1").attr({"font-size":14});
				var t1=r.text(275,380,"=").attr({"font-size":14});
				var t1=r.text(310,380,"60mm").attr({"font-size":14});
	//arrow and line for top text
				var line=r.path("M100 80 l 0 50"+"M395 80 l 0 65")
				var arrow=r.path("M105 125 l -5 5 l -5 -5 l  5.5 2 l 4 -2"+"M400 140 l -5 5 l -5 -5 l  5.5 2 l 4 -2").attr({fill:"black"});
	//finger line
	   			var line=r.path("M390 170 l 70 0"+"M410 180 l 50 0"+"M460 180 l 20 0"+"M460 190 l 20 0"+"M410 190 l 50 0"+"M410 200 l 55 0"+"M410 210 l 40 0"+"M390 170 l 20 -10"+"M350 210 l 60 0"+"M350 210 l 60 0")	 				

				//var ph1=r.path("M110 325 s -0 -3 10,-2 s 0 70 10,0").attr({stroke:"blue"});
				
			//var rectangle = r.rect(399, 222, 20, 10).attr({fill:"#F2F2F2",stroke:"#F2F2F2"});
				
				
				}			
				
						
				
				
			
				 
	
				
			
			 
		
				
			
