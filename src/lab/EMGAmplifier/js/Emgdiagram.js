function diagram()
{
	var r=new Raphael(document.getElementById('First'),400,490);
//creating cirlcle
	var circle=r.circle(30,90,3,3);
 //creating horizontal line
	var line=r.path("M34 90 l 50 0");
 //creating Vertical line
	var line=r.path("M84 80 l 0 50"+"M84 80 l 40 25"+"M84 130 l 40 -25"+"M84 80 l 0 50"+"M84 80 l 40 25"+"M84 130 l 40 -25");
	var line=r.path("M64 120 l 0 50 l 90 0"+"M64 120 l 20 0");
  var line=r.path("M124 105 l 30 0");
  var circle=r.circle(157,105, 3, 3).attr({fill:"black"});
  var circle=r.circle(157,170, 3, 3).attr({fill:"black"});
  var line=r.path("M154 105 l 25 0"+"M154 170 l 25 0");
  var line=r.path("M178 105 l 0 18 l -8 4 l 16 4 l -16 4 l 16 4 l -16 4 l 16 4 l -8 4 l 0 18");
  var line=r.path("M178 123 l -8 4 l 16 4 l -16 4 l 16 4 l -16 4 l 16 4 l -8 4");
  var line=r.path("M178 105 l 20 0 l 4 8 l 4 -16 l 4 16 l 4 -16 l 4 16 l 4 -16 l 4 8 l 35 0 l 4 8 l 4 -16 l 4 16 l 4 -16 l 4 16 l 4 -16 l 4 8 l 30 0 l 0 95");
  var line=r.circle(319,200,3,3).attr({fill:"black"});
  var line=r.path("M254 175 l 0 50"+"M254 175 l 40 25"+"M254 225 l 40 -25"+"M254 175 l 0 50"+"M254 175 l 40 25"+"M254 225 l 40 -25");
  var line=r.path("M294 200 l 70 0"+"M234 105 l 0 80 l 20 0");
  var t=r.text(90,90,"+","+").attr({'font-size':16});
  var t=r.text(90,115,"-","-").attr({'font-size':16});
  var t=r.text(20,70,"V1:").attr({'font-size':12});
  var t=r.text(20,330,"V2:").attr({'font-size':12});
  var t=r.text(160,260,"R1:").attr({'font-size':12});
  var t=r.text(160,140,"R1:").attr({'font-size':12});
  var t=r.text(210,90,"R2:").attr({'font-size':12});
  var t=r.text(210,312,"R2:").attr({'font-size':12});
  var t=r.text(280,90,"R3:").attr({'font-size':12});
  var t=r.text(280,310,"R3:").attr({'font-size':12});
  var t=r.text(150,200,"Rgain:").attr({'font-size':12});
  
  
  //second half
  var line=r.path("M84 270 l 0 50"+"M84 270 l 40 25"+"M84 320 l 40 -25"+"M84 270 l 0 50"+"M84 270 l 40 25"+"M84 320 l 40 -25");
  var line=r.path("M64 230 l 0 50 l 20 0"+"M64 230 l 90 0");
  var line=r.path("M124 295 l 30 0");
  var circle=r.circle(30,310,3,3);
  var line=r.path("M34 310 l 50 0");
  var line=r.path("M154 230 l 25 0"+"M154 295 l 25 0");
  var circle=r.circle(157,230,3,3).attr({fill:"black"});
  var circle=r.circle(157,295,3,3).attr({fill:"black"});
  var line=r.path("M178 230 l 0 18 l -8 4 l 16 4 l -16 4 l 16 4 l -16 4 l 16 4 l -8 4 l 0 18");
  var line=r.path("M178 248 l -8 4 l 16 4 l -16 4 l 16 4 l -16 4 l 16 4 l -8 4");
  //joint first half and second half 
  var line=r.path("M178 166 l 0 18 l -8 4 l 16 4 l -16 4 l 16 4 l -16 4 l 16 4 l -8 4 l 0 18");
  var line=r.path("M178 184 l -8 4 l 16 4 l -16 4 l 16 4 l -16 4 l 16 4 l -8 4");
  var line=r.path("M178 295 l 20 0 l 4 8 l 4 -16 l 4 16 l 4 -16 l 4 16 l 4 -16 l 4 8 l 35 0 l 4 8 l 4 -16 l 4 16 l 4 -16 l 4 16 l 4 -16 l 4 8 l 40 0 l 0 40");
  var line=r.path("M234 215 l 0 80"+"M234 215 l 20 0");
  var line=r.path("M308 335 l 40 0"+"M313 340 l 30 0"+"M318 345 l 20 0"+"M308 335 l 40 0"+"M313 340 l 30 0"+"M318 345 l 20 0");
  var line=r.circle(367,200,3,3);
  var t=r.text(90,280,"-","-").attr({'font-size':16});
  var t=r.text(90,305,"+","+").attr({'font-size':16});
  var t=r.text(260,185,"-","-").attr({'font-size':16});
  var t=r.text(260,210,"+","+").attr({'font-size':16});
  var t=r.text(350,190,"Vout:");
}		
