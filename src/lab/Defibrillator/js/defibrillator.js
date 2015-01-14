/*
Author: Subh Kriti A.
Date  : 07/8/2011
i-Value Bridge Software Solutions
*/

		var board1,board2;
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
		
		
		/*
		There is one jquery slider in this tab when will change slider's value this function will call.
		It will show the value of that slider in a text box.
		*/
		var show1=function( event, ui ) {
			$( "#val" ).val( ui.value );
			voltage = parseInt($("#val").val());	
			ohm = parseInt($("#val_om").val());
			current = voltage/ohm;
			en=((1/2)*33*voltage*voltage)/1000000;
			$("#output").html("&nbsp Energy =  &frac12;  cv<sup>2</sup> <br>&nbsp C = 33 microfarad<br>");
			$("#output1").html("&nbsp Energy : "+en+" Joule");}
		var show2=function( event, ui ) {
			$( "#val_om" ).val( ui.value );
			voltage = parseInt($("#val").val());	
			ohm = parseInt($("#val_om").val());
			current = voltage/ohm;
			en=((1/2)*33*voltage*voltage)/1000000;
			$("#output").html("&nbsp Energy =  &frac12;  cv<sup>2</sup> <br>&nbsp C = 33 microfarad<br>");
			$("#output1").html("&nbsp Energy : "+en+" Joule");}
		var drawSino=function()
		{
			voltage = parseInt($("#val").val());	
			ohm = parseInt($("#val_om").val());
			current = Math.round(voltage/ohm);
			slop=0.006*ohm-0.2;	
			
			if(current>=92)
						{
						ys1=current-9;
						ys2=current-8;
						}
					
					else if(current>=84 && current<=93)
						{
						ys1=current-8;
						ys2=current-7;
						}
					
					else if(current>=72 && current<=83 )
						{
						ys1=current-7;
						ys2=current-6;
						}
					else if(current>=60 && current<=71 )
						{
						ys1=current-6;
						ys2=current-5;
						}
					
					else if(current>=48 && current<=59 )
						{
						ys1=current-5;
						ys2=current-4;
						}
					else if(current>=34 && current<=47 )
						{
						ys1=current-4;
						ys2=current-3;
						}
					
					else if(current>=26 && current<=33 )
						{
						ys1=current-3;
						ys2=current-2;
						}
					else if(current>=15 && current<=25 )
						{
						ys1=current-2;
						ys2=current-1;
						}
								
					else if(current>=6 && current<=14 )
						{
						ys1=current-1;
						ys2=current;
						}
									
						
					else if(current>=0 && current<=5 )
						{
						ys1=current;
						ys2=current;
						}
			dataArr = [[0,1,2], 
				[0,ys1,ys2]];
			board2.removeObject(chart2);
			board2.removeObject(graph);
			board2.removeObject(li);		
			graph[0] = board2.create('functiongraph', 
				[function(t){ return (ys2*Math.exp(-(t-2)*slop)); },2, 80],
					{strokeColor:'#00ff00',strokeWidth:3});
			chart2 = board2.create('chart', dataArr, {chartStyle:'spline',labels:dataArr,strokeColor:'#00ff00',strokeWidth:3});
	

		}
		var drawMono=function()
		{
		voltage = parseInt($("#val").val());	
			ohm = parseInt($("#val_om").val());
			current = Math.round(voltage/ohm);
						
			//for plus width i.e. the distance
			
			pw=2+((ohm-50)/25);
			//alert(pw);
			//length2 = current*(1-1/(2+(ohm-50)/25));
			board2.removeObject(graph);			
			board2.removeObject(chart2);
			board2.removeObject(li);			
			
			x2[0]=0;
			x2[1]=0;
			y2[0]=0;
			y2[1]=current;
			li[0] = board2.createElement('segment',[[x2[0],y2[0]],[x2[1],y2[1]]], {strokeColor:'#00ff00',strokeWidth:3});			
			
			graph[0] =board2.create('functiongraph', 
						[function(t){ return (current*Math.exp(-t*((0.2/150*(250-ohm)))-0.04)); },0, pw],
							{strokeColor:'#00ff00',strokeWidth:3});
			
			x2[2]=pw;
			x2[3]=pw;
			y2[2]=current*Math.exp(-pw*((0.2/150*(250-ohm)))-0.04);
			y2[3]=0;
			li[1] = board2.createElement('segment',[[x2[2],y2[2]],[x2[3],y2[3]]], {strokeColor:'#00ff00',strokeWidth:3});
					
		}
		var drawBio=function()
		{
			voltage = parseInt($("#val").val());	
			ohm = parseInt($("#val_om").val());
			current = Math.round(voltage/ohm);
						
			//for plus width i.e. the distance
			
			pw=2+((ohm-50)/25);
			//alert(pw);
			//length2 = current*(1-1/(2+(ohm-50)/25));
			board2.removeObject(graph);			
			board2.removeObject(chart2);
			board2.removeObject(li);			
			
			x2[0]=0;
			x2[1]=0;
			y2[0]=0;
			y2[1]=current;
			li[0] = board2.createElement('segment',[[x2[0],y2[0]],[x2[1],y2[1]]], {strokeColor:'#00ff00',strokeWidth:3});			
			
			graph[0] =board2.create('functiongraph', 
						[function(t){ return (current*Math.exp(-t*((0.2/150*(250-ohm)))-0.04)); },0, pw],
							{strokeColor:'#00ff00',strokeWidth:3});
			
			x2[2]=pw;
			x2[3]=pw;
			y2[2]=current*Math.exp(-pw*((0.2/150*(250-ohm)))-0.04);
			y2[3]=0;
			li[1] = board2.createElement('segment',[[x2[2],y2[2]],[x2[3],y2[3]]], {strokeColor:'#00ff00',strokeWidth:3});
					
			x2[4]=pw+1;
			y2[4]=0;
			li[2] = board2.createElement('segment',[[x2[3],y2[3]],[x2[4],y2[4]]], {strokeColor:'#00ff00',strokeWidth:3});
			//**********for negative axis
				
			x2[5]=x2[4];
			y2[5]=-current/2;
			
			li[3] = board2.createElement('segment',[[x2[4],y2[4]],[x2[5],y2[5]]], {strokeColor:'#00ff00',strokeWidth:3});			
			
			graph[1] =board2.create('functiongraph', 
						[function(t){ return (-(current/2)*Math.exp(-(t-(pw+1))*((0.2/150*(250-ohm)))-0.04)); },pw+1, pw*2+1],
							{strokeColor:'#00ff00',strokeWidth:3});
			
			x2[6]=x2[4]+pw;
			x2[7]=x2[4]+pw;
			y2[6]=-(current/2)*Math.exp(-pw*((0.2/150*(250-ohm)))-0.04);
			y2[7]=0;
			li[4] = board2.createElement('segment',[[x2[6],y2[6]],[x2[7],y2[7]]], {strokeColor:'#00ff00',strokeWidth:3});
					
			x2[8]=x2[7];
			y2[8]=0;
			li[5] = board2.createElement('segment',[[x2[7],y2[7]],[x2[8],y2[8]]], {strokeColor:'#00ff00',strokeWidth:3});
						
		}
		
	var drawCurv2=function()
				{
					
						var t = $("#gType2").val();
				
						switch(t)
						{
						 case "1":  drawSino();
									break;
						 case "2":  drawMono();
									break;
						 case "3":  drawBio();
									break;
						}
					
					$("#empty").attr('disabled',true);
					
					
				}
		var EnableFill=function()
		{
		$("#fill").attr('disabled',false);
		}
					
		$(document).ready(function()
		{
				if($.browser.msie){
					document.write("The existing version of Internet Explorer is not supported");
					document.write("<A href='http://www.mozilla.com/en-US/products/download.html'>Click on the  Link :</A>");
				}else{	
					//This tab is for UI it is a jquery function.
					$( "#tabs" ).tabs();
						$("#tb1").click(function(){clearInterval(myInterval);});
						
						
						$("#volt1").html("Amplitude(v): ");
						$("#ohm1").html("Resistence(ohm): ");
						
						//***this slider is jquery function It is used for voltage
						$( "#volt" ).slider({
									range: "min",
									value: 5000,
									min: 1000,
									max: 5000,
									change:show1 
								});
						$( "#val" ).val( $( "#volt" ).slider( "value" ) );
					
						$( "#ohm" ).slider({
									range: "min",
									value: 100,
									min: 50,
									max: 200,
									change:show2 
								});
						$( "#val_om" ).val( $( "#ohm" ).slider( "value" ) );
					//***end of slider		
						
					/*
					there in this tab we need to show a block that will fill when we click button charge.
					and it will get empty we click button push.
					so it will give the fealing of charging and discharging of battery.
					To fullfill this requirment i have create a container first i will fill it white green color.
					then i will fill it white wihite color.
					for this i have used animate funciton of jquery.
					We have requirment until that battery will not charged completly user will not be able to click the button push.
					so initially we have disabled push button.
					*/
					$("#empty").attr('disabled',true);
					//This is for charging the battery I have hide it beacause it was creating some visualizing problem
					$("#content").hide();
					//This is for discharging the battery i.e. for filling the block with white
					$("#empt").hide();
					
					//when we will click button charge this function will call
					$("#fill").click(function() {
					$("#content").show();
					//this animate() is jquery function, it is used to fill a block with green color
					//for calculating time
					time = parseInt($("#val_om").val()*20);	
					
					//end calculating time
					
					$("#content").animate(
							{"width": "144px"},
							time,function(){
								$("#empty").attr('disabled',false)
							})
							
						});
					//this will call when we click on push so it will fill the block with white
					$("#empty").click(function() {
					$("#empt").show();
							$("#empt").animate(
								{"width": "144px"},
								1000);
					});
					$("#empty").click(function()
							{
							drawCurv2();
							$("#fill").attr('disabled',true)
							});
					
					board2 = JXG.JSXGraph.initBoard('box2',{originX: 10, originY: 260, unitX: 10, unitY:2.5,axis:true,showCopyright:false});
					board2.create('text',[77,-10,"Time(mSec)"],{color:"red"});
					board2.create('text',[1,100,"Current(Amps)"],{color:"red"});
					voltage = parseInt($("#val").val());	
					ohm = parseInt($("#val_om").val());
					current = Math.round(voltage/ohm);
					en=((1/2)*33*voltage*voltage)/1000000;
					$("#output").html("&nbsp Energy =  &frac12;  cv<sup>2</sup> <br>&nbsp C = 33 microfarad<br>");
					$("#output1").html("&nbsp Energy : "+en+" Joule");
					
					$("#tb2").click(function(){FunTab2();});
					
			}
		});