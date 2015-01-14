/*
Author : Subh Kriti Anand
I-Value Bridge software solution
Date : 11/11/11
*/

/* code for functional part of Haemodialysis*/
var pos = 20;
var pos1= 280;
var interval = null;
var interval2= null;
var start = setInterval("startBuzzer()", 1000);
var flagdetect = false;
var t1;
var i12;
var dno;
var t;
var interofJar=11000;
var count=0;

$("#refresh").click(function(){
	window.location.reload(true);
});
function startBuzzer(){
	var rnd = getRandomBlood();
	if(rnd%10==0)
	{
		clearInterval(interval2 );
		playSound();
		$("#air").html("");
		document.getElementById("air").innerHTML="<img src='images/Button-Blank-Gray-icon.png' style = 'margin:10px 10px 30px 10px;' />";
		interval = window.setInterval("bloodLeak();", 800);
		//alert(interval);
		
	}
	else if(rnd%6==0)
	{
		clearInterval(interval);
		airDetection();
		$("#blood").html("");
		document.getElementById("blood").innerHTML="<img src='images/Button-Blank-Gray-icon.png' style='margin:5px 5px 10px 30px;'/>";
		interval2 = window.setInterval("airBloodLeak();", 800);
		//document.getElementById("blood").innerHTML="<img src=\"images/Button-Blank-Red-icon.png\" \"class='blood'\" />";
		
		flagdetect = true;
	}
}

function getRandomBlood (){
	var randomP = parseInt(Math.random()*29);
	return randomP;
}
function airDetection(){
	$("#air").html("");
	document.getElementById("air").innerHTML="<img src = '\images/Button-Blank-Red-icon.png' style = 'margin:10px 10px 30px 10px;' />";
	document.getElementById('bloodDropCanvas').style.display = 'none';
	document.getElementById('airBloodCanvas').style.display = 'block';
	document.getElementById("dummy").innerHTML= "<object type=\"application/ogg\" data=\"images/beep.ogg\">"+"</object>";
}
function playSound(){
	$("#blood").html("");
	document.getElementById("blood").innerHTML="<img src='images/Button-Blank-Red-icon.png' style='margin:5px 5px 10px 30px;'/>";
	document.getElementById('bloodDropCanvas').style.display = 'block';
	document.getElementById('airBloodCanvas').style.display = 'none';
	//document.getElementById("dummy").innerHTML= "<object type=\"application/ogg\" data=\"images/beep.ogg\">"+"</object>";
}
function togglestyle(el){
	
	if(el.className == "on") {
	
		el.className="off";
		el.value="OFF";
	} else {
		count++;
		el.className="on";
		el.value="ON";
		setValue(el);
		
	}
	
	if(count>1)
			i12=0;
}
function disp()
{	
	 if(i12>-1)
		 {
			  $("#text4").val(i12);
			  dno = i12--;
			  t1 = setTimeout("disp()",3);			 
		 }
		 else 
		 {
				clearTimeout(t1);		
		 }
}
var setValue = function(el){	
	var UFG = $("#text1").val();
	var PTH = $("#text2").val();
	var UFR = UFG/PTH;
	if(!!UFR)
	{
		$("#text3").val(UFR);
	}
	i12=parseInt($("#text1").val());
	disp();
	var BloodFlowRate = $("#textBFR").val();
	$("#textDFR").val(BloodFlowRate*(1.8));
	t=document.getElementById("rightFill").style.top;
	
	if(t=="660px"){
		$("#rightFill").stop();
		}else{
		
	$("#leftFill").animate({height:"-=80px", top:"+=79px"},UFG*7.5);
	$("#rightFill").animate({height:"+=78px", top:"-=78px"},UFG*7.5);
	}
	
}
function airBloodLeak()
{      
    var airCanvas =document.getElementById("airBloodCanvas");
	var cntx1=airCanvas.getContext("2d");
	cntx1.fillStyle="white";
	cntx1.beginPath();
	if(pos1 >= 40)
	{
		cntx1.arc(pos1,20,5,0,Math.PI*2,true);
	}else{
		pos1 = 280;
	}
	cntx1.closePath();
	cntx1.fill();
	pos1 = pos1-20;
	if(pos1 == 20)
	{
		cntx1.clearRect (0,0,airCanvas.width,airCanvas.height);
	}
}
function bloodLeak(){      
   var c1=document.getElementById("bloodDropCanvas");
	var cntx=c1.getContext("2d");
	cntx.fillStyle="red";
	cntx.beginPath();
	if(pos <= 100){
		cntx.arc(30,pos,5,0,Math.PI*2,true);
	}else{
		pos = 0;
	}
	cntx.closePath();
	cntx.fill();
	pos = pos+20;
	if(pos == 120 && flagdetect == true)
	{
		cntx.clearRect (0,0,c1.width,c1.height);
	}
}
