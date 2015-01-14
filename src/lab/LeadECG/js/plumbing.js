$(document).ready(function(){
	var leadtypeval="BLL";
	var subtypeval="lead1";
	
	 
	var rr=new Raphael(document.getElementById('output'),110,30);
	var X=rr.path("M0 2L1200 10").attr({
        stroke: 'black',
        'stroke-width': 2
    });
	
	function drawLead1Graph(){
		
		jsPlumb.connect(
			{
				source:righthand,
				target:negative,
				connector:[ "Bezier", { curviness:-100 } ],
				endpoint:"Dot",
				endpointStyle:{
					radius:5,
					fillStyle:'black'
				},
				paintStyle:{
					lineWidth:2,
					outlineWidth:1,
					outlineColor:'gray',
					strokeStyle:'white'
				}
			});
			
			jsPlumb.connect(
			{
				source:lefthand,
				target:positive,
				connector:[ "Bezier", { curviness:-100 } ],
				endpoint:"Dot",
				endpointStyle:{
					radius:5,
				},
				paintStyle:{
					lineWidth:2,
					outlineWidth:1,
					outlineColor:'gray',
					strokeStyle:'black'
				}
			});

	}
	drawLead1Graph();
	
	
	$('#leadtype').delegate('option','click',function(){
		$('canvas').remove();
		
		$('#imgullresist').css('visibility','hidden');
		$('#imguclresist').css('visibility','hidden');
		$('.vpoint span').css('display','none');
		leadtypeval = $(this).attr('value');
		
		if(leadtypeval=='UCL'){
			$('.vpoint').css('visibility','visible');
		}else{
			$('.vpoint').css('visibility','hidden');
		}
	});
	
	// view all simulators
	$('#viewAll').click(function(){
		$('canvas').remove();
		$('#imgullresist').css('visibility','hidden');
		$('#imguclresist').css('visibility','hidden');	
		$('#leadtype option:first').attr('selected','selected');
		//$('#subtype option:first').attr('selected','selected');
		$('#subtype option').remove();
		$('#subtype').append('<option value="subtype">--Select Subtype--</option>');
		
		$('#axisY > svg > text').css('visibility','hidden');
		$('#amplifier').css('visibility','hidden');
		$('#jackbox').css('visibility','visible');
		$('#recorder').css('visibility','visible');
		
		$('#wave1zero').css('visibility','visible');
		$('#wave2zero').css('visibility','visible');
		$('#wave3zero').css('visibility','visible');
		$('.vpoint').css('visibility','visible');


		jsPlumb.connect(
		{
			source:jackboxop,
			target:recorderip,
			connector:[ "Bezier", { curviness:10 } ],
			endpoint:"Rectangle",
			endpointStyle:{
				height:3,
				width:3,
				fillStyle:'black'
			},
			paintStyle:{
				lineWidth:2,
				strokeStyle:'black'
			}
		});
		
			// from left leg to j9
			jsPlumb.connect(
			{
				source:leftleg,
				target:placeholder1,
				connector:"Straight",
				endpoint:"Rectangle",
				endpointStyle:{
					height:3,
					width:3,
					fillStyle:'black'
				},
				paintStyle:{
					lineWidth:2,
					outlineWidth:1,
					outlineColor:'gray',
					strokeStyle:'red'
				}
			});
			jsPlumb.connect(
			{
				source:placeholder1,
				target:j9,
				connector:"Straight",
				endpoint:"Rectangle",
				endpointStyle:{
					height:3,
					width:3,
					fillStyle:'black'
				},
				paintStyle:{
					lineWidth:2,
					outlineWidth:1,
					outlineColor:'gray',
					strokeStyle:'red'
				}
			});

			// rightleg to j10
			jsPlumb.connect(
			{
				source:rightleg,
				target:j10,
				connector:"Flowchart",
				endpoint:"Rectangle",
				endpointStyle:{
					height:5,
					width:5,
					fillStyle:'black'
				},
				paintStyle:{
					lineWidth:2,
					outlineWidth:1,
					outlineColor:'gray',
					strokeStyle:'green'
				}
			});
			
			// lefthand to j7
			jsPlumb.connect(
			{
				source:lefthand,
				target:placeholder3,
				connector:"Straight",
				endpoint:"Rectangle",
				endpointStyle:{
					height:3,
					width:3,
					fillStyle:'black'
				},

				paintStyle:{
					lineWidth:2,
					outlineWidth:1,
					outlineColor:'gray',
					strokeStyle:'black'
				}
			});
			jsPlumb.connect(
			{
				source:placeholder3,
				target:j7,
				connector:"Straight",
				endpoint:"Rectangle",
				endpointStyle:{
					height:3,
					width:3,
					fillStyle:'black'
				},

				paintStyle:{
					lineWidth:2,
					outlineWidth:1,
					outlineColor:'gray',
					strokeStyle:'black'
				}
			});

			// right hand to j8
			jsPlumb.connect(
			{
				source:righthand,
				target:placeholder2,
				connector:"Straight",
				endpoint:"Rectangle",
				endpointStyle:{
					height:3,
					width:3,
					fillStyle:'black'
				},
				paintStyle:{
					lineWidth:2,
					outlineWidth:1,
					outlineColor:'gray',
					strokeStyle:'white'
				}
			});
			jsPlumb.connect(
			{
				source:placeholder2,
				target:j8,
				connector:"Straight",
				endpoint:"Rectangle",
				endpointStyle:{
					height:3,
					width:3,
					fillStyle:'black'
				},
				paintStyle:{
					lineWidth:2,
					outlineWidth:1,
					outlineColor:'gray',
					strokeStyle:'white'
				}
			});
			
			// v1 to j6
			jsPlumb.connect(
			{
				source:v1Div,
				target:placeholder4,
				connector:"Straight",
				endpoint:"Rectangle",
				endpointStyle:{
					height:3,
					width:3,
					fillStyle:'black'
				},
				paintStyle:{
					lineWidth:2,
					outlineWidth:1,
					outlineColor:'gray',
					strokeStyle:'red'
				}
			});
			jsPlumb.connect(
			{
				source:placeholder4,
				target:j6,
				connector:"Straight",
				endpoint:"Rectangle",
				endpointStyle:{
					height:3,
					width:3,
					fillStyle:'black'
				},
				paintStyle:{
					lineWidth:2,
					outlineWidth:1,
					outlineColor:'gray',
					strokeStyle:'red'
				}
			});

			// v2 to j5
			jsPlumb.connect(
			{
				source:v2Div,
				target:placeholder5,
				connector:"Straight",
				endpoint:"Rectangle",
				endpointStyle:{
					height:3,
					width:3,
					fillStyle:'black'
				},
				paintStyle:{
					lineWidth:2,
					outlineWidth:1,
					outlineColor:'gray',
					strokeStyle:'yellow'
				}
			});
			jsPlumb.connect(
			{
				source:placeholder5,
				target:j5,
				connector:"Straight",
				endpoint:"Rectangle",
				endpointStyle:{
					height:3,
					width:3,
					fillStyle:'black'
				},
				paintStyle:{
					lineWidth:2,
					outlineWidth:1,
					outlineColor:'gray',
					strokeStyle:'yellow'
				}
			});
			
			// v3 to j4
			jsPlumb.connect(
			{
				source:v3Div,
				target:placeholder6,
				connector:"Straight",
				endpoint:"Rectangle",
				endpointStyle:{
					height:3,
					width:3,
					fillStyle:'black'
				},
				paintStyle:{
					lineWidth:2,
					outlineWidth:1,
					outlineColor:'gray',
					strokeStyle:'green'
				}
			});
			jsPlumb.connect(
			{
				source:placeholder6,
				target:j4,
				connector:"Straight",
				endpoint:"Rectangle",
				endpointStyle:{
					height:3,
					width:3,
					fillStyle:'black'
				},
				paintStyle:{
					lineWidth:2,
					outlineWidth:1,
					outlineColor:'gray',
					strokeStyle:'green'
				}
			});
			
			// v4 to j3
			jsPlumb.connect(
			{
				source:v4Div,
				target:placeholder7,
				connector:"Straight",
				endpoint:"Rectangle",
				endpointStyle:{
					height:3,
					width:3,
					fillStyle:'black'
				},
				paintStyle:{
					lineWidth:2,
					outlineWidth:1,
					outlineColor:'gray',
					strokeStyle:'blue'
				}
			});
			jsPlumb.connect(
			{
				source:placeholder7,
				target:j3,
				connector:"Straight",
				endpoint:"Rectangle",
				endpointStyle:{
					height:3,
					width:3,
					fillStyle:'black'
				},
				paintStyle:{
					lineWidth:2,
					outlineWidth:1,
					outlineColor:'gray',
					strokeStyle:'blue'
				}
			});

			// v5 to j2
			jsPlumb.connect(
			{
				source:v5Div,
				target:placeholder8,
				connector:"Straight",
				endpoint:"Rectangle",
				endpointStyle:{
					height:3,
					width:3,
					fillStyle:'black'
				},
				paintStyle:{
					lineWidth:2,
					outlineWidth:1,
					outlineColor:'gray',
					strokeStyle:'orange'
				}
			});
			jsPlumb.connect(
			{
				source:placeholder8,
				target:j2,
				connector:"Straight",
				endpoint:"Rectangle",
				endpointStyle:{
					height:3,
					width:3,
					fillStyle:'black'
				},
				paintStyle:{
					lineWidth:2,
					outlineWidth:1,
					outlineColor:'gray',
					strokeStyle:'orange'
				}
			});

			// v6 to j1
			jsPlumb.connect(
			{
				source:v6Div,
				target:placeholder9,
				connector:"Straight",
				endpoint:"Rectangle",
				endpointStyle:{
					height:3,
					width:3,
					fillStyle:'black'
				},
				paintStyle:{
					lineWidth:2,
					outlineWidth:1,
					outlineColor:'gray',
					strokeStyle:'purple'
				}
			});
			jsPlumb.connect(
			{
				source:placeholder9,
				target:j1,
				connector:"Straight",
				endpoint:"Rectangle",
				endpointStyle:{
					height:3,
					width:3,
					fillStyle:'black'
				},
				paintStyle:{
					lineWidth:2,
					outlineWidth:1,
					outlineColor:'gray',
					strokeStyle:'purple'
				}
			});

			drawAllCurves();
	});
	
	$('#subtype').delegate('option','click',function(){
		$('canvas').remove();
		subtypeval = $(this).attr('value');
			
		if(subtypeval=='subtype'){
			$('#imgullresist').css('visibility','hidden');
			$('#imguclresist').css('visibility','hidden');
			initAll();
		}else if(subtypeval=='lead1'){
			
			drawLead1Graph();
			drawCurve1(subtypeval);
		}else if(subtypeval=='lead2'){
			jsPlumb.connect(
			{
				source:righthand,
				target:negative,
				connector:[ "Bezier", { curviness:-100 } ],
				endpoint:"Dot",
				endpointStyle:{
					radius:5,
					fillStyle:'black'
				},
				paintStyle:{
					lineWidth:2,
					outlineWidth:1,
					outlineColor:'gray',
					strokeStyle:'white'
				}
			});
			
			jsPlumb.connect(
			{
				source:leftleg,
				target:positive,
				connector:[ "Bezier", { curviness:-120 } ],
				endpoint:"Dot",
				endpointStyle:{
					radius:5,
				},
				paintStyle:{
					lineWidth:2,
					outlineWidth:1,
					outlineColor:'gray',
					strokeStyle:'red'
				}
			});
			
			drawCurve1(subtypeval);
		}else if(subtypeval=='lead3'){
			jsPlumb.connect(
			{
				source:lefthand,
				target:negative,
				connector:[ "Bezier", { curviness:-70 } ],
				endpoint:"Dot",
				endpointStyle:{
					radius:5,
				},
				paintStyle:{
					lineWidth:2,
					outlineWidth:1,
					outlineColor:'gray',
					strokeStyle:'black'
				}
			});
			
			jsPlumb.connect(
			{
				source:leftleg,
				target:positive,
				connector:[ "Bezier", { curviness:-120 } ],
				endpoint:"Dot",
				endpointStyle:{
					radius:5,
				},
				paintStyle:{
					lineWidth:2,
					outlineWidth:1,
					outlineColor:'gray',
					strokeStyle:'red'
				}
			});
			drawCurve1(subtypeval);
		}else if(subtypeval=='avr'){
			$('#imgullresist').css('visibility','visible');
		
			jsPlumb.connect(
			{
				source:righthand,
				target:positive,
				connector:[ "Bezier", { curviness:-40 } ],
				endpoint:"Dot",
				endpointStyle:{
					radius:5,
					fillStyle:'black'
				},
				paintStyle:{
					lineWidth:3,
					outlineWidth:1,
					outlineColor:'black',
					strokeStyle:'white'
				}
			});
			
			jsPlumb.connect(
			{
				source:lefthand,
				target:resist1Div,
				connector:[ "Bezier", { curviness:20 } ],
				endpoint:"Dot",
				endpointStyle:{
					radius:5,
				},
				paintStyle:{
					lineWidth:2,
					outlineWidth:1,
					outlineColor:'gray',
					strokeStyle:'black'
				}
			});
			
			jsPlumb.connect(
			{
				source:leftleg,
				target:resist2Div,
				connector:[ "Bezier", { curviness:50 } ],
				endpoint:"Dot",
				endpointStyle:{
					radius:5,
				},
				paintStyle:{
					lineWidth:2,
					outlineWidth:1,
					outlineColor:'gray',
					strokeStyle:'red'
				}
			});
			
			jsPlumb.connect(
			{
				source:resistopDiv,
				target:negative,
				connector:[ "Bezier", { curviness:20 } ],
				endpoint:"Dot",
				endpointStyle:{
					radius:5,
				},
				paintStyle:{
					lineWidth:2,
					outlineWidth:1,
					outlineColor:'gray',
					strokeStyle:'black'
				}
			});
			drawCurve1(subtypeval);
		}else if(subtypeval=='avl'){
			$('#imgullresist').css('visibility','visible');
			
			jsPlumb.connect(
			{
				source:lefthand,
				target:positive,
				connector:[ "Bezier", { curviness:-50 } ],
				endpoint:"Dot",
				endpointStyle:{
					radius:5,
				},
				paintStyle:{
					lineWidth:2,
					outlineWidth:1,
					outlineColor:'gray',
					strokeStyle:'black'
				}
			});
			
			jsPlumb.connect(
			{
				source:righthand,
				target:resist1Div,
				connector:[ "Bezier", { curviness:40 } ],
				endpoint:"Dot",
				endpointStyle:{
					radius:5,
					fillStyle:'black'
				},
				paintStyle:{
					lineWidth:3,
					outlineWidth:1,
					outlineColor:'black',
					strokeStyle:'white'
				}
			});
			
			jsPlumb.connect(
			{
				source:leftleg,
				target:resist2Div,
				connector:[ "Bezier", { curviness:40 } ],
				endpoint:"Dot",
				endpointStyle:{
					radius:5,
				},
				paintStyle:{
					lineWidth:2,
					outlineWidth:1,
					outlineColor:'gray',
					strokeStyle:'red'
				}
			});
			
			jsPlumb.connect(
			{
				source:resistopDiv,
				target:negative,
				connector:[ "Bezier", { curviness:20 } ],
				endpoint:"Dot",
				endpointStyle:{
					radius:5,
				},
				paintStyle:{
					lineWidth:2,
					outlineWidth:1,
					outlineColor:'gray',
					strokeStyle:'black'
				}
			});
			drawCurve1(subtypeval);
		}else if(subtypeval=='avf'){
			$('#imgullresist').css('visibility','visible');
		
			jsPlumb.connect(
			{
				source:leftleg,
				target:positive,
				connector:[ "Bezier", { curviness:-120 } ],
				endpoint:"Dot",
				endpointStyle:{
					radius:5,
				},
				paintStyle:{
					lineWidth:2,
					outlineWidth:1,
					outlineColor:'gray',
					strokeStyle:'red'
				}
			});
			
			jsPlumb.connect(
			{
				source:righthand,
				target:resist2Div,
				connector:[ "Bezier", { curviness:40 } ],
				endpoint:"Dot",
				endpointStyle:{
					radius:5,
					fillStyle:'black'
				},
				paintStyle:{
					lineWidth:3,
					outlineWidth:1,
					outlineColor:'gray',
					strokeStyle:'white'
				}
			});
			
			jsPlumb.connect(
			{
				source:lefthand,
				target:resist1Div,
				connector:[ "Bezier", { curviness:20 } ],
				endpoint:"Dot",
				endpointStyle:{
					radius:5,
				},
				paintStyle:{
					lineWidth:2,
					outlineWidth:1,
					outlineColor:'gray',
					strokeStyle:'black'
				}
			});
			
			jsPlumb.connect(
			{
				source:resistopDiv,
				target:negative,
				connector:[ "Bezier", { curviness:20 } ],
				endpoint:"Dot",
				endpointStyle:{
					radius:5,
				},
				paintStyle:{
					lineWidth:2,
					outlineWidth:1,
					outlineColor:'gray',
					strokeStyle:'black'
				}
			});
			drawCurve1(subtypeval);
		}else{
			$('#imguclresist').css('visibility','visible');
			$('.vpoint span').css('display','none');
			jsPlumb.connect(
			{
				source:lefthand,
				target:uclresist1Div,
				connector:[ "Bezier", { curviness:20 } ],
				endpoint:"Dot",
				endpointStyle:{
					radius:5,
				},
				paintStyle:{
					lineWidth:2,
					outlineWidth:1,
					outlineColor:'gray',
					strokeStyle:'black'
				}
			});

			jsPlumb.connect(
			{
				source:righthand,
				target:uclresist2Div,
				connector:[ "Bezier", { curviness:20 } ],
				endpoint:"Dot",
				endpointStyle:{
					radius:5,
					fillStyle:'black'
				},
				paintStyle:{
					lineWidth:3,
					outlineWidth:1,
					outlineColor:'gray',
					strokeStyle:'white'
				}
			});
	
			jsPlumb.connect(
			{
				source:leftleg,
				target:uclresist3Div,
				connector:[ "Bezier", { curviness:20 } ],
				endpoint:"Dot",
				endpointStyle:{
					radius:5,
				},
				paintStyle:{
					lineWidth:2,
					outlineWidth:1,
					outlineColor:'gray',
					strokeStyle:'red'
				}
			});

			jsPlumb.connect(
			{
				source:uclresistopDiv,
				target:negative,
				connector:[ "Bezier", { curviness:20 } ],
				endpoint:"Dot",
				endpointStyle:{
					radius:5,
				},
				paintStyle:{
					lineWidth:2,
					outlineWidth:1,
					outlineColor:'gray',
					strokeStyle:'black'
				}
			});  
			
			switch(subtypeval){
				case 'v1':
					jsPlumb.connect(
					{
						source:v1Div,
						target:positive,
						connector:[ "Bezier", { curviness:40 } ],
						endpoint:"Dot",
						endpointStyle:{
							radius:5,
						},
						paintStyle:{
							lineWidth:2,
							outlineWidth:1,
							outlineColor:'gray',
							strokeStyle:'red'
						}
					});
					$('#spanv1').css('display','block');
					drawCurve1(subtypeval);
				break;
				
				case 'v2':
					jsPlumb.connect(
					{
						source:v2Div,
						target:positive,
						connector:[ "Bezier", { curviness:-40 } ],
						endpoint:"Dot",
						endpointStyle:{
							radius:5,
						},
						paintStyle:{
							lineWidth:2,
							outlineWidth:1,
							outlineColor:'gray',
							strokeStyle:'yellow'
						}
					});
					$('#spanv2').css('display','block');
					drawCurve1(subtypeval);
				break;
			
				case 'v3':
					jsPlumb.connect(
					{
						source:v3Div,
						target:positive,
						connector:[ "Bezier", { curviness:40 } ],
						endpoint:"Dot",
						endpointStyle:{
							radius:5,
						},
						paintStyle:{
							lineWidth:2,
							outlineWidth:1,
							outlineColor:'gray',
							strokeStyle:'green'
						}
					});
					$('#spanv3').css('display','block');
					drawCurve1(subtypeval);
				break;
				
				case 'v4':
					jsPlumb.connect(
					{
						source:v4Div,
						target:positive,
						connector:[ "Bezier", { curviness:40 } ],
						endpoint:"Dot",
						endpointStyle:{
							radius:5,
						},
						paintStyle:{
							lineWidth:2,
							outlineWidth:1,
							outlineColor:'gray',
							strokeStyle:'blue'
						}
					});
					$('#spanv4').css('display','block');
					drawCurve1(subtypeval);
				break;

				case 'v5':
					jsPlumb.connect(
					{
						source:v5Div,
						target:positive,
						connector:[ "Bezier", { curviness:40 } ],
						endpoint:"Dot",
						endpointStyle:{
							radius:5,
						},
						paintStyle:{
							lineWidth:2,
							outlineWidth:1,
							outlineColor:'gray',
							strokeStyle:'orange'
						}
					});
					$('#spanv5').css('display','block');
					drawCurve1(subtypeval);
				break;

				case 'v6':
					jsPlumb.connect(
					{
						source:v6Div,
						target:positive,
						connector:[ "Bezier", { curviness:40 } ],
						endpoint:"Dot",
						endpointStyle:{
							radius:5,
						},
						paintStyle:{
							lineWidth:2,
							outlineWidth:1,
							outlineColor:'gray',
							strokeStyle:'purple'
						}
					});
					$('#spanv6').css('display','block');
					drawCurve1(subtypeval);
				break;
			}
		}	
	});
});