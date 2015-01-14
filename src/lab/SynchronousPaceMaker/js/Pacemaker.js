/*
Author: Subh Kriti A.
Date  : 23/8/2011
i-Value Bridge Software Solutions
*/

		var board1;
		var amp,pw,hb,temp;
		var dataArr;
		var chart=new Array();
		var x=new Array();
		var z;
		var freq,energy;
		var flag=0,ds=0;
		var myInterval;
		var voltage;
		var ohm,slop;
		var current;
		var x2=new Array();
		var y2=new Array();
		var i,length2;//pw
		var chart2;
		var time,ys1,ys2;
		var li=new Array();
		var graph=new Array();
		var en=0;
		var counts= 20;
		var countsb= 20;
		var timers;
		var timersb;
		//start of tab 2 
		var drawCurve=function(flag1)
		{
			pw = $("#plusWidth").val();
			//amp = $("#amplitude").val();
			amp=$("#ap_val").val();
			
			//hb = $( "#hb" ).slider( "value" );
			//	hb=$("#amount").val();
			//alert(hb);
			$("#ap1").html("&nbsp Amplitude(v): ");
			$("#hb1").html("&nbsp Pulse Rate: ");
			hb=	parseInt($( "#HR_val" ).val( ));
			freq = 60*1000/hb;
			var t = $("#gType1").val();
			if(flag==0){
				amp=parseFloat(amp)+0;
				flag=1;
			}
			else{
				amp=parseFloat(amp)+0.02;
				flag=0;
			}
		
			
			switch(t)
			{
			 case "1":
						x[0]=0;
						x[1]=0;
						x[2]=pw*10;
						x[3]=pw*10;
						x[4]=freq;
						board1.removeObject(chart);
						if (!timers) timers = setInterval("jQuery.fn.paceMove();", 150);
						jQuery.fn.paceMove = function(){
						board1.removeObject(chart);
						board1.suspendUpdate();
							var i = 1;
							for(var i=0;i<50;i++){
								if(i%5==0){
									var s = counts;
									z=x[4]*i;
									//dataArr = [[x[0]+z-s,x[1]+z-s,x[2]+z-s,x[3]+z-s,x[4]+z-s], 
									//[0,amp,amp-0.2,0,0]];
									dataArr = [[x[0]+z-s,x[1]+z-s,x[2]+z-s,x[3]+z-s,0], 
											[0,amp,amp-0.2,0,0]];
									chart[i] = board1.create('chart', dataArr, {chartStyle:'line',labels:dataArr,strokeColor:'#00ff00',strokeWidth:2,highlightStrokeColor:'#00ff00'});
								}else{
									var s = counts;
									z=1;
									dataArr = [0,0];
								}
								
							}
						counts = counts+30;
						board1.unsuspendUpdate();
						}
					
						energy = ((pw * amp * amp *1000)/ 500).toFixed(5);
						$("#eg").html("&nbsp Energy : "+energy+" Joule");
						$("#eg").append("<br><br> Energy = (v<sup>2</sup> * pw) / R<br> where R=500 ohm");
						clearInterval(myInterval);
						break;
			 case "2":  //alert(t);
						x[0]=0;
						x[1]=0;
						x[2]=pw*10;
						x[3]=pw*10;
						x[4]=freq;
						board1.removeObject(chart);
						if (!timers) timers = setInterval("jQuery.fn.paceMove();", 150);
						jQuery.fn.paceMove = function(){
						board1.removeObject(chart);
						board1.suspendUpdate();
							var i = 1;
							for(var i=0;i<50;i++){
								if(i%5==0){
									var s = counts;
									z=x[4]*i;
									//dataArr = [[x[0]+z-s,x[1]+z-s,x[2]+z-s,x[3]+z-s,x[4]+z-s], 
									//[0,amp,amp-0.2,0,0]];
									dataArr = [[x[0]+z-s,x[1]+z-s,x[2]+z-s,x[3]+z-s,0,x[0]+z-s,x[1]+z-s,x[2]+z-s,x[3]+z-s,0], 
											[0,amp,amp-0.2,0,0,0,-amp,-(amp-0.2),0,0]];
									chart[i] = board1.create('chart', dataArr, {chartStyle:'line',labels:dataArr,strokeColor:'#00ff00',strokeWidth:2,highlightStrokeColor:'#00ff00'});
								}else{
									var s = counts;
									z=1;
									dataArr = [0,0];
								}
								
							}
						counts = counts+30;
						board1.unsuspendUpdate();
						}
					
						energy = ((pw * amp * amp *1000)/ 500).toFixed(5);
						$("#eg").html("&nbsp Energy : "+energy+" Joule");
						$("#eg").append("<br><br> Energy = (v<sup>2</sup> * pw) / R<br> where R=500 ohm");
						clearInterval(myInterval);
						
						break;
			 
			}

		}
		
		var show=function( event, ui ) {
			
		$( "#amount" ).val( ui.value );
	//	drawCurve();
		}
			
		var show_ap=function( event, ui ) {
				
		$( "#ap_val" ).val( ui.value );
	//	drawCurve();
		}
		
		$(document).ready(function()
		{
			if($.browser.msie){
				document.write("The existing version of Internet Explorer is not supported");
				document.write("<A href='http://www.mozilla.com/en-US/products/download.html'>Click on the  Link :</A>");
			}else{
				
				//This tab is for UI it is a jquery function.
				$( "#tabs" ).tabs();
					$("#volt1").html("Amplitude(v): ");
					$("#ohm1").html("Resistance(ohm): ");
				//***end of slider		
				voltage = parseInt($("#val").val());	
				ohm = parseInt($("#val_om").val());
				current = Math.round(voltage/ohm);
				en=((1/2)*33*voltage*voltage)/1000000;
				$("#output").html("&nbsp Energy =  &frac12;  cv<sup>2</sup> <br>C = 33 microfarad<br>&nbsp Energy = "+en);
				board1 = JXG.JSXGraph.initBoard('box1', {originX: 10, originY: 200, unitX: 0.35, unitY:20,axis:true,showCopyright:false});
				board1.create('text',[2100,-1.5,"&nbsp Time(mSec)"],{color:"red"});
				board1.create('text',[1,8.5,"&nbsp Current(Amps)"],{color:"red"});
				//drawCurve();
				$("#pw").change(function(){drawCurve();});
				$("#ap").change(function(){drawCurve();});
				$("#type1").change(function(){drawCurve();});
				//this slider is jquery function
				$( "#hb" ).slider({
								range: "min",
								value: 75,
								min: 60,
								max: 150,
								change:show 
							});
							$( "#amount" ).val( $( "#hb" ).slider( "value" ) );
							
				$( "#ap" ).slider({
								range: "min",
								value: 3,
								min: 1,
								max: 5,
								change:show_ap 
							});
							$( "#ap_val" ).val( $( "#ap" ).slider( "value" ) );
				$( "#ap" ).slider({ step: 0.1 });
					myInterval =  window.setInterval("drawCurve();", 500);
				
			}
					
		});