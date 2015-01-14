var seriesOption = { lines: { show: true }, shadowSize: 0,color: '#000000' };
var t;
var isAnimationStart = false;
var array = [];
$(function(){
		if($.browser.msie){
			document.write("The existing version of Internet Explorer is not supported");
			document.write("<A href='http://www.mozilla.com/en-US/products/download.html'>Click on the  Link :</A>");
		}else{	
				
	
	var waveOption = "<select id='motionType'>"+
							"<option value='baseline' selected='selected'>Healthy Patient, Baseline activity</option>"+
							"<option value='LeftHandBackward'>Left Hand Backward</option>"+
							"<option value='LeftHandforward'>Left Hand Forward</option>"+
							"<option value='LeftHandImaginaryBackward'>Left Hand Imaginary Backward</option>"+
							"<option value='LeftHandImaginaryForward'>Left Hand Imaginary Forward</option>"+
							"<option value='LeftHandRandom'>Left Hand Random Movement</option>"+
							"<option value='LeftLeg'>Left Leg</option>"+
							"<option value='RightHandBackward'>Right Hand Backward</option>"+
							"<option value='RightHandForward'>Right Hand Forward</option>"+
							"<option value='RightHandImaginaryBackward'>Right Hand Imaginary Backward</option>"+
							"<option value='RightHandImaginaryForward'>Right Hand Imaginary Forward</option>"+
							"<option value='RightHandRandom'>Right Hand Random</option>"+
							"<option value='RightLeg'>Right Leg</option>"+
					"</select>";

	var samplingRate = "<input type='text' id='sampleRate' value='500' name='samplerate' size='5' disabled='disabled' ></input>";

	var sampleReturn = "<select>" +
							"<option value='20'>20</option>"+
							"<option value='50'>50</option>"+
							"<option value='100'>100</option>"+
							"<option value='500'>500</option>"+
							"<option value='1500'>1500</option>"+
							"<option value='2000'>2000</option>"+
							"<option value='3000'>3000</option>"+
							"<option value='5000'>5000</option>"+
						"</select>"; 

	var sampleReturnInput = "<input name='sampling' value='100' id='sampling' size='5'></input>";

	$("#waveSelecter").append(waveOption);
	$("#samplingRate").append(samplingRate);
	$("#sampleReturn").append(sampleReturnInput);

	attachEventOnGraph();
	showBaseLineGraph();
	var canvas = document.getElementById("myCanvas");
	var context = canvas.getContext("2d");
	//context.fillStyle = "rgba(0, 0, 255, .5)";
	//context.fillRect(25, 25, 125, 125);
	// Set the style properties.
	context.fillStyle   = '#000000';
	context.strokeStyle = '#000000';
	context.lineWidth   = 1;

	context.beginPath();
	// Start from the top-left point.
	//connect fp1 graph
	context.moveTo(700,100); // give the (x,y) coordinates
	context.lineTo(800,100);
	context.moveTo(800,100); // give the (x,y) coordinates
	context.lineTo(800, 300);
	context.moveTo(600,300); // give the (x,y) coordinates
	context.lineTo(800,300);
	context.moveTo(600,300); // give the (x,y) coordinates
	context.lineTo(600, 375);
	
	//connect fp2 graph
	context.moveTo(700,95); // give the (x,y) coordinates
	context.lineTo(805,95);
	context.moveTo(805,95); // give the (x,y) coordinates
	context.lineTo(805, 376);
	
	//connect f4  f8 graph
	context.moveTo(700,105); // give the (x,y) coordinates
	context.lineTo(1110,105);
	context.moveTo(700,107); // give the (x,y) coordinates
	context.lineTo(1110,107);

	context.moveTo(1110,105); // give the (x,y) coordinates
	context.lineTo(1110, 376);
	context.moveTo(1112,105); // give the (x,y) coordinates
	context.lineTo(1112, 385);

	context.moveTo(1000,376); // give the (x,y) coordinates
	context.lineTo(1110,376);
	context.moveTo(1110,385); // give the (x,y) coordinates
	context.lineTo(1210,385);

	context.moveTo(1000,375); // give the (x,y) coordinates
	context.lineTo(1000, 475);
	context.moveTo(1210,385); // give the (x,y) coordinates
	context.lineTo(1210, 475);

	//connect c4 t4 graph
	context.moveTo(700,117); // give the (x,y) coordinates
	context.lineTo(1130,117);
	context.moveTo(700,119); // give the (x,y) coordinates
	context.lineTo(1130,119);

	context.moveTo(1130,117); // give the (x,y) coordinates
	context.lineTo(1130, 640);
	context.moveTo(1132,117); // give the (x,y) coordinates
	context.lineTo(1132, 635);

	context.moveTo(1000,640); // give the (x,y) coordinates
	context.lineTo(1130,640);
	context.moveTo(1132,635); // give the (x,y) coordinates
	context.lineTo(1220,635);

	context.moveTo(1000,640); // give the (x,y) coordinates
	context.lineTo(1000, 658);
	context.moveTo(1220,635); // give the (x,y) coordinates
	context.lineTo(1220, 658);


	//connect p4 t6 graph
	context.moveTo(700,123); // give the (x,y) coordinates
	context.lineTo(1120,123);
	context.moveTo(700,125); // give the (x,y) coordinates
	context.lineTo(1120,125);

	context.moveTo(1120,123); // give the (x,y) coordinates
	context.lineTo(1120, 810);
	context.moveTo(1122,123); // give the (x,y) coordinates
	context.lineTo(1122, 814);

	context.moveTo(1000,810); // give the (x,y) coordinates
	context.lineTo(1120,810);
	context.moveTo(1122,814); // give the (x,y) coordinates
	context.lineTo(1220,814);

	context.moveTo(1000,810); // give the (x,y) coordinates
	context.lineTo(1000, 835);
	context.moveTo(1220,814); // give the (x,y) coordinates
	context.lineTo(1220, 838);

	//connect fz o2 pz graph

	context.moveTo(700,133); // give the (x,y) coordinates
	context.lineTo(900,133);
	context.moveTo(700,135); // give the (x,y) coordinates
	context.lineTo(900,135);
	context.moveTo(700,137); // give the (x,y) coordinates
	context.lineTo(900,137);

	context.moveTo(898,133); // give the (x,y) coordinates
	context.lineTo(898, 985);
	context.moveTo(900,133); // give the (x,y) coordinates
	context.lineTo(900, 1015);
	context.moveTo(902,133); // give the (x,y) coordinates
	context.lineTo(902, 1000);

	context.moveTo(680,985); // give the (x,y) coordinates
	context.lineTo(898,985);
	context.moveTo(902,1000); // give the (x,y) coordinates
	context.lineTo(1160,1000);

	context.moveTo(680,985); // give the (x,y) coordinates
	context.lineTo(680, 1015);
	context.moveTo(1160,1000); // give the (x,y) coordinates
	context.lineTo(1160, 1015);

	//connect cz o1 graph
	context.moveTo(700,145); // give the (x,y) coordinates
	context.lineTo(780,145);
	context.moveTo(700,147); // give the (x,y) coordinates
	context.lineTo(780,147);

	context.moveTo(780,145); // give the (x,y) coordinates
	context.lineTo(780, 290);
	context.moveTo(782,145); // give the (x,y) coordinates
	context.lineTo(782, 290);

	context.moveTo(447,290); // give the (x,y) coordinates
	context.lineTo(782,290);
	context.moveTo(447,292); // give the (x,y) coordinates
	context.lineTo(782,292);

	context.moveTo(447,290); // give the (x,y) coordinates
	context.lineTo(447, 1000);
	context.moveTo(449,290); // give the (x,y) coordinates
	context.lineTo(449, 1015);

	context.moveTo(200,1000); // give the (x,y) coordinates
	context.lineTo(447,1000);
	
	context.moveTo(200,1000); // give the (x,y) coordinates
	context.lineTo(200, 1015);

	//connect t5 p3 graph
	context.moveTo(700,150); // give the (x,y) coordinates
	context.lineTo(760,150);
	context.moveTo(700,152); // give the (x,y) coordinates
	context.lineTo(760,152);

	context.moveTo(760,150); // give the (x,y) coordinates
	context.lineTo(760, 270);
	context.moveTo(762,150); // give the (x,y) coordinates
	context.lineTo(762, 270);

	context.moveTo(225,270); // give the (x,y) coordinates
	context.lineTo(762,270);
	context.moveTo(225,272); // give the (x,y) coordinates
	context.lineTo(762,272);

	context.moveTo(225,270); // give the (x,y) coordinates
	context.lineTo(225, 800);
	context.moveTo(227,270); // give the (x,y) coordinates
	context.lineTo(227, 815);

	context.moveTo(135,800); // give the (x,y) coordinates
	context.lineTo(225,800);
	context.moveTo(227,815); // give the (x,y) coordinates
	context.lineTo(310,815);

	context.moveTo(135,800); // give the (x,y) coordinates
	context.lineTo(135, 835);
	context.moveTo(310,815); // give the (x,y) coordinates
	context.lineTo(310, 835);

	//connect t3 c3 graph
	context.moveTo(700,155); // give the (x,y) coordinates
	context.lineTo(740,155);
	context.moveTo(700,157); // give the (x,y) coordinates
	context.lineTo(740,157);

	context.moveTo(740,155); // give the (x,y) coordinates
	context.lineTo(740, 250);
	context.moveTo(742,155); // give the (x,y) coordinates
	context.lineTo(742, 250);

	context.moveTo(220,250); // give the (x,y) coordinates
	context.lineTo(742,250);
	context.moveTo(220,252); // give the (x,y) coordinates
	context.lineTo(742,252);

	context.moveTo(220,250); // give the (x,y) coordinates
	context.lineTo(220, 620);
	context.moveTo(222,250); // give the (x,y) coordinates
	context.lineTo(222, 635);

	context.moveTo(135,620); // give the (x,y) coordinates
	context.lineTo(220,620);
	context.moveTo(222,635); // give the (x,y) coordinates
	context.lineTo(310,635);
	
	context.moveTo(135,620); // give the (x,y) coordinates
	context.lineTo(135, 655);
	context.moveTo(310,635); // give the (x,y) coordinates
	context.lineTo(310, 655);

	//connect f7 f3  graph
	context.moveTo(700,165); // give the (x,y) coordinates
	context.lineTo(720,165);
	context.moveTo(700,167); // give the (x,y) coordinates
	context.lineTo(720,167);

	context.moveTo(720,165); // give the (x,y) coordinates
	context.lineTo(720, 235);
	context.moveTo(722,165); // give the (x,y) coordinates
	context.lineTo(722, 235);

	context.moveTo(210,235); // give the (x,y) coordinates
	context.lineTo(722,235);
	context.moveTo(210,237); // give the (x,y) coordinates
	context.lineTo(722,237);

	context.moveTo(210,235); // give the (x,y) coordinates
	context.lineTo(210, 420);
	context.moveTo(212,235); // give the (x,y) coordinates
	context.lineTo(212, 435);

	context.moveTo(135,420); // give the (x,y) coordinates
	context.lineTo(210,420);
	context.moveTo(212,435); // give the (x,y) coordinates
	context.lineTo(310,435);
	
	context.moveTo(135,420); // give the (x,y) coordinates
	context.lineTo(135, 475);
	context.moveTo(310,435); // give the (x,y) coordinates
	context.lineTo(310, 475);
	
	
	
	var image = document.getElementById("image4");
	var image2 = document.getElementById("image5");
    context.drawImage(image, 530, 90);
	
  	context.drawImage(image2, 130, 30);	
  	
	context.fill();
	context.stroke();
	context.closePath();
	
	//Arc start
   	context.beginPath();
	context.arc(700, 130, 50, 0.5 * Math.PI, 1.5 * Math.PI, false);
	context.lineWidth = 10;
	context.stroke();

	context.fillStyle   = '#000000';
	context.strokeStyle = '#000000';
	context.lineWidth   = 2;

	context.moveTo(695,80); // give the (x,y) coordinates
	context.lineTo(695, 180);
	
	context.fill();
	context.stroke();
	context.closePath();
	
	//arc close
	
	//Arc start
   	context.beginPath();
	context.arc(308, 120, 70, 1.5 * Math.PI, 0.5 * Math.PI, false);
	context.lineWidth = 10;
	context.stroke();

	
	context.fillStyle   = '#000000';
		context.strokeStyle = '#000000';
		context.lineWidth   = 2;
	
		context.moveTo(310,80); // give the (x,y) coordinates
		context.lineTo(310, 180);
		
		context.fill();
		context.stroke();
		context.closePath();
	
	
	//arc close
	
	context.fillStyle   = '#000000';
	context.strokeStyle = '#000000';
	context.lineWidth   = 5;
	context.moveTo(350,120); // give the (x,y) coordinates
	context.lineTo(535,120);
	context.fill();
	context.stroke();
	context.closePath();
	
	
	//cicle
	/*context.beginPath();
	//draw arc: arc(x, y, radius, startAngle, endAngle, anticlockwise)
	context.arc(70, 70, 15, Math.PI*2, 0, true);
	context.closePath();
	context.fill();*/
	//Semi circle start
	//f7
	context.beginPath();
	context.arc(135, 476, 5, Math.PI, 0.01 * Math.PI, false);
	context.stroke();
	context.closePath();
	
	//f3
	context.beginPath();
	context.arc(310, 476, 5, Math.PI, 0.01 * Math.PI, false);
	context.stroke();
	context.closePath();
	
	//t3
	context.beginPath();
	context.arc(135, 656, 5, Math.PI, 0.01 * Math.PI, false);
	context.stroke();
	context.closePath();
	
	//c3
	context.beginPath();
	context.arc(310, 656, 5, Math.PI, 0.01 * Math.PI, false);
	context.stroke();
	context.closePath();
	
	//t5
	context.beginPath();
	context.arc(135, 836, 5, Math.PI, 0.01 * Math.PI, false);
	context.stroke();
	context.closePath();
	
	//p3
	context.beginPath();
	context.arc(310, 836, 5, Math.PI, 0.01 * Math.PI, false);
	context.stroke();
	context.closePath();
	
	//f4
	context.beginPath();
	context.arc(1000, 476, 5, Math.PI, 0.01 * Math.PI, false);
	context.stroke();
	context.closePath();
	
	//f8
	context.beginPath();
	context.arc(1210, 476, 5, Math.PI, 0.01 * Math.PI, false);
	context.stroke();
	context.closePath();
	
	//c4
	context.beginPath();
	context.arc(1000, 656, 5, Math.PI, 0.01 * Math.PI, false);
	context.stroke();
	context.closePath();
	
	//t4
	context.beginPath();
	context.arc(1220, 656, 5, Math.PI, 0.01 * Math.PI, false);
	context.stroke();
	context.closePath();
	
	//p4
	context.beginPath();
	context.arc(1000, 836, 5, Math.PI, 0.01 * Math.PI, false);
	context.stroke();
	context.closePath();
	
	//t6
	context.beginPath();
	context.arc(1220, 836, 5, Math.PI, 0.01 * Math.PI, false);
	context.stroke();
	context.closePath();
	
	//cz
	context.beginPath();
	context.arc(200, 1016, 5, Math.PI, 0.01 * Math.PI, false);
	context.stroke();
	context.closePath();
	
	//o1
	context.beginPath();
	context.arc(449, 1016, 5, Math.PI, 0.01 * Math.PI, false);
	context.stroke();
	context.closePath();
	
	//fz
	context.beginPath();
	context.arc(680, 1016, 5, Math.PI, 0.01 * Math.PI, false);
	context.stroke();
	context.closePath();
	
	//o2
	context.beginPath();
	context.arc(900, 1016, 5, Math.PI, 0.01 * Math.PI, false);
	context.stroke();
	context.closePath();
	
	//pz
	context.beginPath();
	context.arc(1160, 1016, 5, Math.PI, 0.01 * Math.PI, false);
	context.stroke();
	context.closePath();
	
	//fp1
	context.beginPath();
	context.arc(600, 376, 5, Math.PI, 0.01 * Math.PI, false);
	context.stroke();
	context.closePath();
	
	//fp2
	context.beginPath();
	context.arc(805, 376, 5, Math.PI, 0.01 * Math.PI, false);
	context.stroke();
	context.closePath();
	//connectsemi circle end
	
	}
});

function IsNumeric(numstr)
{
	var mystring = numstr;
	if(mystring == "" && mystring == null)
	{
		var msg = "Please Enter sample rate.";
		showDialog(createDialogObjectForAlert(msg));
		return false;
	}else{
		if(mystring > 5000){
			var msg = "Please Enter sample rate less than 5000";
			showDialog(createDialogObjectForAlert(msg));
			return false;
		}else{
			if (mystring.match(/^\d+$/ ) ) {
				return true;
			} else {
				var msg = "Only numeric values are allowed";
				showDialog(createDialogObjectForAlert(msg));
				return false;
			}	
		}
		
	}
}

var showDialog =  function(dialogOption) {
				$('#dialog').dialog(dialogOption);
				$('#dialog').dialog('open');
				document.getElementById('dialog').innerHTML = dialogOption.message;
			};


var createDialogObjectForAlert = function(message) {
				var dialogObject = new Object();
				dialogObject.title = "Electroencephalogram";
				dialogObject.message = message;
				dialogObject.width = 500;
				dialogObject.maxHeight = 400;
				dialogObject.modal = true;
				dialogObject.buttons = {
							"Ok": function() {
								$(this).dialog("close"); 
							}
						};
				return dialogObject;
			};


var attachEventOnGraph = function(){

	function showTooltip(x, y, contents) {
		$('<div id="tooltip">' + contents + '</div>').css( {
			position: 'absolute',
			display: 'none',
			top: y + 5,
			left: x + 5,
			border: '.5px solid #fdd',
			padding: '2px',
			'background-color': '#fee',
			'font-size':'100%',
			opacity: 0.80
		}).appendTo("body").fadeIn(200);
	}
	var previousPoint = null;
	$("#option").delegate("div", "plothover", null, function(event, pos, item) {
		if (item) {
			if (previousPoint != item.dataIndex) {
				previousPoint = item.dataIndex;
				$("#tooltip").remove();
				var x = item.datapoint[0].toFixed(2),
				y = item.datapoint[1].toFixed(2);
				showTooltip(item.pageX, item.pageY, item.series.label + " " +x + " = " + y);
			}
		}
		else {
			$("#tooltip").remove();
			previousPoint = null;            
		}
	});

	$('#motionType').bind('change keyup',function () {
		
		var type = $('#motionType').children("option:selected").attr('value');
		$("#type").val(type);
		
		var sampleRate = $("#sampling").val();
		
		if(type == "" || type == null)
			type = "baseline";
		
		if(!IsNumeric(sampleRate) && sampleRate > 5000){
			return;
		}
		
		if(isAnimationStart == true){
			clearTimeout(t);
			var speed = $("#sec").val();
			animateGraph(type, speed); 
		}else{
			if(type == "baseline"){
				showBaseLineGraph(sampleRate);
			}else if(type == "LeftHandBackward"){
				showLeftHandBackwardMovementGraph(sampleRate);
			}else if(type == "LeftHandforward"){
				showLeftHandForwardMovementGraph(sampleRate);
			}else if(type == "LeftHandImaginaryBackward"){
				showLeftHandImaginaryBackwardMovementGraph(sampleRate);
			}else if(type == "LeftHandImaginaryForward"){
				showLeftHandImaginaryForwardMovementGraph(sampleRate);
			}else if(type == "LeftHandRandom"){
				showLeftHandRandomMovementGraph(sampleRate);
			}else if(type == "LeftLeg"){
				showLeftLegMovementGraph(sampleRate);
			}else if(type == "RightHandBackward"){
				showRightHandBackwardMovementGraph(sampleRate);
			}else if(type == "RightHandForward"){
				showRightHandForwardMovementGraph(sampleRate);
			}else if(type == "RightHandImaginaryBackward"){
				showRightHandImaginaryBackwardMovementGraph(sampleRate);
			}else if(type == "RightHandImaginaryForward"){
				showRightHandImaginaryForwardMovementGraph(sampleRate);
			}else if(type == "RightHandRandom"){
				showRightHandRandomMovementGraph(sampleRate);
			}else if(type == "RightLeg"){
				showRightLegMovementGraph(sampleRate);
			}
		}
		
	});

	$("#showGraph").click(function(){
		var sampleRate = $("#sampling").val();
		var motionType = $("#type").val();
		
		if(motionType == "" || motionType == null)
			motionType = "baseline";
		
		if(!IsNumeric(sampleRate)){
			return;
		}
		
		if(motionType == "baseline"){
			showBaseLineGraph(sampleRate);
		}else if(motionType == "LeftHandBackward"){
			showLeftHandBackwardMovementGraph(sampleRate);
		}else if(motionType == "LeftHandforward"){
			showLeftHandForwardMovementGraph(sampleRate);
		}else if(motionType == "LeftHandImaginaryBackward"){
			showLeftHandImaginaryBackwardMovementGraph(sampleRate);
		}else if(motionType == "LeftHandImaginaryForward"){
			showLeftHandImaginaryForwardMovementGraph(sampleRate);
		}else if(motionType == "LeftHandRandom"){
			showLeftHandRandomMovementGraph(sampleRate);
		}else if(motionType == "LeftLeg"){
			showLeftLegMovementGraph(sampleRate);
		}else if(motionType == "RightHandBackward"){
			showRightHandBackwardMovementGraph(sampleRate);
		}else if(motionType == "RightHandForward"){
			showRightHandForwardMovementGraph(sampleRate);
		}else if(motionType == "RightHandImaginaryBackward"){
			showRightHandImaginaryBackwardMovementGraph(sampleRate);
		}else if(motionType == "RightHandImaginaryForward"){
			showRightHandImaginaryForwardMovementGraph(sampleRate);
		}else if(motionType == "RightHandRandom"){
			showRightHandRandomMovementGraph(sampleRate);
		}else if(motionType == "RightLeg"){
			showRightLegMovementGraph(sampleRate);
		}
	});
	
	$('#aniSec').bind('change keyup',function () {
		clearTimeout(t);
		var type = $("#type").val();
		var sec = $('#aniSec').children("option:selected").attr('value');
		$("#sec").val(sec);
		animateGraph(type, sec);
	});

	$("#refresh").click(function(){
		$("select#motionType option[selected]").removeAttr("selected");
		$("select#motionType option[value='baseline']").attr("selected", "selected");
		$("#sampling").val("100");
		showBaseLineGraph();
	});

	jsPlumb.DefaultDragOptions = { cursor: "pointer", zIndex:2000 };

	var connectorStrokeColor = "rgba(25, 25, 100, 1)",
	   connectorHighlightStrokeColor = "rgba(90, 90, 100, 1)",
	   hoverPaintStyle = { lineWidth:1,strokeStyle:"#7ec399" };

	var paintStyle = { 
						lineWidth:1,
						strokeStyle:"#000000",
						outlineWidth:1,
						outlineColor:"#000000",
						dashstyle:"1 1"
					};
	var endPoints = [ new jsPlumb.Endpoints.Dot({radius:5}), new jsPlumb.Endpoints.Dot({radius:5})];

	$("#ploting").delegate("div","mouseover",null,function(e){

		var containerId = $(this)[0].id;
		var id = containerId.split("_",1);
		jsPlumb.setDraggableByDefault(false);
		var connection1 = jsPlumb.connect({
		    		source:containerId, 
		    		target:id[0], 
		    		connector:'Bezier',
		    		endpoints:endPoints,         
		    		anchors:["TopCenter", [ 0.50, 0, 0, -1 ]], 
		    		paintStyle:paintStyle,
		    		endpointStyle:{ fillStyle:"#000000" },
		    		hoverPaintStyle:hoverPaintStyle
		    		});
	});
	
	$("#ploting").delegate("div","mouseout",null,function(e){
		setTimeout("jsPlumb.reset()",1000);
	});  
	
	$("#start").click(function(){
		if ($("#startButton").attr("src") == "images/start.png") {
			$("#gray").attr("src","images/Red-icon.png");
			isAnimationStart = true;
			var motionType = $("#type").val();
			var speed = $("#sec").val();
			animateGraph(motionType, speed); 
			$("#startButton").attr("src", "images/stop.png")
			$("#aniSec").show();
			$("#show").hide();
			$("#sampling").attr("disabled","disabled");
			$("#refreshButton").attr("src","");
		}else{
			$("#gray").attr("src","images/Gray-icon.png");
			isAnimationStart = false;
			clearTimeout(t);
			$("#startButton").attr("src", "images/start.png")
			$("#aniSec").hide();
			$("#show").show();
			$("#sampling").removeAttr("disabled");
			$("#refreshButton").attr("src","images/refresh.png");
		}
	});
	$("#a").click(function(){
		var fileName = "baseLine.json";
		$.ajax({
		   type: "POST",
		   url: "dataSet/"+fileName,
		   dataType: "json",
		   success: function(json){
		   	var s = json.fp1Array;
		   	array = json.fp1Array;
		     alert( "Success : " + s.toSource());
		   },
		   error:function(e){
				alert("Error");	
		   }
 		});
	});
};


var zoomingGraph = function(placeholder, dataSet, options){
	$("#"+placeholder).bind("plotselected", function (event, ranges) {
        // clamp the zooming to prevent eternal zoom
        if (ranges.xaxis.to - ranges.xaxis.from < 0.00001)
            ranges.xaxis.to = ranges.xaxis.from + 0.00001;
        if (ranges.yaxis.to - ranges.yaxis.from < 0.00001)
            ranges.yaxis.to = ranges.yaxis.from + 0.00001;
        
        // do the zooming
        plot = $.plot($("#"+placeholder), dataSet,
                      $.extend(true, {}, options, {
                          xaxis: { min: ranges.xaxis.from, max: ranges.xaxis.to },
                          yaxis: { min: ranges.yaxis.from, max: ranges.yaxis.to }
                      }));
    });
};

var showBaseLineGraph = function(samplingRate){
	if(samplingRate == null || samplingRate == "")
		samplingRate = 100;
	
	var fp1Value = [];
	var fp2Value = [];
	var f3Value = [];
	var f7Value = [];
	var f4Value = [];
	var f8Value = [];
	var t3Value = [];
	var c3Value = [];
	var c4Value = [];
	var t4Value = [];
	var t5Value = [];
	var p3Value = [];
	var p4Value = [];
	var t6Value = [];
	var czValue = [];
	var o1Value = [];
	var fzValue = [];
	var o2Value = [];
	var pzValue = [];
	
	for(var i = 0; i < samplingRate; i++){
		fp1Value.push(fp1Array[i]);
		fp2Value.push(fp2Array[i]);
		f3Value.push(f3Array[i]);
		f7Value.push(f7Array[i]);
		f4Value.push(f4Array[i]);
		f8Value.push(f8Array[i]);
		t3Value.push(t3Array[i]);
		c3Value.push(c3Array[i]);
		c4Value.push(c4Array[i]);
		t4Value.push(t4Array[i]);
		p3Value.push(p3Array[i]);
		t5Value.push(t5Array[i]);
		p4Value.push(p4Array[i]);
		t6Value.push(t6Array[i]);
		czValue.push(czArray[i]);
		o1Value.push(o1Array[i]);
		fzValue.push(fzArray[i]);
		o2Value.push(o2Array[i]);
		pzValue.push(pzArray[i]);
	}
	var fp1Data = [{label: "FP1" ,data: fp1Value}];
	var fp2Data = [{label: "FP2" ,data: fp2Value}];
	var f7Data = [{label: "F7" ,data: f7Value}];
	var f3Data = [{label: "F3" ,data: f3Value}];
	var f4Data = [{label: "F4" ,data: f4Value}];
	var f8Data = [{label: "F8" ,data: f8Value}];
	var t3Data = [{label: "T3" ,data: t3Value}];
	var c3Data = [{label: "C3" ,data: c3Value}];
	var c4Data = [{label: "C4" ,data: c4Value}];
	var t4Data = [{label: "T4" ,data: t4Value}];
	var t5Data = [{label: "T5" ,data: t5Value}];
	var p3Data = [{label: "P3" ,data: p3Value}];
	var p4Data = [{label: "P4" ,data: p4Value}];
	var t6Data = [{label: "T6" ,data: t6Value}];
	var czData = [{label: "CZ" ,data: czValue}];
	var o1Data = [{label: "O1" ,data: o1Value}];
	var fzData = [{label: "FZ" ,data: fzValue}];
	var o2Data = [{label: "O2" ,data: o2Value}];
	var pzData = [{label: "PZ" ,data: pzValue}];

	var xAxis = {min:0.0, max:(samplingRate*0.002),  zoomRange: [0.001, 10], panRange: [-10, 10] };
	var Options = {
			legend: {position:'right', show:true},
			series: seriesOption,
			grid: {borderWidth:2, hoverable: true},
			xaxis: xAxis,
			//selection: { mode: "xy" },
			yaxis: { zoomRange: [0.1, 100], panRange: [-500, 500] },
			zoom: {interactive: true},
        	pan: {interactive: true}
			//yaxis: {min:-50, max:25, tickDecimal:25}

	};
	$.plot($("#fp1"),fp1Data, Options);
	$.plot($("#fp2"),fp2Data, Options);
	$.plot($("#f7"),f7Data, Options);
	$.plot($("#f8"),f8Data, Options);
	$.plot($("#f3"),f3Data, Options);
	$.plot($("#t3"),t3Data, Options);
	$.plot($("#f4"),f4Data, Options);
	$.plot($("#c3"),c3Data, Options);
	$.plot($("#c4"),c4Data, Options);
	$.plot($("#p3"),p3Data, Options);
	$.plot($("#t4"),t4Data, Options);
	$.plot($("#p4"),p4Data, Options);
	$.plot($("#t5"),t5Data, Options);
	$.plot($("#t6"),t6Data, Options);
	$.plot($("#cz"),czData, Options);
	$.plot($("#o1"),o1Data, Options);
	$.plot($("#fz"),fzData, Options);
	$.plot($("#o2"),o2Data, Options);
	$.plot($("#pz"),pzData, Options);
	
	$("#option").delegate("div","mouseover",null,function(){
		var placeholderId = $(this)[0].id;
		if(placeholderId == "fp1"){
			zoomingGraph(placeholderId, fp1Data, Options);
		}else if(placeholderId == "fp2"){
			zoomingGraph(placeholderId, fp2Data, Options);
		}else if(placeholderId == "f3"){
			zoomingGraph(placeholderId, f3Data, Options);
		}else if(placeholderId == "f4"){
			zoomingGraph(placeholderId, f4Data, Options);
		}else if(placeholderId == "p3"){
			zoomingGraph(placeholderId, p3Data, Options);
		}else if(placeholderId == "p4"){
			zoomingGraph(placeholderId, p4Data, Options);
		}else if(placeholderId == "f7"){
			zoomingGraph(placeholderId, f7Data, Options);
		}else if(placeholderId == "f8"){
			zoomingGraph(placeholderId, f8Data, Options);
		}else if(placeholderId == "t3"){
			zoomingGraph(placeholderId, t3Data, Options);
		}else if(placeholderId == "t4"){
			zoomingGraph(placeholderId, t4Data, Options);
		}else if(placeholderId == "t5"){
			zoomingGraph(placeholderId, t5Data, Options);
		}else if(placeholderId == "t6"){
			zoomingGraph(placeholderId, t6Data, Options);
		}else if(placeholderId == "fz"){
			zoomingGraph(placeholderId, fzData, Options);
		}else if(placeholderId == "cz"){
			zoomingGraph(placeholderId, czData, Options);
		}else if(placeholderId == "pz"){
			zoomingGraph(placeholderId, pzData, Options);
		}else if(placeholderId == "o1"){
			zoomingGraph(placeholderId, o1Data, Options);
		}else if(placeholderId == "o2"){
			zoomingGraph(placeholderId, o2Data, Options);
		}else if(placeholderId == "c3"){
			zoomingGraph(placeholderId, c3Data, Options);
		}else if(placeholderId == "c4"){
			zoomingGraph(placeholderId, c4Data, Options);
		}
	});
};

var showLeftHandBackwardMovementGraph = function(samplingRate){
	if(samplingRate == null || samplingRate == "")
		samplingRate = 100;

	var fp1Value = [];
	var fp2Value = [];
	var f3Value = [];
	var f7Value = [];
	var f4Value = [];
	var f8Value = [];
	var t3Value = [];
	var c3Value = [];
	var c4Value = [];
	var t4Value = [];
	var t5Value = [];
	var p3Value = [];
	var p4Value = [];
	var t6Value = [];
	var czValue = [];
	var o1Value = [];
	var fzValue = [];
	var o2Value = [];
	var pzValue = [];

	for(var i = 0; i < samplingRate ; i++){
		fp1Value.push(fp1LeftHandBackwardMovementArray[i]);
		fp2Value.push(fp2LeftHandBackwardMovementArray[i]);
		f3Value.push(f3LeftHandBackwardMovementArray[i]);
		f7Value.push(f7LeftHandBackwardMovementArray[i]);
		f4Value.push(f4LeftHandBackwardMovementArray[i]);
		f8Value.push(f8LeftHandBackwardMovementArray[i]);
		t3Value.push(t3LeftHandBackwardMovementArray[i]);
		c3Value.push(c3LeftHandBackwardMovementArray[i]);
		c4Value.push(c4LeftHandBackwardMovementArray[i]);
		t4Value.push(t4LeftHandBackwardMovementArray[i]);
		p3Value.push(p3LeftHandBackwardMovementArray[i]);
		t5Value.push(t5LeftHandBackwardMovementArray[i]);
		p4Value.push(p4LeftHandBackwardMovementArray[i]);
		t6Value.push(t6LeftHandBackwardMovementArray[i]);
		czValue.push(czLeftHandBackwardMovementArray[i]);
		o1Value.push(o1LeftHandBackwardMovementArray[i]);
		fzValue.push(fzLeftHandBackwardMovementArray[i]);
		o2Value.push(o2LeftHandBackwardMovementArray[i]);
		pzValue.push(pzLeftHandBackwardMovementArray[i]);
	}

	var fp1Data = [{label: "FP1" ,data: fp1Value}];
	var fp2Data = [{label: "FP2" ,data: fp2Value}];
	var f7Data = [{label: "F7" ,data: f7Value}];
	var f3Data = [{label: "F3" ,data: f3Value}];
	var f4Data = [{label: "F4" ,data: f4Value}];
	var f8Data = [{label: "F8" ,data: f8Value}];
	var t3Data = [{label: "T3" ,data: t3Value}];
	var c3Data = [{label: "C3" ,data: c3Value}];
	var c4Data = [{label: "C4" ,data: c4Value}];
	var t4Data = [{label: "T4" ,data: t4Value}];
	var t5Data = [{label: "T5" ,data: t5Value}];
	var p3Data = [{label: "P3" ,data: p3Value}];
	var p4Data = [{label: "P4" ,data: p4Value}];
	var t6Data = [{label: "T6" ,data: t6Value}];
	var czData = [{label: "CZ" ,data: czValue}];
	var o1Data = [{label: "O1" ,data: o1Value}];
	var fzData = [{label: "FZ" ,data: fzValue}];
	var o2Data = [{label: "O2" ,data: o2Value}];
	var pzData = [{label: "PZ" ,data: pzValue}];

	var xAxis = {min:0.0, max:(samplingRate*0.002),  zoomRange: [0.001, 10], panRange: [-10, 10] };
	var Options = {
			legend: {position:'right', show:true},
			series: seriesOption,
			grid: {borderWidth:2, hoverable: true},
			xaxis: xAxis,
			//selection: { mode: "xy" },
			yaxis: { zoomRange: [0.1, 100], panRange: [-500, 500] },
			zoom: {interactive: true},
        	pan: {interactive: true}
			//yaxis: {min:-50, max:25, tickDecimal:25}

	};
	
	$.plot($("#fp1"),fp1Data, Options);
	$.plot($("#fp2"),fp2Data, Options);
	$.plot($("#f7"),f7Data, Options);
	$.plot($("#f8"),f8Data, Options);
	$.plot($("#f3"),f3Data, Options);
	$.plot($("#t3"),t3Data, Options);
	$.plot($("#f4"),f4Data, Options);
	$.plot($("#c3"),c3Data, Options);
	$.plot($("#c4"),c4Data, Options);
	$.plot($("#p3"),p3Data, Options);
	$.plot($("#t4"),t4Data, Options);
	$.plot($("#p4"),p4Data, Options);
	$.plot($("#t5"),t5Data, Options);
	$.plot($("#t6"),t6Data, Options);
	$.plot($("#cz"),czData, Options);
	$.plot($("#o1"),o1Data, Options);
	$.plot($("#fz"),fzData, Options);
	$.plot($("#o2"),o2Data, Options);
	$.plot($("#pz"),pzData, Options);
	$("#option").delegate("div","mouseover",null,function(){
		var placeholderId = $(this)[0].id;
		if(placeholderId == "fp1"){
			zoomingGraph(placeholderId, fp1Data, Options);
		}else if(placeholderId == "fp2"){
			zoomingGraph(placeholderId, fp2Data, Options);
		}else if(placeholderId == "f3"){
			zoomingGraph(placeholderId, f3Data, Options);
		}else if(placeholderId == "f4"){
			zoomingGraph(placeholderId, f4Data, Options);
		}else if(placeholderId == "p3"){
			zoomingGraph(placeholderId, p3Data, Options);
		}else if(placeholderId == "p4"){
			zoomingGraph(placeholderId, p4Data, Options);
		}else if(placeholderId == "f7"){
			zoomingGraph(placeholderId, f7Data, Options);
		}else if(placeholderId == "f8"){
			zoomingGraph(placeholderId, f8Data, Options);
		}else if(placeholderId == "t3"){
			zoomingGraph(placeholderId, t3Data, Options);
		}else if(placeholderId == "t4"){
			zoomingGraph(placeholderId, t4Data, Options);
		}else if(placeholderId == "t5"){
			zoomingGraph(placeholderId, t5Data, Options);
		}else if(placeholderId == "t6"){
			zoomingGraph(placeholderId, t6Data, Options);
		}else if(placeholderId == "fz"){
			zoomingGraph(placeholderId, fzData, Options);
		}else if(placeholderId == "cz"){
			zoomingGraph(placeholderId, czData, Options);
		}else if(placeholderId == "pz"){
			zoomingGraph(placeholderId, pzData, Options);
		}else if(placeholderId == "o1"){
			zoomingGraph(placeholderId, o1Data, Options);
		}else if(placeholderId == "o2"){
			zoomingGraph(placeholderId, o2Data, Options);
		}else if(placeholderId == "c3"){
			zoomingGraph(placeholderId, c3Data, Options);
		}else if(placeholderId == "c4"){
			zoomingGraph(placeholderId, c4Data, Options);
		}
	});
};

var showLeftHandForwardMovementGraph = function(samplingRate){
	if(samplingRate == null || samplingRate == "")
		samplingRate = 100;

	var fp1Value = [];
	var fp2Value = [];
	var f3Value = [];
	var f7Value = [];
	var f4Value = [];
	var f8Value = [];
	var t3Value = [];
	var c3Value = [];
	var c4Value = [];
	var t4Value = [];
	var t5Value = [];
	var p3Value = [];
	var p4Value = [];
	var t6Value = [];
	var czValue = [];
	var o1Value = [];
	var fzValue = [];
	var o2Value = [];
	var pzValue = [];

	for(var i = 0; i < samplingRate ; i++){
		fp1Value.push(fp1LeftHandForwardMovementArray[i]);
		fp2Value.push(fp2LeftHandForwardMovementArray[i]);
		f3Value.push(f3LeftHandForwardMovementArray[i]);
		f7Value.push(f7LeftHandForwardMovementArray[i]);
		f4Value.push(f4LeftHandForwardMovementArray[i]);
		f8Value.push(f8LeftHandForwardMovementArray[i]);
		t3Value.push(t3LeftHandForwardMovementArray[i]);
		c3Value.push(c3LeftHandForwardMovementArray[i]);
		c4Value.push(c4LeftHandForwardMovementArray[i]);
		t4Value.push(t4LeftHandForwardMovementArray[i]);
		p3Value.push(p3LeftHandForwardMovementArray[i]);
		t5Value.push(t5LeftHandForwardMovementArray[i]);
		p4Value.push(p4LeftHandForwardMovementArray[i]);
		t6Value.push(t6LeftHandForwardMovementArray[i]);
		czValue.push(czLeftHandForwardMovementArray[i]);
		o1Value.push(o1LeftHandForwardMovementArray[i]);
		fzValue.push(fzLeftHandForwardMovementArray[i]);
		o2Value.push(o2LeftHandForwardMovementArray[i]);
		pzValue.push(pzLeftHandForwardMovementArray[i]);
	}

	var fp1Data = [{label: "FP1" ,data: fp1Value}];
	var fp2Data = [{label: "FP2" ,data: fp2Value}];
	var f7Data = [{label: "F7" ,data: f7Value}];
	var f3Data = [{label: "F3" ,data: f3Value}];
	var f4Data = [{label: "F4" ,data: f4Value}];
	var f8Data = [{label: "F8" ,data: f8Value}];
	var t3Data = [{label: "T3" ,data: t3Value}];
	var c3Data = [{label: "C3" ,data: c3Value}];
	var c4Data = [{label: "C4" ,data: c4Value}];
	var t4Data = [{label: "T4" ,data: t4Value}];
	var t5Data = [{label: "T5" ,data: t5Value}];
	var p3Data = [{label: "P3" ,data: p3Value}];
	var p4Data = [{label: "P4" ,data: p4Value}];
	var t6Data = [{label: "T6" ,data: t6Value}];
	var czData = [{label: "CZ" ,data: czValue}];
	var o1Data = [{label: "O1" ,data: o1Value}];
	var fzData = [{label: "FZ" ,data: fzValue}];
	var o2Data = [{label: "O2" ,data: o2Value}];
	var pzData = [{label: "PZ" ,data: pzValue}];
	
	var xAxis = {min:0.0, max:(samplingRate*0.002),  zoomRange: [0.001, 10], panRange: [-10, 10] };
	var Options = {
			legend: {position:'right', show:true},
			series: seriesOption,
			grid: {borderWidth:2, hoverable: true},
			xaxis: xAxis,
			//selection: { mode: "xy" },
			yaxis: { zoomRange: [0.1, 100], panRange: [-500, 500] },
			zoom: {interactive: true},
        	pan: {interactive: true}
			//yaxis: {min:-50, max:25, tickDecimal:25}
	};
	
	$.plot($("#fp1"),fp1Data, Options);
	$.plot($("#fp2"),fp2Data, Options);
	$.plot($("#f7"),f7Data, Options);
	$.plot($("#f8"),f8Data, Options);
	$.plot($("#f3"),f3Data, Options);
	$.plot($("#t3"),t3Data, Options);
	$.plot($("#f4"),f4Data, Options);
	$.plot($("#c3"),c3Data, Options);
	$.plot($("#c4"),c4Data, Options);
	$.plot($("#p3"),p3Data, Options);
	$.plot($("#t4"),t4Data, Options);
	$.plot($("#p4"),p4Data, Options);
	$.plot($("#t5"),t5Data, Options);
	$.plot($("#t6"),t6Data, Options);
	$.plot($("#cz"),czData, Options);
	$.plot($("#o1"),o1Data, Options);
	$.plot($("#fz"),fzData, Options);
	$.plot($("#o2"),o2Data, Options);
	$.plot($("#pz"),pzData, Options);
	$("#option").delegate("div","mouseover",null,function(){
		var placeholderId = $(this)[0].id;
		if(placeholderId == "fp1"){
			zoomingGraph(placeholderId, fp1Data, Options);
		}else if(placeholderId == "fp2"){
			zoomingGraph(placeholderId, fp2Data, Options);
		}else if(placeholderId == "f3"){
			zoomingGraph(placeholderId, f3Data, Options);
		}else if(placeholderId == "f4"){
			zoomingGraph(placeholderId, f4Data, Options);
		}else if(placeholderId == "p3"){
			zoomingGraph(placeholderId, p3Data, Options);
		}else if(placeholderId == "p4"){
			zoomingGraph(placeholderId, p4Data, Options);
		}else if(placeholderId == "f7"){
			zoomingGraph(placeholderId, f7Data, Options);
		}else if(placeholderId == "f8"){
			zoomingGraph(placeholderId, f8Data, Options);
		}else if(placeholderId == "t3"){
			zoomingGraph(placeholderId, t3Data, Options);
		}else if(placeholderId == "t4"){
			zoomingGraph(placeholderId, t4Data, Options);
		}else if(placeholderId == "t5"){
			zoomingGraph(placeholderId, t5Data, Options);
		}else if(placeholderId == "t6"){
			zoomingGraph(placeholderId, t6Data, Options);
		}else if(placeholderId == "fz"){
			zoomingGraph(placeholderId, fzData, Options);
		}else if(placeholderId == "cz"){
			zoomingGraph(placeholderId, czData, Options);
		}else if(placeholderId == "pz"){
			zoomingGraph(placeholderId, pzData, Options);
		}else if(placeholderId == "o1"){
			zoomingGraph(placeholderId, o1Data, Options);
		}else if(placeholderId == "o2"){
			zoomingGraph(placeholderId, o2Data, Options);
		}else if(placeholderId == "c3"){
			zoomingGraph(placeholderId, c3Data, Options);
		}else if(placeholderId == "c4"){
			zoomingGraph(placeholderId, c4Data, Options);
		}
	});

};

var showLeftHandImaginaryBackwardMovementGraph = function(samplingRate){
	if(samplingRate == null || samplingRate == "")
		samplingRate = 100;

	var fp1Value = [];
	var fp2Value = [];
	var f3Value = [];
	var f7Value = [];
	var f4Value = [];
	var f8Value = [];
	var t3Value = [];
	var c3Value = [];
	var c4Value = [];
	var t4Value = [];
	var t5Value = [];
	var p3Value = [];
	var p4Value = [];
	var t6Value = [];
	var czValue = [];
	var o1Value = [];
	var fzValue = [];
	var o2Value = [];
	var pzValue = [];

	for(var i = 0; i < samplingRate ; i++){
		fp1Value.push(fp1LeftHandImaginaryBackwardMovementArray[i]);
		fp2Value.push(fp2LeftHandImaginaryBackwardMovementArray[i]);
		f3Value.push(f3LeftHandImaginaryBackwardMovementArray[i]);
		f7Value.push(f7LeftHandImaginaryBackwardMovementArray[i]);
		f4Value.push(f4LeftHandImaginaryBackwardMovementArray[i]);
		f8Value.push(f8LeftHandImaginaryBackwardMovementArray[i]);
		t3Value.push(t3LeftHandImaginaryBackwardMovementArray[i]);
		c3Value.push(c3LeftHandImaginaryBackwardMovementArray[i]);
		c4Value.push(c4LeftHandImaginaryBackwardMovementArray[i]);
		t4Value.push(t4LeftHandImaginaryBackwardMovementArray[i]);
		p3Value.push(p3LeftHandImaginaryBackwardMovementArray[i]);
		t5Value.push(t5LeftHandImaginaryBackwardMovementArray[i]);
		p4Value.push(p4LeftHandImaginaryBackwardMovementArray[i]);
		t6Value.push(t6LeftHandImaginaryBackwardMovementArray[i]);
		czValue.push(czLeftHandImaginaryBackwardMovementArray[i]);
		o1Value.push(o1LeftHandImaginaryBackwardMovementArray[i]);
		fzValue.push(fzLeftHandImaginaryBackwardMovementArray[i]);
		o2Value.push(o2LeftHandImaginaryBackwardMovementArray[i]);
		pzValue.push(pzLeftHandImaginaryBackwardMovementArray[i]);
	}

	var fp1Data = [{label: "FP1" ,data: fp1Value}];
	var fp2Data = [{label: "FP2" ,data: fp2Value}];
	var f7Data = [{label: "F7" ,data: f7Value}];
	var f3Data = [{label: "F3" ,data: f3Value}];
	var f4Data = [{label: "F4" ,data: f4Value}];
	var f8Data = [{label: "F8" ,data: f8Value}];
	var t3Data = [{label: "T3" ,data: t3Value}];
	var c3Data = [{label: "C3" ,data: c3Value}];
	var c4Data = [{label: "C4" ,data: c4Value}];
	var t4Data = [{label: "T4" ,data: t4Value}];
	var t5Data = [{label: "T5" ,data: t5Value}];
	var p3Data = [{label: "P3" ,data: p3Value}];
	var p4Data = [{label: "P4" ,data: p4Value}];
	var t6Data = [{label: "T6" ,data: t6Value}];
	var czData = [{label: "CZ" ,data: czValue}];
	var o1Data = [{label: "O1" ,data: o1Value}];
	var fzData = [{label: "FZ" ,data: fzValue}];
	var o2Data = [{label: "O2" ,data: o2Value}];
	var pzData = [{label: "PZ" ,data: pzValue}];
	
	var xAxis = {min:0.0, max:(samplingRate*0.002),  zoomRange: [0.001, 10], panRange: [-10, 10] };
	var Options = {
			legend: {position:'right', show:true},
			series: seriesOption,
			grid: {borderWidth:2, hoverable: true},
			xaxis: xAxis,
			//selection: { mode: "xy" },
			yaxis: { zoomRange: [0.1, 100], panRange: [-500, 500] },
			zoom: {interactive: true},
        	pan: {interactive: true}
			//yaxis: {min:-50, max:25, tickDecimal:25}

	};
	
	$.plot($("#fp1"),fp1Data, Options);
	$.plot($("#fp2"),fp2Data, Options);
	$.plot($("#f7"),f7Data, Options);
	$.plot($("#f8"),f8Data, Options);
	$.plot($("#f3"),f3Data, Options);
	$.plot($("#t3"),t3Data, Options);
	$.plot($("#f4"),f4Data, Options);
	$.plot($("#c3"),c3Data, Options);
	$.plot($("#c4"),c4Data, Options);
	$.plot($("#p3"),p3Data, Options);
	$.plot($("#t4"),t4Data, Options);
	$.plot($("#p4"),p4Data, Options);
	$.plot($("#t5"),t5Data, Options);
	$.plot($("#t6"),t6Data, Options);
	$.plot($("#cz"),czData, Options);
	$.plot($("#o1"),o1Data, Options);
	$.plot($("#fz"),fzData, Options);
	$.plot($("#o2"),o2Data, Options);
	$.plot($("#pz"),pzData, Options);
	$("#option").delegate("div","mouseover",null,function(){
		var placeholderId = $(this)[0].id;
		if(placeholderId == "fp1"){
			zoomingGraph(placeholderId, fp1Data, Options);
		}else if(placeholderId == "fp2"){
			zoomingGraph(placeholderId, fp2Data, Options);
		}else if(placeholderId == "f3"){
			zoomingGraph(placeholderId, f3Data, Options);
		}else if(placeholderId == "f4"){
			zoomingGraph(placeholderId, f4Data, Options);
		}else if(placeholderId == "p3"){
			zoomingGraph(placeholderId, p3Data, Options);
		}else if(placeholderId == "p4"){
			zoomingGraph(placeholderId, p4Data, Options);
		}else if(placeholderId == "f7"){
			zoomingGraph(placeholderId, f7Data, Options);
		}else if(placeholderId == "f8"){
			zoomingGraph(placeholderId, f8Data, Options);
		}else if(placeholderId == "t3"){
			zoomingGraph(placeholderId, t3Data, Options);
		}else if(placeholderId == "t4"){
			zoomingGraph(placeholderId, t4Data, Options);
		}else if(placeholderId == "t5"){
			zoomingGraph(placeholderId, t5Data, Options);
		}else if(placeholderId == "t6"){
			zoomingGraph(placeholderId, t6Data, Options);
		}else if(placeholderId == "fz"){
			zoomingGraph(placeholderId, fzData, Options);
		}else if(placeholderId == "cz"){
			zoomingGraph(placeholderId, czData, Options);
		}else if(placeholderId == "pz"){
			zoomingGraph(placeholderId, pzData, Options);
		}else if(placeholderId == "o1"){
			zoomingGraph(placeholderId, o1Data, Options);
		}else if(placeholderId == "o2"){
			zoomingGraph(placeholderId, o2Data, Options);
		}else if(placeholderId == "c3"){
			zoomingGraph(placeholderId, c3Data, Options);
		}else if(placeholderId == "c4"){
			zoomingGraph(placeholderId, c4Data, Options);
		}
	});

};

var showLeftHandImaginaryForwardMovementGraph = function(samplingRate){
	if(samplingRate == null || samplingRate == "")
		samplingRate = 100;

	var fp1Value = [];
	var fp2Value = [];
	var f3Value = [];
	var f7Value = [];
	var f4Value = [];
	var f8Value = [];
	var t3Value = [];
	var c3Value = [];
	var c4Value = [];
	var t4Value = [];
	var t5Value = [];
	var p3Value = [];
	var p4Value = [];
	var t6Value = [];
	var czValue = [];
	var o1Value = [];
	var fzValue = [];
	var o2Value = [];
	var pzValue = [];

	for(var i = 0; i < samplingRate ; i++){
		fp1Value.push(fp1LeftHandImaginaryForwardMovementArray[i]);
		fp2Value.push(fp2LeftHandImaginaryForwardMovementArray[i]);
		f3Value.push(f3LeftHandImaginaryForwardMovementArray[i]);
		f7Value.push(f7LeftHandImaginaryForwardMovementArray[i]);
		f4Value.push(f4LeftHandImaginaryForwardMovementArray[i]);
		f8Value.push(f8LeftHandImaginaryForwardMovementArray[i]);
		t3Value.push(t3LeftHandImaginaryForwardMovementArray[i]);
		c3Value.push(c3LeftHandImaginaryForwardMovementArray[i]);
		c4Value.push(c4LeftHandImaginaryForwardMovementArray[i]);
		t4Value.push(t4LeftHandImaginaryForwardMovementArray[i]);
		p3Value.push(p3LeftHandImaginaryForwardMovementArray[i]);
		t5Value.push(t5LeftHandImaginaryForwardMovementArray[i]);
		p4Value.push(p4LeftHandImaginaryForwardMovementArray[i]);
		t6Value.push(t6LeftHandImaginaryForwardMovementArray[i]);
		czValue.push(czLeftHandImaginaryForwardMovementArray[i]);
		o1Value.push(o1LeftHandImaginaryForwardMovementArray[i]);
		fzValue.push(fzLeftHandImaginaryForwardMovementArray[i]);
		o2Value.push(o2LeftHandImaginaryForwardMovementArray[i]);
		pzValue.push(pzLeftHandImaginaryForwardMovementArray[i]);
	}

	var fp1Data = [{label: "FP1" ,data: fp1Value}];
	var fp2Data = [{label: "FP2" ,data: fp2Value}];
	var f7Data = [{label: "F7" ,data: f7Value}];
	var f3Data = [{label: "F3" ,data: f3Value}];
	var f4Data = [{label: "F4" ,data: f4Value}];
	var f8Data = [{label: "F8" ,data: f8Value}];
	var t3Data = [{label: "T3" ,data: t3Value}];
	var c3Data = [{label: "C3" ,data: c3Value}];
	var c4Data = [{label: "C4" ,data: c4Value}];
	var t4Data = [{label: "T4" ,data: t4Value}];
	var t5Data = [{label: "T5" ,data: t5Value}];
	var p3Data = [{label: "P3" ,data: p3Value}];
	var p4Data = [{label: "P4" ,data: p4Value}];
	var t6Data = [{label: "T6" ,data: t6Value}];
	var czData = [{label: "CZ" ,data: czValue}];
	var o1Data = [{label: "O1" ,data: o1Value}];
	var fzData = [{label: "FZ" ,data: fzValue}];
	var o2Data = [{label: "O2" ,data: o2Value}];
	var pzData = [{label: "PZ" ,data: pzValue}];
	
	var xAxis = {min:0.0, max:(samplingRate*0.002),  zoomRange: [0.001, 10], panRange: [-10, 10] };
	var Options = {
			legend: {position:'right', show:true},
			series: seriesOption,
			grid: {borderWidth:2, hoverable: true},
			xaxis: xAxis,
			//selection: { mode: "xy" },
			yaxis: { zoomRange: [0.1, 100], panRange: [-500, 500] },
			zoom: {interactive: true},
        	pan: {interactive: true}
			//yaxis: {min:-50, max:25, tickDecimal:25}

	};
	$.plot($("#fp1"),fp1Data, Options);
	$.plot($("#fp2"),fp2Data, Options);
	$.plot($("#f7"),f7Data, Options);
	$.plot($("#f8"),f8Data, Options);
	$.plot($("#f3"),f3Data, Options);
	$.plot($("#t3"),t3Data, Options);
	$.plot($("#f4"),f4Data, Options);
	$.plot($("#c3"),c3Data, Options);
	$.plot($("#c4"),c4Data, Options);
	$.plot($("#p3"),p3Data, Options);
	$.plot($("#t4"),t4Data, Options);
	$.plot($("#p4"),p4Data, Options);
	$.plot($("#t5"),t5Data, Options);
	$.plot($("#t6"),t6Data, Options);
	$.plot($("#cz"),czData, Options);
	$.plot($("#o1"),o1Data, Options);
	$.plot($("#fz"),fzData, Options);
	$.plot($("#o2"),o2Data, Options);
	$.plot($("#pz"),pzData, Options);
	$("#option").delegate("div","mouseover",null,function(){
		var placeholderId = $(this)[0].id;
		if(placeholderId == "fp1"){
			zoomingGraph(placeholderId, fp1Data, Options);
		}else if(placeholderId == "fp2"){
			zoomingGraph(placeholderId, fp2Data, Options);
		}else if(placeholderId == "f3"){
			zoomingGraph(placeholderId, f3Data, Options);
		}else if(placeholderId == "f4"){
			zoomingGraph(placeholderId, f4Data, Options);
		}else if(placeholderId == "p3"){
			zoomingGraph(placeholderId, p3Data, Options);
		}else if(placeholderId == "p4"){
			zoomingGraph(placeholderId, p4Data, Options);
		}else if(placeholderId == "f7"){
			zoomingGraph(placeholderId, f7Data, Options);
		}else if(placeholderId == "f8"){
			zoomingGraph(placeholderId, f8Data, Options);
		}else if(placeholderId == "t3"){
			zoomingGraph(placeholderId, t3Data, Options);
		}else if(placeholderId == "t4"){
			zoomingGraph(placeholderId, t4Data, Options);
		}else if(placeholderId == "t5"){
			zoomingGraph(placeholderId, t5Data, Options);
		}else if(placeholderId == "t6"){
			zoomingGraph(placeholderId, t6Data, Options);
		}else if(placeholderId == "fz"){
			zoomingGraph(placeholderId, fzData, Options);
		}else if(placeholderId == "cz"){
			zoomingGraph(placeholderId, czData, Options);
		}else if(placeholderId == "pz"){
			zoomingGraph(placeholderId, pzData, Options);
		}else if(placeholderId == "o1"){
			zoomingGraph(placeholderId, o1Data, Options);
		}else if(placeholderId == "o2"){
			zoomingGraph(placeholderId, o2Data, Options);
		}else if(placeholderId == "c3"){
			zoomingGraph(placeholderId, c3Data, Options);
		}else if(placeholderId == "c4"){
			zoomingGraph(placeholderId, c4Data, Options);
		}
	});

};

var showLeftHandRandomMovementGraph = function(samplingRate){
	if(samplingRate == null || samplingRate == "")
		samplingRate = 100;

	var fp1Value = [];
	var fp2Value = [];
	var f3Value = [];
	var f7Value = [];
	var f4Value = [];
	var f8Value = [];
	var t3Value = [];
	var c3Value = [];
	var c4Value = [];
	var t4Value = [];
	var t5Value = [];
	var p3Value = [];
	var p4Value = [];
	var t6Value = [];
	var czValue = [];
	var o1Value = [];
	var fzValue = [];
	var o2Value = [];
	var pzValue = [];

	for(var i = 0; i < samplingRate ; i++){
		fp1Value.push(fp1LeftHandRandomMovementArray[i]);
		fp2Value.push(fp2LeftHandRandomMovementArray[i]);
		f3Value.push(f3LeftHandRandomMovementArray[i]);
		f7Value.push(f7LeftHandRandomMovementArray[i]);
		f4Value.push(f4LeftHandRandomMovementArray[i]);
		f8Value.push(f8LeftHandRandomMovementArray[i]);
		t3Value.push(t3LeftHandRandomMovementArray[i]);
		c3Value.push(c3LeftHandRandomMovementArray[i]);
		c4Value.push(c4LeftHandRandomMovementArray[i]);
		t4Value.push(t4LeftHandRandomMovementArray[i]);
		p3Value.push(p3LeftHandRandomMovementArray[i]);
		t5Value.push(t5LeftHandRandomMovementArray[i]);
		p4Value.push(p4LeftHandRandomMovementArray[i]);
		t6Value.push(t6LeftHandRandomMovementArray[i]);
		czValue.push(czLeftHandRandomMovementArray[i]);
		o1Value.push(o1LeftHandRandomMovementArray[i]);
		fzValue.push(fzLeftHandRandomMovementArray[i]);
		o2Value.push(o2LeftHandRandomMovementArray[i]);
		pzValue.push(pzLeftHandRandomMovementArray[i]);
	}

	var fp1Data = [{label: "FP1" ,data: fp1Value}];
	var fp2Data = [{label: "FP2" ,data: fp2Value}];
	var f7Data = [{label: "F7" ,data: f7Value}];
	var f3Data = [{label: "F3" ,data: f3Value}];
	var f4Data = [{label: "F4" ,data: f4Value}];
	var f8Data = [{label: "F8" ,data: f8Value}];
	var t3Data = [{label: "T3" ,data: t3Value}];
	var c3Data = [{label: "C3" ,data: c3Value}];
	var c4Data = [{label: "C4" ,data: c4Value}];
	var t4Data = [{label: "T4" ,data: t4Value}];
	var t5Data = [{label: "T5" ,data: t5Value}];
	var p3Data = [{label: "P3" ,data: p3Value}];
	var p4Data = [{label: "P4" ,data: p4Value}];
	var t6Data = [{label: "T6" ,data: t6Value}];
	var czData = [{label: "CZ" ,data: czValue}];
	var o1Data = [{label: "O1" ,data: o1Value}];
	var fzData = [{label: "FZ" ,data: fzValue}];
	var o2Data = [{label: "O2" ,data: o2Value}];
	var pzData = [{label: "PZ" ,data: pzValue}];
	
	var xAxis = {min:0.0, max:(samplingRate*0.002),  zoomRange: [0.001, 10], panRange: [-10, 10] };
	var Options = {
			legend: {position:'right', show:true},
			series: seriesOption,
			grid: {borderWidth:2, hoverable: true},
			xaxis: xAxis,
			//selection: { mode: "xy" },
			yaxis: { zoomRange: [0.1, 100], panRange: [-500, 500] },
			zoom: {interactive: true},
        	pan: {interactive: true}
			//yaxis: {min:-50, max:25, tickDecimal:25}

	};
	$.plot($("#fp1"),fp1Data, Options);
	$.plot($("#fp2"),fp2Data, Options);
	$.plot($("#f7"),f7Data, Options);
	$.plot($("#f8"),f8Data, Options);
	$.plot($("#f3"),f3Data, Options);
	$.plot($("#t3"),t3Data, Options);
	$.plot($("#f4"),f4Data, Options);
	$.plot($("#c3"),c3Data, Options);
	$.plot($("#c4"),c4Data, Options);
	$.plot($("#p3"),p3Data, Options);
	$.plot($("#t4"),t4Data, Options);
	$.plot($("#p4"),p4Data, Options);
	$.plot($("#t5"),t5Data, Options);
	$.plot($("#t6"),t6Data, Options);
	$.plot($("#cz"),czData, Options);
	$.plot($("#o1"),o1Data, Options);
	$.plot($("#fz"),fzData, Options);
	$.plot($("#o2"),o2Data, Options);
	$.plot($("#pz"),pzData, Options);
	$("#option").delegate("div","mouseover",null,function(){
		var placeholderId = $(this)[0].id;
		if(placeholderId == "fp1"){
			zoomingGraph(placeholderId, fp1Data, Options);
		}else if(placeholderId == "fp2"){
			zoomingGraph(placeholderId, fp2Data, Options);
		}else if(placeholderId == "f3"){
			zoomingGraph(placeholderId, f3Data, Options);
		}else if(placeholderId == "f4"){
			zoomingGraph(placeholderId, f4Data, Options);
		}else if(placeholderId == "p3"){
			zoomingGraph(placeholderId, p3Data, Options);
		}else if(placeholderId == "p4"){
			zoomingGraph(placeholderId, p4Data, Options);
		}else if(placeholderId == "f7"){
			zoomingGraph(placeholderId, f7Data, Options);
		}else if(placeholderId == "f8"){
			zoomingGraph(placeholderId, f8Data, Options);
		}else if(placeholderId == "t3"){
			zoomingGraph(placeholderId, t3Data, Options);
		}else if(placeholderId == "t4"){
			zoomingGraph(placeholderId, t4Data, Options);
		}else if(placeholderId == "t5"){
			zoomingGraph(placeholderId, t5Data, Options);
		}else if(placeholderId == "t6"){
			zoomingGraph(placeholderId, t6Data, Options);
		}else if(placeholderId == "fz"){
			zoomingGraph(placeholderId, fzData, Options);
		}else if(placeholderId == "cz"){
			zoomingGraph(placeholderId, czData, Options);
		}else if(placeholderId == "pz"){
			zoomingGraph(placeholderId, pzData, Options);
		}else if(placeholderId == "o1"){
			zoomingGraph(placeholderId, o1Data, Options);
		}else if(placeholderId == "o2"){
			zoomingGraph(placeholderId, o2Data, Options);
		}else if(placeholderId == "c3"){
			zoomingGraph(placeholderId, c3Data, Options);
		}else if(placeholderId == "c4"){
			zoomingGraph(placeholderId, c4Data, Options);
		}
	});

};

var showLeftLegMovementGraph = function(samplingRate){
	if(samplingRate == null || samplingRate == "")
		samplingRate = 100;

	var fp1Value = [];
	var fp2Value = [];
	var f3Value = [];
	var f7Value = [];
	var f4Value = [];
	var f8Value = [];
	var t3Value = [];
	var c3Value = [];
	var c4Value = [];
	var t4Value = [];
	var t5Value = [];
	var p3Value = [];
	var p4Value = [];
	var t6Value = [];
	var czValue = [];
	var o1Value = [];
	var fzValue = [];
	var o2Value = [];
	var pzValue = [];

	for(var i = 0; i < samplingRate ; i++){
		fp1Value.push(fp1LeftLegMovementArray[i]);
		fp2Value.push(fp2LeftLegMovementArray[i]);
		f3Value.push(f3LeftLegMovementArray[i]);
		f7Value.push(f7LeftLegMovementArray[i]);
		f4Value.push(f4LeftLegMovementArray[i]);
		f8Value.push(f8LeftLegMovementArray[i]);
		t3Value.push(t3LeftLegMovementArray[i]);
		c3Value.push(c3LeftLegMovementArray[i]);
		c4Value.push(c4LeftLegMovementArray[i]);
		t4Value.push(t4LeftLegMovementArray[i]);
		p3Value.push(p3LeftLegMovementArray[i]);
		t5Value.push(t5LeftLegMovementArray[i]);
		p4Value.push(p4LeftLegMovementArray[i]);
		t6Value.push(t6LeftLegMovementArray[i]);
		czValue.push(czLeftLegMovementArray[i]);
		o1Value.push(o1LeftLegMovementArray[i]);
		fzValue.push(fzLeftLegMovementArray[i]);
		o2Value.push(o2LeftLegMovementArray[i]);
		pzValue.push(pzLeftLegMovementArray[i]);
	}

	var fp1Data = [{label: "FP1" ,data: fp1Value}];
	var fp2Data = [{label: "FP2" ,data: fp2Value}];
	var f7Data = [{label: "F7" ,data: f7Value}];
	var f3Data = [{label: "F3" ,data: f3Value}];
	var f4Data = [{label: "F4" ,data: f4Value}];
	var f8Data = [{label: "F8" ,data: f8Value}];
	var t3Data = [{label: "T3" ,data: t3Value}];
	var c3Data = [{label: "C3" ,data: c3Value}];
	var c4Data = [{label: "C4" ,data: c4Value}];
	var t4Data = [{label: "T4" ,data: t4Value}];
	var t5Data = [{label: "T5" ,data: t5Value}];
	var p3Data = [{label: "P3" ,data: p3Value}];
	var p4Data = [{label: "P4" ,data: p4Value}];
	var t6Data = [{label: "T6" ,data: t6Value}];
	var czData = [{label: "CZ" ,data: czValue}];
	var o1Data = [{label: "O1" ,data: o1Value}];
	var fzData = [{label: "FZ" ,data: fzValue}];
	var o2Data = [{label: "O2" ,data: o2Value}];
	var pzData = [{label: "PZ" ,data: pzValue}];
	
	var xAxis = {min:0.0, max:(samplingRate*0.002),  zoomRange: [0.001, 10], panRange: [-10, 10] };
	var Options = {
			legend: {position:'right', show:true},
			series: seriesOption,
			grid: {borderWidth:2, hoverable: true},
			xaxis: xAxis,
			//selection: { mode: "xy" },
			yaxis: { zoomRange: [0.1, 100], panRange: [-500, 500] },
			zoom: {interactive: true},
        	pan: {interactive: true}
			//yaxis: {min:-50, max:25, tickDecimal:25}

	};
	$.plot($("#fp1"),fp1Data, Options);
	$.plot($("#fp2"),fp2Data, Options);
	$.plot($("#f7"),f7Data, Options);
	$.plot($("#f8"),f8Data, Options);
	$.plot($("#f3"),f3Data, Options);
	$.plot($("#t3"),t3Data, Options);
	$.plot($("#f4"),f4Data, Options);
	$.plot($("#c3"),c3Data, Options);
	$.plot($("#c4"),c4Data, Options);
	$.plot($("#p3"),p3Data, Options);
	$.plot($("#t4"),t4Data, Options);
	$.plot($("#p4"),p4Data, Options);
	$.plot($("#t5"),t5Data, Options);
	$.plot($("#t6"),t6Data, Options);
	$.plot($("#cz"),czData, Options);
	$.plot($("#o1"),o1Data, Options);
	$.plot($("#fz"),fzData, Options);
	$.plot($("#o2"),o2Data, Options);
	$.plot($("#pz"),pzData, Options);
	$("#option").delegate("div","mouseover",null,function(){
		var placeholderId = $(this)[0].id;
		if(placeholderId == "fp1"){
			zoomingGraph(placeholderId, fp1Data, Options);
		}else if(placeholderId == "fp2"){
			zoomingGraph(placeholderId, fp2Data, Options);
		}else if(placeholderId == "f3"){
			zoomingGraph(placeholderId, f3Data, Options);
		}else if(placeholderId == "f4"){
			zoomingGraph(placeholderId, f4Data, Options);
		}else if(placeholderId == "p3"){
			zoomingGraph(placeholderId, p3Data, Options);
		}else if(placeholderId == "p4"){
			zoomingGraph(placeholderId, p4Data, Options);
		}else if(placeholderId == "f7"){
			zoomingGraph(placeholderId, f7Data, Options);
		}else if(placeholderId == "f8"){
			zoomingGraph(placeholderId, f8Data, Options);
		}else if(placeholderId == "t3"){
			zoomingGraph(placeholderId, t3Data, Options);
		}else if(placeholderId == "t4"){
			zoomingGraph(placeholderId, t4Data, Options);
		}else if(placeholderId == "t5"){
			zoomingGraph(placeholderId, t5Data, Options);
		}else if(placeholderId == "t6"){
			zoomingGraph(placeholderId, t6Data, Options);
		}else if(placeholderId == "fz"){
			zoomingGraph(placeholderId, fzData, Options);
		}else if(placeholderId == "cz"){
			zoomingGraph(placeholderId, czData, Options);
		}else if(placeholderId == "pz"){
			zoomingGraph(placeholderId, pzData, Options);
		}else if(placeholderId == "o1"){
			zoomingGraph(placeholderId, o1Data, Options);
		}else if(placeholderId == "o2"){
			zoomingGraph(placeholderId, o2Data, Options);
		}else if(placeholderId == "c3"){
			zoomingGraph(placeholderId, c3Data, Options);
		}else if(placeholderId == "c4"){
			zoomingGraph(placeholderId, c4Data, Options);
		}
	});

};

var showRightHandBackwardMovementGraph = function(samplingRate){
	if(samplingRate == null || samplingRate == "")
		samplingRate = 100;

	var fp1Value = [];
	var fp2Value = [];
	var f3Value = [];
	var f7Value = [];
	var f4Value = [];
	var f8Value = [];
	var t3Value = [];
	var c3Value = [];
	var c4Value = [];
	var t4Value = [];
	var t5Value = [];
	var p3Value = [];
	var p4Value = [];
	var t6Value = [];
	var czValue = [];
	var o1Value = [];
	var fzValue = [];
	var o2Value = [];
	var pzValue = [];

	for(var i = 0; i < samplingRate ; i++){
		fp1Value.push(fp1RightHandBackwardMovementArray[i]);
		fp2Value.push(fp2RightHandBackwardMovementArray[i]);
		f3Value.push(f3RightHandBackwardMovementArray[i]);
		f7Value.push(f7RightHandBackwardMovementArray[i]);
		f4Value.push(f4RightHandBackwardMovementArray[i]);
		f8Value.push(f8RightHandBackwardMovementArray[i]);
		t3Value.push(t3RightHandBackwardMovementArray[i]);
		c3Value.push(c3RightHandBackwardMovementArray[i]);
		c4Value.push(c4RightHandBackwardMovementArray[i]);
		t4Value.push(t4RightHandBackwardMovementArray[i]);
		p3Value.push(p3RightHandBackwardMovementArray[i]);
		t5Value.push(t5RightHandBackwardMovementArray[i]);
		p4Value.push(p4RightHandBackwardMovementArray[i]);
		t6Value.push(t6RightHandBackwardMovementArray[i]);
		czValue.push(czRightHandBackwardMovementArray[i]);
		o1Value.push(o1RightHandBackwardMovementArray[i]);
		fzValue.push(fzRightHandBackwardMovementArray[i]);
		o2Value.push(o2RightHandBackwardMovementArray[i]);
		pzValue.push(pzRightHandBackwardMovementArray[i]);
	}

	var fp1Data = [{label: "FP1" ,data: fp1Value}];
	var fp2Data = [{label: "FP2" ,data: fp2Value}];
	var f7Data = [{label: "F7" ,data: f7Value}];
	var f3Data = [{label: "F3" ,data: f3Value}];
	var f4Data = [{label: "F4" ,data: f4Value}];
	var f8Data = [{label: "F8" ,data: f8Value}];
	var t3Data = [{label: "T3" ,data: t3Value}];
	var c3Data = [{label: "C3" ,data: c3Value}];
	var c4Data = [{label: "C4" ,data: c4Value}];
	var t4Data = [{label: "T4" ,data: t4Value}];
	var t5Data = [{label: "T5" ,data: t5Value}];
	var p3Data = [{label: "P3" ,data: p3Value}];
	var p4Data = [{label: "P4" ,data: p4Value}];
	var t6Data = [{label: "T6" ,data: t6Value}];
	var czData = [{label: "CZ" ,data: czValue}];
	var o1Data = [{label: "O1" ,data: o1Value}];
	var fzData = [{label: "FZ" ,data: fzValue}];
	var o2Data = [{label: "O2" ,data: o2Value}];
	var pzData = [{label: "PZ" ,data: pzValue}];
	
	var xAxis = {min:0.0, max:(samplingRate*0.002),  zoomRange: [0.001, 10], panRange: [-10, 10] };
	var Options = {
			legend: {position:'right', show:true},
			series: seriesOption,
			grid: {borderWidth:2, hoverable: true},
			xaxis: xAxis,
			//selection: { mode: "xy" },
			yaxis: { zoomRange: [0.1, 100], panRange: [-500, 500] },
			zoom: {interactive: true},
        	pan: {interactive: true}
			//yaxis: {min:-50, max:25, tickDecimal:25}

	};
	$.plot($("#fp1"),fp1Data, Options);
	$.plot($("#fp2"),fp2Data, Options);
	$.plot($("#f7"),f7Data, Options);
	$.plot($("#f8"),f8Data, Options);
	$.plot($("#f3"),f3Data, Options);
	$.plot($("#t3"),t3Data, Options);
	$.plot($("#f4"),f4Data, Options);
	$.plot($("#c3"),c3Data, Options);
	$.plot($("#c4"),c4Data, Options);
	$.plot($("#p3"),p3Data, Options);
	$.plot($("#t4"),t4Data, Options);
	$.plot($("#p4"),p4Data, Options);
	$.plot($("#t5"),t5Data, Options);
	$.plot($("#t6"),t6Data, Options);
	$.plot($("#cz"),czData, Options);
	$.plot($("#o1"),o1Data, Options);
	$.plot($("#fz"),fzData, Options);
	$.plot($("#o2"),o2Data, Options);
	$.plot($("#pz"),pzData, Options);
$("#option").delegate("div","mouseover",null,function(){
		var placeholderId = $(this)[0].id;
		if(placeholderId == "fp1"){
			zoomingGraph(placeholderId, fp1Data, Options);
		}else if(placeholderId == "fp2"){
			zoomingGraph(placeholderId, fp2Data, Options);
		}else if(placeholderId == "f3"){
			zoomingGraph(placeholderId, f3Data, Options);
		}else if(placeholderId == "f4"){
			zoomingGraph(placeholderId, f4Data, Options);
		}else if(placeholderId == "p3"){
			zoomingGraph(placeholderId, p3Data, Options);
		}else if(placeholderId == "p4"){
			zoomingGraph(placeholderId, p4Data, Options);
		}else if(placeholderId == "f7"){
			zoomingGraph(placeholderId, f7Data, Options);
		}else if(placeholderId == "f8"){
			zoomingGraph(placeholderId, f8Data, Options);
		}else if(placeholderId == "t3"){
			zoomingGraph(placeholderId, t3Data, Options);
		}else if(placeholderId == "t4"){
			zoomingGraph(placeholderId, t4Data, Options);
		}else if(placeholderId == "t5"){
			zoomingGraph(placeholderId, t5Data, Options);
		}else if(placeholderId == "t6"){
			zoomingGraph(placeholderId, t6Data, Options);
		}else if(placeholderId == "fz"){
			zoomingGraph(placeholderId, fzData, Options);
		}else if(placeholderId == "cz"){
			zoomingGraph(placeholderId, czData, Options);
		}else if(placeholderId == "pz"){
			zoomingGraph(placeholderId, pzData, Options);
		}else if(placeholderId == "o1"){
			zoomingGraph(placeholderId, o1Data, Options);
		}else if(placeholderId == "o2"){
			zoomingGraph(placeholderId, o2Data, Options);
		}else if(placeholderId == "c3"){
			zoomingGraph(placeholderId, c3Data, Options);
		}else if(placeholderId == "c4"){
			zoomingGraph(placeholderId, c4Data, Options);
		}
	});
};

var showRightHandForwardMovementGraph = function(samplingRate){
	if(samplingRate == null || samplingRate == "")
		samplingRate = 100;

	var fp1Value = [];
	var fp2Value = [];
	var f3Value = [];
	var f7Value = [];
	var f4Value = [];
	var f8Value = [];
	var t3Value = [];
	var c3Value = [];
	var c4Value = [];
	var t4Value = [];
	var t5Value = [];
	var p3Value = [];
	var p4Value = [];
	var t6Value = [];
	var czValue = [];
	var o1Value = [];
	var fzValue = [];
	var o2Value = [];
	var pzValue = [];

	for(var i = 0; i < samplingRate ; i++){
		fp1Value.push(fp1RightHandForwardMovementArray[i]);
		fp2Value.push(fp2RightHandForwardMovementArray[i]);
		f3Value.push(f3RightHandForwardMovementArray[i]);
		f7Value.push(f7RightHandForwardMovementArray[i]);
		f4Value.push(f4RightHandForwardMovementArray[i]);
		f8Value.push(f8RightHandForwardMovementArray[i]);
		t3Value.push(t3RightHandForwardMovementArray[i]);
		c3Value.push(c3RightHandForwardMovementArray[i]);
		c4Value.push(c4RightHandForwardMovementArray[i]);
		t4Value.push(t4RightHandForwardMovementArray[i]);
		p3Value.push(p3RightHandForwardMovementArray[i]);
		t5Value.push(t5RightHandForwardMovementArray[i]);
		p4Value.push(p4RightHandForwardMovementArray[i]);
		t6Value.push(t6RightHandForwardMovementArray[i]);
		czValue.push(czRightHandForwardMovementArray[i]);
		o1Value.push(o1RightHandForwardMovementArray[i]);
		fzValue.push(fzRightHandForwardMovementArray[i]);
		o2Value.push(o2RightHandForwardMovementArray[i]);
		pzValue.push(pzRightHandForwardMovementArray[i]);
	}

	var fp1Data = [{label: "FP1" ,data: fp1Value}];
	var fp2Data = [{label: "FP2" ,data: fp2Value}];
	var f7Data = [{label: "F7" ,data: f7Value}];
	var f3Data = [{label: "F3" ,data: f3Value}];
	var f4Data = [{label: "F4" ,data: f4Value}];
	var f8Data = [{label: "F8" ,data: f8Value}];
	var t3Data = [{label: "T3" ,data: t3Value}];
	var c3Data = [{label: "C3" ,data: c3Value}];
	var c4Data = [{label: "C4" ,data: c4Value}];
	var t4Data = [{label: "T4" ,data: t4Value}];
	var t5Data = [{label: "T5" ,data: t5Value}];
	var p3Data = [{label: "P3" ,data: p3Value}];
	var p4Data = [{label: "P4" ,data: p4Value}];
	var t6Data = [{label: "T6" ,data: t6Value}];
	var czData = [{label: "CZ" ,data: czValue}];
	var o1Data = [{label: "O1" ,data: o1Value}];
	var fzData = [{label: "FZ" ,data: fzValue}];
	var o2Data = [{label: "O2" ,data: o2Value}];
	var pzData = [{label: "PZ" ,data: pzValue}];
	
	var xAxis = {min:0.0, max:(samplingRate*0.002),  zoomRange: [0.001, 10], panRange: [-10, 10] };
	var Options = {
			legend: {position:'right', show:true},
			series: seriesOption,
			grid: {borderWidth:2, hoverable: true},
			xaxis: xAxis,
			//selection: { mode: "xy" },
			yaxis: { zoomRange: [0.1, 100], panRange: [-500, 500] },
			zoom: {interactive: true},
        	pan: {interactive: true}
			//yaxis: {min:-50, max:25, tickDecimal:25}

	};
	$.plot($("#fp1"),fp1Data, Options);
	$.plot($("#fp2"),fp2Data, Options);
	$.plot($("#f7"),f7Data, Options);
	$.plot($("#f8"),f8Data, Options);
	$.plot($("#f3"),f3Data, Options);
	$.plot($("#t3"),t3Data, Options);
	$.plot($("#f4"),f4Data, Options);
	$.plot($("#c3"),c3Data, Options);
	$.plot($("#c4"),c4Data, Options);
	$.plot($("#p3"),p3Data, Options);
	$.plot($("#t4"),t4Data, Options);
	$.plot($("#p4"),p4Data, Options);
	$.plot($("#t5"),t5Data, Options);
	$.plot($("#t6"),t6Data, Options);
	$.plot($("#cz"),czData, Options);
	$.plot($("#o1"),o1Data, Options);
	$.plot($("#fz"),fzData, Options);
	$.plot($("#o2"),o2Data, Options);
	$.plot($("#pz"),pzData, Options);
$("#option").delegate("div","mouseover",null,function(){
		var placeholderId = $(this)[0].id;
		if(placeholderId == "fp1"){
			zoomingGraph(placeholderId, fp1Data, Options);
		}else if(placeholderId == "fp2"){
			zoomingGraph(placeholderId, fp2Data, Options);
		}else if(placeholderId == "f3"){
			zoomingGraph(placeholderId, f3Data, Options);
		}else if(placeholderId == "f4"){
			zoomingGraph(placeholderId, f4Data, Options);
		}else if(placeholderId == "p3"){
			zoomingGraph(placeholderId, p3Data, Options);
		}else if(placeholderId == "p4"){
			zoomingGraph(placeholderId, p4Data, Options);
		}else if(placeholderId == "f7"){
			zoomingGraph(placeholderId, f7Data, Options);
		}else if(placeholderId == "f8"){
			zoomingGraph(placeholderId, f8Data, Options);
		}else if(placeholderId == "t3"){
			zoomingGraph(placeholderId, t3Data, Options);
		}else if(placeholderId == "t4"){
			zoomingGraph(placeholderId, t4Data, Options);
		}else if(placeholderId == "t5"){
			zoomingGraph(placeholderId, t5Data, Options);
		}else if(placeholderId == "t6"){
			zoomingGraph(placeholderId, t6Data, Options);
		}else if(placeholderId == "fz"){
			zoomingGraph(placeholderId, fzData, Options);
		}else if(placeholderId == "cz"){
			zoomingGraph(placeholderId, czData, Options);
		}else if(placeholderId == "pz"){
			zoomingGraph(placeholderId, pzData, Options);
		}else if(placeholderId == "o1"){
			zoomingGraph(placeholderId, o1Data, Options);
		}else if(placeholderId == "o2"){
			zoomingGraph(placeholderId, o2Data, Options);
		}else if(placeholderId == "c3"){
			zoomingGraph(placeholderId, c3Data, Options);
		}else if(placeholderId == "c4"){
			zoomingGraph(placeholderId, c4Data, Options);
		}
	});
};

var showRightHandImaginaryBackwardMovementGraph = function(samplingRate){
	if(samplingRate == null || samplingRate == "")
		samplingRate = 100;

	var fp1Value = [];
	var fp2Value = [];
	var f3Value = [];
	var f7Value = [];
	var f4Value = [];
	var f8Value = [];
	var t3Value = [];
	var c3Value = [];
	var c4Value = [];
	var t4Value = [];
	var t5Value = [];
	var p3Value = [];
	var p4Value = [];
	var t6Value = [];
	var czValue = [];
	var o1Value = [];
	var fzValue = [];
	var o2Value = [];
	var pzValue = [];

	for(var i = 0; i < samplingRate ; i++){
		fp1Value.push(fp1RightHandImaginaryBackwardMovementArray[i]);
		fp2Value.push(fp2RightHandImaginaryBackwardMovementArray[i]);
		f3Value.push(f3RightHandImaginaryBackwardMovementArray[i]);
		f7Value.push(f7RightHandImaginaryBackwardMovementArray[i]);
		f4Value.push(f4RightHandImaginaryBackwardMovementArray[i]);
		f8Value.push(f8RightHandImaginaryBackwardMovementArray[i]);
		t3Value.push(t3RightHandImaginaryBackwardMovementArray[i]);
		c3Value.push(c3RightHandImaginaryBackwardMovementArray[i]);
		c4Value.push(c4RightHandImaginaryBackwardMovementArray[i]);
		t4Value.push(t4RightHandImaginaryBackwardMovementArray[i]);
		p3Value.push(p3RightHandImaginaryBackwardMovementArray[i]);
		t5Value.push(t5RightHandImaginaryBackwardMovementArray[i]);
		p4Value.push(p4RightHandImaginaryBackwardMovementArray[i]);
		t6Value.push(t6RightHandImaginaryBackwardMovementArray[i]);
		czValue.push(czRightHandImaginaryBackwardMovementArray[i]);
		o1Value.push(o1RightHandImaginaryBackwardMovementArray[i]);
		fzValue.push(fzRightHandImaginaryBackwardMovementArray[i]);
		o2Value.push(o2RightHandImaginaryBackwardMovementArray[i]);
		pzValue.push(pzRightHandImaginaryBackwardMovementArray[i]);
	}

	var fp1Data = [{label: "FP1" ,data: fp1Value}];
	var fp2Data = [{label: "FP2" ,data: fp2Value}];
	var f7Data = [{label: "F7" ,data: f7Value}];
	var f3Data = [{label: "F3" ,data: f3Value}];
	var f4Data = [{label: "F4" ,data: f4Value}];
	var f8Data = [{label: "F8" ,data: f8Value}];
	var t3Data = [{label: "T3" ,data: t3Value}];
	var c3Data = [{label: "C3" ,data: c3Value}];
	var c4Data = [{label: "C4" ,data: c4Value}];
	var t4Data = [{label: "T4" ,data: t4Value}];
	var t5Data = [{label: "T5" ,data: t5Value}];
	var p3Data = [{label: "P3" ,data: p3Value}];
	var p4Data = [{label: "P4" ,data: p4Value}];
	var t6Data = [{label: "T6" ,data: t6Value}];
	var czData = [{label: "CZ" ,data: czValue}];
	var o1Data = [{label: "O1" ,data: o1Value}];
	var fzData = [{label: "FZ" ,data: fzValue}];
	var o2Data = [{label: "O2" ,data: o2Value}];
	var pzData = [{label: "PZ" ,data: pzValue}];
	
	var xAxis = {min:0.0, max:(samplingRate*0.002),  zoomRange: [0.001, 10], panRange: [-10, 10] };
	var Options = {
			legend: {position:'right', show:true},
			series: seriesOption,
			grid: {borderWidth:2, hoverable: true},
			xaxis: xAxis,
			//selection: { mode: "xy" },
			yaxis: { zoomRange: [0.1, 100], panRange: [-500, 500] },
			zoom: {interactive: true},
        	pan: {interactive: true}
			//yaxis: {min:-50, max:25, tickDecimal:25}

	};
	$.plot($("#fp1"),fp1Data, Options);
	$.plot($("#fp2"),fp2Data, Options);
	$.plot($("#f7"),f7Data, Options);
	$.plot($("#f8"),f8Data, Options);
	$.plot($("#f3"),f3Data, Options);
	$.plot($("#t3"),t3Data, Options);
	$.plot($("#f4"),f4Data, Options);
	$.plot($("#c3"),c3Data, Options);
	$.plot($("#c4"),c4Data, Options);
	$.plot($("#p3"),p3Data, Options);
	$.plot($("#t4"),t4Data, Options);
	$.plot($("#p4"),p4Data, Options);
	$.plot($("#t5"),t5Data, Options);
	$.plot($("#t6"),t6Data, Options);
	$.plot($("#cz"),czData, Options);
	$.plot($("#o1"),o1Data, Options);
	$.plot($("#fz"),fzData, Options);
	$.plot($("#o2"),o2Data, Options);
	$.plot($("#pz"),pzData, Options);
$("#option").delegate("div","mouseover",null,function(){
		var placeholderId = $(this)[0].id;
		if(placeholderId == "fp1"){
			zoomingGraph(placeholderId, fp1Data, Options);
		}else if(placeholderId == "fp2"){
			zoomingGraph(placeholderId, fp2Data, Options);
		}else if(placeholderId == "f3"){
			zoomingGraph(placeholderId, f3Data, Options);
		}else if(placeholderId == "f4"){
			zoomingGraph(placeholderId, f4Data, Options);
		}else if(placeholderId == "p3"){
			zoomingGraph(placeholderId, p3Data, Options);
		}else if(placeholderId == "p4"){
			zoomingGraph(placeholderId, p4Data, Options);
		}else if(placeholderId == "f7"){
			zoomingGraph(placeholderId, f7Data, Options);
		}else if(placeholderId == "f8"){
			zoomingGraph(placeholderId, f8Data, Options);
		}else if(placeholderId == "t3"){
			zoomingGraph(placeholderId, t3Data, Options);
		}else if(placeholderId == "t4"){
			zoomingGraph(placeholderId, t4Data, Options);
		}else if(placeholderId == "t5"){
			zoomingGraph(placeholderId, t5Data, Options);
		}else if(placeholderId == "t6"){
			zoomingGraph(placeholderId, t6Data, Options);
		}else if(placeholderId == "fz"){
			zoomingGraph(placeholderId, fzData, Options);
		}else if(placeholderId == "cz"){
			zoomingGraph(placeholderId, czData, Options);
		}else if(placeholderId == "pz"){
			zoomingGraph(placeholderId, pzData, Options);
		}else if(placeholderId == "o1"){
			zoomingGraph(placeholderId, o1Data, Options);
		}else if(placeholderId == "o2"){
			zoomingGraph(placeholderId, o2Data, Options);
		}else if(placeholderId == "c3"){
			zoomingGraph(placeholderId, c3Data, Options);
		}else if(placeholderId == "c4"){
			zoomingGraph(placeholderId, c4Data, Options);
		}
	});
};

var showRightHandImaginaryForwardMovementGraph = function(samplingRate){
	if(samplingRate == null || samplingRate == "")
		samplingRate = 100;

	var fp1Value = [];
	var fp2Value = [];
	var f3Value = [];
	var f7Value = [];
	var f4Value = [];
	var f8Value = [];
	var t3Value = [];
	var c3Value = [];
	var c4Value = [];
	var t4Value = [];
	var t5Value = [];
	var p3Value = [];
	var p4Value = [];
	var t6Value = [];
	var czValue = [];
	var o1Value = [];
	var fzValue = [];
	var o2Value = [];
	var pzValue = [];

	for(var i = 0; i < samplingRate ; i++){
		fp1Value.push(fp1RightHandImaginaryForwardMovementArray[i]);
		fp2Value.push(fp2RightHandImaginaryForwardMovementArray[i]);
		f3Value.push(f3RightHandImaginaryForwardMovementArray[i]);
		f7Value.push(f7RightHandImaginaryForwardMovementArray[i]);
		f4Value.push(f4RightHandImaginaryForwardMovementArray[i]);
		f8Value.push(f8RightHandImaginaryForwardMovementArray[i]);
		t3Value.push(t3RightHandImaginaryForwardMovementArray[i]);
		c3Value.push(c3RightHandImaginaryForwardMovementArray[i]);
		c4Value.push(c4RightHandImaginaryForwardMovementArray[i]);
		t4Value.push(t4RightHandImaginaryForwardMovementArray[i]);
		p3Value.push(p3RightHandImaginaryForwardMovementArray[i]);
		t5Value.push(t5RightHandImaginaryForwardMovementArray[i]);
		p4Value.push(p4RightHandImaginaryForwardMovementArray[i]);
		t6Value.push(t6RightHandImaginaryForwardMovementArray[i]);
		czValue.push(czRightHandImaginaryForwardMovementArray[i]);
		o1Value.push(o1RightHandImaginaryForwardMovementArray[i]);
		fzValue.push(fzRightHandImaginaryForwardMovementArray[i]);
		o2Value.push(o2RightHandImaginaryForwardMovementArray[i]);
		pzValue.push(pzRightHandImaginaryForwardMovementArray[i]);
	}

	var fp1Data = [{label: "FP1" ,data: fp1Value}];
	var fp2Data = [{label: "FP2" ,data: fp2Value}];
	var f7Data = [{label: "F7" ,data: f7Value}];
	var f3Data = [{label: "F3" ,data: f3Value}];
	var f4Data = [{label: "F4" ,data: f4Value}];
	var f8Data = [{label: "F8" ,data: f8Value}];
	var t3Data = [{label: "T3" ,data: t3Value}];
	var c3Data = [{label: "C3" ,data: c3Value}];
	var c4Data = [{label: "C4" ,data: c4Value}];
	var t4Data = [{label: "T4" ,data: t4Value}];
	var t5Data = [{label: "T5" ,data: t5Value}];
	var p3Data = [{label: "P3" ,data: p3Value}];
	var p4Data = [{label: "P4" ,data: p4Value}];
	var t6Data = [{label: "T6" ,data: t6Value}];
	var czData = [{label: "CZ" ,data: czValue}];
	var o1Data = [{label: "O1" ,data: o1Value}];
	var fzData = [{label: "FZ" ,data: fzValue}];
	var o2Data = [{label: "O2" ,data: o2Value}];
	var pzData = [{label: "PZ" ,data: pzValue}];
	
	var xAxis = {min:0.0, max:(samplingRate*0.002),  zoomRange: [0.001, 10], panRange: [-10, 10] };
	var Options = {
			legend: {position:'right', show:true},
			series: seriesOption,
			grid: {borderWidth:2, hoverable: true},
			xaxis: xAxis,
			//selection: { mode: "xy" },
			yaxis: { zoomRange: [0.1, 100], panRange: [-500, 500] },
			zoom: {interactive: true},
        	pan: {interactive: true}
			//yaxis: {min:-50, max:25, tickDecimal:25}

	};
	$.plot($("#fp1"),fp1Data, Options);
	$.plot($("#fp2"),fp2Data, Options);
	$.plot($("#f7"),f7Data, Options);
	$.plot($("#f8"),f8Data, Options);
	$.plot($("#f3"),f3Data, Options);
	$.plot($("#t3"),t3Data, Options);
	$.plot($("#f4"),f4Data, Options);
	$.plot($("#c3"),c3Data, Options);
	$.plot($("#c4"),c4Data, Options);
	$.plot($("#p3"),p3Data, Options);
	$.plot($("#t4"),t4Data, Options);
	$.plot($("#p4"),p4Data, Options);
	$.plot($("#t5"),t5Data, Options);
	$.plot($("#t6"),t6Data, Options);
	$.plot($("#cz"),czData, Options);
	$.plot($("#o1"),o1Data, Options);
	$.plot($("#fz"),fzData, Options);
	$.plot($("#o2"),o2Data, Options);
	$.plot($("#pz"),pzData, Options);
$("#option").delegate("div","mouseover",null,function(){
		var placeholderId = $(this)[0].id;
		if(placeholderId == "fp1"){
			zoomingGraph(placeholderId, fp1Data, Options);
		}else if(placeholderId == "fp2"){
			zoomingGraph(placeholderId, fp2Data, Options);
		}else if(placeholderId == "f3"){
			zoomingGraph(placeholderId, f3Data, Options);
		}else if(placeholderId == "f4"){
			zoomingGraph(placeholderId, f4Data, Options);
		}else if(placeholderId == "p3"){
			zoomingGraph(placeholderId, p3Data, Options);
		}else if(placeholderId == "p4"){
			zoomingGraph(placeholderId, p4Data, Options);
		}else if(placeholderId == "f7"){
			zoomingGraph(placeholderId, f7Data, Options);
		}else if(placeholderId == "f8"){
			zoomingGraph(placeholderId, f8Data, Options);
		}else if(placeholderId == "t3"){
			zoomingGraph(placeholderId, t3Data, Options);
		}else if(placeholderId == "t4"){
			zoomingGraph(placeholderId, t4Data, Options);
		}else if(placeholderId == "t5"){
			zoomingGraph(placeholderId, t5Data, Options);
		}else if(placeholderId == "t6"){
			zoomingGraph(placeholderId, t6Data, Options);
		}else if(placeholderId == "fz"){
			zoomingGraph(placeholderId, fzData, Options);
		}else if(placeholderId == "cz"){
			zoomingGraph(placeholderId, czData, Options);
		}else if(placeholderId == "pz"){
			zoomingGraph(placeholderId, pzData, Options);
		}else if(placeholderId == "o1"){
			zoomingGraph(placeholderId, o1Data, Options);
		}else if(placeholderId == "o2"){
			zoomingGraph(placeholderId, o2Data, Options);
		}else if(placeholderId == "c3"){
			zoomingGraph(placeholderId, c3Data, Options);
		}else if(placeholderId == "c4"){
			zoomingGraph(placeholderId, c4Data, Options);
		}
	});
};

var showRightHandRandomMovementGraph = function(samplingRate){
	if(samplingRate == null || samplingRate == "")
		samplingRate = 100;

	var fp1Value = [];
	var fp2Value = [];
	var f3Value = [];
	var f7Value = [];
	var f4Value = [];
	var f8Value = [];
	var t3Value = [];
	var c3Value = [];
	var c4Value = [];
	var t4Value = [];
	var t5Value = [];
	var p3Value = [];
	var p4Value = [];
	var t6Value = [];
	var czValue = [];
	var o1Value = [];
	var fzValue = [];
	var o2Value = [];
	var pzValue = [];

	for(var i = 0; i < samplingRate ; i++){
		fp1Value.push(fp1RightHandRandomMovementArray[i]);
		fp2Value.push(fp2RightHandRandomMovementArray[i]);
		f3Value.push(f3RightHandRandomMovementArray[i]);
		f7Value.push(f7RightHandRandomMovementArray[i]);
		f4Value.push(f4RightHandRandomMovementArray[i]);
		f8Value.push(f8RightHandRandomMovementArray[i]);
		t3Value.push(t3RightHandRandomMovementArray[i]);
		c3Value.push(c3RightHandRandomMovementArray[i]);
		c4Value.push(c4RightHandRandomMovementArray[i]);
		t4Value.push(t4RightHandRandomMovementArray[i]);
		p3Value.push(p3RightHandRandomMovementArray[i]);
		t5Value.push(t5RightHandRandomMovementArray[i]);
		p4Value.push(p4RightHandRandomMovementArray[i]);
		t6Value.push(t6RightHandRandomMovementArray[i]);
		czValue.push(czRightHandRandomMovementArray[i]);
		o1Value.push(o1RightHandRandomMovementArray[i]);
		fzValue.push(fzRightHandRandomMovementArray[i]);
		o2Value.push(o2RightHandRandomMovementArray[i]);
		pzValue.push(pzRightHandRandomMovementArray[i]);
	}

	var fp1Data = [{label: "FP1" ,data: fp1Value}];
	var fp2Data = [{label: "FP2" ,data: fp2Value}];
	var f7Data = [{label: "F7" ,data: f7Value}];
	var f3Data = [{label: "F3" ,data: f3Value}];
	var f4Data = [{label: "F4" ,data: f4Value}];
	var f8Data = [{label: "F8" ,data: f8Value}];
	var t3Data = [{label: "T3" ,data: t3Value}];
	var c3Data = [{label: "C3" ,data: c3Value}];
	var c4Data = [{label: "C4" ,data: c4Value}];
	var t4Data = [{label: "T4" ,data: t4Value}];
	var t5Data = [{label: "T5" ,data: t5Value}];
	var p3Data = [{label: "P3" ,data: p3Value}];
	var p4Data = [{label: "P4" ,data: p4Value}];
	var t6Data = [{label: "T6" ,data: t6Value}];
	var czData = [{label: "CZ" ,data: czValue}];
	var o1Data = [{label: "O1" ,data: o1Value}];
	var fzData = [{label: "FZ" ,data: fzValue}];
	var o2Data = [{label: "O2" ,data: o2Value}];
	var pzData = [{label: "PZ" ,data: pzValue}];
	
	var xAxis = {min:0.0, max:(samplingRate*0.002),  zoomRange: [0.001, 10], panRange: [-10, 10] };
	var Options = {
			legend: {position:'right', show:true},
			series: seriesOption,
			grid: {borderWidth:2, hoverable: true},
			xaxis: xAxis,
			//selection: { mode: "xy" },
			yaxis: { zoomRange: [0.1, 100], panRange: [-500, 500] },
			zoom: {interactive: true},
        	pan: {interactive: true}
			//yaxis: {min:-50, max:25, tickDecimal:25}

	};
	$.plot($("#fp1"),fp1Data, Options);
	$.plot($("#fp2"),fp2Data, Options);
	$.plot($("#f7"),f7Data, Options);
	$.plot($("#f8"),f8Data, Options);
	$.plot($("#f3"),f3Data, Options);
	$.plot($("#t3"),t3Data, Options);
	$.plot($("#f4"),f4Data, Options);
	$.plot($("#c3"),c3Data, Options);
	$.plot($("#c4"),c4Data, Options);
	$.plot($("#p3"),p3Data, Options);
	$.plot($("#t4"),t4Data, Options);
	$.plot($("#p4"),p4Data, Options);
	$.plot($("#t5"),t5Data, Options);
	$.plot($("#t6"),t6Data, Options);
	$.plot($("#cz"),czData, Options);
	$.plot($("#o1"),o1Data, Options);
	$.plot($("#fz"),fzData, Options);
	$.plot($("#o2"),o2Data, Options);
	$.plot($("#pz"),pzData, Options);
$("#option").delegate("div","mouseover",null,function(){
		var placeholderId = $(this)[0].id;
		if(placeholderId == "fp1"){
			zoomingGraph(placeholderId, fp1Data, Options);
		}else if(placeholderId == "fp2"){
			zoomingGraph(placeholderId, fp2Data, Options);
		}else if(placeholderId == "f3"){
			zoomingGraph(placeholderId, f3Data, Options);
		}else if(placeholderId == "f4"){
			zoomingGraph(placeholderId, f4Data, Options);
		}else if(placeholderId == "p3"){
			zoomingGraph(placeholderId, p3Data, Options);
		}else if(placeholderId == "p4"){
			zoomingGraph(placeholderId, p4Data, Options);
		}else if(placeholderId == "f7"){
			zoomingGraph(placeholderId, f7Data, Options);
		}else if(placeholderId == "f8"){
			zoomingGraph(placeholderId, f8Data, Options);
		}else if(placeholderId == "t3"){
			zoomingGraph(placeholderId, t3Data, Options);
		}else if(placeholderId == "t4"){
			zoomingGraph(placeholderId, t4Data, Options);
		}else if(placeholderId == "t5"){
			zoomingGraph(placeholderId, t5Data, Options);
		}else if(placeholderId == "t6"){
			zoomingGraph(placeholderId, t6Data, Options);
		}else if(placeholderId == "fz"){
			zoomingGraph(placeholderId, fzData, Options);
		}else if(placeholderId == "cz"){
			zoomingGraph(placeholderId, czData, Options);
		}else if(placeholderId == "pz"){
			zoomingGraph(placeholderId, pzData, Options);
		}else if(placeholderId == "o1"){
			zoomingGraph(placeholderId, o1Data, Options);
		}else if(placeholderId == "o2"){
			zoomingGraph(placeholderId, o2Data, Options);
		}else if(placeholderId == "c3"){
			zoomingGraph(placeholderId, c3Data, Options);
		}else if(placeholderId == "c4"){
			zoomingGraph(placeholderId, c4Data, Options);
		}
	});
};

var showRightLegMovementGraph = function(samplingRate){
	if(samplingRate == null || samplingRate == "")
		samplingRate = 100;

	var fp1Value = [];
	var fp2Value = [];
	var f3Value = [];
	var f7Value = [];
	var f4Value = [];
	var f8Value = [];
	var t3Value = [];
	var c3Value = [];
	var c4Value = [];
	var t4Value = [];
	var t5Value = [];
	var p3Value = [];
	var p4Value = [];
	var t6Value = [];
	var czValue = [];
	var o1Value = [];
	var fzValue = [];
	var o2Value = [];
	var pzValue = [];

	for(var i = 0; i < samplingRate ; i++){
		fp1Value.push(fp1RightLegMovementArray[i]);
		fp2Value.push(fp2RightLegMovementArray[i]);
		f3Value.push(f3RightLegMovementArray[i]);
		f7Value.push(f7RightLegMovementArray[i]);
		f4Value.push(f4RightLegMovementArray[i]);
		f8Value.push(f8RightLegMovementArray[i]);
		t3Value.push(t3RightLegMovementArray[i]);
		c3Value.push(c3RightLegMovementArray[i]);
		c4Value.push(c4RightLegMovementArray[i]);
		t4Value.push(t4RightLegMovementArray[i]);
		p3Value.push(p3RightLegMovementArray[i]);
		t5Value.push(t5RightLegMovementArray[i]);
		p4Value.push(p4RightLegMovementArray[i]);
		t6Value.push(t6RightLegMovementArray[i]);
		czValue.push(czRightLegMovementArray[i]);
		o1Value.push(o1RightLegMovementArray[i]);
		fzValue.push(fzRightLegMovementArray[i]);
		o2Value.push(o2RightLegMovementArray[i]);
		pzValue.push(pzRightLegMovementArray[i]);
	}

	var fp1Data = [{label: "FP1" ,data: fp1Value}];
	var fp2Data = [{label: "FP2" ,data: fp2Value}];
	var f7Data = [{label: "F7" ,data: f7Value}];
	var f3Data = [{label: "F3" ,data: f3Value}];
	var f4Data = [{label: "F4" ,data: f4Value}];
	var f8Data = [{label: "F8" ,data: f8Value}];
	var t3Data = [{label: "T3" ,data: t3Value}];
	var c3Data = [{label: "C3" ,data: c3Value}];
	var c4Data = [{label: "C4" ,data: c4Value}];
	var t4Data = [{label: "T4" ,data: t4Value}];
	var t5Data = [{label: "T5" ,data: t5Value}];
	var p3Data = [{label: "P3" ,data: p3Value}];
	var p4Data = [{label: "P4" ,data: p4Value}];
	var t6Data = [{label: "T6" ,data: t6Value}];
	var czData = [{label: "CZ" ,data: czValue}];
	var o1Data = [{label: "O1" ,data: o1Value}];
	var fzData = [{label: "FZ" ,data: fzValue}];
	var o2Data = [{label: "O2" ,data: o2Value}];
	var pzData = [{label: "PZ" ,data: pzValue}];
	
	var xAxis = {min:0.0, max:(samplingRate*0.002),  zoomRange: [0.001, 10], panRange: [-10, 10] };
	var Options = {
			legend: {position:'right', show:true},
			series: seriesOption,
			grid: {borderWidth:2, hoverable: true},
			xaxis: xAxis,
			//selection: { mode: "xy" },
			yaxis: { zoomRange: [0.1, 100], panRange: [-500, 500] },
			zoom: {interactive: true},
        	pan: {interactive: true}
			//yaxis: {min:-50, max:25, tickDecimal:25}

	};
	$.plot($("#fp1"),fp1Data, Options);
	$.plot($("#fp2"),fp2Data, Options);
	$.plot($("#f7"),f7Data, Options);
	$.plot($("#f8"),f8Data, Options);
	$.plot($("#f3"),f3Data, Options);
	$.plot($("#t3"),t3Data, Options);
	$.plot($("#f4"),f4Data, Options);
	$.plot($("#c3"),c3Data, Options);
	$.plot($("#c4"),c4Data, Options);
	$.plot($("#p3"),p3Data, Options);
	$.plot($("#t4"),t4Data, Options);
	$.plot($("#p4"),p4Data, Options);
	$.plot($("#t5"),t5Data, Options);
	$.plot($("#t6"),t6Data, Options);
	$.plot($("#cz"),czData, Options);
	$.plot($("#o1"),o1Data, Options);
	$.plot($("#fz"),fzData, Options);
	$.plot($("#o2"),o2Data, Options);
	$.plot($("#pz"),pzData, Options);
$("#option").delegate("div","mouseover",null,function(){
		var placeholderId = $(this)[0].id;
		if(placeholderId == "fp1"){
			zoomingGraph(placeholderId, fp1Data, Options);
		}else if(placeholderId == "fp2"){
			zoomingGraph(placeholderId, fp2Data, Options);
		}else if(placeholderId == "f3"){
			zoomingGraph(placeholderId, f3Data, Options);
		}else if(placeholderId == "f4"){
			zoomingGraph(placeholderId, f4Data, Options);
		}else if(placeholderId == "p3"){
			zoomingGraph(placeholderId, p3Data, Options);
		}else if(placeholderId == "p4"){
			zoomingGraph(placeholderId, p4Data, Options);
		}else if(placeholderId == "f7"){
			zoomingGraph(placeholderId, f7Data, Options);
		}else if(placeholderId == "f8"){
			zoomingGraph(placeholderId, f8Data, Options);
		}else if(placeholderId == "t3"){
			zoomingGraph(placeholderId, t3Data, Options);
		}else if(placeholderId == "t4"){
			zoomingGraph(placeholderId, t4Data, Options);
		}else if(placeholderId == "t5"){
			zoomingGraph(placeholderId, t5Data, Options);
		}else if(placeholderId == "t6"){
			zoomingGraph(placeholderId, t6Data, Options);
		}else if(placeholderId == "fz"){
			zoomingGraph(placeholderId, fzData, Options);
		}else if(placeholderId == "cz"){
			zoomingGraph(placeholderId, czData, Options);
		}else if(placeholderId == "pz"){
			zoomingGraph(placeholderId, pzData, Options);
		}else if(placeholderId == "o1"){
			zoomingGraph(placeholderId, o1Data, Options);
		}else if(placeholderId == "o2"){
			zoomingGraph(placeholderId, o2Data, Options);
		}else if(placeholderId == "c3"){
			zoomingGraph(placeholderId, c3Data, Options);
		}else if(placeholderId == "c4"){
			zoomingGraph(placeholderId, c4Data, Options);
		}
	});
};

var animateGraph = function(motionType , speed){
	
	if(motionType == null || motionType == "")
		motionType = "baseline";
		
	var sec = speed;
	if(sec == null || sec == "")
		sec = 25;
		
	var IncRate  = 125;
	
	var samplingRate = 125;
	if(sec == "25"){
		sec = 250;
		IncRate = 125;
		samplingRate = 0;
	}else if(sec == "50"){
		sec = 500;
		IncRate = 250;
		samplingRate = 0;
	}else if(sec == "1"){
		sec = 1000;
		IncRate = 500;
		samplingRate = 0;
	}else if(sec == "2"){
		sec = 2000;
		IncRate = 1000;
		samplingRate = 0;
	}else if(sec == "3"){
		sec = 3000;
		IncRate = 1500;
		samplingRate = 0;
	}else if(sec == "4"){
		sec = 4000;
		IncRate = 2000;
		samplingRate = 0;
	}else if(sec == "5"){
		sec = 5000;
		IncRate = 2500;
		samplingRate = 0;
	}
		
	if(motionType == "baseline"){
			showBaseLineGraphAnimate(samplingRate, sec, IncRate);
		}else if(motionType == "LeftHandBackward"){
			showLeftHandBackwardMovementGraphAnimate(samplingRate, sec, IncRate);
		}else if(motionType == "LeftHandforward"){
			showLeftHandForwardMovementGraphAnimate(samplingRate, sec, IncRate);
		}else if(motionType == "LeftHandImaginaryBackward"){
			showLeftHandImaginaryBackwardMovementGraphAnimate(samplingRate, sec, IncRate);
		}else if(motionType == "LeftHandImaginaryForward"){
			showLeftHandImaginaryForwardMovementGraphAnimate(samplingRate, sec, IncRate);
		}else if(motionType == "LeftHandRandom"){
			showLeftHandRandomMovementGraphAnimate(samplingRate, sec, IncRate);
		}else if(motionType == "LeftLeg"){
			showLeftLegMovementGraphAnimate(samplingRate, sec, IncRate);
		}else if(motionType == "RightHandBackward"){
			showRightHandBackwardMovementGraphAnimate(samplingRate, sec, IncRate);
		}else if(motionType == "RightHandForward"){
			showRightHandForwardMovementGraphAnimate(samplingRate, sec, IncRate);
		}else if(motionType == "RightHandImaginaryBackward"){
			showRightHandImaginaryBackwardMovementGraphAnimate(samplingRate, sec, IncRate);
		}else if(motionType == "RightHandImaginaryForward"){
			showRightHandImaginaryForwardMovementGraphAnimate(samplingRate, sec, IncRate);
		}else if(motionType == "RightHandRandom"){
			showRightHandRandomMovementGraphAnimate(samplingRate, sec, IncRate);
		}else if(motionType == "RightLeg"){
			showRightLegMovementGraphAnimate(samplingRate, sec, IncRate);
		}
};
var showBaseLineGraphAnimate = function(sr, sp, ir){
	var fp1Value = [];
	var fp2Value = [];
	var f3Value = [];
	var f7Value = [];
	var f4Value = [];
	var f8Value = [];
	var t3Value = [];
	var c3Value = [];
	var c4Value = [];
	var t4Value = [];
	var t5Value = [];
	var p3Value = [];
	var p4Value = [];
	var t6Value = [];
	var czValue = [];
	var o1Value = [];
	var fzValue = [];
	var o2Value = [];
	var pzValue = [];
	var newRate  = sr + ir;
	
	if(newRate > 5000)
		sr = ir;
		
	var rate  = 0;
	for(var i = rate + sr ; i < newRate; i++){
		fp1Value.push(fp1Array[i]);
		fp2Value.push(fp2Array[i]);
		f3Value.push(f3Array[i]);
		f7Value.push(f7Array[i]);
		f4Value.push(f4Array[i]);
		f8Value.push(f8Array[i]);
		t3Value.push(t3Array[i]);
		c3Value.push(c3Array[i]);
		c4Value.push(c4Array[i]);
		t4Value.push(t4Array[i]);
		p3Value.push(p3Array[i]);
		t5Value.push(t5Array[i]);
		p4Value.push(p4Array[i]);
		t6Value.push(t6Array[i]);
		czValue.push(czArray[i]);
		o1Value.push(o1Array[i]);
		fzValue.push(fzArray[i]);
		o2Value.push(o2Array[i]);
		pzValue.push(pzArray[i]);
	}

	var fp1Data = [{label: "FP1" ,data: fp1Value}];
	var fp2Data = [{label: "FP2" ,data: fp2Value}];
	var f7Data = [{label: "F7" ,data: f7Value}];
	var f3Data = [{label: "F3" ,data: f3Value}];
	var f4Data = [{label: "F4" ,data: f4Value}];
	var f8Data = [{label: "F8" ,data: f8Value}];
	var t3Data = [{label: "T3" ,data: t3Value}];
	var c3Data = [{label: "C3" ,data: c3Value}];
	var c4Data = [{label: "C4" ,data: c4Value}];
	var t4Data = [{label: "T4" ,data: t4Value}];
	var t5Data = [{label: "T5" ,data: t5Value}];
	var p3Data = [{label: "P3" ,data: p3Value}];
	var p4Data = [{label: "P4" ,data: p4Value}];
	var t6Data = [{label: "T6" ,data: t6Value}];
	var czData = [{label: "CZ" ,data: czValue}];
	var o1Data = [{label: "O1" ,data: o1Value}];
	var fzData = [{label: "FZ" ,data: fzValue}];
	var o2Data = [{label: "O2" ,data: o2Value}];
	var pzData = [{label: "PZ" ,data: pzValue}];

	var xAxis = {min:(sr*0.002), max:(newRate*0.002)};
	
	var Options = {
			legend: {position:'right', show:true},
			series: seriesOption,
			grid: {borderWidth:2, hoverable: true},
			xaxis: xAxis,
			selection: { mode: "xy" }
			//yaxis: {min:-50, max:25, tickDecimal:25}
	};
	
	$.plot($("#fp1"),fp1Data, Options);
	$.plot($("#fp2"),fp2Data, Options);
	$.plot($("#f7"),f7Data, Options);
	$.plot($("#f8"),f8Data, Options);
	$.plot($("#f3"),f3Data, Options);
	$.plot($("#t3"),t3Data, Options);
	$.plot($("#f4"),f4Data, Options);
	$.plot($("#c3"),c3Data, Options);
	$.plot($("#c4"),c4Data, Options);
	$.plot($("#p3"),p3Data, Options);
	$.plot($("#t4"),t4Data, Options);
	$.plot($("#p4"),p4Data, Options);
	$.plot($("#t5"),t5Data, Options);
	$.plot($("#t6"),t6Data, Options);
	$.plot($("#cz"),czData, Options);
	$.plot($("#o1"),o1Data, Options);
	$.plot($("#fz"),fzData, Options);
	$.plot($("#o2"),o2Data, Options);
	$.plot($("#pz"),pzData, Options);
	 
	sr =  sr + ir;
	t = setTimeout(function(){
			showBaseLineGraphAnimate(sr, sp, ir);
	},sp);
	
	$("#option").delegate("div","mouseover",null,function(){
		if(isAnimationStart == false){
			var placeholderId = $(this)[0].id;
			if(placeholderId == "fp1"){
				zoomingGraph(placeholderId, fp1Data, Options);
			}else if(placeholderId == "fp2"){
				zoomingGraph(placeholderId, fp2Data, Options);
			}else if(placeholderId == "f3"){
				zoomingGraph(placeholderId, f3Data, Options);
			}else if(placeholderId == "f4"){
				zoomingGraph(placeholderId, f4Data, Options);
			}else if(placeholderId == "p3"){
				zoomingGraph(placeholderId, p3Data, Options);
			}else if(placeholderId == "p4"){
				zoomingGraph(placeholderId, p4Data, Options);
			}else if(placeholderId == "f7"){
				zoomingGraph(placeholderId, f7Data, Options);
			}else if(placeholderId == "f8"){
				zoomingGraph(placeholderId, f8Data, Options);
			}else if(placeholderId == "t3"){
				zoomingGraph(placeholderId, t3Data, Options);
			}else if(placeholderId == "t4"){
				zoomingGraph(placeholderId, t4Data, Options);
			}else if(placeholderId == "t5"){
				zoomingGraph(placeholderId, t5Data, Options);
			}else if(placeholderId == "t6"){
				zoomingGraph(placeholderId, t6Data, Options);
			}else if(placeholderId == "fz"){
				zoomingGraph(placeholderId, fzData, Options);
			}else if(placeholderId == "cz"){
				zoomingGraph(placeholderId, czData, Options);
			}else if(placeholderId == "pz"){
				zoomingGraph(placeholderId, pzData, Options);
			}else if(placeholderId == "o1"){
				zoomingGraph(placeholderId, o1Data, Options);
			}else if(placeholderId == "o2"){
				zoomingGraph(placeholderId, o2Data, Options);
			}else if(placeholderId == "c3"){
				zoomingGraph(placeholderId, c3Data, Options);
			}else if(placeholderId == "c4"){
				zoomingGraph(placeholderId, c4Data, Options);
			}
		}
	});
};

var showLeftHandBackwardMovementGraphAnimate = function(sr, sp, ir){
	var fp1Value = [];
	var fp2Value = [];
	var f3Value = [];
	var f7Value = [];
	var f4Value = [];
	var f8Value = [];
	var t3Value = [];
	var c3Value = [];
	var c4Value = [];
	var t4Value = [];
	var t5Value = [];
	var p3Value = [];
	var p4Value = [];
	var t6Value = [];
	var czValue = [];
	var o1Value = [];
	var fzValue = [];
	var o2Value = [];
	var pzValue = [];

	var newRate  = sr + ir;
	
	if(newRate > 5000)
		sr = 0;
		
	var rate  = 0;
	for(var i = rate + sr ; i < newRate; i++){
		fp1Value.push(fp1LeftHandBackwardMovementArray[i]);
		fp2Value.push(fp2LeftHandBackwardMovementArray[i]);
		f3Value.push(f3LeftHandBackwardMovementArray[i]);
		f7Value.push(f7LeftHandBackwardMovementArray[i]);
		f4Value.push(f4LeftHandBackwardMovementArray[i]);
		f8Value.push(f8LeftHandBackwardMovementArray[i]);
		t3Value.push(t3LeftHandBackwardMovementArray[i]);
		c3Value.push(c3LeftHandBackwardMovementArray[i]);
		c4Value.push(c4LeftHandBackwardMovementArray[i]);
		t4Value.push(t4LeftHandBackwardMovementArray[i]);
		p3Value.push(p3LeftHandBackwardMovementArray[i]);
		t5Value.push(t5LeftHandBackwardMovementArray[i]);
		p4Value.push(p4LeftHandBackwardMovementArray[i]);
		t6Value.push(t6LeftHandBackwardMovementArray[i]);
		czValue.push(czLeftHandBackwardMovementArray[i]);
		o1Value.push(o1LeftHandBackwardMovementArray[i]);
		fzValue.push(fzLeftHandBackwardMovementArray[i]);
		o2Value.push(o2LeftHandBackwardMovementArray[i]);
		pzValue.push(pzLeftHandBackwardMovementArray[i]);
	}

	var fp1Data = [{label: "FP1" ,data: fp1Value}];
	var fp2Data = [{label: "FP2" ,data: fp2Value}];
	var f7Data = [{label: "F7" ,data: f7Value}];
	var f3Data = [{label: "F3" ,data: f3Value}];
	var f4Data = [{label: "F4" ,data: f4Value}];
	var f8Data = [{label: "F8" ,data: f8Value}];
	var t3Data = [{label: "T3" ,data: t3Value}];
	var c3Data = [{label: "C3" ,data: c3Value}];
	var c4Data = [{label: "C4" ,data: c4Value}];
	var t4Data = [{label: "T4" ,data: t4Value}];
	var t5Data = [{label: "T5" ,data: t5Value}];
	var p3Data = [{label: "P3" ,data: p3Value}];
	var p4Data = [{label: "P4" ,data: p4Value}];
	var t6Data = [{label: "T6" ,data: t6Value}];
	var czData = [{label: "CZ" ,data: czValue}];
	var o1Data = [{label: "O1" ,data: o1Value}];
	var fzData = [{label: "FZ" ,data: fzValue}];
	var o2Data = [{label: "O2" ,data: o2Value}];
	var pzData = [{label: "PZ" ,data: pzValue}];

	var xAxis = {min:(sr*0.002), max:(newRate*0.002)};
	
	var Options = {
			legend: {position:'right', show:true},
			series: seriesOption,
			grid: {borderWidth:2, hoverable: true},
			xaxis: xAxis,
			selection: { mode: "xy" }
			//yaxis: {min:-50, max:25, tickDecimal:25}

	};
	$.plot($("#fp1"),fp1Data, Options);
	$.plot($("#fp2"),fp2Data, Options);
	$.plot($("#f7"),f7Data, Options);
	$.plot($("#f8"),f8Data, Options);
	$.plot($("#f3"),f3Data, Options);
	$.plot($("#t3"),t3Data, Options);
	$.plot($("#f4"),f4Data, Options);
	$.plot($("#c3"),c3Data, Options);
	$.plot($("#c4"),c4Data, Options);
	$.plot($("#p3"),p3Data, Options);
	$.plot($("#t4"),t4Data, Options);
	$.plot($("#p4"),p4Data, Options);
	$.plot($("#t5"),t5Data, Options);
	$.plot($("#t6"),t6Data, Options);
	$.plot($("#cz"),czData, Options);
	$.plot($("#o1"),o1Data, Options);
	$.plot($("#fz"),fzData, Options);
	$.plot($("#o2"),o2Data, Options);
	$.plot($("#pz"),pzData, Options);
	sr =  sr + ir;
	t = setTimeout(function(){
			showLeftHandBackwardMovementGraphAnimate(sr, sp, ir);
	},sp);
	$("#option").delegate("div","mouseover",null,function(){
		if(isAnimationStart == false){
			var placeholderId = $(this)[0].id;
			if(placeholderId == "fp1"){
				zoomingGraph(placeholderId, fp1Data, Options);
			}else if(placeholderId == "fp2"){
				zoomingGraph(placeholderId, fp2Data, Options);
			}else if(placeholderId == "f3"){
				zoomingGraph(placeholderId, f3Data, Options);
			}else if(placeholderId == "f4"){
				zoomingGraph(placeholderId, f4Data, Options);
			}else if(placeholderId == "p3"){
				zoomingGraph(placeholderId, p3Data, Options);
			}else if(placeholderId == "p4"){
				zoomingGraph(placeholderId, p4Data, Options);
			}else if(placeholderId == "f7"){
				zoomingGraph(placeholderId, f7Data, Options);
			}else if(placeholderId == "f8"){
				zoomingGraph(placeholderId, f8Data, Options);
			}else if(placeholderId == "t3"){
				zoomingGraph(placeholderId, t3Data, Options);
			}else if(placeholderId == "t4"){
				zoomingGraph(placeholderId, t4Data, Options);
			}else if(placeholderId == "t5"){
				zoomingGraph(placeholderId, t5Data, Options);
			}else if(placeholderId == "t6"){
				zoomingGraph(placeholderId, t6Data, Options);
			}else if(placeholderId == "fz"){
				zoomingGraph(placeholderId, fzData, Options);
			}else if(placeholderId == "cz"){
				zoomingGraph(placeholderId, czData, Options);
			}else if(placeholderId == "pz"){
				zoomingGraph(placeholderId, pzData, Options);
			}else if(placeholderId == "o1"){
				zoomingGraph(placeholderId, o1Data, Options);
			}else if(placeholderId == "o2"){
				zoomingGraph(placeholderId, o2Data, Options);
			}else if(placeholderId == "c3"){
				zoomingGraph(placeholderId, c3Data, Options);
			}else if(placeholderId == "c4"){
				zoomingGraph(placeholderId, c4Data, Options);
			}
		}
	});
};

var showLeftHandForwardMovementGraphAnimate = function(sr, sp, ir){
	var fp1Value = [];
	var fp2Value = [];
	var f3Value = [];
	var f7Value = [];
	var f4Value = [];
	var f8Value = [];
	var t3Value = [];
	var c3Value = [];
	var c4Value = [];
	var t4Value = [];
	var t5Value = [];
	var p3Value = [];
	var p4Value = [];
	var t6Value = [];
	var czValue = [];
	var o1Value = [];
	var fzValue = [];
	var o2Value = [];
	var pzValue = [];

	var newRate  = sr + ir;
	
	if(newRate > 5000)
		sr = 0;
		
	var rate  = 0;
	for(var i = rate + sr ; i < newRate; i++){
		fp1Value.push(fp1LeftHandForwardMovementArray[i]);
		fp2Value.push(fp2LeftHandForwardMovementArray[i]);
		f3Value.push(f3LeftHandForwardMovementArray[i]);
		f7Value.push(f7LeftHandForwardMovementArray[i]);
		f4Value.push(f4LeftHandForwardMovementArray[i]);
		f8Value.push(f8LeftHandForwardMovementArray[i]);
		t3Value.push(t3LeftHandForwardMovementArray[i]);
		c3Value.push(c3LeftHandForwardMovementArray[i]);
		c4Value.push(c4LeftHandForwardMovementArray[i]);
		t4Value.push(t4LeftHandForwardMovementArray[i]);
		p3Value.push(p3LeftHandForwardMovementArray[i]);
		t5Value.push(t5LeftHandForwardMovementArray[i]);
		p4Value.push(p4LeftHandForwardMovementArray[i]);
		t6Value.push(t6LeftHandForwardMovementArray[i]);
		czValue.push(czLeftHandForwardMovementArray[i]);
		o1Value.push(o1LeftHandForwardMovementArray[i]);
		fzValue.push(fzLeftHandForwardMovementArray[i]);
		o2Value.push(o2LeftHandForwardMovementArray[i]);
		pzValue.push(pzLeftHandForwardMovementArray[i]);
	}

	var fp1Data = [{label: "FP1" ,data: fp1Value}];
	var fp2Data = [{label: "FP2" ,data: fp2Value}];
	var f7Data = [{label: "F7" ,data: f7Value}];
	var f3Data = [{label: "F3" ,data: f3Value}];
	var f4Data = [{label: "F4" ,data: f4Value}];
	var f8Data = [{label: "F8" ,data: f8Value}];
	var t3Data = [{label: "T3" ,data: t3Value}];
	var c3Data = [{label: "C3" ,data: c3Value}];
	var c4Data = [{label: "C4" ,data: c4Value}];
	var t4Data = [{label: "T4" ,data: t4Value}];
	var t5Data = [{label: "T5" ,data: t5Value}];
	var p3Data = [{label: "P3" ,data: p3Value}];
	var p4Data = [{label: "P4" ,data: p4Value}];
	var t6Data = [{label: "T6" ,data: t6Value}];
	var czData = [{label: "CZ" ,data: czValue}];
	var o1Data = [{label: "O1" ,data: o1Value}];
	var fzData = [{label: "FZ" ,data: fzValue}];
	var o2Data = [{label: "O2" ,data: o2Value}];
	var pzData = [{label: "PZ" ,data: pzValue}];
	
	var xAxis = {min:(sr*0.002), max:(newRate*0.002)};
	
	var Options = {
			legend: {position:'right', show:true},
			series: seriesOption,
			grid: {borderWidth:2, hoverable: true},
			xaxis: xAxis,
			selection: { mode: "xy" }
			//yaxis: {min:-50, max:25, tickDecimal:25}

	};
	$.plot($("#fp1"),fp1Data, Options);
	$.plot($("#fp2"),fp2Data, Options);
	$.plot($("#f7"),f7Data, Options);
	$.plot($("#f8"),f8Data, Options);
	$.plot($("#f3"),f3Data, Options);
	$.plot($("#t3"),t3Data, Options);
	$.plot($("#f4"),f4Data, Options);
	$.plot($("#c3"),c3Data, Options);
	$.plot($("#c4"),c4Data, Options);
	$.plot($("#p3"),p3Data, Options);
	$.plot($("#t4"),t4Data, Options);
	$.plot($("#p4"),p4Data, Options);
	$.plot($("#t5"),t5Data, Options);
	$.plot($("#t6"),t6Data, Options);
	$.plot($("#cz"),czData, Options);
	$.plot($("#o1"),o1Data, Options);
	$.plot($("#fz"),fzData, Options);
	$.plot($("#o2"),o2Data, Options);
	$.plot($("#pz"),pzData, Options);
	sr =  sr + ir;
	t = setTimeout(function(){
			showLeftHandForwardMovementGraphAnimate(sr, sp, ir);
	},sp);
$("#option").delegate("div","mouseover",null,function(){
		if(isAnimationStart == false){
			var placeholderId = $(this)[0].id;
			if(placeholderId == "fp1"){
				zoomingGraph(placeholderId, fp1Data, Options);
			}else if(placeholderId == "fp2"){
				zoomingGraph(placeholderId, fp2Data, Options);
			}else if(placeholderId == "f3"){
				zoomingGraph(placeholderId, f3Data, Options);
			}else if(placeholderId == "f4"){
				zoomingGraph(placeholderId, f4Data, Options);
			}else if(placeholderId == "p3"){
				zoomingGraph(placeholderId, p3Data, Options);
			}else if(placeholderId == "p4"){
				zoomingGraph(placeholderId, p4Data, Options);
			}else if(placeholderId == "f7"){
				zoomingGraph(placeholderId, f7Data, Options);
			}else if(placeholderId == "f8"){
				zoomingGraph(placeholderId, f8Data, Options);
			}else if(placeholderId == "t3"){
				zoomingGraph(placeholderId, t3Data, Options);
			}else if(placeholderId == "t4"){
				zoomingGraph(placeholderId, t4Data, Options);
			}else if(placeholderId == "t5"){
				zoomingGraph(placeholderId, t5Data, Options);
			}else if(placeholderId == "t6"){
				zoomingGraph(placeholderId, t6Data, Options);
			}else if(placeholderId == "fz"){
				zoomingGraph(placeholderId, fzData, Options);
			}else if(placeholderId == "cz"){
				zoomingGraph(placeholderId, czData, Options);
			}else if(placeholderId == "pz"){
				zoomingGraph(placeholderId, pzData, Options);
			}else if(placeholderId == "o1"){
				zoomingGraph(placeholderId, o1Data, Options);
			}else if(placeholderId == "o2"){
				zoomingGraph(placeholderId, o2Data, Options);
			}else if(placeholderId == "c3"){
				zoomingGraph(placeholderId, c3Data, Options);
			}else if(placeholderId == "c4"){
				zoomingGraph(placeholderId, c4Data, Options);
			}
		}
	});
};

var showLeftHandImaginaryBackwardMovementGraphAnimate = function(sr, sp, ir){
	var fp1Value = [];
	var fp2Value = [];
	var f3Value = [];
	var f7Value = [];
	var f4Value = [];
	var f8Value = [];
	var t3Value = [];
	var c3Value = [];
	var c4Value = [];
	var t4Value = [];
	var t5Value = [];
	var p3Value = [];
	var p4Value = [];
	var t6Value = [];
	var czValue = [];
	var o1Value = [];
	var fzValue = [];
	var o2Value = [];
	var pzValue = [];

	var newRate  = sr + ir;
	
	if(newRate > 5000)
		sr = 0;
		
	var rate  = 0;
	for(var i = rate + sr ; i < newRate; i++){
		fp1Value.push(fp1LeftHandImaginaryBackwardMovementArray[i]);
		fp2Value.push(fp2LeftHandImaginaryBackwardMovementArray[i]);
		f3Value.push(f3LeftHandImaginaryBackwardMovementArray[i]);
		f7Value.push(f7LeftHandImaginaryBackwardMovementArray[i]);
		f4Value.push(f4LeftHandImaginaryBackwardMovementArray[i]);
		f8Value.push(f8LeftHandImaginaryBackwardMovementArray[i]);
		t3Value.push(t3LeftHandImaginaryBackwardMovementArray[i]);
		c3Value.push(c3LeftHandImaginaryBackwardMovementArray[i]);
		c4Value.push(c4LeftHandImaginaryBackwardMovementArray[i]);
		t4Value.push(t4LeftHandImaginaryBackwardMovementArray[i]);
		p3Value.push(p3LeftHandImaginaryBackwardMovementArray[i]);
		t5Value.push(t5LeftHandImaginaryBackwardMovementArray[i]);
		p4Value.push(p4LeftHandImaginaryBackwardMovementArray[i]);
		t6Value.push(t6LeftHandImaginaryBackwardMovementArray[i]);
		czValue.push(czLeftHandImaginaryBackwardMovementArray[i]);
		o1Value.push(o1LeftHandImaginaryBackwardMovementArray[i]);
		fzValue.push(fzLeftHandImaginaryBackwardMovementArray[i]);
		o2Value.push(o2LeftHandImaginaryBackwardMovementArray[i]);
		pzValue.push(pzLeftHandImaginaryBackwardMovementArray[i]);
	}

	var fp1Data = [{label: "FP1" ,data: fp1Value}];
	var fp2Data = [{label: "FP2" ,data: fp2Value}];
	var f7Data = [{label: "F7" ,data: f7Value}];
	var f3Data = [{label: "F3" ,data: f3Value}];
	var f4Data = [{label: "F4" ,data: f4Value}];
	var f8Data = [{label: "F8" ,data: f8Value}];
	var t3Data = [{label: "T3" ,data: t3Value}];
	var c3Data = [{label: "C3" ,data: c3Value}];
	var c4Data = [{label: "C4" ,data: c4Value}];
	var t4Data = [{label: "T4" ,data: t4Value}];
	var t5Data = [{label: "T5" ,data: t5Value}];
	var p3Data = [{label: "P3" ,data: p3Value}];
	var p4Data = [{label: "P4" ,data: p4Value}];
	var t6Data = [{label: "T6" ,data: t6Value}];
	var czData = [{label: "CZ" ,data: czValue}];
	var o1Data = [{label: "O1" ,data: o1Value}];
	var fzData = [{label: "FZ" ,data: fzValue}];
	var o2Data = [{label: "O2" ,data: o2Value}];
	var pzData = [{label: "PZ" ,data: pzValue}];
	
	var xAxis = {min:(sr*0.002), max:(newRate*0.002)};
	
	var Options = {
			legend: {position:'right', show:true},
			series: seriesOption,
			grid: {borderWidth:2, hoverable: true},
			xaxis: xAxis,
			selection: { mode: "xy" }
			//yaxis: {min:-50, max:25, tickDecimal:25}

	};
	$.plot($("#fp1"),fp1Data, Options);
	$.plot($("#fp2"),fp2Data, Options);
	$.plot($("#f7"),f7Data, Options);
	$.plot($("#f8"),f8Data, Options);
	$.plot($("#f3"),f3Data, Options);
	$.plot($("#t3"),t3Data, Options);
	$.plot($("#f4"),f4Data, Options);
	$.plot($("#c3"),c3Data, Options);
	$.plot($("#c4"),c4Data, Options);
	$.plot($("#p3"),p3Data, Options);
	$.plot($("#t4"),t4Data, Options);
	$.plot($("#p4"),p4Data, Options);
	$.plot($("#t5"),t5Data, Options);
	$.plot($("#t6"),t6Data, Options);
	$.plot($("#cz"),czData, Options);
	$.plot($("#o1"),o1Data, Options);
	$.plot($("#fz"),fzData, Options);
	$.plot($("#o2"),o2Data, Options);
	$.plot($("#pz"),pzData, Options);
	sr =  sr + ir;
	t = setTimeout(function(){
			showLeftHandImaginaryBackwardMovementGraphAnimate(sr, sp, ir);
	},sp);
$("#option").delegate("div","mouseover",null,function(){
		if(isAnimationStart == false){
			var placeholderId = $(this)[0].id;
			if(placeholderId == "fp1"){
				zoomingGraph(placeholderId, fp1Data, Options);
			}else if(placeholderId == "fp2"){
				zoomingGraph(placeholderId, fp2Data, Options);
			}else if(placeholderId == "f3"){
				zoomingGraph(placeholderId, f3Data, Options);
			}else if(placeholderId == "f4"){
				zoomingGraph(placeholderId, f4Data, Options);
			}else if(placeholderId == "p3"){
				zoomingGraph(placeholderId, p3Data, Options);
			}else if(placeholderId == "p4"){
				zoomingGraph(placeholderId, p4Data, Options);
			}else if(placeholderId == "f7"){
				zoomingGraph(placeholderId, f7Data, Options);
			}else if(placeholderId == "f8"){
				zoomingGraph(placeholderId, f8Data, Options);
			}else if(placeholderId == "t3"){
				zoomingGraph(placeholderId, t3Data, Options);
			}else if(placeholderId == "t4"){
				zoomingGraph(placeholderId, t4Data, Options);
			}else if(placeholderId == "t5"){
				zoomingGraph(placeholderId, t5Data, Options);
			}else if(placeholderId == "t6"){
				zoomingGraph(placeholderId, t6Data, Options);
			}else if(placeholderId == "fz"){
				zoomingGraph(placeholderId, fzData, Options);
			}else if(placeholderId == "cz"){
				zoomingGraph(placeholderId, czData, Options);
			}else if(placeholderId == "pz"){
				zoomingGraph(placeholderId, pzData, Options);
			}else if(placeholderId == "o1"){
				zoomingGraph(placeholderId, o1Data, Options);
			}else if(placeholderId == "o2"){
				zoomingGraph(placeholderId, o2Data, Options);
			}else if(placeholderId == "c3"){
				zoomingGraph(placeholderId, c3Data, Options);
			}else if(placeholderId == "c4"){
				zoomingGraph(placeholderId, c4Data, Options);
			}
		}
	});
};

var showLeftHandImaginaryForwardMovementGraphAnimate = function(sr, sp, ir){
	var fp1Value = [];
	var fp2Value = [];
	var f3Value = [];
	var f7Value = [];
	var f4Value = [];
	var f8Value = [];
	var t3Value = [];
	var c3Value = [];
	var c4Value = [];
	var t4Value = [];
	var t5Value = [];
	var p3Value = [];
	var p4Value = [];
	var t6Value = [];
	var czValue = [];
	var o1Value = [];
	var fzValue = [];
	var o2Value = [];
	var pzValue = [];

	var newRate  = sr + ir;
	
	if(newRate > 5000)
		sr = 0;
		
	var rate  = 0;
	for(var i = rate + sr ; i < newRate; i++){
		fp1Value.push(fp1LeftHandImaginaryForwardMovementArray[i]);
		fp2Value.push(fp2LeftHandImaginaryForwardMovementArray[i]);
		f3Value.push(f3LeftHandImaginaryForwardMovementArray[i]);
		f7Value.push(f7LeftHandImaginaryForwardMovementArray[i]);
		f4Value.push(f4LeftHandImaginaryForwardMovementArray[i]);
		f8Value.push(f8LeftHandImaginaryForwardMovementArray[i]);
		t3Value.push(t3LeftHandImaginaryForwardMovementArray[i]);
		c3Value.push(c3LeftHandImaginaryForwardMovementArray[i]);
		c4Value.push(c4LeftHandImaginaryForwardMovementArray[i]);
		t4Value.push(t4LeftHandImaginaryForwardMovementArray[i]);
		p3Value.push(p3LeftHandImaginaryForwardMovementArray[i]);
		t5Value.push(t5LeftHandImaginaryForwardMovementArray[i]);
		p4Value.push(p4LeftHandImaginaryForwardMovementArray[i]);
		t6Value.push(t6LeftHandImaginaryForwardMovementArray[i]);
		czValue.push(czLeftHandImaginaryForwardMovementArray[i]);
		o1Value.push(o1LeftHandImaginaryForwardMovementArray[i]);
		fzValue.push(fzLeftHandImaginaryForwardMovementArray[i]);
		o2Value.push(o2LeftHandImaginaryForwardMovementArray[i]);
		pzValue.push(pzLeftHandImaginaryForwardMovementArray[i]);
	}

	var fp1Data = [{label: "FP1" ,data: fp1Value}];
	var fp2Data = [{label: "FP2" ,data: fp2Value}];
	var f7Data = [{label: "F7" ,data: f7Value}];
	var f3Data = [{label: "F3" ,data: f3Value}];
	var f4Data = [{label: "F4" ,data: f4Value}];
	var f8Data = [{label: "F8" ,data: f8Value}];
	var t3Data = [{label: "T3" ,data: t3Value}];
	var c3Data = [{label: "C3" ,data: c3Value}];
	var c4Data = [{label: "C4" ,data: c4Value}];
	var t4Data = [{label: "T4" ,data: t4Value}];
	var t5Data = [{label: "T5" ,data: t5Value}];
	var p3Data = [{label: "P3" ,data: p3Value}];
	var p4Data = [{label: "P4" ,data: p4Value}];
	var t6Data = [{label: "T6" ,data: t6Value}];
	var czData = [{label: "CZ" ,data: czValue}];
	var o1Data = [{label: "O1" ,data: o1Value}];
	var fzData = [{label: "FZ" ,data: fzValue}];
	var o2Data = [{label: "O2" ,data: o2Value}];
	var pzData = [{label: "PZ" ,data: pzValue}];
	
	var xAxis = {min:(sr*0.002), max:(newRate*0.002)};
	
	var Options = {
			legend: {position:'right', show:true},
			series: seriesOption,
			grid: {borderWidth:2, hoverable: true},
			xaxis: xAxis,
			selection: { mode: "xy" }
			//yaxis: {min:-50, max:25, tickDecimal:25}

	};
	$.plot($("#fp1"),fp1Data, Options);
	$.plot($("#fp2"),fp2Data, Options);
	$.plot($("#f7"),f7Data, Options);
	$.plot($("#f8"),f8Data, Options);
	$.plot($("#f3"),f3Data, Options);
	$.plot($("#t3"),t3Data, Options);
	$.plot($("#f4"),f4Data, Options);
	$.plot($("#c3"),c3Data, Options);
	$.plot($("#c4"),c4Data, Options);
	$.plot($("#p3"),p3Data, Options);
	$.plot($("#t4"),t4Data, Options);
	$.plot($("#p4"),p4Data, Options);
	$.plot($("#t5"),t5Data, Options);
	$.plot($("#t6"),t6Data, Options);
	$.plot($("#cz"),czData, Options);
	$.plot($("#o1"),o1Data, Options);
	$.plot($("#fz"),fzData, Options);
	$.plot($("#o2"),o2Data, Options);
	$.plot($("#pz"),pzData, Options);
	sr =  sr + ir;
	t = setTimeout(function(){
			showLeftHandImaginaryForwardMovementGraphAnimate(sr, sp, ir);
	},sp);
$("#option").delegate("div","mouseover",null,function(){
		if(isAnimationStart == false){
			var placeholderId = $(this)[0].id;
			if(placeholderId == "fp1"){
				zoomingGraph(placeholderId, fp1Data, Options);
			}else if(placeholderId == "fp2"){
				zoomingGraph(placeholderId, fp2Data, Options);
			}else if(placeholderId == "f3"){
				zoomingGraph(placeholderId, f3Data, Options);
			}else if(placeholderId == "f4"){
				zoomingGraph(placeholderId, f4Data, Options);
			}else if(placeholderId == "p3"){
				zoomingGraph(placeholderId, p3Data, Options);
			}else if(placeholderId == "p4"){
				zoomingGraph(placeholderId, p4Data, Options);
			}else if(placeholderId == "f7"){
				zoomingGraph(placeholderId, f7Data, Options);
			}else if(placeholderId == "f8"){
				zoomingGraph(placeholderId, f8Data, Options);
			}else if(placeholderId == "t3"){
				zoomingGraph(placeholderId, t3Data, Options);
			}else if(placeholderId == "t4"){
				zoomingGraph(placeholderId, t4Data, Options);
			}else if(placeholderId == "t5"){
				zoomingGraph(placeholderId, t5Data, Options);
			}else if(placeholderId == "t6"){
				zoomingGraph(placeholderId, t6Data, Options);
			}else if(placeholderId == "fz"){
				zoomingGraph(placeholderId, fzData, Options);
			}else if(placeholderId == "cz"){
				zoomingGraph(placeholderId, czData, Options);
			}else if(placeholderId == "pz"){
				zoomingGraph(placeholderId, pzData, Options);
			}else if(placeholderId == "o1"){
				zoomingGraph(placeholderId, o1Data, Options);
			}else if(placeholderId == "o2"){
				zoomingGraph(placeholderId, o2Data, Options);
			}else if(placeholderId == "c3"){
				zoomingGraph(placeholderId, c3Data, Options);
			}else if(placeholderId == "c4"){
				zoomingGraph(placeholderId, c4Data, Options);
			}
		}
	});
};

var showLeftHandRandomMovementGraphAnimate = function(sr, sp, ir){
	var fp1Value = [];
	var fp2Value = [];
	var f3Value = [];
	var f7Value = [];
	var f4Value = [];
	var f8Value = [];
	var t3Value = [];
	var c3Value = [];
	var c4Value = [];
	var t4Value = [];
	var t5Value = [];
	var p3Value = [];
	var p4Value = [];
	var t6Value = [];
	var czValue = [];
	var o1Value = [];
	var fzValue = [];
	var o2Value = [];
	var pzValue = [];

	var newRate  = sr + ir;
	
	if(newRate > 5000)
		sr = 0;
		
	var rate  = 0;
	for(var i = rate + sr ; i < newRate; i++){
		fp1Value.push(fp1LeftHandRandomMovementArray[i]);
		fp2Value.push(fp2LeftHandRandomMovementArray[i]);
		f3Value.push(f3LeftHandRandomMovementArray[i]);
		f7Value.push(f7LeftHandRandomMovementArray[i]);
		f4Value.push(f4LeftHandRandomMovementArray[i]);
		f8Value.push(f8LeftHandRandomMovementArray[i]);
		t3Value.push(t3LeftHandRandomMovementArray[i]);
		c3Value.push(c3LeftHandRandomMovementArray[i]);
		c4Value.push(c4LeftHandRandomMovementArray[i]);
		t4Value.push(t4LeftHandRandomMovementArray[i]);
		p3Value.push(p3LeftHandRandomMovementArray[i]);
		t5Value.push(t5LeftHandRandomMovementArray[i]);
		p4Value.push(p4LeftHandRandomMovementArray[i]);
		t6Value.push(t6LeftHandRandomMovementArray[i]);
		czValue.push(czLeftHandRandomMovementArray[i]);
		o1Value.push(o1LeftHandRandomMovementArray[i]);
		fzValue.push(fzLeftHandRandomMovementArray[i]);
		o2Value.push(o2LeftHandRandomMovementArray[i]);
		pzValue.push(pzLeftHandRandomMovementArray[i]);
	}

	var fp1Data = [{label: "FP1" ,data: fp1Value}];
	var fp2Data = [{label: "FP2" ,data: fp2Value}];
	var f7Data = [{label: "F7" ,data: f7Value}];
	var f3Data = [{label: "F3" ,data: f3Value}];
	var f4Data = [{label: "F4" ,data: f4Value}];
	var f8Data = [{label: "F8" ,data: f8Value}];
	var t3Data = [{label: "T3" ,data: t3Value}];
	var c3Data = [{label: "C3" ,data: c3Value}];
	var c4Data = [{label: "C4" ,data: c4Value}];
	var t4Data = [{label: "T4" ,data: t4Value}];
	var t5Data = [{label: "T5" ,data: t5Value}];
	var p3Data = [{label: "P3" ,data: p3Value}];
	var p4Data = [{label: "P4" ,data: p4Value}];
	var t6Data = [{label: "T6" ,data: t6Value}];
	var czData = [{label: "CZ" ,data: czValue}];
	var o1Data = [{label: "O1" ,data: o1Value}];
	var fzData = [{label: "FZ" ,data: fzValue}];
	var o2Data = [{label: "O2" ,data: o2Value}];
	var pzData = [{label: "PZ" ,data: pzValue}];
	
	var xAxis = {min:(sr*0.002), max:(newRate*0.002)};
	
	var Options = {
			legend: {position:'right', show:true},
			series: seriesOption,
			grid: {borderWidth:2, hoverable: true},
			xaxis: xAxis,
			selection: { mode: "xy" }
			//yaxis: {min:-50, max:25, tickDecimal:25}

	};
	$.plot($("#fp1"),fp1Data, Options);
	$.plot($("#fp2"),fp2Data, Options);
	$.plot($("#f7"),f7Data, Options);
	$.plot($("#f8"),f8Data, Options);
	$.plot($("#f3"),f3Data, Options);
	$.plot($("#t3"),t3Data, Options);
	$.plot($("#f4"),f4Data, Options);
	$.plot($("#c3"),c3Data, Options);
	$.plot($("#c4"),c4Data, Options);
	$.plot($("#p3"),p3Data, Options);
	$.plot($("#t4"),t4Data, Options);
	$.plot($("#p4"),p4Data, Options);
	$.plot($("#t5"),t5Data, Options);
	$.plot($("#t6"),t6Data, Options);
	$.plot($("#cz"),czData, Options);
	$.plot($("#o1"),o1Data, Options);
	$.plot($("#fz"),fzData, Options);
	$.plot($("#o2"),o2Data, Options);
	$.plot($("#pz"),pzData, Options);
	sr =  sr + ir;
	t = setTimeout(function(){
			showLeftHandRandomMovementGraphAnimate(sr, sp, ir);
	},sp);
	$("#option").delegate("div","mouseover",null,function(){
		if(isAnimationStart == false){
			var placeholderId = $(this)[0].id;
			if(placeholderId == "fp1"){
				zoomingGraph(placeholderId, fp1Data, Options);
			}else if(placeholderId == "fp2"){
				zoomingGraph(placeholderId, fp2Data, Options);
			}else if(placeholderId == "f3"){
				zoomingGraph(placeholderId, f3Data, Options);
			}else if(placeholderId == "f4"){
				zoomingGraph(placeholderId, f4Data, Options);
			}else if(placeholderId == "p3"){
				zoomingGraph(placeholderId, p3Data, Options);
			}else if(placeholderId == "p4"){
				zoomingGraph(placeholderId, p4Data, Options);
			}else if(placeholderId == "f7"){
				zoomingGraph(placeholderId, f7Data, Options);
			}else if(placeholderId == "f8"){
				zoomingGraph(placeholderId, f8Data, Options);
			}else if(placeholderId == "t3"){
				zoomingGraph(placeholderId, t3Data, Options);
			}else if(placeholderId == "t4"){
				zoomingGraph(placeholderId, t4Data, Options);
			}else if(placeholderId == "t5"){
				zoomingGraph(placeholderId, t5Data, Options);
			}else if(placeholderId == "t6"){
				zoomingGraph(placeholderId, t6Data, Options);
			}else if(placeholderId == "fz"){
				zoomingGraph(placeholderId, fzData, Options);
			}else if(placeholderId == "cz"){
				zoomingGraph(placeholderId, czData, Options);
			}else if(placeholderId == "pz"){
				zoomingGraph(placeholderId, pzData, Options);
			}else if(placeholderId == "o1"){
				zoomingGraph(placeholderId, o1Data, Options);
			}else if(placeholderId == "o2"){
				zoomingGraph(placeholderId, o2Data, Options);
			}else if(placeholderId == "c3"){
				zoomingGraph(placeholderId, c3Data, Options);
			}else if(placeholderId == "c4"){
				zoomingGraph(placeholderId, c4Data, Options);
			}
		}
	});
};

var showLeftLegMovementGraphAnimate = function(sr, sp, ir){

	var fp1Value = [];
	var fp2Value = [];
	var f3Value = [];
	var f7Value = [];
	var f4Value = [];
	var f8Value = [];
	var t3Value = [];
	var c3Value = [];
	var c4Value = [];
	var t4Value = [];
	var t5Value = [];
	var p3Value = [];
	var p4Value = [];
	var t6Value = [];
	var czValue = [];
	var o1Value = [];
	var fzValue = [];
	var o2Value = [];
	var pzValue = [];

	var newRate  = sr + ir;
	
	if(newRate > 5000)
		sr = 0;
		
	var rate  = 0;
	for(var i = rate + sr ; i < newRate; i++){
		fp1Value.push(fp1LeftLegMovementArray[i]);
		fp2Value.push(fp2LeftLegMovementArray[i]);
		f3Value.push(f3LeftLegMovementArray[i]);
		f7Value.push(f7LeftLegMovementArray[i]);
		f4Value.push(f4LeftLegMovementArray[i]);
		f8Value.push(f8LeftLegMovementArray[i]);
		t3Value.push(t3LeftLegMovementArray[i]);
		c3Value.push(c3LeftLegMovementArray[i]);
		c4Value.push(c4LeftLegMovementArray[i]);
		t4Value.push(t4LeftLegMovementArray[i]);
		p3Value.push(p3LeftLegMovementArray[i]);
		t5Value.push(t5LeftLegMovementArray[i]);
		p4Value.push(p4LeftLegMovementArray[i]);
		t6Value.push(t6LeftLegMovementArray[i]);
		czValue.push(czLeftLegMovementArray[i]);
		o1Value.push(o1LeftLegMovementArray[i]);
		fzValue.push(fzLeftLegMovementArray[i]);
		o2Value.push(o2LeftLegMovementArray[i]);
		pzValue.push(pzLeftLegMovementArray[i]);
	}

	var fp1Data = [{label: "FP1" ,data: fp1Value}];
	var fp2Data = [{label: "FP2" ,data: fp2Value}];
	var f7Data = [{label: "F7" ,data: f7Value}];
	var f3Data = [{label: "F3" ,data: f3Value}];
	var f4Data = [{label: "F4" ,data: f4Value}];
	var f8Data = [{label: "F8" ,data: f8Value}];
	var t3Data = [{label: "T3" ,data: t3Value}];
	var c3Data = [{label: "C3" ,data: c3Value}];
	var c4Data = [{label: "C4" ,data: c4Value}];
	var t4Data = [{label: "T4" ,data: t4Value}];
	var t5Data = [{label: "T5" ,data: t5Value}];
	var p3Data = [{label: "P3" ,data: p3Value}];
	var p4Data = [{label: "P4" ,data: p4Value}];
	var t6Data = [{label: "T6" ,data: t6Value}];
	var czData = [{label: "CZ" ,data: czValue}];
	var o1Data = [{label: "O1" ,data: o1Value}];
	var fzData = [{label: "FZ" ,data: fzValue}];
	var o2Data = [{label: "O2" ,data: o2Value}];
	var pzData = [{label: "PZ" ,data: pzValue}];
	
	var xAxis = {min:(sr*0.002), max:(newRate*0.002)};
	
	var Options = {
			legend: {position:'right', show:true},
			series: seriesOption,
			grid: {borderWidth:2, hoverable: true},
			xaxis: xAxis,
			selection: { mode: "xy" }
			//yaxis: {min:-50, max:25, tickDecimal:25}

	};
	$.plot($("#fp1"),fp1Data, Options);
	$.plot($("#fp2"),fp2Data, Options);
	$.plot($("#f7"),f7Data, Options);
	$.plot($("#f8"),f8Data, Options);
	$.plot($("#f3"),f3Data, Options);
	$.plot($("#t3"),t3Data, Options);
	$.plot($("#f4"),f4Data, Options);
	$.plot($("#c3"),c3Data, Options);
	$.plot($("#c4"),c4Data, Options);
	$.plot($("#p3"),p3Data, Options);
	$.plot($("#t4"),t4Data, Options);
	$.plot($("#p4"),p4Data, Options);
	$.plot($("#t5"),t5Data, Options);
	$.plot($("#t6"),t6Data, Options);
	$.plot($("#cz"),czData, Options);
	$.plot($("#o1"),o1Data, Options);
	$.plot($("#fz"),fzData, Options);
	$.plot($("#o2"),o2Data, Options);
	$.plot($("#pz"),pzData, Options);
	sr =  sr + ir;
	t = setTimeout(function(){
			showLeftLegMovementGraphAnimate(sr, sp, ir);
	},sp);
$("#option").delegate("div","mouseover",null,function(){
		if(isAnimationStart == false){
			var placeholderId = $(this)[0].id;
			if(placeholderId == "fp1"){
				zoomingGraph(placeholderId, fp1Data, Options);
			}else if(placeholderId == "fp2"){
				zoomingGraph(placeholderId, fp2Data, Options);
			}else if(placeholderId == "f3"){
				zoomingGraph(placeholderId, f3Data, Options);
			}else if(placeholderId == "f4"){
				zoomingGraph(placeholderId, f4Data, Options);
			}else if(placeholderId == "p3"){
				zoomingGraph(placeholderId, p3Data, Options);
			}else if(placeholderId == "p4"){
				zoomingGraph(placeholderId, p4Data, Options);
			}else if(placeholderId == "f7"){
				zoomingGraph(placeholderId, f7Data, Options);
			}else if(placeholderId == "f8"){
				zoomingGraph(placeholderId, f8Data, Options);
			}else if(placeholderId == "t3"){
				zoomingGraph(placeholderId, t3Data, Options);
			}else if(placeholderId == "t4"){
				zoomingGraph(placeholderId, t4Data, Options);
			}else if(placeholderId == "t5"){
				zoomingGraph(placeholderId, t5Data, Options);
			}else if(placeholderId == "t6"){
				zoomingGraph(placeholderId, t6Data, Options);
			}else if(placeholderId == "fz"){
				zoomingGraph(placeholderId, fzData, Options);
			}else if(placeholderId == "cz"){
				zoomingGraph(placeholderId, czData, Options);
			}else if(placeholderId == "pz"){
				zoomingGraph(placeholderId, pzData, Options);
			}else if(placeholderId == "o1"){
				zoomingGraph(placeholderId, o1Data, Options);
			}else if(placeholderId == "o2"){
				zoomingGraph(placeholderId, o2Data, Options);
			}else if(placeholderId == "c3"){
				zoomingGraph(placeholderId, c3Data, Options);
			}else if(placeholderId == "c4"){
				zoomingGraph(placeholderId, c4Data, Options);
			}
		}
	});
};

var showRightHandBackwardMovementGraphAnimate = function(sr, sp, ir){

	var fp1Value = [];
	var fp2Value = [];
	var f3Value = [];
	var f7Value = [];
	var f4Value = [];
	var f8Value = [];
	var t3Value = [];
	var c3Value = [];
	var c4Value = [];
	var t4Value = [];
	var t5Value = [];
	var p3Value = [];
	var p4Value = [];
	var t6Value = [];
	var czValue = [];
	var o1Value = [];
	var fzValue = [];
	var o2Value = [];
	var pzValue = [];

	var newRate  = sr + ir;
	
	if(newRate > 5000)
		sr = 0;
		
	var rate  = 0;
	for(var i = rate + sr ; i < newRate; i++){
		fp1Value.push(fp1RightHandBackwardMovementArray[i]);
		fp2Value.push(fp2RightHandBackwardMovementArray[i]);
		f3Value.push(f3RightHandBackwardMovementArray[i]);
		f7Value.push(f7RightHandBackwardMovementArray[i]);
		f4Value.push(f4RightHandBackwardMovementArray[i]);
		f8Value.push(f8RightHandBackwardMovementArray[i]);
		t3Value.push(t3RightHandBackwardMovementArray[i]);
		c3Value.push(c3RightHandBackwardMovementArray[i]);
		c4Value.push(c4RightHandBackwardMovementArray[i]);
		t4Value.push(t4RightHandBackwardMovementArray[i]);
		p3Value.push(p3RightHandBackwardMovementArray[i]);
		t5Value.push(t5RightHandBackwardMovementArray[i]);
		p4Value.push(p4RightHandBackwardMovementArray[i]);
		t6Value.push(t6RightHandBackwardMovementArray[i]);
		czValue.push(czRightHandBackwardMovementArray[i]);
		o1Value.push(o1RightHandBackwardMovementArray[i]);
		fzValue.push(fzRightHandBackwardMovementArray[i]);
		o2Value.push(o2RightHandBackwardMovementArray[i]);
		pzValue.push(pzRightHandBackwardMovementArray[i]);
	}

	var fp1Data = [{label: "FP1" ,data: fp1Value}];
	var fp2Data = [{label: "FP2" ,data: fp2Value}];
	var f7Data = [{label: "F7" ,data: f7Value}];
	var f3Data = [{label: "F3" ,data: f3Value}];
	var f4Data = [{label: "F4" ,data: f4Value}];
	var f8Data = [{label: "F8" ,data: f8Value}];
	var t3Data = [{label: "T3" ,data: t3Value}];
	var c3Data = [{label: "C3" ,data: c3Value}];
	var c4Data = [{label: "C4" ,data: c4Value}];
	var t4Data = [{label: "T4" ,data: t4Value}];
	var t5Data = [{label: "T5" ,data: t5Value}];
	var p3Data = [{label: "P3" ,data: p3Value}];
	var p4Data = [{label: "P4" ,data: p4Value}];
	var t6Data = [{label: "T6" ,data: t6Value}];
	var czData = [{label: "CZ" ,data: czValue}];
	var o1Data = [{label: "O1" ,data: o1Value}];
	var fzData = [{label: "FZ" ,data: fzValue}];
	var o2Data = [{label: "O2" ,data: o2Value}];
	var pzData = [{label: "PZ" ,data: pzValue}];
	
	var xAxis = {min:(sr*0.002), max:(newRate*0.002)};
	
	var Options = {
			legend: {position:'right', show:true},
			series: seriesOption,
			grid: {borderWidth:2, hoverable: true},
			xaxis: xAxis,
			selection: { mode: "xy" }
			//yaxis: {min:-50, max:25, tickDecimal:25}

	};
	$.plot($("#fp1"),fp1Data, Options);
	$.plot($("#fp2"),fp2Data, Options);
	$.plot($("#f7"),f7Data, Options);
	$.plot($("#f8"),f8Data, Options);
	$.plot($("#f3"),f3Data, Options);
	$.plot($("#t3"),t3Data, Options);
	$.plot($("#f4"),f4Data, Options);
	$.plot($("#c3"),c3Data, Options);
	$.plot($("#c4"),c4Data, Options);
	$.plot($("#p3"),p3Data, Options);
	$.plot($("#t4"),t4Data, Options);
	$.plot($("#p4"),p4Data, Options);
	$.plot($("#t5"),t5Data, Options);
	$.plot($("#t6"),t6Data, Options);
	$.plot($("#cz"),czData, Options);
	$.plot($("#o1"),o1Data, Options);
	$.plot($("#fz"),fzData, Options);
	$.plot($("#o2"),o2Data, Options);
	$.plot($("#pz"),pzData, Options);
	sr =  sr + ir;
	t = setTimeout(function(){
			showRightHandBackwardMovementGraphAnimate(sr, sp, ir);
	},sp);
$("#option").delegate("div","mouseover",null,function(){
		if(isAnimationStart == false){
			var placeholderId = $(this)[0].id;
			if(placeholderId == "fp1"){
				zoomingGraph(placeholderId, fp1Data, Options);
			}else if(placeholderId == "fp2"){
				zoomingGraph(placeholderId, fp2Data, Options);
			}else if(placeholderId == "f3"){
				zoomingGraph(placeholderId, f3Data, Options);
			}else if(placeholderId == "f4"){
				zoomingGraph(placeholderId, f4Data, Options);
			}else if(placeholderId == "p3"){
				zoomingGraph(placeholderId, p3Data, Options);
			}else if(placeholderId == "p4"){
				zoomingGraph(placeholderId, p4Data, Options);
			}else if(placeholderId == "f7"){
				zoomingGraph(placeholderId, f7Data, Options);
			}else if(placeholderId == "f8"){
				zoomingGraph(placeholderId, f8Data, Options);
			}else if(placeholderId == "t3"){
				zoomingGraph(placeholderId, t3Data, Options);
			}else if(placeholderId == "t4"){
				zoomingGraph(placeholderId, t4Data, Options);
			}else if(placeholderId == "t5"){
				zoomingGraph(placeholderId, t5Data, Options);
			}else if(placeholderId == "t6"){
				zoomingGraph(placeholderId, t6Data, Options);
			}else if(placeholderId == "fz"){
				zoomingGraph(placeholderId, fzData, Options);
			}else if(placeholderId == "cz"){
				zoomingGraph(placeholderId, czData, Options);
			}else if(placeholderId == "pz"){
				zoomingGraph(placeholderId, pzData, Options);
			}else if(placeholderId == "o1"){
				zoomingGraph(placeholderId, o1Data, Options);
			}else if(placeholderId == "o2"){
				zoomingGraph(placeholderId, o2Data, Options);
			}else if(placeholderId == "c3"){
				zoomingGraph(placeholderId, c3Data, Options);
			}else if(placeholderId == "c4"){
				zoomingGraph(placeholderId, c4Data, Options);
			}
		}
	});
};

var showRightHandForwardMovementGraphAnimate = function(sr, sp, ir){

	var fp1Value = [];
	var fp2Value = [];
	var f3Value = [];
	var f7Value = [];
	var f4Value = [];
	var f8Value = [];
	var t3Value = [];
	var c3Value = [];
	var c4Value = [];
	var t4Value = [];
	var t5Value = [];
	var p3Value = [];
	var p4Value = [];
	var t6Value = [];
	var czValue = [];
	var o1Value = [];
	var fzValue = [];
	var o2Value = [];
	var pzValue = [];

	var newRate  = sr + ir;
	
	if(newRate > 5000)
		sr = 0;
		
	var rate  = 0;
	for(var i = rate + sr ; i < newRate; i++){
		fp1Value.push(fp1RightHandForwardMovementArray[i]);
		fp2Value.push(fp2RightHandForwardMovementArray[i]);
		f3Value.push(f3RightHandForwardMovementArray[i]);
		f7Value.push(f7RightHandForwardMovementArray[i]);
		f4Value.push(f4RightHandForwardMovementArray[i]);
		f8Value.push(f8RightHandForwardMovementArray[i]);
		t3Value.push(t3RightHandForwardMovementArray[i]);
		c3Value.push(c3RightHandForwardMovementArray[i]);
		c4Value.push(c4RightHandForwardMovementArray[i]);
		t4Value.push(t4RightHandForwardMovementArray[i]);
		p3Value.push(p3RightHandForwardMovementArray[i]);
		t5Value.push(t5RightHandForwardMovementArray[i]);
		p4Value.push(p4RightHandForwardMovementArray[i]);
		t6Value.push(t6RightHandForwardMovementArray[i]);
		czValue.push(czRightHandForwardMovementArray[i]);
		o1Value.push(o1RightHandForwardMovementArray[i]);
		fzValue.push(fzRightHandForwardMovementArray[i]);
		o2Value.push(o2RightHandForwardMovementArray[i]);
		pzValue.push(pzRightHandForwardMovementArray[i]);
	}

	var fp1Data = [{label: "FP1" ,data: fp1Value}];
	var fp2Data = [{label: "FP2" ,data: fp2Value}];
	var f7Data = [{label: "F7" ,data: f7Value}];
	var f3Data = [{label: "F3" ,data: f3Value}];
	var f4Data = [{label: "F4" ,data: f4Value}];
	var f8Data = [{label: "F8" ,data: f8Value}];
	var t3Data = [{label: "T3" ,data: t3Value}];
	var c3Data = [{label: "C3" ,data: c3Value}];
	var c4Data = [{label: "C4" ,data: c4Value}];
	var t4Data = [{label: "T4" ,data: t4Value}];
	var t5Data = [{label: "T5" ,data: t5Value}];
	var p3Data = [{label: "P3" ,data: p3Value}];
	var p4Data = [{label: "P4" ,data: p4Value}];
	var t6Data = [{label: "T6" ,data: t6Value}];
	var czData = [{label: "CZ" ,data: czValue}];
	var o1Data = [{label: "O1" ,data: o1Value}];
	var fzData = [{label: "FZ" ,data: fzValue}];
	var o2Data = [{label: "O2" ,data: o2Value}];
	var pzData = [{label: "PZ" ,data: pzValue}];
	
	var xAxis = {min:(sr*0.002), max:(newRate*0.002)};
	
	var Options = {
			legend: {position:'right', show:true},
			series: seriesOption,
			grid: {borderWidth:2, hoverable: true},
			xaxis: xAxis,
			selection: { mode: "xy" }
			//yaxis: {min:-50, max:25, tickDecimal:25}

	};
	$.plot($("#fp1"),fp1Data, Options);
	$.plot($("#fp2"),fp2Data, Options);
	$.plot($("#f7"),f7Data, Options);
	$.plot($("#f8"),f8Data, Options);
	$.plot($("#f3"),f3Data, Options);
	$.plot($("#t3"),t3Data, Options);
	$.plot($("#f4"),f4Data, Options);
	$.plot($("#c3"),c3Data, Options);
	$.plot($("#c4"),c4Data, Options);
	$.plot($("#p3"),p3Data, Options);
	$.plot($("#t4"),t4Data, Options);
	$.plot($("#p4"),p4Data, Options);
	$.plot($("#t5"),t5Data, Options);
	$.plot($("#t6"),t6Data, Options);
	$.plot($("#cz"),czData, Options);
	$.plot($("#o1"),o1Data, Options);
	$.plot($("#fz"),fzData, Options);
	$.plot($("#o2"),o2Data, Options);
	$.plot($("#pz"),pzData, Options);
	sr =  sr + ir;
	t = setTimeout(function(){
			showRightHandForwardMovementGraphAnimate(sr, sp, ir);
	},sp);
$("#option").delegate("div","mouseover",null,function(){
		if(isAnimationStart == false){
			var placeholderId = $(this)[0].id;
			if(placeholderId == "fp1"){
				zoomingGraph(placeholderId, fp1Data, Options);
			}else if(placeholderId == "fp2"){
				zoomingGraph(placeholderId, fp2Data, Options);
			}else if(placeholderId == "f3"){
				zoomingGraph(placeholderId, f3Data, Options);
			}else if(placeholderId == "f4"){
				zoomingGraph(placeholderId, f4Data, Options);
			}else if(placeholderId == "p3"){
				zoomingGraph(placeholderId, p3Data, Options);
			}else if(placeholderId == "p4"){
				zoomingGraph(placeholderId, p4Data, Options);
			}else if(placeholderId == "f7"){
				zoomingGraph(placeholderId, f7Data, Options);
			}else if(placeholderId == "f8"){
				zoomingGraph(placeholderId, f8Data, Options);
			}else if(placeholderId == "t3"){
				zoomingGraph(placeholderId, t3Data, Options);
			}else if(placeholderId == "t4"){
				zoomingGraph(placeholderId, t4Data, Options);
			}else if(placeholderId == "t5"){
				zoomingGraph(placeholderId, t5Data, Options);
			}else if(placeholderId == "t6"){
				zoomingGraph(placeholderId, t6Data, Options);
			}else if(placeholderId == "fz"){
				zoomingGraph(placeholderId, fzData, Options);
			}else if(placeholderId == "cz"){
				zoomingGraph(placeholderId, czData, Options);
			}else if(placeholderId == "pz"){
				zoomingGraph(placeholderId, pzData, Options);
			}else if(placeholderId == "o1"){
				zoomingGraph(placeholderId, o1Data, Options);
			}else if(placeholderId == "o2"){
				zoomingGraph(placeholderId, o2Data, Options);
			}else if(placeholderId == "c3"){
				zoomingGraph(placeholderId, c3Data, Options);
			}else if(placeholderId == "c4"){
				zoomingGraph(placeholderId, c4Data, Options);
			}
		}
	});
};

var showRightHandImaginaryBackwardMovementGraphAnimate = function(sr, sp, ir){

	var fp1Value = [];
	var fp2Value = [];
	var f3Value = [];
	var f7Value = [];
	var f4Value = [];
	var f8Value = [];
	var t3Value = [];
	var c3Value = [];
	var c4Value = [];
	var t4Value = [];
	var t5Value = [];
	var p3Value = [];
	var p4Value = [];
	var t6Value = [];
	var czValue = [];
	var o1Value = [];
	var fzValue = [];
	var o2Value = [];
	var pzValue = [];

	var newRate  = sr + ir;
	
	if(newRate > 5000)
		sr = 0;
		
	var rate  = 0;
	for(var i = rate + sr ; i < newRate; i++){
		fp1Value.push(fp1RightHandImaginaryBackwardMovementArray[i]);
		fp2Value.push(fp2RightHandImaginaryBackwardMovementArray[i]);
		f3Value.push(f3RightHandImaginaryBackwardMovementArray[i]);
		f7Value.push(f7RightHandImaginaryBackwardMovementArray[i]);
		f4Value.push(f4RightHandImaginaryBackwardMovementArray[i]);
		f8Value.push(f8RightHandImaginaryBackwardMovementArray[i]);
		t3Value.push(t3RightHandImaginaryBackwardMovementArray[i]);

		c3Value.push(c3RightHandImaginaryBackwardMovementArray[i]);
		c4Value.push(c4RightHandImaginaryBackwardMovementArray[i]);
		t4Value.push(t4RightHandImaginaryBackwardMovementArray[i]);
		p3Value.push(p3RightHandImaginaryBackwardMovementArray[i]);
		t5Value.push(t5RightHandImaginaryBackwardMovementArray[i]);
		p4Value.push(p4RightHandImaginaryBackwardMovementArray[i]);
		t6Value.push(t6RightHandImaginaryBackwardMovementArray[i]);
		czValue.push(czRightHandImaginaryBackwardMovementArray[i]);
		o1Value.push(o1RightHandImaginaryBackwardMovementArray[i]);
		fzValue.push(fzRightHandImaginaryBackwardMovementArray[i]);
		o2Value.push(o2RightHandImaginaryBackwardMovementArray[i]);
		pzValue.push(pzRightHandImaginaryBackwardMovementArray[i]);
	}

	var fp1Data = [{label: "FP1" ,data: fp1Value}];
	var fp2Data = [{label: "FP2" ,data: fp2Value}];
	var f7Data = [{label: "F7" ,data: f7Value}];
	var f3Data = [{label: "F3" ,data: f3Value}];
	var f4Data = [{label: "F4" ,data: f4Value}];
	var f8Data = [{label: "F8" ,data: f8Value}];
	var t3Data = [{label: "T3" ,data: t3Value}];
	var c3Data = [{label: "C3" ,data: c3Value}];
	var c4Data = [{label: "C4" ,data: c4Value}];
	var t4Data = [{label: "T4" ,data: t4Value}];
	var t5Data = [{label: "T5" ,data: t5Value}];
	var p3Data = [{label: "P3" ,data: p3Value}];
	var p4Data = [{label: "P4" ,data: p4Value}];
	var t6Data = [{label: "T6" ,data: t6Value}];
	var czData = [{label: "CZ" ,data: czValue}];
	var o1Data = [{label: "O1" ,data: o1Value}];
	var fzData = [{label: "FZ" ,data: fzValue}];
	var o2Data = [{label: "O2" ,data: o2Value}];
	var pzData = [{label: "PZ" ,data: pzValue}];
	
	var xAxis = {min:(sr*0.002), max:(newRate*0.002)};
	
	var Options = {
			legend: {position:'right', show:true},
			series: seriesOption,
			grid: {borderWidth:2, hoverable: true},
			xaxis: xAxis,
			selection: { mode: "xy" }
			//yaxis: {min:-50, max:25, tickDecimal:25}

	};
	$.plot($("#fp1"),fp1Data, Options);
	$.plot($("#fp2"),fp2Data, Options);
	$.plot($("#f7"),f7Data, Options);
	$.plot($("#f8"),f8Data, Options);
	$.plot($("#f3"),f3Data, Options);
	$.plot($("#t3"),t3Data, Options);
	$.plot($("#f4"),f4Data, Options);
	$.plot($("#c3"),c3Data, Options);
	$.plot($("#c4"),c4Data, Options);
	$.plot($("#p3"),p3Data, Options);
	$.plot($("#t4"),t4Data, Options);
	$.plot($("#p4"),p4Data, Options);
	$.plot($("#t5"),t5Data, Options);
	$.plot($("#t6"),t6Data, Options);
	$.plot($("#cz"),czData, Options);
	$.plot($("#o1"),o1Data, Options);
	$.plot($("#fz"),fzData, Options);
	$.plot($("#o2"),o2Data, Options);
	$.plot($("#pz"),pzData, Options);
	sr =  sr + ir;
	t = setTimeout(function(){
			showRightHandImaginaryBackwardMovementGraphAnimate(sr, sp, ir);
	},sp);
$("#option").delegate("div","mouseover",null,function(){
		if(isAnimationStart == false){
			var placeholderId = $(this)[0].id;
			if(placeholderId == "fp1"){
				zoomingGraph(placeholderId, fp1Data, Options);
			}else if(placeholderId == "fp2"){
				zoomingGraph(placeholderId, fp2Data, Options);
			}else if(placeholderId == "f3"){
				zoomingGraph(placeholderId, f3Data, Options);
			}else if(placeholderId == "f4"){
				zoomingGraph(placeholderId, f4Data, Options);
			}else if(placeholderId == "p3"){
				zoomingGraph(placeholderId, p3Data, Options);
			}else if(placeholderId == "p4"){
				zoomingGraph(placeholderId, p4Data, Options);
			}else if(placeholderId == "f7"){
				zoomingGraph(placeholderId, f7Data, Options);
			}else if(placeholderId == "f8"){
				zoomingGraph(placeholderId, f8Data, Options);
			}else if(placeholderId == "t3"){
				zoomingGraph(placeholderId, t3Data, Options);
			}else if(placeholderId == "t4"){
				zoomingGraph(placeholderId, t4Data, Options);
			}else if(placeholderId == "t5"){
				zoomingGraph(placeholderId, t5Data, Options);
			}else if(placeholderId == "t6"){
				zoomingGraph(placeholderId, t6Data, Options);
			}else if(placeholderId == "fz"){
				zoomingGraph(placeholderId, fzData, Options);
			}else if(placeholderId == "cz"){
				zoomingGraph(placeholderId, czData, Options);
			}else if(placeholderId == "pz"){
				zoomingGraph(placeholderId, pzData, Options);
			}else if(placeholderId == "o1"){
				zoomingGraph(placeholderId, o1Data, Options);
			}else if(placeholderId == "o2"){
				zoomingGraph(placeholderId, o2Data, Options);
			}else if(placeholderId == "c3"){
				zoomingGraph(placeholderId, c3Data, Options);
			}else if(placeholderId == "c4"){
				zoomingGraph(placeholderId, c4Data, Options);
			}
		}
	});
};

var showRightHandImaginaryForwardMovementGraphAnimate = function(sr, sp, ir){
	var fp1Value = [];
	var fp2Value = [];
	var f3Value = [];
	var f7Value = [];
	var f4Value = [];
	var f8Value = [];
	var t3Value = [];
	var c3Value = [];
	var c4Value = [];
	var t4Value = [];
	var t5Value = [];
	var p3Value = [];
	var p4Value = [];
	var t6Value = [];
	var czValue = [];
	var o1Value = [];
	var fzValue = [];
	var o2Value = [];
	var pzValue = [];

	var newRate  = sr + ir;
	
	if(newRate > 5000)
		sr = 0;
		
	var rate  = 0;
	for(var i = rate + sr ; i < newRate; i++){
		fp1Value.push(fp1RightHandImaginaryForwardMovementArray[i]);
		fp2Value.push(fp2RightHandImaginaryForwardMovementArray[i]);
		f3Value.push(f3RightHandImaginaryForwardMovementArray[i]);
		f7Value.push(f7RightHandImaginaryForwardMovementArray[i]);
		f4Value.push(f4RightHandImaginaryForwardMovementArray[i]);
		f8Value.push(f8RightHandImaginaryForwardMovementArray[i]);
		t3Value.push(t3RightHandImaginaryForwardMovementArray[i]);
		c3Value.push(c3RightHandImaginaryForwardMovementArray[i]);
		c4Value.push(c4RightHandImaginaryForwardMovementArray[i]);
		t4Value.push(t4RightHandImaginaryForwardMovementArray[i]);
		p3Value.push(p3RightHandImaginaryForwardMovementArray[i]);
		t5Value.push(t5RightHandImaginaryForwardMovementArray[i]);
		p4Value.push(p4RightHandImaginaryForwardMovementArray[i]);
		t6Value.push(t6RightHandImaginaryForwardMovementArray[i]);
		czValue.push(czRightHandImaginaryForwardMovementArray[i]);
		o1Value.push(o1RightHandImaginaryForwardMovementArray[i]);
		fzValue.push(fzRightHandImaginaryForwardMovementArray[i]);
		o2Value.push(o2RightHandImaginaryForwardMovementArray[i]);
		pzValue.push(pzRightHandImaginaryForwardMovementArray[i]);
	}

	var fp1Data = [{label: "FP1" ,data: fp1Value}];
	var fp2Data = [{label: "FP2" ,data: fp2Value}];
	var f7Data = [{label: "F7" ,data: f7Value}];
	var f3Data = [{label: "F3" ,data: f3Value}];
	var f4Data = [{label: "F4" ,data: f4Value}];
	var f8Data = [{label: "F8" ,data: f8Value}];
	var t3Data = [{label: "T3" ,data: t3Value}];
	var c3Data = [{label: "C3" ,data: c3Value}];
	var c4Data = [{label: "C4" ,data: c4Value}];
	var t4Data = [{label: "T4" ,data: t4Value}];
	var t5Data = [{label: "T5" ,data: t5Value}];
	var p3Data = [{label: "P3" ,data: p3Value}];
	var p4Data = [{label: "P4" ,data: p4Value}];
	var t6Data = [{label: "T6" ,data: t6Value}];
	var czData = [{label: "CZ" ,data: czValue}];
	var o1Data = [{label: "O1" ,data: o1Value}];
	var fzData = [{label: "FZ" ,data: fzValue}];
	var o2Data = [{label: "O2" ,data: o2Value}];
	var pzData = [{label: "PZ" ,data: pzValue}];
	
	var xAxis = {min:(sr*0.002), max:(newRate*0.002)};
	
	var Options = {
			legend: {position:'right', show:true},
			series: seriesOption,
			grid: {borderWidth:2, hoverable: true},
			xaxis: xAxis,
			selection: { mode: "xy" }
			//yaxis: {min:-50, max:25, tickDecimal:25}

	};
	$.plot($("#fp1"),fp1Data, Options);
	$.plot($("#fp2"),fp2Data, Options);
	$.plot($("#f7"),f7Data, Options);
	$.plot($("#f8"),f8Data, Options);
	$.plot($("#f3"),f3Data, Options);
	$.plot($("#t3"),t3Data, Options);
	$.plot($("#f4"),f4Data, Options);
	$.plot($("#c3"),c3Data, Options);
	$.plot($("#c4"),c4Data, Options);
	$.plot($("#p3"),p3Data, Options);
	$.plot($("#t4"),t4Data, Options);
	$.plot($("#p4"),p4Data, Options);
	$.plot($("#t5"),t5Data, Options);
	$.plot($("#t6"),t6Data, Options);
	$.plot($("#cz"),czData, Options);
	$.plot($("#o1"),o1Data, Options);
	$.plot($("#fz"),fzData, Options);
	$.plot($("#o2"),o2Data, Options);
	$.plot($("#pz"),pzData, Options);
	sr =  sr + ir;
	t = setTimeout(function(){
			showRightHandImaginaryForwardMovementGraphAnimate(sr, sp, ir);
	},sp);
$("#option").delegate("div","mouseover",null,function(){
		if(isAnimationStart == false){
			var placeholderId = $(this)[0].id;
			if(placeholderId == "fp1"){
				zoomingGraph(placeholderId, fp1Data, Options);
			}else if(placeholderId == "fp2"){
				zoomingGraph(placeholderId, fp2Data, Options);
			}else if(placeholderId == "f3"){
				zoomingGraph(placeholderId, f3Data, Options);
			}else if(placeholderId == "f4"){
				zoomingGraph(placeholderId, f4Data, Options);
			}else if(placeholderId == "p3"){
				zoomingGraph(placeholderId, p3Data, Options);
			}else if(placeholderId == "p4"){
				zoomingGraph(placeholderId, p4Data, Options);
			}else if(placeholderId == "f7"){
				zoomingGraph(placeholderId, f7Data, Options);
			}else if(placeholderId == "f8"){
				zoomingGraph(placeholderId, f8Data, Options);
			}else if(placeholderId == "t3"){
				zoomingGraph(placeholderId, t3Data, Options);
			}else if(placeholderId == "t4"){
				zoomingGraph(placeholderId, t4Data, Options);
			}else if(placeholderId == "t5"){
				zoomingGraph(placeholderId, t5Data, Options);
			}else if(placeholderId == "t6"){
				zoomingGraph(placeholderId, t6Data, Options);
			}else if(placeholderId == "fz"){
				zoomingGraph(placeholderId, fzData, Options);
			}else if(placeholderId == "cz"){
				zoomingGraph(placeholderId, czData, Options);
			}else if(placeholderId == "pz"){
				zoomingGraph(placeholderId, pzData, Options);
			}else if(placeholderId == "o1"){
				zoomingGraph(placeholderId, o1Data, Options);
			}else if(placeholderId == "o2"){
				zoomingGraph(placeholderId, o2Data, Options);
			}else if(placeholderId == "c3"){
				zoomingGraph(placeholderId, c3Data, Options);
			}else if(placeholderId == "c4"){
				zoomingGraph(placeholderId, c4Data, Options);
			}
		}
	});
};

var showRightHandRandomMovementGraphAnimate = function(sr, sp, ir){
	var fp1Value = [];
	var fp2Value = [];
	var f3Value = [];
	var f7Value = [];
	var f4Value = [];
	var f8Value = [];
	var t3Value = [];
	var c3Value = [];
	var c4Value = [];
	var t4Value = [];
	var t5Value = [];
	var p3Value = [];
	var p4Value = [];
	var t6Value = [];
	var czValue = [];
	var o1Value = [];
	var fzValue = [];
	var o2Value = [];
	var pzValue = [];

	var newRate  = sr + ir;
	
	if(newRate > 5000)
		sr = 0;
		
	var rate  = 0;
	for(var i = rate + sr ; i < newRate; i++){
		fp1Value.push(fp1RightHandRandomMovementArray[i]);
		fp2Value.push(fp2RightHandRandomMovementArray[i]);
		f3Value.push(f3RightHandRandomMovementArray[i]);
		f7Value.push(f7RightHandRandomMovementArray[i]);
		f4Value.push(f4RightHandRandomMovementArray[i]);
		f8Value.push(f8RightHandRandomMovementArray[i]);
		t3Value.push(t3RightHandRandomMovementArray[i]);
		c3Value.push(c3RightHandRandomMovementArray[i]);
		c4Value.push(c4RightHandRandomMovementArray[i]);
		t4Value.push(t4RightHandRandomMovementArray[i]);
		p3Value.push(p3RightHandRandomMovementArray[i]);
		t5Value.push(t5RightHandRandomMovementArray[i]);
		p4Value.push(p4RightHandRandomMovementArray[i]);
		t6Value.push(t6RightHandRandomMovementArray[i]);
		czValue.push(czRightHandRandomMovementArray[i]);
		o1Value.push(o1RightHandRandomMovementArray[i]);
		fzValue.push(fzRightHandRandomMovementArray[i]);
		o2Value.push(o2RightHandRandomMovementArray[i]);
		pzValue.push(pzRightHandRandomMovementArray[i]);
	}

	var fp1Data = [{label: "FP1" ,data: fp1Value}];
	var fp2Data = [{label: "FP2" ,data: fp2Value}];
	var f7Data = [{label: "F7" ,data: f7Value}];
	var f3Data = [{label: "F3" ,data: f3Value}];
	var f4Data = [{label: "F4" ,data: f4Value}];
	var f8Data = [{label: "F8" ,data: f8Value}];
	var t3Data = [{label: "T3" ,data: t3Value}];
	var c3Data = [{label: "C3" ,data: c3Value}];
	var c4Data = [{label: "C4" ,data: c4Value}];
	var t4Data = [{label: "T4" ,data: t4Value}];
	var t5Data = [{label: "T5" ,data: t5Value}];
	var p3Data = [{label: "P3" ,data: p3Value}];
	var p4Data = [{label: "P4" ,data: p4Value}];
	var t6Data = [{label: "T6" ,data: t6Value}];
	var czData = [{label: "CZ" ,data: czValue}];
	var o1Data = [{label: "O1" ,data: o1Value}];
	var fzData = [{label: "FZ" ,data: fzValue}];
	var o2Data = [{label: "O2" ,data: o2Value}];
	var pzData = [{label: "PZ" ,data: pzValue}];
	
	var xAxis = {min:(sr*0.002), max:(newRate*0.002)};
	
	var Options = {
			legend: {position:'right', show:true},
			series: seriesOption,
			grid: {borderWidth:2, hoverable: true},
			xaxis: xAxis,
			selection: { mode: "xy" }
			//yaxis: {min:-50, max:25, tickDecimal:25}

	};
	$.plot($("#fp1"),fp1Data, Options);
	$.plot($("#fp2"),fp2Data, Options);
	$.plot($("#f7"),f7Data, Options);
	$.plot($("#f8"),f8Data, Options);
	$.plot($("#f3"),f3Data, Options);
	$.plot($("#t3"),t3Data, Options);
	$.plot($("#f4"),f4Data, Options);
	$.plot($("#c3"),c3Data, Options);
	$.plot($("#c4"),c4Data, Options);
	$.plot($("#p3"),p3Data, Options);
	$.plot($("#t4"),t4Data, Options);
	$.plot($("#p4"),p4Data, Options);
	$.plot($("#t5"),t5Data, Options);
	$.plot($("#t6"),t6Data, Options);
	$.plot($("#cz"),czData, Options);
	$.plot($("#o1"),o1Data, Options);
	$.plot($("#fz"),fzData, Options);
	$.plot($("#o2"),o2Data, Options);
	$.plot($("#pz"),pzData, Options);
	sr =  sr + ir;
	t = setTimeout(function(){
			showRightHandRandomMovementGraphAnimate(sr, sp, ir);
	},sp);

$("#option").delegate("div","mouseover",null,function(){
		if(isAnimationStart == false){
			var placeholderId = $(this)[0].id;
			if(placeholderId == "fp1"){
				zoomingGraph(placeholderId, fp1Data, Options);
			}else if(placeholderId == "fp2"){
				zoomingGraph(placeholderId, fp2Data, Options);
			}else if(placeholderId == "f3"){
				zoomingGraph(placeholderId, f3Data, Options);
			}else if(placeholderId == "f4"){
				zoomingGraph(placeholderId, f4Data, Options);
			}else if(placeholderId == "p3"){
				zoomingGraph(placeholderId, p3Data, Options);
			}else if(placeholderId == "p4"){
				zoomingGraph(placeholderId, p4Data, Options);
			}else if(placeholderId == "f7"){
				zoomingGraph(placeholderId, f7Data, Options);
			}else if(placeholderId == "f8"){
				zoomingGraph(placeholderId, f8Data, Options);
			}else if(placeholderId == "t3"){
				zoomingGraph(placeholderId, t3Data, Options);
			}else if(placeholderId == "t4"){
				zoomingGraph(placeholderId, t4Data, Options);
			}else if(placeholderId == "t5"){
				zoomingGraph(placeholderId, t5Data, Options);
			}else if(placeholderId == "t6"){
				zoomingGraph(placeholderId, t6Data, Options);
			}else if(placeholderId == "fz"){
				zoomingGraph(placeholderId, fzData, Options);
			}else if(placeholderId == "cz"){
				zoomingGraph(placeholderId, czData, Options);
			}else if(placeholderId == "pz"){
				zoomingGraph(placeholderId, pzData, Options);
			}else if(placeholderId == "o1"){
				zoomingGraph(placeholderId, o1Data, Options);
			}else if(placeholderId == "o2"){
				zoomingGraph(placeholderId, o2Data, Options);
			}else if(placeholderId == "c3"){
				zoomingGraph(placeholderId, c3Data, Options);
			}else if(placeholderId == "c4"){
				zoomingGraph(placeholderId, c4Data, Options);
			}
		}
	});
};

var showRightLegMovementGraphAnimate = function(sr, sp, ir){

	var fp1Value = [];
	var fp2Value = [];
	var f3Value = [];
	var f7Value = [];
	var f4Value = [];
	var f8Value = [];
	var t3Value = [];
	var c3Value = [];
	var c4Value = [];
	var t4Value = [];
	var t5Value = [];
	var p3Value = [];
	var p4Value = [];
	var t6Value = [];
	var czValue = [];
	var o1Value = [];
	var fzValue = [];
	var o2Value = [];
	var pzValue = [];

	var newRate  = sr + ir;
	
	if(newRate > 5000)
		sr = 0;
		
	var rate  = 0;
	for(var i = rate + sr ; i < newRate; i++){
		fp1Value.push(fp1RightLegMovementArray[i]);
		fp2Value.push(fp2RightLegMovementArray[i]);
		f3Value.push(f3RightLegMovementArray[i]);
		f7Value.push(f7RightLegMovementArray[i]);
		f4Value.push(f4RightLegMovementArray[i]);
		f8Value.push(f8RightLegMovementArray[i]);
		t3Value.push(t3RightLegMovementArray[i]);
		c3Value.push(c3RightLegMovementArray[i]);
		c4Value.push(c4RightLegMovementArray[i]);
		t4Value.push(t4RightLegMovementArray[i]);
		p3Value.push(p3RightLegMovementArray[i]);
		t5Value.push(t5RightLegMovementArray[i]);
		p4Value.push(p4RightLegMovementArray[i]);
		t6Value.push(t6RightLegMovementArray[i]);
		czValue.push(czRightLegMovementArray[i]);
		o1Value.push(o1RightLegMovementArray[i]);
		fzValue.push(fzRightLegMovementArray[i]);
		o2Value.push(o2RightLegMovementArray[i]);
		pzValue.push(pzRightLegMovementArray[i]);
	}

	var fp1Data = [{label: "FP1" ,data: fp1Value}];
	var fp2Data = [{label: "FP2" ,data: fp2Value}];
	var f7Data = [{label: "F7" ,data: f7Value}];
	var f3Data = [{label: "F3" ,data: f3Value}];
	var f4Data = [{label: "F4" ,data: f4Value}];
	var f8Data = [{label: "F8" ,data: f8Value}];
	var t3Data = [{label: "T3" ,data: t3Value}];
	var c3Data = [{label: "C3" ,data: c3Value}];
	var c4Data = [{label: "C4" ,data: c4Value}];
	var t4Data = [{label: "T4" ,data: t4Value}];
	var t5Data = [{label: "T5" ,data: t5Value}];
	var p3Data = [{label: "P3" ,data: p3Value}];
	var p4Data = [{label: "P4" ,data: p4Value}];
	var t6Data = [{label: "T6" ,data: t6Value}];
	var czData = [{label: "CZ" ,data: czValue}];
	var o1Data = [{label: "O1" ,data: o1Value}];
	var fzData = [{label: "FZ" ,data: fzValue}];
	var o2Data = [{label: "O2" ,data: o2Value}];
	var pzData = [{label: "PZ" ,data: pzValue}];
	
	var xAxis = {min:(sr*0.002), max:(newRate*0.002)};
	
	var Options = {
			legend: {position:'right', show:true},
			series: seriesOption,
			grid: {borderWidth:2, hoverable: true},
			xaxis: xAxis,
			selection: { mode: "xy" }
			//yaxis: {min:-50, max:25, tickDecimal:25}

	};
	$.plot($("#fp1"),fp1Data, Options);
	$.plot($("#fp2"),fp2Data, Options);
	$.plot($("#f7"),f7Data, Options);
	$.plot($("#f8"),f8Data, Options);
	$.plot($("#f3"),f3Data, Options);
	$.plot($("#t3"),t3Data, Options);
	$.plot($("#f4"),f4Data, Options);
	$.plot($("#c3"),c3Data, Options);
	$.plot($("#c4"),c4Data, Options);
	$.plot($("#p3"),p3Data, Options);
	$.plot($("#t4"),t4Data, Options);
	$.plot($("#p4"),p4Data, Options);
	$.plot($("#t5"),t5Data, Options);
	$.plot($("#t6"),t6Data, Options);
	$.plot($("#cz"),czData, Options);
	$.plot($("#o1"),o1Data, Options);
	$.plot($("#fz"),fzData, Options);
	$.plot($("#o2"),o2Data, Options);
	$.plot($("#pz"),pzData, Options);
	sr =  sr + ir;
	t = setTimeout(function(){
			showRightLegMovementGraphAnimate(sr, sp, ir);
	},sp);
$("#option").delegate("div","mouseover",null,function(){
		if(isAnimationStart == false){
			var placeholderId = $(this)[0].id;
			if(placeholderId == "fp1"){
				zoomingGraph(placeholderId, fp1Data, Options);
			}else if(placeholderId == "fp2"){
				zoomingGraph(placeholderId, fp2Data, Options);
			}else if(placeholderId == "f3"){
				zoomingGraph(placeholderId, f3Data, Options);
			}else if(placeholderId == "f4"){
				zoomingGraph(placeholderId, f4Data, Options);
			}else if(placeholderId == "p3"){
				zoomingGraph(placeholderId, p3Data, Options);
			}else if(placeholderId == "p4"){
				zoomingGraph(placeholderId, p4Data, Options);
			}else if(placeholderId == "f7"){
				zoomingGraph(placeholderId, f7Data, Options);
			}else if(placeholderId == "f8"){
				zoomingGraph(placeholderId, f8Data, Options);
			}else if(placeholderId == "t3"){
				zoomingGraph(placeholderId, t3Data, Options);
			}else if(placeholderId == "t4"){
				zoomingGraph(placeholderId, t4Data, Options);
			}else if(placeholderId == "t5"){
				zoomingGraph(placeholderId, t5Data, Options);
			}else if(placeholderId == "t6"){
				zoomingGraph(placeholderId, t6Data, Options);
			}else if(placeholderId == "fz"){
				zoomingGraph(placeholderId, fzData, Options);
			}else if(placeholderId == "cz"){
				zoomingGraph(placeholderId, czData, Options);
			}else if(placeholderId == "pz"){
				zoomingGraph(placeholderId, pzData, Options);
			}else if(placeholderId == "o1"){
				zoomingGraph(placeholderId, o1Data, Options);
			}else if(placeholderId == "o2"){
				zoomingGraph(placeholderId, o2Data, Options);
			}else if(placeholderId == "c3"){
				zoomingGraph(placeholderId, c3Data, Options);
			}else if(placeholderId == "c4"){
				zoomingGraph(placeholderId, c4Data, Options);
			}
		}
	});
};
