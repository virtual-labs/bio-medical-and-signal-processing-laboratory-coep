		var board1;
		var amp,pw,hb,temp;
		var dataArr;
		var chart=new Array();;
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
		//start of tab 2 
		var drawCurve=function()
				{
					
					pw = $("#plusWidth").val();
					//amp = $("#amplitude").val();
					amp=$("#ap_val").val();
					
					//hb = $( "#hb" ).slider( "value" );
					hb=$("#amount").val();
					//alert(hb);
					$("#ap1").html("&nbsp Amplitude(v): ");
					$("#hb1").html("&nbsp Pulse Rate: ");
					freq = 60/hb;
					var t = $("#gType1").val();
					if(flag==0)
					{
						amp=parseFloat(amp)+0;
						flag=1;
					}
					else{
						amp=parseFloat(amp)+0.02;
						flag=0;
					}
				
					
				switch(t)
				{
				 case "1":  x[0]=0;
							x[1]=0;
							x[2]=pw*10;
							x[3]=pw*10;
							x[4]=freq*1000;
				
							board1.removeObject(chart);
							board1.suspendUpdate();
							for(var i=0;i<5;i++)
							{
								
								z=x[4]*i;
								//alert(ds);
								dataArr = [[x[0]+z,x[1]+z,x[2]+z,x[3]+z,x[4]+z], 
											[0,amp,amp-0.2,0,0]];
								chart[i] = board1.create('chart', dataArr, {chartStyle:'line',labels:dataArr,strokeColor:'#00ff00',strokeWidth:2,highlightStrokeColor:'#00ff00'});
							}
							board1.unsuspendUpdate();
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
							x[4]=x[2]+x[2];
							x[5]=x[2]+x[2];
							x[6]=freq*1000;
						
							board1.removeObject(chart);
							for(var i=0;i<5;i++)
							{
								
								z=x[6]*i;
								
								dataArr = [[x[0]+z,x[1]+z,x[2]+z,x[3]+z,x[4]+z,x[5]+z,x[6]+z], 
											[0,amp,amp-0.2,-amp,-amp-0.2,0,0]];
								chart[i] = board1.create('chart', dataArr, {chartStyle:'line',labels:dataArr,strokeColor:'#00ff00',strokeWidth:2,highlightStrokeColor:'#00ff00'});
							}
							
							energy =( ((pw * amp * amp *1000)/ 500)*2).toFixed(5) ;
							$("#eg").html("&nbsp Energy : "+energy+" Joule");
							$("#eg").append("<br>&nbsp Energy = 2(v<sup>2</sup> * pw) / R<br>&nbsp where R=500 ohm");
							clearInterval(myInterval);
							break;
				 
				}
					
						
				}
		
		var show=function( event, ui ) {
				
			$( "#amount" ).val( ui.value );
			drawCurve();
			}
			
		var show_ap=function( event, ui ) {
				
			$( "#ap_val" ).val( ui.value );
			drawCurve();
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
					
					board1 = JXG.JSXGraph.initBoard('box1', {originX: 10, originY: 300, unitX: 0.5, unitY:50,axis:true,showCopyright:false});
				board1.create('text',[1510,-0.5,"&nbsp Time(mSec)"],{color:"red"});
				board1.create('text',[1,5.5,"&nbsp Current(Amps)"],{color:"red"});
				drawCurve();
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
					myInterval =  window.setInterval("drawCurve();", 1000);
				
			}		
		});