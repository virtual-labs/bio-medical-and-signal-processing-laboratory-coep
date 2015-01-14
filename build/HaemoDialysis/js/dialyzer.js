/*
Author : Subh Kriti Anand
I-Value Bridge software solution
Date : 11/11/11
*/
/* Code for Haemodialysis Principle */ 
 var context;
  var canvas;
  var x=40;
  var y=20;
  var x1=20;
  var y1=25;
  var j=0;
  var flag=0;
  var fls=0;
  var t,c1;
  var y2=40;
  var x2=50;
  var x2=40;
  var y2=40;
  
  // Create balls of Specific Color, Size and speeds
  function Ball(color, radius,dx,dy)
  {
	  this.canvas  = document.getElementById("myCanvas");
	  this.context = canvas.getContext('2d');
	  this.radius  = radius;
	  this.x = x;
	  this.y  = y;
	  this.dx  = dx;
	  this.dy  = dy;
	  this.color   = color;
  }	
	window.onload=function()
	{
		if($.browser.msie){
			document.write("The existing version of Internet Explorer is not supported");
			document.write("<A href='http://www.mozilla.com/en-US/products/download.html'>Click on the  Link :</A>");
		}else{
			initGauge();
			initBall();
		}
	}
 
 Ball.prototype.Create = function ()

  {
  this.context.beginPath();
  this.context.fillStyle = this.color;
  this.context.arc(this.x,this.y,this.radius,0,Math.PI*2,false);
  this.context.fill();
   }
   Ball.prototype.CreateH = function ()

  {
  this.context.beginPath();
  this.context.fillStyle = this.color;
  this.context.arc((this.x)/1.5,this.y,this.radius,0,Math.PI*2,false);
  this.context.fill();
   }
  Ball.prototype.Bounce = function ()
		  {
			
			if(flag==0)
			{
				if (this.x >= (canvas.width - this.radius) || this.x <= this.radius) 
					this.dx *= -1;
					if(this.x >= (canvas.width)/2)
					{
					
						flag=1;
					}
				if (this.y >= (canvas.height - this.radius) || this.y <= this.radius) 
					this.dy *= -1; 
					
			
			}
			else
			{
			
				if (((this.x >= (canvas.width)/2 - this.radius)&& (this.x < (canvas.width) - this.radius) && fls == 0) || this.x <= this.radius) 
				{
					this.dx *= 1;
					fls=0;
			    }
				else
				{	
					fls=1;
					if(this.x >= (canvas.width)/2-this.radius)
					{
						this.dx *=-1;
					}
					else
					{
						fls=0;
					}
				}
				if (this.y >= ((canvas.height)/1.5 - this.radius) || this.y <= this.radius) 
					this.dy *= -1; 
				
			}
		  }
		  
 Ball.prototype.BounceN = function ()
		  {
		  
			  if (this.x >= ((canvas.width) - this.radius) || this.x <= this.radius) 
					this.dx *= -1;
				
			  if (this.y >= (canvas.height - this.radius) || this.y <= this.radius) 
					this.dy *= -1; 
				
		  }

Ball.prototype.BounceH = function ()
		  {
		  
			  if (this.x >= ((canvas.width)/1.5 - this.radius) || this.x <= this.radius) 
					this.dx *= -1;
				
			  if (this.y >= (canvas.height - this.radius) || this.y <= this.radius) 
					this.dy *= -1; 
			
		  }
  function redBalls()
  {								 
		if(y1<canvas2.height-30)
			{							
							context2.beginPath();
							context2.strokeStyle = 'black';
							context2.fillStyle = 'red';
							context2.arc(x1, y1, 18, 0, Math.PI*2, true); 
							context2.fill();
							context2.closePath();							
							context2.beginPath();
							context2.strokeStyle = 'black';
							context2.fillStyle = 'green';
							context2.arc(x2, y2, 14, 0, Math.PI*2, true); 
							context2.fill();
							context2.closePath();													
								y1=y1+50;
								x1=x1+8;								
								y2=y2+50;
								x2=x2+8;								
							console.log("y1: "+y1);		
			}
			if(y1==175)
							{
							    //alert("y1="+y1);
								clearRect(0,0,canvas2.width,canvas2.height);								
							}
			else
				clearTimeout(c1);		
				setTimeout("redBalls()", 500);								
				
  }
  function initBall()
		  {
			  canvas  = document.getElementById("myCanvas");
			  context = canvas.getContext('2d');
			  canvas2  = document.getElementById("myCanva");
			  context2 = canvas2.getContext('2d');
			  // Create an arry to store the balls info
			  Blackballs=[];
			  // BLACK balls just moved in first half
			  Blackballs.push(new Ball('#000000', 8,5,5));
			  Blackballs.push(new Ball('#000000', 8,4,7));
			  Blackballs.push(new Ball('#000000', 8,6,9));
			  
			 // BLACK balls just moved in right half canvas
    		 Blackballs.push(new Ball('#000000', 8,12,10));
			 Blackballs.push(new Ball('#000000', 8,14,13));
			 Blackballs.push(new Ball('#000000', 8,12,14));
			 Blackballs.push(new Ball('#000000', 8,15,16));
			 Blackballs.push(new Ball('#000000', 8,14,12));
			 Blackballs.push(new Ball('#000000', 8,13,15));
			  
			  // ORANGE balls move in all area
			 Blackballs.push(new Ball('#ff6600', 8,16,19));
			 Blackballs.push(new Ball('#ff6600', 8,17,20));
			 Blackballs.push(new Ball('#ff6600', 8,18,25));
			  
			  // REST moved in first half
			 Blackballs.push(new Ball('#ff0000', 18,1,6));
			 Blackballs.push(new Ball('#ff0000', 18,2,8));
			 Blackballs.push(new Ball('#c4ed21', 13,1,10));
			 Blackballs.push(new Ball('#c4ed21', 13,2,12));
			 Blackballs.push(new Ball('#c4ed21', 13,1,13));
			 t= setInterval(drawBall,300);
		}

function drawBall()
		{
			context.clearRect(0,0, 300,300);
			for (i in Blackballs)
			{
				Blackballs[i].x += Blackballs[i].dx;
				Blackballs[i].y += Blackballs[i].dy;
				if(i==0 || i==1 || i==2){
				 	 Blackballs[i].BounceH();
					 Blackballs[i].CreateH();
				}else if(i==12|| i==13||i==14||i==15||i==16||i==17){
					Blackballs[i].Create();	
				}else if(i==9 || i==10 || i==11){
					Blackballs[i].BounceN();
					Blackballs[i].Create();
				}			
				else{
					Blackballs[i].Bounce();
					Blackballs[i].Create();										
				}
		    if(Blackballs[i].y==20)
				{
					clearInterval(t);
					initBall();					
			    }
			
		  }		
}