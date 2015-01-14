/*
Author: Subh Kriti A.
Date  : 18/8/2011
i-Value Bridge Software Solutions
*/
var HB;
var interval,i1258,i3,i4,i67,i9;
var x=new Array();
var y=new Array();
var dataArr1;
var chart1=new Array();
var firstTime=true;
var count= 20;
var timerAF;
var timerVF;
var timerFOAV;
var timerSOAV;
var slFlag = false;
var timeFlag = false;
var alt = 0;
//this variable is used to write cordinates at x axis

function getRandomArbitary (min, max) 
{
	return Math.random() * (max - min) + min;
}
function getVibration (min, max) 
{
	return Math.random() * (max - min) + min;
}
function getRandomPwave(){
	return Math.random()*18;
}
function getRandomPORDwave(){
	return Math.random()*18;
}
var getPointFOAV=function()
	{
		var xArray = new Array();
		var yArray = new Array();

		
		if(slFlag == true){	
			for(var i in x){
			  x[i] = 0; 
			}
			slFlag = false;
		}
		//It will fatch the value from slider for heart beat
		HB=	parseInt($( "#angtxt" ).val( ));
		var Random_HB=getRandomArbitary (HB-2, HB+2); 
	
		interval=60*1000/parseInt(Random_HB);
		i1258=interval*0.1/0.8;
		
		i3=interval*0.02/0.8;
		i4=interval*0.06/0.8;
		i67=interval*0.05/0.8;
		i9=interval*0.2/0.8;

		
		if(firstTime==true)
		{
			x[28]=0;
			firstTime=false;
			
		}

		x[0]=x[28];
		
		var firstInterval=i1258/6;
		for(var z=1;z<=5;z++)
		{
		  x[z]=x[z-1]+firstInterval;
		
		}
		

		x[4]=x[3]+i1258/2;
		x[5]=x[3]+i1258;
		//for p wave
		x[6]=x[5]+i1258/2;
		x[7]=x[5]+i1258;
		
		//for Q
		x[8]=x[7]+i3;
		x[9]=x[8]+i4/2;
		x[10]=x[8]+i4;
		
		//for qrs
		x[11]=x[10]+i1258/2;
		x[12]=x[10]+i1258;
		
		//for s
		x[13]=x[12]+i67/2;
		x[14]=x[12]+i67;
		
		//for j
		x[15]=x[14]+i67/2;
		x[16]=x[14]+i67;
		
		//for t
		x[17]=x[16]+i1258/2;
		x[18]=x[16]+i1258;
		
		//for end line
		interval=interval+x[28];
		
		var last=(interval-x[18])/10;
		for(var z=19;z<=28;z++)
		{
			x[z]=x[z-1]+last;
		}
		
		for(var j=0;j<=28;j++)
		{
			y[j]=0;
		}
		var PRandom  = getRandomPORDwave();
		PRandom = parseInt(PRandom);
		if(PRandom%2 === 0){
			y[4]=getRandomArbitary (0.25-0.15, 0.25+0.15) ;
		}else{
			y[6]=getRandomArbitary (0.25-0.15, 0.25+0.15) ;
		}
		y[9]=-0.15;
		y[11]=getRandomArbitary (1.6-0.5, 1.6) ;
		y[13]=-0.25;
		y[17]=getRandomArbitary (0.25-0.15, 0.25+0.15) ;
		
	return {xArray : x, yArray:y};

	}

SetTwoDFOAV = function()
{
	this.x= new Array();
	this.y= new Array();
	
 	this.setArray = function()
		{		
			var points = getPointFOAV();			
			for(var i=0;i<=28;i++)
			{
				this.x[i]=points.xArray[i];
				this.y[i]=points.yArray[i];

			}
		}
}
	

var drawCurveFOAV=function()
{
		
		var o = new Array();
		
		for(var i=0;i<30;i++)
		{
			o[i] = new SetTwoDFOAV();
			o[i].setArray();
			
		}

		timerFOAV = setInterval("jQuery.fn.func();", 100);
		
		jQuery.fn.func = function(){
		board1.removeObject(chart1);
		board1.suspendUpdate();
		var vib = getVibration(.04, -.04);
		for(var i=0;i<30;i++)
		{
			var z = count;
			if(o[i].y[17]<=o[i].y[6] || o[i].y[17]<=o[i].y[4]){
				o[i].y[17] = o[i].y[17]+.3;
				if(o[i].y[6]!=0)
				o[i].y[6] = o[i].y[6]-.08;
				if(o[i].y[4]!=0)
				o[i].y[4] = o[i].y[4]-.08;
			}
			dataArr1 = [[o[i].x[0]-z,o[i].x[1]-z,o[i].x[2]-z,o[i].x[3]-z,o[i].x[4]-z,o[i].x[5]-z,o[i].x[6]-z,o[i].x[7]-z,o[i].x[8]-z,o[i].x[9]-z,o[i].x[10]-z,o[i].x[11]-z,o[i].x[12]-z,o[i].x[13]-z,o[i].x[14]-z,o[i].x[15]-z,o[i].x[16]-z,o[i].x[17]-z,o[i].x[18]-z,o[i].x[19]-z,o[i].x[20]-z,o[i].x[21]-z,o[i].x[22]-z,o[i].x[23]-z,o[i].x[24]-z,o[i].x[25]-z,o[i].x[26]-z,o[i].x[27]-z,o[i].x[28]-z],
			[o[i].y[0],o[i].y[1],o[i].y[2],o[i].y[3],o[i].y[4],o[i].y[5],o[i].y[6]+vib,o[i].y[7],o[i].y[8],o[i].y[9],o[i].y[10],o[i].y[11]+vib,o[i].y[12],o[i].y[13],o[i].y[14],o[i].y[15],o[i].y[16],o[i].y[17]+vib,o[i].y[18],o[i].y[19],o[i].y[20],o[i].y[21],o[i].y[22],o[i].y[23]+vib,o[i].y[24],o[i].y[25]+vib,o[i].y[26]+vib,o[i].y[27]+vib,o[i].y[28]]]
		
		chart1[i] = board1.create('spline', dataArr1, {labels:dataArr1,strokeColor:'#FC0415',highlightStrokeColor:'#FC0415',strokeWidth:2});
	
		}
		count = count+20;
		if(count%30 == 0){
			jQuery.fn.func2();
		}
		
		
		}
		
		board1.unsuspendUpdate();	
}
var getPointsAF=function()
	{
		var xArray = new Array();
		var yArray = new Array();

		
		if(slFlag == true){	
			for(var i in x){
			  x[i] = 0; 
			}
			slFlag = false;
		}
	
		//It will fatch the value from slider for heart beat
		HB=	parseInt($( "#angtxt" ).val( ));
		var Random_HB=getRandomArbitary (HB-2, HB+2); 
		
		
		interval=60*1000/parseInt(Random_HB);
		i1258=interval*0.1/0.8;
		
		i3=interval*0.02/0.8;
		i4=interval*0.06/0.8;
		i67=interval*0.05/0.8;
		i9=interval*0.2/0.8;

		
		if(firstTime==true)
		{
			x[17]=0;
			firstTime=false;
			
		}

		x[0]=x[17];
		
		var firstInterval=i1258/6;
		for(var z=1;z<=2;z++)
		{
		  x[z]=x[z-1]+firstInterval;
		
		}
		
		
		x[3]=x[2]+i1258/2;
		x[4]=x[2]+i1258;
		
		//for p wave
		x[5]=x[4]+i1258/2;
		x[6]=x[4]+i1258;
		
		//for Q
		x[7]=x[6]+i3;
		x[8]=x[7]+i4/2;
		x[9]=x[7]+i4;
		
		//for qrs
		x[10]=x[9]+i1258/2;
		x[11]=x[9]+i1258;
		
		//for s
		x[12]=x[11]+i67/2;
		x[13]=x[11]+i67;
		
		//for j
		x[14]=x[13]+i67/2;
		x[15]=x[13]+i67;
		
		//for t
		x[16]=x[15]+i1258/2;
		x[17]=x[15]+i1258;
		
		for(var j=0;j<=17;j++)
		{
			y[j]=0;
		}
		y[3]=getRandomArbitary (0.25-0.15, 0.25+0.15) ;
		y[5]=y[3];
		y[8]=-0.15;
		y[10]=getRandomArbitary (1.6-0.5, 1.6) ;
		y[12]=-0.25;
		y[16]=getRandomArbitary (0.25-0.15, 0.25+0.15) ;
		var PRandom  = getRandomPwave();
		PRandom = parseInt(PRandom);
		if(PRandom%2 === 0){
			y[3] = y[0];
		}
	return {xArray : x, yArray:y};

	}

SetTwoDAF = function()
{
	this.x= new Array();
	this.y= new Array();
	
 	this.setArray = function()
		{		
			var points = getPointsAF();			
			for(var i=0;i<=17;i++)
			{
				this.x[i]=points.xArray[i];
				this.y[i]=points.yArray[i];

			}
		}
}
	

var drawCurveAF=function()
{
		
		var o = new Array();
		
		for(var i=0;i<30;i++)
		{
			o[i] = new SetTwoDAF();
			o[i].setArray();
			
		}

		timerAF = setInterval("jQuery.fn.func();", 100);
		
		jQuery.fn.func = function(){
		board1.removeObject(chart1);
		board1.suspendUpdate();
		var vib = getVibration(.05, -.05);

		for(var i=0;i<30;i++)
		{
			var z = count;
			if(o[i].y[16]<=o[i].y[5] ){
				o[i].y[16] = o[i].y[16]+.3;
			}
			
			dataArr1 = [[o[i].x[0]-z,o[i].x[1]-z,o[i].x[2]-z,o[i].x[3]-z,o[i].x[4]-z,o[i].x[5]-z,o[i].x[6]-z,o[i].x[7]-z,o[i].x[8]-z,o[i].x[9]-z,o[i].x[10]-z,o[i].x[11]-z,o[i].x[12]-z,o[i].x[13]-z,o[i].x[14]-z,o[i].x[15]-z,o[i].x[16]-z,o[i].x[17]-z],
			[o[i].y[0],o[i].y[1]+vib,o[i].y[2]+vib,o[i].y[3],o[i].y[4],o[i].y[5],o[i].y[6],o[i].y[7],o[i].y[8],o[i].y[9],o[i].y[10],o[i].y[11],o[i].y[12],o[i].y[13],o[i].y[14],o[i].y[15],o[i].y[16],o[i].y[17]]]
		
		chart1[i] = board1.create('spline', dataArr1, {labels:dataArr1,strokeColor:'#FC0415',highlightStrokeColor:'#0000FF',strokeWidth:2});

		}
		count = count+20;
		if(count%30 == 0){
			jQuery.fn.func2();
		}
		
		
		}
		
		board1.unsuspendUpdate();	
}
	var getPointsVF=function()
	{
		var xArray = new Array();
		var yArray = new Array();

		
		if(slFlag == true){	
			for(var i in x){
			  x[i] = 0; 
			}
			slFlag = false;
		}
		
		
		//It will fatch the value from slider for heart beat
		HB=	parseInt($( "#angtxt" ).val( ));
		var Random_HB=getRandomArbitary (HB-2, HB+2); 
		
		
		interval=60*1000/parseInt(Random_HB);
		i1258=interval*0.1/0.8;
		
		i3=interval*0.02/0.8;
		i4=interval*0.06/0.8;
		i67=interval*0.05/0.8;
		i9=interval*0.2/0.8;

		
				if(firstTime==true)
		{
			x[7]=0;
			firstTime=false;
			
		}

		x[0]=x[7];
		
		var firstInterval=i1258/6;
		for(var z=1;z<=1;z++)
		{
		  x[z]=x[z-1]+firstInterval;
		
		}
			
		//for p wave
		x[2]=x[1]+i1258/2;
		x[3]=x[1]+i1258;

		//for qrs
		x[4]=x[3]+i1258/2;
		x[5]=x[3]+i1258;

		//for t
		x[6]=x[5]+i1258/2;
		x[7]=x[5]+i1258;

		for(var j=0;j<=7;j++)
		{
			y[j]=0;
		}
		y[2]=getRandomArbitary (1.4-0.5, 1.4) ;
		y[3]=-0.25;
		y[4]=getRandomArbitary (1.6-0.5, 1.6) ;
		y[6]=getRandomArbitary (1.9-0.5, 1.9) ;
	return {xArray : x, yArray:y};

	}

SetTwoDVF = function()
{
	this.x= new Array();
	this.y= new Array();
	
 	this.setArray = function()
		{		
			var points = getPointsVF();			
			for(var i=0;i<=7;i++)
			{
				this.x[i]=points.xArray[i];
				this.y[i]=points.yArray[i];

			}
		}
}
	

var drawCurveVF=function()
{
		
		var o = new Array();
		
		for(var i=0;i<30;i++)
		{
			o[i] = new SetTwoDVF();
			o[i].setArray();
			
		}

		timerVF = setInterval("jQuery.fn.func();", 100);
		
		jQuery.fn.func = function(){
		board1.removeObject(chart1);
		board1.suspendUpdate();
		var vib = getVibration(.04, -.04);
		
		for(var i=0;i<30;i++)
		{

			var z = count;
			if(o[i].y[4]<=o[i].y[2] ){
				o[i].y[4] = o[i].y[4]+.2;
				o[i].y[2] = o[i].y[2]-.08;
			}
			dataArr1 = [[o[i].x[0]-z,o[i].x[1]-z,o[i].x[2]-z,o[i].x[3]-z,o[i].x[4]-z,o[i].x[5]-z,o[i].x[6]-z,o[i].x[7]-z],
			[o[i].y[0],o[i].y[1],o[i].y[2]+vib,o[i].y[3],o[i].y[4],o[i].y[5],o[i].y[6]+vib,o[i].y[7]]]
		
		chart1[i] = board1.create('spline', dataArr1, {strokeColor:'#FF0000',highlightStrokeColor:'#0000FF',strokeWidth:2,face: 'o',size:3});
		}
		count = count+20;
		if(count%30 == 0){
			jQuery.fn.func2();
		}
		
		
		}
		
		board1.unsuspendUpdate();	
}


var getPointSOAV=function()
	{
		var xArray = new Array();
		var yArray = new Array();

		
		if(slFlag == true){	
			for(var i in x){
			  x[i] = 0; 
			}
			slFlag = false;
		}
		
		
		//It will fatch the value from slider for heart beat
		HB=	parseInt($( "#angtxt" ).val( ));
		var Random_HB=getRandomArbitary (HB-2, HB+2); 
		
		
		interval=60*1000/parseInt(Random_HB);
		i1258=interval*0.1/0.8;
		
		i3=interval*0.02/0.8;
		i4=interval*0.06/0.8;
		i67=interval*0.05/0.8;
		i9=interval*0.2/0.8;

		
		if(firstTime==true)
		{
			x[15]=0;
			firstTime=false;
			
		}

		x[0]=x[15];
		
		var firstInterval=i1258/6;
		for(var z=1;z<=2;z++)
		{
		  x[z]=x[z-1]+firstInterval;
		
		}
			
		//for p wave
		x[3]=x[2]+i1258/2;
		x[4]=x[2]+i1258;
		
		//for Q
		x[5]=x[4]+i3;
		x[6]=x[5]+i4/2;
		x[7]=x[5]+i4;
		
		//for qrs
		x[8]=x[7]+i1258/2;
		x[9]=x[7]+i1258;
		
		//for s
		x[10]=x[9]+i67/2;
		x[11]=x[9]+i67;
		
		//for j
		x[12]=x[11]+i67/2;
		x[13]=x[11]+i67;
		
		//for t
		x[14]=x[13]+i1258/2;
		x[15]=x[13]+i1258;

		for(var j=0;j<=15;j++)
		{
			y[j]=0;
		}
		y[3]=getRandomArbitary (0.25-0.15, 0.25+0.15) ;
		y[6]=-0.15;
		y[8]=getRandomArbitary (1.6-0.5, 1.6) ;
		y[10]=-0.25;
		y[14]=getRandomArbitary (0.25-0.15, 0.25+0.15) ;	
		
	return {xArray : x, yArray:y};

	}

SetTwoDSOAV = function()
{
	this.x= new Array();
	this.y= new Array();
	
 	this.setArray = function()
		{		
			var points = getPointSOAV();			
			for(var i=0;i<=15;i++)
			{
				this.x[i]=points.xArray[i];
				this.y[i]=points.yArray[i];

			}
		}
}
	

var drawCurveSOAV=function()
{
		
		var o = new Array();
		for(var i=0;i<30;i++)
		{
			o[i] = new SetTwoDSOAV();
			o[i].setArray();
			
		}

		timerSOAV = setInterval("jQuery.fn.func();", 100);
		
		jQuery.fn.func = function(){
		board1.removeObject(chart1);
		board1.suspendUpdate();
		var vib = getVibration(.04, -.04);
		
		for(var i=0,alt=0;i<30;i++)
		{
			var z = count;
			if(o[i].y[14]<=o[i].y[3] ){
				o[i].y[14] = o[i].y[14]+.2;
			}
			if(alt%2 === 0){
				o[i].y[6]=0;
				o[i].y[8]=0;
				o[i].y[10]=0;
				o[i].y[14]=0;
			}
			
			dataArr1 = [[o[i].x[0]-z,o[i].x[1]-z,o[i].x[2]-z,o[i].x[3]-z,o[i].x[4]-z,o[i].x[5]-z,o[i].x[6]-z,o[i].x[7]-z,o[i].x[8]-z,o[i].x[9]-z,o[i].x[10]-z,o[i].x[11]-z,o[i].x[12]-z,o[i].x[13]-z,o[i].x[14]-z,o[i].x[15]-z],
			[o[i].y[0],o[i].y[1],o[i].y[2],o[i].y[3],o[i].y[4],o[i].y[5],o[i].y[6]+vib,o[i].y[7],o[i].y[8],o[i].y[9],o[i].y[10],o[i].y[11]+vib,o[i].y[12],o[i].y[13],o[i].y[14],o[i].y[15]]]
		
		chart1[i] = board1.create('spline', dataArr1, {labels:dataArr1,strokeColor:'#FC0415',highlightStrokeColor:'#0000FF',strokeWidth:2});
		alt+=1;
		}
		count = count+20;
		if(count%30 == 0){
			jQuery.fn.func2();
		}
	
		}
		
		board1.unsuspendUpdate();
		
}
var show_HR=function( event, ui ) 
{
	$( "#HR_val" ).val( ui.value );
}
var testFunc = function(){
	try{
		clearInterval(timerFOAV);
		clearInterval(timerSOAV);
		clearInterval(timerVF);
		clearInterval(timerAF);
		slFlag = true;
		globalFunc();
		
	}catch(e){
		alert("eeeee "+e);
	}
	
			
}

$(document).ready(function(){
	$( "#tabs" ).tabs();
	loadGraph();	
});
var  globalFunc = function(){
	var abnom = $("#selectabn").val();
	if(abnom == "Ventricular Fibrillation" ){
		firstTime = true;
		count = 20;
		cnt = 0;
		drawCurveVF(); 
	}else if(abnom == "Atrial Fibrillation"){
		firstTime = true;
		count = 20;
		cnt = 0;
		drawCurveAF(); 
	}else if(abnom == "First order of AV Block"){
		 firstTime = true;
		 count = 20;
		 cnt = 0;
		 drawCurveFOAV(); 
	}else if(abnom == "Second order of AV Block"){
		firstTime = true;
		count = 20;
		cnt = 0;
		drawCurveSOAV(); 
	}
	
}
var loadGraph = function(){
		board1 = JXG.JSXGraph.initBoard('box1', {boundingbox:[0,3,3000,-0.5], axis:false,showCopyright:false});
		//* ****for slider
		$( "#HR" ).slider({
			range: "min",
			value: 75,
			min: 60,
			max: 200,
			slide:show_HR,
			change:testFunc
		});
		$("#HR_M").html("Heart Beat");
		$( "#HR_val" ).val( $( "#HR" ).slider( "value" ) );
		globalFunc();
		
	$("#selectabn").change(function(){
		
		var abnom = $("#selectabn").val();
		switch(abnom)
		{
			 case "Atrial Fibrillation": $("#label").html("<h3>"+abnom+"</h3>");
			 case "First order of AV Block": $("#label").html("<h3>"+abnom+"</h3>");
			 case "Second order of AV Block": $("#label").html("<h3>"+abnom+"</h3>");
			 case "Ventricular Fibrillation":  $("#label").html("<h3>"+abnom+"</h3>");
			
		}
		globalFunc();
	});
	$('#checkOne').iCheckbox();
	$('#checkOne').change(function(e){
		clearInterval(timerFOAV);
		clearInterval(timerSOAV);
		clearInterval(timerAF);
		clearInterval(timerVF);
		if ( $('#checkOne').attr('checked') == true ) {
			e.stopImmediatePropagation();
			e.preventDefault();
		}else {
			slFlag = true;
			globalFunc();
		}
	});
	$().Xaxis();
	$().Yaxis();
}
var cnt = 0;
//for x and y axis in rapheal.js
jQuery.fn.Xaxis=function()
{
var i,counter=1;

var r=new Raphael(document.getElementById('axisX'),1000,30);
var X=r.path("M0 10L1200 10").attr({
            stroke: 'green',
            'stroke-width': 2
        });
		
		for(i=37;i<1000;i+=33.6)
	{
		if(counter==5)
		{
			counter=1;
			r.path("M"+i+" 0L"+i+" 10").attr("stroke","green");
		}
		else
		{
			r.path("M"+i+" 0L"+i+" 5").attr("stroke","green");
			counter++;
		}
	
	}
	
	var cordinate_X=new Array();
	jQuery.fn.func2 = function(){

			r.rect(0,15,1200,20).attr({"stroke":"#EEE", fill: "#EEE"});
			for(i=0,cnt;i<6;i++)
			{	
				var x=i+cnt;
				cordinate_X[i]=r.text(i*168+5,20,x).attr({'font-size':14});
			}

			cnt += 1;		
	}
	
}
	
jQuery.fn.Yaxis=function()
{
var i,counter=1,y_cordinate=3;

var r1=new Raphael(document.getElementById('axisY'),30,450);
var X1=r1.path("M30 0L30 305").attr({
            stroke: 'green',
            'stroke-width': 4
        });
		
		
		for(i=20;i<300;i+=17.4)
	{
	
	if(counter==5)
	{
		
		counter=1;
		r1.path("M15 "+i+"L35 "+i).attr("stroke","green");
		r1.text(10,i-70,y_cordinate).attr({'font-size':14});
		y_cordinate--;
	}
	else
	{
		r1.path("M25 "+i+"L35 "+i).attr("stroke","green");
		counter++;
	}
	
	}
	r1.text(10,260,"0").attr({'font-size':14});
	r1.text(12,300,"-0.4").attr({'font-size':14});
}


