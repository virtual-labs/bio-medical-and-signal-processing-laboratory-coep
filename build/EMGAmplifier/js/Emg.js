var R1=100,Rgain=200,R3=100,R2=200,V1=5,V2=-5,Gain,amp,Vout,opt1,opt2,opt3,opt4,i,p1,p2,li2;
var yAxis1=200,yAxis2=-200,board,p=[];
$(document).ready(function()
	{
		if($.browser.msie){
					document.write("The existing version of Internet Explorer is not supported");
					document.write("<A href='http://www.mozilla.com/en-US/products/download.html'>Click on the  Link :</A>");
		}else{	
				
	//This tab is for UI. it is a jquery code
		$("#tabs").tabs();
		$("#box3").append("Select");
		$("#box4").append("Select");
		$("#box5").append("Select");
		$("#box6").append("Select");
        $("#output1").append("<b>Gain = (1+(2R1/Rgain))*(R3/R2)</b>,<b>Vout = Gain*(V2-V1)</b>");		
				
	//Slider one
	$("#Slider1").slider({
		range: "min",
		value: 5,
		min: -10,
		max: 10,
		slide:function(event,ui) 
			{
				$("#Box1").val(ui.value);
				V1=ui.value;
				$("#val").html(V1+"volts");
				//calculation()
				switch(amp)
				{
				case "DC":
					cal1()
				break;
				
				case "AC":
					cal12()
				break;
				}
			}
			
		});
		$("#Box1").val($("#Slider1").slider("value"));
		$("#Slider1").slider({step:1});		
		
	//Slider two
	$("#Slider2").slider({
		range:"min",
		value:-10,
		min:-10,
		max:10,
		slide:function( event, ui ) 
			{
				$("#Box2").val( ui.value );
				V2=ui.value;
				$("#val1").html(V2+"volts");
				//calculation()
				switch(amp)
				{
				case "DC":
					cal1()
				break;
				
				case "AC":
					cal12()
				break;
				}
			}
			
		});
		$("#Box2").val( $( "#Slider2" ).slider( "value" ) );
		$("#Slider2").slider({step:1});	
		
	//Slider Three	
	$("#Slider3").slider({
		range: "min",
		value:100,
		min:0,
		max:2000,
		slide:function( event, ui ) 
			{
				$("#Box3").val(ui.value );
				R1=ui.value;
				
				$("#val2").html(R1+"<br>ohm");
				$("#val21").html(R1+"<br>ohm");
				//calculation()
				switch(amp)
				{
				case "DC":
					cal1()
				break;
				
				case "AC":
					cal12()
				break;
				}
			}
			
		});
		
		$("#Box3").val( $( "#Slider3" ).slider( "value" ) );
		$("#Slider3").slider({step:1});	
			//Slider Four	
		$("#Slider4" ).slider({
		range: "min",
		value:200,
		min: 0,
		max: 2000,
		slide:function(event, ui) 
			{
				$("#Box4").val( ui.value );
				R2=ui.value;
				$("#val3").html(R2+"ohm");
				$("#val31").html(R2+"ohm");
				//calculation()
				switch(amp)
				{
				case "DC":
					cal1()
				break;
				
				case "AC":
					cal12()
				break;
				}
			}
			});
		$("#Box4").val($("#Slider4").slider("value"));
		$("#Slider4").slider({step:1});	
	
	//Slider Five
	$("#Slider5").slider({
		range:"min",
		value:100,
		min:0,
		max:2000,
		slide:function( event, ui ) 
			{
				$("#Box5").val( ui.value );
				R3=ui.value;
				$("#val4").html(R3+"ohm");
				$("#val41").html(R3+"ohm");
				//calculation()
				switch(amp)
				{
				case "DC":
					cal1()
				break;
				
				case "AC":
					cal12()
				break;
				}
			}
			
		});
		$("#Box5").val( $( "#Slider5" ).slider( "value" ) );
		$("#Slider5").slider({step:1});	
		
	//Slider Six	
	$( "#Slider6" ).slider({
		range: "min",
		value:200,
		min:0,
		max:2000,
		slide:function( event, ui ) 
			{
				$("#Box6").val( ui.value );
				Rgain=ui.value;
				$("#val5").html(Rgain+"<br>ohm");
				//calculation()
				switch(amp)
				{
				case "DC":
					cal1();
				break;
				
				case "AC":
					cal12();
				break;
				}
			}	
		});
		$("#Box6").val($("#Slider6").slider("value"));
		$("#Slider6").slider({step:1});	
		$("#val6").html(Vout);
		
		var options = {timeNotation: '12h',
        am_pm: true,
        fontFamily: 'Calibri',
        fontSize: '20px',
        foreground: 'black',
                    //background: 'white'
						};
		$('.jclock').jclock(options);
					//********End of clock

		diagram();
		//Creating Board For Graph
		
		board = JXG.JSXGraph.initBoard('Graph', {boundingbox:[-1,yAxis1,6,yAxis2],axis:true});
		
		}
	});
	function list1()
		{
		opt1=$("#unit").val();
		//alert(opt1)
		switch(opt1)
		{
			case "ohm":
					
				$("#val").html(V1+"<br>ohm");
			break;
			case "kohm":
					V1=V1*10*10*10;
					$("#val").html(V1+"<br>kohm");
			break;
		}
		cas()
		}
		function list2()
		{
		opt1=$("#unit1").val();
		//alert(opt1)
		switch(opt1)
		{
			case "ohm":
					$("#val1").html(V2+"<br>ohm");
					//$("#val21").html(R1+"<br>ohm");
				break;
			case "kohm":
					V2=V2*10*10*10;
					$("#val1").html(V2+"<br>kohm");
					//$("#val21").html(R1+"<br>kohm");
				break;
		}
		cas()
		}
	function list3()
		{
		opt1=$("#unit2").val();
		//alert(opt1)
		switch(opt1)
		{
			case "ohm":
					$("#val2").html(R1+"<br>ohm");
					$("#val21").html(R1+"<br>ohm");
				break;
			case "kohm":
					R1=R1*10*10*10;
					$("#val2").html(R1+"<br>kohm");
					$("#val21").html(R1+"<br>kohm");
			break;
		}
		cas()
		}	
	function list4()
		{
		opt2=$("#unit3").val();
		//alert(opt2)
		switch(opt2)
		{
			case "ohm":
					$("#val3").html(R2+"ohm");
					$("#val31").html(R2+"ohm");
				break;
			case "kohm":
					R2=R2*10*10*10;
					$("#val3").html(R2+"kohm");
					$("#val31").html(R2+"kohm");
			break;
		}
		cas()
		}	
		function list5()
		{
		opt3=$("#unit4").val();

		switch(opt3)
		{
			case "ohm":
					$("#val4").html(R3+"ohm");
					$("#val41").html(R3+"ohm");
				break;
			case "kohm":
					R3=R3*10*10*10;
					$("#val4").html(R3+"kohm");
					$("#val41").html(R3+"kohm");
			break;
		}
		cas()
		}	
		function list6()
		{
		opt4=$("#unit5").val();
		//alert(opt4)
		switch(opt4)
		{
			case "ohm":
						$("#val5").html(Rgain+"<br>ohm");
						break;
			case "kohm":
						Rgain=Rgain*10*10*10;
						$("#val5").html(Rgain+"<br>kohm");
					
			break;
			
		}
		cas()
		}	
	
		
function cal1()
        {    
			
			$("#t1").html(V1);
			$("#t2").html(V2);
			$("#t3").html(R1);
			$("#t4").html(R2);
			$("#t5").html(R3);
			$("#t6").html(Rgain);
			//$("#output").append("<br><b>R1:</b>"+R1+"<b>R2:</b>"+R2+"<b>R3:</b>"+R3);
			//$("#output").append("<br><b>Rgain:</b>"+Rgain);
			Gain=(((1+2*R1)/Rgain)*(R3/R2)).toFixed(2);
			Vout=Math.round((Gain*(V2-V1)).toFixed(2));
			$("#t7").html(Gain);
			$("#t8").html(Vout);
			
			//$("#output").append("<br><b>Gain:</b>"+Gain);
			//$("#output").append("<br><b>Vout:</b>"+Vout+"");
			$("#val6").html(Vout);
			value();
			board.removeObject(p[i]);
			board.removeObject(p1);
			board.removeObject(p2);
			board.removeObject(li2);
			//p[1].remove()
			//p[2].remove()
			p1=[5,Vout];
			p2=[0,Vout];
			li2=board.createElement('line',[p1,p2],{straightFirst:false, straightLast:false,strokeWidth:2});
			}
	function cal12()
        {    
			
			$("#t1").html(V1);
			$("#t2").html(V2);
			$("#t3").html(R1);
			$("#t4").html(R2);
			$("#t5").html(R3);
			$("#t6").html(Rgain);
			//$("#output").append("<br><b>R1:</b>"+R1+"<b>R2:</b>"+R2+"<b>R3:</b>"+R3);
			//$("#output").append("<br><b>Rgain:</b>"+Rgain);
			//Gain=(((1+2*R1)/Rgain)*(R3/R2)).toFixed(2);
			Gain = (((Rgain * 1)+(2*R1))/Rgain).toFixed(2);
			Vout=Math.round((Gain*(V2-V1)).toFixed(2));
			$("#t7").html(Gain);
			$("#t8").html(Vout);
			$("#val6").html(Vout);
			value();
			board.removeObject(p1);
			board.removeObject(p2);
			board.removeObject(li2);
			
			//p[i]=board.create('functiongraph', [function(x){return 30*Math.sin(10*x)+Vout;},0,5]);
		    p[i]=board.create('functiongraph', [function(x){return Vout*(Math.sin(10*x));},0,5]);
		}	
		var amplifier=function()
		{
	amp=$("#amplifi1").val();
	switch(amp)
	{
	case "DC":
	$( "#Slider1" ).slider({disabled: false});
		$( "#Slider2" ).slider({disabled: false});
		$( "#Slider3" ).slider({disabled: false});
		$( "#Slider4" ).slider({disabled: false});
		$( "#Slider5" ).slider({disabled: false});
		$( "#Slider6" ).slider({disabled: false});
		$("#unit2").attr('disabled',false);
		$("#unit3").attr('disabled',false);
		$("#unit4").attr('disabled',false);
		$("#unit5").attr('disabled',false);
		cal1()
	    break;
	case "AC":
		$( "#Slider1" ).slider({disabled:false});
		$( "#Slider2" ).slider({disabled:false});
		$( "#Slider3" ).slider({disabled:false});
		$( "#Slider4" ).slider({disabled:false});
		$( "#Slider5" ).slider({disabled:false});
		$( "#Slider6" ).slider({disabled:false});
		$("#unit2").attr('disabled',false);
		$("#unit3").attr('disabled',false);
		$("#unit4").attr('disabled',false);
		$("#unit5").attr('disabled',false);
		cal12()
		break;
	}
}
		
		
var value=function()
	{
		if(Vout>180||Vout<-180)
			{
				yAxis1=Vout*1.5;
				yAxis2=-Vout*1.5;
			}
			board.setBoundingBox([-1,yAxis1,7,yAxis2], false);
			board.update();
	}
function button()
	{
		window.location.reload();
	}	
function cas()
	{
	switch(amp)
				{
				case "DC":
					cal1()
				break;
				
				case "AC":
					cal12()
				break;
				}
	}		