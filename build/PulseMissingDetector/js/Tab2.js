/*
Author: Subh Kriti A.
Date  : 13/8/2011
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
var timer;
var slFlag = false;
var bubFlag = false;
var rnd = false;
tempFlag = false;
var missed =  new Array();

//this variable is used to write cordinates at x axis


function getRandomArbitary (min, max) 
{
	return Math.random() * (max - min) + min;
}
function getRandomPWave (){
	var randomP = parseInt(Math.random()*29);
	return randomP;
}

/*function playSound() {
	$("#jquery_jplayer_1").jPlayer({
        ready: function () {
            $(this).jPlayer("setMedia", {
                mp3: "beep-1.mp3",
            }).jPlayer("play"); // auto play
        },
		ended: function (event) {
            $(this).jPlayer("play",0);
        },
        swfPath: "swf",
        supplied: "mp3"
    })
	/*.bind($.jPlayer.event.play, function() { // pause other instances of player when current one play
            $(this).jPlayer("pauseOthers");
    });
	
}*/
function playSound(){
	document.getElementById("beepImg").innerHTML="<img src = 'images/Button-Blank-Red-icon.png' />";
	//document.getElementById('bloodDropCanvas').style.display = 'block';
	//document.getElementById('airBloodCanvas').style.display = 'none';
	document.getElementById("beepImg").innerHTML="<object class='sound' type=\"application/ogg\" data=\"images/beep.ogg\">"+"</object>";
}
var getPoints=function()
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
		HB = 75; 

		if(tempFlag == true){
			HB = parseInt($('#angtxt').val());
		}
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
		y[6]=getRandomArbitary (0.25-0.15, 0.25+0.15) ;
		y[9]=-0.15;
		y[11]=getRandomArbitary (1.6-0.5, 1.6) ;
		y[13]=-0.25;
		y[17]=getRandomArbitary (0.25-0.15, 0.25+0.15) ;
	
	return {xArray : x, yArray:y};

	}

SetTwoD = function()
{
	this.x= new Array();
	this.y= new Array();
	
 	this.setArray = function()
		{		
			var points = getPoints();			
			for(var i=0;i<=28;i++)
			{
				this.x[i]=points.xArray[i];
				this.y[i]=points.yArray[i];

			}
		}
}

var drawCurve1=function()
{
		
		var o = new Array();
		
		for(var i=0;i<30;i++)
		{
			o[i] = new SetTwoD();
			o[i].setArray();
			
		}

		timer = setInterval("jQuery.fn.func();", 100);
		
		jQuery.fn.func = function(){
		board1.removeObject(chart1);
		board1.suspendUpdate();
		rnd = getRandomPWave();
		
		//var flag = false;
		//if(rnd%2==0){
		//	flag = true;
		//}
		
		for(var i=0;i<30;i++)
		{
			var z = count;
			if(o[i].y[17]<=o[i].y[6] ){
				o[i].y[17] = o[i].y[17]+.2;
				o[i].y[6] = o[i].y[6]-.08;
			}
			if(rnd%2==0){
				o[rnd].y[6] = o[i].y[0];
				if(count%30 == 0){
					flag = true;
				}
				
			}else{
				flag = false;
				document.getElementById("beepImg").innerHTML="<img src=\"images/Button-Blank-Gray-icon.png\" />";
			}
			
			dataArr1 = [[o[i].x[0]-z,o[i].x[1]-z,o[i].x[2]-z,o[i].x[3]-z,o[i].x[4]-z,o[i].x[5]-z,o[i].x[6]-z,o[i].x[7]-z,o[i].x[8]-z,o[i].x[9]-z,o[i].x[10]-z,o[i].x[11]-z,o[i].x[12]-z,o[i].x[13]-z,o[i].x[14]-z,o[i].x[15]-z,o[i].x[16]-z,o[i].x[17]-z,o[i].x[18]-z,o[i].x[19]-z,o[i].x[20]-z,o[i].x[21]-z,o[i].x[22]-z,o[i].x[23]-z,o[i].x[24]-z,o[i].x[25]-z,o[i].x[26]-z,o[i].x[27]-z,o[i].x[28]-z],
			[o[i].y[0],o[i].y[1],o[i].y[2],o[i].y[3],o[i].y[4],o[i].y[5],o[i].y[6],o[i].y[7],o[i].y[8],o[i].y[9],o[i].y[10],o[i].y[11],o[i].y[12],o[i].y[13],o[i].y[14],o[i].y[15],o[i].y[16],o[i].y[17],o[i].y[18],o[i].y[19],o[i].y[20],o[i].y[21],o[i].y[22],o[i].y[23],o[i].y[24],o[i].y[25],o[i].y[26],o[i].y[27],o[i].y[28]]]
		
		chart1[i] = board1.create('spline', dataArr1, {labels:dataArr1,strokeColor:'#00FF00',highlightStrokeColor:'#00FF00',strokeWidth:2
		});
		
		}
		count = count+20;
		if(count%30 == 0){
			jQuery.fn.func2();
		}
		if(flag == true){
			//$("audio").iWish({audioSource: "beep-1", autoPlay: true});
			
			//var miss = document.getElementById("beepImg").innerHTML="<img src=\"images/Button-Blank-Red-icon.png\" />";
			//missed.push(miss);
			//$("#misstxt").val(missed.length);
			
		}
		playSound();
		}
		
		board1.unsuspendUpdate();	
}


var changeFunc = function(){
	try{
		clearInterval(timer);
		slFlag = true;
		tempFlag = true;
		drawCurve1();
	}catch(e){
		console.log("Error in Knob controller :"+e);
	}
}		
$(function()
{
		if($.browser.msie){
			document.write("The existing version of Internet Explorer is not supported");
			document.write("<A href='http://www.mozilla.com/en-US/products/download.html'>Click on the  Link :</A>");
		}else{

		$( "#tabs" ).tabs();
		board1 = JXG.JSXGraph.initBoard('box1', {boundingbox:[0,3,3000,-0.5], axis:false,showCopyright:false});
		drawCurve1(); 

	$('#checkOne').iCheckbox();
	$('#checkOne').change(function(e){
		clearInterval(timer);
		if ( $('#checkOne').attr('checked') == true ) {
			e.stopImmediatePropagation();
			e.preventDefault();
		}else {
			slFlag = true;
			drawCurve1();
		}
	});
	$().Xaxis();
	$().Yaxis();
	}
});

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
	var cnt = 0;
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
