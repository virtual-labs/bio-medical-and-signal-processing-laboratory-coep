/*
Author : Subh Kriti Anand
I-Value Bridge software solution
Date : 11/11/11
*/
/* Code for Plumbing */
(function() {

	window.jsPlumbDemo = {
			
		init : function() {
			
			jsPlumb.DefaultDragOptions = { cursor: "pointer", zIndex:2000 };
			jsPlumb.setMouseEventsEnabled(true);
	
			var connectorStrokeColor = "rgba(50, 50, 200, 1)",
			connectorHighlightStrokeColor = "rgba(180, 180, 200, 1)",
			hoverPaintStyle = { lineWidth:13,strokeStyle:"#7ec3d9" };			
			
			// connect window1 to window2 with a 13 px wide olive colored Bezier, from the BottomCenter of 
			// window1 to 3/4 of the way along the top edge of window2.  give the connection a 1px black outline,
			// and allow the endpoint styles to derive their color and outline from the connection.
			// label it "Connection One" with a label at 0.7 of the length of the connection, and put an arrow that has a 50px
			// wide tail at a point 0.2 of the length of the connection.  we use 'cssClass' and 'endpointClass' to assign
			// our own css classes, and the Label overlay has three css classes specified for it too.  we also give this
			// connection a 'hoverPaintStyle', which defines the appearance when the mouse is hovering over it. 
			//

						        
	        var w23Stroke = "rgb(189,11,11)"; 
			
			var connectionHK1 = jsPlumb.connect({
					source:"handImage", 
	      				target:"knobOne", 
		        		anchors:["RightMiddle","LeftMiddle" ],
	      				paintStyle:{ 
							lineWidth:8,
							strokeStyle:w23Stroke,
							outlineColor:"#666",
							outlineWidth:1 
						},
						connector:"Bezier", 
	      				hoverPaintStyle:hoverPaintStyle, 
	      				endpoint:"Rectangle",
						endpointStyle:{fillStyle:"#882255" },
						maxConnections: -1
	      				
			});	       
		   var connection3 = jsPlumb.connect({
					source:"knobOne", 
	      				target:"innerWrap1", 
		        		anchors:["RightMiddle","LeftMiddle"],
	      				paintStyle:{ 
							lineWidth:8,
							strokeStyle:w23Stroke,
							outlineColor:"#666",
							outlineWidth:1 
						},
						connector:"Straight", 
	      				hoverPaintStyle:hoverPaintStyle, 
	      				endpoint:"Rectangle", 
	      				endpointStyles:[
	      		        	{ gradient : { stops:[[0, w23Stroke], [1, "#558822"]] }},
		    			{ gradient : {stops:[[0, w23Stroke], [1, "#882255"]] }}
		    		]
			});					
	     
	
			var connectionRJD = jsPlumb.connect({  
					source:'innerWrap1', 
					target:'dializerconnect', 
					connector:"Flowchart",
					anchors:["BottomCenter", "RightMiddle"],  
					paintStyle:{ 
						lineWidth:8, 
						strokeStyle:w23Stroke,
						outlineColor:"#666",
						outlineWidth:1
					},
					hoverPaintStyle:hoverPaintStyle,
					endpoint:"Rectangle",
					endpointStyle:{ fillStyle:"#a7b04b",width:15,height:15}				
					
			});
			 var connectionLJD = jsPlumb.connect({  
					source:'connectLeft', 
					target:'dializer', 
					connector:"Flowchart",
					anchors:["TopCenter", "LeftMiddle"],  
					paintStyle:{ 
						lineWidth:8, 
						strokeStyle:w23Stroke,
						outlineColor:"#666",
						outlineWidth:1
					},
					hoverPaintStyle:hoverPaintStyle,
					endpoint:"Rectangle",
					endpointStyle:{ fillStyle:"#a7b04b",width:15,height:15 }
					
			});
			var connectionRJD = jsPlumb.connect({  
					
					source:'connectRight',
					target:'angleTwo', 
					connector:"Straight",
					anchors:["TopCenter", "BottomCenter"],  
					paintStyle:{ 
						lineWidth:8, 
						strokeStyle:w23Stroke,
						outlineColor:"#666",
						outlineWidth:1
					},
					hoverPaintStyle:hoverPaintStyle,
					endpoint:"Rectangle",
					endpointStyle:{ fillStyle:"#a7b04b",width:15,height:15 }
					
			});
			var connectionA2D = jsPlumb.connect({  
					source:'angleTwo', 
					target:'dialconnect', 
					connector:"Straight",
					anchors:["TopCenter", "subh"],  
					paintStyle:{ 
						lineWidth:8, 
						strokeStyle:w23Stroke,
						outlineColor:"#666",
						outlineWidth:1
					},
					hoverPaintStyle:hoverPaintStyle,
					endpoint:"Rectangle",
					endpointStyle:{ fillStyle:"#a7b04b",width:15,height:15}
					
			});
			var connectionDG2 = jsPlumb.connect({  
					source:'angleOne', 
					target:'dializer', 
					connector:"Straight",
					anchors:["TopCenter", "BottomCenter"],  
					paintStyle:{ 
						lineWidth:8, 
						strokeStyle:w23Stroke,
						outlineColor:"#666",
						outlineWidth:1
					},
					hoverPaintStyle:hoverPaintStyle,
					endpoint:"Rectangle",
					endpointStyle:{ fillStyle:"#a7b04b",width:15,height:15 }
					
			});
			var connectionG2H = jsPlumb.connect({  
					source:'gaugeTwo', 
					target:'handImage', 
					connector:"Flowchart",
					anchors:["LeftMiddle", "BottomCenter"],  
					paintStyle:{ 
						lineWidth:8, 
						strokeStyle:w23Stroke,
						outlineColor:"#666",
						outlineWidth:1
					},
					hoverPaintStyle:hoverPaintStyle,
					endpoint:"Rectangle",
					endpointStyle:{ fillStyle:"#a7b04b" }
					
			});
			var connectionG2A = jsPlumb.connect({  
					source:'innerWrap2', 
					target:'angleOne', 
					connector:"Straight",
					anchors:["RightMiddle", "LeftMiddle"],  
					paintStyle:{ 
						lineWidth:8, 
						strokeStyle:w23Stroke,
						outlineColor:"#666",
						outlineWidth:1
					},
					hoverPaintStyle:hoverPaintStyle,
					endpoint:"Rectangle",
					endpointStyle:{ fillStyle:"#a7b04b" }
					
			});
			var connectionG2K = jsPlumb.connect({  
					source:'gaugeTwo', 
					target:'innerWrap2', 
					connector:"Straight",
					anchors:["RightMiddle", "LeftMiddle"],  
					paintStyle:{ 
						lineWidth:8, 
						strokeStyle:w23Stroke,
						outlineColor:"#666",
						outlineWidth:1
					},
					hoverPaintStyle:hoverPaintStyle,
					endpoint:"Rectangle",
					endpointStyle:{ fillStyle:"#a7b04b" }
					
			});
			jsPlumb.bind("dblclick", function(connection, originalEvent) { alert("double click on connection from " + connection.sourceId + " to " + connection.targetId); });
			jsPlumb.bind("endpointClick", function(endpoint, originalEvent) { alert("click on endpoint on element " + endpoint.elementId); });
		}
	};	
})();