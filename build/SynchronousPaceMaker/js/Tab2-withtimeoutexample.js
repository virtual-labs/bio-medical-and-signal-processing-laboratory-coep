
var HB;
var interval,i1258,i3,i4,i67,i9;
var x=new Array();
var y=new Array();
var dataArr1;
var chart1=new Array();
var firstTime=true;
var count= 20;
var timers = [];
var timer;
var slFlag = false;
//this variable is used to write cordinates at x axis


function getRandomArbitary (min, max) 
{
	return Math.random() * (max - min) + min;
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
	HB=	parseInt($( "#HR_val" ).val( ));
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
		
		for(var i=0;i<50;i++)
		{
			o[i] = new SetTwoD();
			o[i].setArray();
			
		}

		if (!timer) timer = setInterval("jQuery.fn.func();", 100);
		
		/*for (var t=0; t<10000; t++) {
			timers = setTimeout("jQuery.fn.func();",100); 
			//alert(1);
			}*/

		jQuery.fn.func = function(){
		board2.removeObject(chart1);
		board2.suspendUpdate();
		
		for(var i=0;i<50;i++)
		{
			var z = count;
			
			dataArr1 = [[o[i].x[0]-z,o[i].x[1]-z,o[i].x[2]-z,o[i].x[3]-z,o[i].x[4]-z,o[i].x[5]-z,o[i].x[6]-z,o[i].x[7]-z,o[i].x[8]-z,o[i].x[9]-z,o[i].x[10]-z,o[i].x[11]-z,o[i].x[12]-z,o[i].x[13]-z,o[i].x[14]-z,o[i].x[15]-z,o[i].x[16]-z,o[i].x[17]-z,o[i].x[18]-z,o[i].x[19]-z,o[i].x[20]-z,o[i].x[21]-z,o[i].x[22]-z,o[i].x[23]-z,o[i].x[24]-z,o[i].x[25]-z,o[i].x[26]-z,o[i].x[27]-z,o[i].x[28]-z],
			[o[i].y[0],o[i].y[1],o[i].y[2],o[i].y[3],o[i].y[4],o[i].y[5],o[i].y[6],o[i].y[7],o[i].y[8],o[i].y[9],o[i].y[10],o[i].y[11],o[i].y[12],o[i].y[13],o[i].y[14],o[i].y[15],o[i].y[16],o[i].y[17],o[i].y[18],o[i].y[19],o[i].y[20],o[i].y[21],o[i].y[22],o[i].y[23],o[i].y[24],o[i].y[25],o[i].y[26],o[i].y[27],o[i].y[28]]]

		chart1[i] = board2.create('spline', dataArr1, {strokeColor:'#FF0000',highlightStrokeColor:'#FF0000',strokeWidth:1
		});
		}
		count = count+30;
		}
		
		board2.unsuspendUpdate();
			
}
var show_HR=function( event, ui ) 
{
	$( "#HR_val" ).val( ui.value );
}
var testFunc = function(){
	try{
		clearInterval(timer);
		//clearTimeout(timers);
		//timers = null;
		timer = null;
		slFlag = true;
		drawCurve1();
		
	}catch(e){
		alert("eeeee "+e);
	}
	
			
}

		
$(function()
{
		$( "#tabs" ).tabs();
		//board1 = JXG.JSXGraph.initBoard('box2', {boundingbox:[0,3,3000,-0.5], axis:false,showCopyright:false});
		board2 = JXG.JSXGraph.initBoard('jxgbox', {originX: 10, originY: 350, unitX: 0.5, unitY:100,axis:true,showCopyright:false});
		//board2.suspendUpdate();
		//* ****for slider
		$( "#HR" ).slider({
			range: "min",
			value: 75,
			min: 60,
			max: 200,
			slide:show_HR,
			change:testFunc
		});
		
		$( "#HR_val" ).val( $( "#HR" ).slider( "value" ) );
		drawCurve1(); 
		
		
});

