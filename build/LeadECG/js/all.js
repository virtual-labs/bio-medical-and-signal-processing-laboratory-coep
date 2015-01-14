
var HB;
var interval,i1258,i3,i4,i67,i9;
var x=new Array();
var y=new Array();
var dataArr1;
var dataArr2;
var dataArr3;
var chart1=new Array();
var chart2=new Array();
var chart3=new Array();
var p=new Array();
var q=new Array();
var r=new Array();
var s=new Array();
var t=new Array();
var firstTime=true;
var count= 20;
var timer;
var slFlag = false;
var fz = false;
var tempFlag = false;
var board1;
var stval;
var cnt=0;
var wave1Level = 2.35;
var wave2Level = 1.2;
var wave3Level = 0.15;

$(function(){
	
	//JXG.JSXGraph.freeBoard(board);	
	//var board = JXG.JSXGraph.initBoard('waveform',{originX:50, originY:250, unitX:50, unitY:10, axis:true});
	 board1 = JXG.JSXGraph.initBoard('waveform', {boundingbox:[0,3,3000,-0.5], axis:false,showCopyright:false});
	//board.create('point',[1,5]);
	//drawCurve1();
	
//	$().Xaxis();
//	$().Yaxis();		
	$('#leadtype').delegate('option','click',initAll);
	drawCurve1('lead1');
});			

function initAll(){
			//console.log('evt triggered');
			board1.removeObject(chart1);
			board1.removeObject(chart2);
			board1.removeObject(chart3);
			board1.removeObject(p);
			board1.removeObject(q);
			board1.removeObject(r);
			board1.removeObject(s);
			board1.removeObject(t);
			board1.suspendUpdate();
			clearInterval(timer);
			firstTime=true;
			count= 20;
			slFlag = false;
			fz = false;
			tempFlag = false;
			cnt=0;
}


var drawAllCurves=function()
{
	initAll();
	var o = new Array();
	var o1 = new Array();
	var o2 = new Array();
			
	for(var i=0;i<30;i++)
	{
		o[i] = new SetTwoD();
		o[i].setArray();
	}
			
	firstTime = true;
			
	for(var i=0;i<30;i++)
	{
		o1[i] = new SetTwoD();
		o1[i].setArray();
	}

	firstTime = true;
			
	for(var i=0;i<30;i++)
	{
		o2[i] = new SetTwoD();
		o2[i].setArray();
	}

	timer = setInterval("jQuery.fn.func();", 500);
			
	jQuery.fn.func = function(){
	board1.removeObject(chart1);
	board1.removeObject(chart2);
	board1.removeObject(chart3);
	board1.removeObject(p);
	board1.removeObject(q);
	board1.removeObject(r);
	board1.removeObject(s);
	board1.removeObject(t);
	board1.suspendUpdate();
	var vib = getVibration(.04, -.04);
			
	for(var i=0;i<30;i++)
	{
		
		var z = count;
				
		for(var j=0;j<=30;j++)
		{
			o[i].y[j]=wave1Level;
			o1[i].y[j]=wave2Level;
			o2[i].y[j]=wave3Level;
		}
	
				
		if(i==0||i==4||i==8||i==12||i==16||i==20||i==24||i==28){
				
		//lead I
				
			o[i].y[6]=wave1Level+getRandomArbitary (0.25-0.15, 0.25+0.15) ;// for P
			o[i].y[9]=wave1Level-0.15;										// for Q
			o[i].y[11]=wave1Level+getRandomArbitary (0.4, 0.5);				// for R
					
			o[i].y[13]=wave1Level-0.15;									// for S
			o[i].y[17]=wave1Level+getRandomArbitary (0.07, 0.09) ;		// for T
				
		// lead II
				
			o1[i].y[6]=wave2Level+getRandomArbitary (0.25-0.15, 0.25+0.15) ;
			o1[i].y[9]=wave2Level-0.15;
			o1[i].y[11]=wave2Level+getRandomArbitary (0.8, 0.9);
	
			o1[i].y[13]=wave2Level-0.25;
			o1[i].y[17]=wave2Level+getRandomArbitary (0.25-0.15, 0.25+0.15) ;
		
		// lead III
				
			o2[i].y[6]=wave3Level+getRandomArbitary (0.25-0.15, 0.25+0.15) ;
			o2[i].y[9]=wave3Level-0.15;
			o2[i].y[11]=wave3Level+getRandomArbitary (0.55, 0.65);
					
			o2[i].y[13]=wave3Level-0.25;
			o2[i].y[17]=wave3Level+getRandomArbitary (0.25-0.15, 0.20) ;
				   
		}else if(i==1||i==5||i==9||i==13||i==17||i==21||i==25||i==29){
			
		// aVR
			o[i].y[6]=wave1Level+getRandomArbitary (-0.04,-0.05) ;
			o[i].y[9]=wave1Level+0.04;
			o[i].y[11]=wave1Level+getRandomArbitary (-0.4, -0.3);
					
			o[i].y[13]=wave1Level+0.07;
			o[i].y[17]= wave1Level+getRandomArbitary (-0.14, -0.16);
				
		// aVL				
			o1[i].y[6]=wave2Level+getRandomArbitary (0.03,0.04) ;
			o1[i].y[9]=wave2Level+0.0;
			o1[i].y[11]=wave2Level+getRandomArbitary (0.22,0.25);
				
			o1[i].y[13]=wave2Level-0.23;
			o1[i].y[17]=wave2Level+getRandomArbitary (0,0) ;
			
		// aVF
			
			o2[i].y[6]=wave3Level+getRandomArbitary (0.1,0.12) ; // for P
			o2[i].y[9]=wave3Level+0;										// for Q
			o2[i].y[11]=wave3Level+getRandomArbitary (0.7, 0.73);				// for R
					
			o2[i].y[13]=wave3Level-0.15;									// for S
			o2[i].y[17]=wave3Level+getRandomArbitary (0.3, 0.35) ;		// for T
		
		}else if(i==2||i==6||i==10||i==14||i==18||i==22||i==26){
					
		// v1	
					
			o[i].y[6]=wave1Level+getRandomArbitary (0.07,0.09) ; 
			o[i].y[9]=wave1Level+0;								
			o[i].y[11]=wave1Level+getRandomArbitary (0.1, 0.12);
					
			o[i].y[13]=wave1Level-0.4;						
			o[i].y[17]=wave1Level+getRandomArbitary (-0.1, -0.12) ;	

		// v2

			o1[i].y[6]=wave2Level+getRandomArbitary (0.07,0.09) ; 
			o1[i].y[9]=wave2Level+0;								
			o1[i].y[11]=wave2Level+getRandomArbitary (0.3, 0.33);
					
			o1[i].y[13]=wave2Level-0.5;						
			o1[i].y[17]=wave2Level+getRandomArbitary (0.2, 0.22) ;	

		// v3
				
			o2[i].y[6]=wave3Level+getRandomArbitary (0.07,0.09) ; 
			o2[i].y[9]=wave3Level+0;								
			o2[i].y[11]=wave3Level+getRandomArbitary (0.52, 0.55);
					
			o2[i].y[13]=wave3Level-0.5;						
			o2[i].y[17]=wave3Level+getRandomArbitary (0.2, 0.22) ;	

		}else if(i==3||i==7||i==11||i==13||i==17||i==21||i==25||i==29){
					
		// v4	
					
			o[i].y[6]=wave1Level+getRandomArbitary (0.07,0.09) ; 
			o[i].y[9]=wave1Level+0;								
			o[i].y[11]=wave1Level+getRandomArbitary (0.4, 0.5);
					
			o[i].y[13]=wave1Level-0.3;						
			o[i].y[17]=wave1Level+getRandomArbitary (0.16, 0.18) ;	

		// v5
				
			o1[i].y[6]=wave2Level+getRandomArbitary (0.07,0.09) ; 
			o1[i].y[9]=wave2Level+0;								
			o1[i].y[11]=wave2Level+getRandomArbitary (0.58, 0.6);
					
			o1[i].y[13]=wave2Level-0.15;						
			o1[i].y[17]=wave2Level+getRandomArbitary (0.2, 0.22) ;	

		// v6
				
			o2[i].y[6]=wave3Level+getRandomArbitary (0.07,0.09) ; 
			o2[i].y[9]=wave3Level+0;								
			o2[i].y[11]=wave3Level+getRandomArbitary (0.58, 0.6);
					
			o2[i].y[13]=wave3Level-0;						
			o2[i].y[17]=wave3Level+getRandomArbitary (0.2, 0.22) ;	
			
		}
				
		if(o[i].y[17]<=o[i].y[6] && (stval=='lead1'||stval=='lead2'||stval=='lead3')){
			o[i].y[17] = o[i].y[17]+.2;
			o[i].y[6] = o[i].y[6]-.08;
		}
			
		dataArr1 = [[o[i].x[0]-z,o[i].x[1]-z,o[i].x[2]-z,o[i].x[3]-z,o[i].x[4]-z,o[i].x[5]-z,o[i].x[6]-z,o[i].x[7]-z,o[i].x[8]-z,o[i].x[9]-z,o[i].x[10]-z,o[i].x[11]-z,o[i].x[12]-z,o[i].x[13]-z,o[i].x[14]-z,o[i].x[15]-z,o[i].x[16]-z,o[i].x[17]-z,o[i].x[18]-z,o[i].x[19]-z,o[i].x[20]-z,o[i].x[21]-z,o[i].x[22]-z,o[i].x[23]-z,o[i].x[24]-z,o[i].x[25]-z,o[i].x[26]-z,o[i].x[27]-z,o[i].x[28]-z],[o[i].y[0],o[i].y[1],o[i].y[2],o[i].y[3],o[i].y[4],o[i].y[5],o[i].y[6]+vib,o[i].y[7],o[i].y[8],o[i].y[9],o[i].y[10],o[i].y[11]+vib,o[i].y[12],o[i].y[13],o[i].y[14],o[i].y[15],o[i].y[16],o[i].y[17]+vib,o[i].y[18],o[i].y[19],o[i].y[20],o[i].y[21],o[i].y[22],o[i].y[23]+vib,o[i].y[24],o[i].y[25]+vib,o[i].y[26]+vib,o[i].y[27]+vib,o[i].y[28]]]

		dataArr2 = [[o1[i].x[0]-z,o1[i].x[1]-z,o1[i].x[2]-z,o1[i].x[3]-z,o1[i].x[4]-z,o1[i].x[5]-z,o1[i].x[6]-z,o1[i].x[7]-z,o1[i].x[8]-z,o1[i].x[9]-z,o1[i].x[10]-z,o1[i].x[11]-z,o1[i].x[12]-z,o1[i].x[13]-z,o1[i].x[14]-z,o1[i].x[15]-z,o1[i].x[16]-z,o1[i].x[17]-z,o1[i].x[18]-z,o1[i].x[19]-z,o1[i].x[20]-z,o1[i].x[21]-z,o1[i].x[22]-z,o1[i].x[23]-z,o1[i].x[24]-z,o1[i].x[25]-z,o1[i].x[26]-z,o1[i].x[27]-z,o1[i].x[28]-z],[o1[i].y[0],o1[i].y[1],o1[i].y[2],o1[i].y[3],o1[i].y[4],o1[i].y[5],o1[i].y[6]+vib,o1[i].y[7],o1[i].y[8],o1[i].y[9],o1[i].y[10],o1[i].y[11]+vib,o1[i].y[12],o1[i].y[13],o1[i].y[14],o1[i].y[15],o1[i].y[16],o1[i].y[17]+vib,o1[i].y[18],o1[i].y[19],o1[i].y[20],o1[i].y[21],o1[i].y[22],o1[i].y[23]+vib,o1[i].y[24],o1[i].y[25]+vib,o1[i].y[26]+vib,o1[i].y[27]+vib,o1[i].y[28]]]

		dataArr3 = [[o2[i].x[0]-z,o2[i].x[1]-z,o2[i].x[2]-z,o2[i].x[3]-z,o2[i].x[4]-z,o2[i].x[5]-z,o2[i].x[6]-z,o2[i].x[7]-z,o2[i].x[8]-z,o2[i].x[9]-z,o2[i].x[10]-z,o2[i].x[11]-z,o2[i].x[12]-z,o2[i].x[13]-z,o2[i].x[14]-z,o2[i].x[15]-z,o2[i].x[16]-z,o2[i].x[17]-z,o2[i].x[18]-z,o2[i].x[19]-z,o2[i].x[20]-z,o2[i].x[21]-z,o2[i].x[22]-z,o2[i].x[23]-z,o2[i].x[24]-z,o2[i].x[25]-z,o2[i].x[26]-z,o2[i].x[27]-z,o2[i].x[28]-z],[o2[i].y[0],o2[i].y[1],o2[i].y[2],o2[i].y[3],o2[i].y[4],o2[i].y[5],o2[i].y[6]+vib,o2[i].y[7],o2[i].y[8],o2[i].y[9],o2[i].y[10],o2[i].y[11]+vib,o2[i].y[12],o2[i].y[13],o2[i].y[14],o2[i].y[15],o2[i].y[16],o2[i].y[17]+vib,o2[i].y[18],o2[i].y[19],o2[i].y[20],o2[i].y[21],o2[i].y[22],o2[i].y[23]+vib,o2[i].y[24],o2[i].y[25]+vib,o2[i].y[26]+vib,o2[i].y[27]+vib,o2[i].y[28]]]
				
		chart1[i] = board1.create('spline', dataArr1, {strokeColor:'#00FF00',highlightStrokeColor:'#00FF00',strokeWidth:2});	
				
		chart2[i] = board1.create('spline', dataArr2, {strokeColor:'#00FF00',highlightStrokeColor:'#00FF00',strokeWidth:2});	
				
		chart3[i] = board1.create('spline', dataArr3, {strokeColor:'#00FF00',highlightStrokeColor:'#00FF00',strokeWidth:2});	
				
	}
		
		count = count+20;
		if(count%30 == 0){
			jQuery.fn.func2();
		}
	}
	board1.unsuspendUpdate();	
}

SetTwoDim = function()
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
		//alert('hi');
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
		
		return {xArray : x, yArray:y};
	}