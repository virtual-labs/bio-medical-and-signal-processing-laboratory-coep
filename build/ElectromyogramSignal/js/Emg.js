var opt,opt1,V,l1=310,l2=60,t1=9,t2=4;
var circle1;
	var line1,predx;
		var line2;
		var line3;
		//var arrow1;
		var curve1;
		var L1,L2,T1,T2,A;
		var TEXT1;
		var TEXT2;
		var TEXT3;
		var TEXT4;
		var TEXT5;
		var TEXT6;
		var TEXT7;
		var TEXT8;
		var TEXT9;
		var TEXT10;
		var TEXT11;
		var TEXT12;
var coreDisplacementMm=0;
		
			$(document).ready(function()
				{
					if($.browser.msie){
						document.write("The existing version of Internet Explorer is not supported");
						document.write("<A href='http://www.mozilla.com/en-US/products/download.html'>Click on the  Link :</A>");
					}else{	
									
					if($.browser.msie){
						document.write("The existing version of Internet Explorer is not supported");
						document.write("<A href='http://www.mozilla.com/en-US/products/download.html'>Click on the  Link :</A>");
					}else{	

					//This tab is for UI. it is a jquery code
					$( "#tabs" ).tabs();
						
					//To create x and y axis
					//board = JXG.JSXGraph.initBoard('box', {originX: 40, originY: 300, unitX: 0.5, unitY:100/*250*/,axis:true,grid:true});
					
					
					//****It's for clock  it is jquery code
					var options = {
                    timeNotation: '12h',
                    am_pm: true,
                    fontFamily: 'Times New Roman,Times Seriff',
                    fontSize: '20px',
                    foreground: 'black',
                    //background: 'white'
							};
						$('.jclock').jclock(options);
					//********End of clock
				diagram();
				diagram1();
				 $( "#Slider" ).slider({
					range: "min",
					min: 90,
					max: 300,
					value: 300,
					slide: function( event, ui ) {
						$( "#Box1" ).val( ui.value );
						Q = ui.value;
						
				}
			});
		
			$( "#Box1" ).val($( "#Slider" ).slider( "value" ) );
			 $( "#Slider1" ).slider({
					range: "min",
					min: 90,
					max: 300,
					value: 300,
					slide: function( event, ui ) {
						$( "#Box2" ).val( ui.value );
						Q = ui.value;
						
				}
			});
		
			$( "#Box2" ).val($( "#Slider1" ).slider( "value" ) );
				
//Drag function				
				
				
			jQuery.fn.movingcore = function(newDisplacement) {
                    
                    predx = newDisplacement - coreDisplacementMm;
					x = x+predx*13
					s=s+predx*13
					line2.remove();
					line1.remove();
					curve1.remove();
					//t1.remove();
					moveline();
					x1 = 390-x
					S1 = 350-s
                    	circle1.translate(predx * 13, 0);
					
							 line1.translate(predx * 13, 0);
							line2.translate(predx *13, 0);
							
							
							TEXT1.translate(predx * 13, 0);
							TEXT2.translate(predx * 13, 0);
							TEXT3.translate(predx * 13, 0);
							TEXT4.translate(predx * 13, 0);
							TEXT5.translate(predx * 13, 0);
							TEXT6.translate(predx * 13, 0);
							TEXT7.translate(predx * 13, 0);
							TEXT8.translate(predx * 13, 0);
							TEXT9.translate(predx * 13, 0);
							TEXT10.translate(predx * 13, 0);
							TEXT11.translate(predx * 13, 0);
							TEXT12.translate(predx * 13, 0);
							
							line3.translate(predx *13, 0);
							 arrow1.translate(predx * 13, 0);
							//  Slider.translate(predx * 13, 0);
							
							curve1.translate(predx * 13, 0);
					        coreDisplacementMm = newDisplacement;		  

                }

              
                var start = function() {
                    this.ox = this.attr("x")
                    this.oy = this.attr("y")

                },

            move = function(dx, dy) {
			
                        var px = dx / 19;
                   if ((px >= -0 && px <0 ) || (px >0 && px <= 19))  {
                            var px = dx /19;
							$("#L1").html(x+"-mm");
							$("#T1").html(px+"-ms");
							$("#L2").html(s+"-mm");
							$("#T2").html(predx+"-ms");
							A=(parseFloat(x-s)/(px-predx)).toFixed(2);
							$("#Velocity1").html(A+"-m/s");
                           //alert(px);
                           $().movingcore(px);
                              $().displaceCore(px);
                           
                        }
                    }

                    up = function() {
                        // restoring state
                    }

                    	circle1.drag(move, start, up);
						circle1.drag(function(){
						//line2.remove();
						//arrow1.remove();
						});
						
					}
					
					}
						
				});
				function dropdownlist1()
		{
			opt=$("#Distance").val();
			
			s=opt;
			
			
	}
	
	
	function dropdownlist2()
		{
			opt1=$("#Latency").val();
		
			value()
		return true;
	    }
	

function value()
{

V=parseFloat(l1-l2)/(t1-t2);
$("#Velocity").html(V);
}


				














	