/*
Author : Subh Kriti A.
Date : 1/9/2011
i-Value Bridge Software Solutions
*/
jQuery(function()
	{
		if($.browser.msie){
			document.write("The existing version of Internet Explorer is not supported");
			document.write("<A href='http://www.mozilla.com/en-US/products/download.html'>Click on the  Link :</A>");
		}else{
		// options are all pretty self explanitory... angles are all in radians
		Array.prototype.unique = function() {
			var a = [], l = this.length;
			  for(var i=0; i<l; i++) {
				for(var j=i+1; j<l; j++)
					if (this[i] === this[j]) j = ++i;
				a.push(this[i]);
			  }
			  return a;
		};
		jQuery('div.imgRotator').imgRotator({
				startRotation:60,
				dragstart:function(angle){
				
				},
				dragfinish:function(angle){
				
				},
				drag:function(angle){
				
				var pie = angle;
				var p = pie.toFixed(2);
				var count = [];
				var lastVal= 0;
				if(p >= 60.00 && p <= 60.10){
					count.push(60);
					count = count.unique();
					$('#angtxt').val(count.pop());
					changeFunc();
				}else if(p >= 60.11 && p <= 60.20){
					count.push(61);
					count = count.unique();
					$('#angtxt').val(count.pop());
					changeFunc();
				}else if(p >= 60.21 && p <= 60.30){
					count.push(62);
					count = count.unique();
					$('#angtxt').val(count.pop());
					changeFunc();
				}else if(p >= 60.31 && p <= 60.40){
					count.push(63);
					count = count.unique();
					$('#angtxt').val(count.pop());
					changeFunc();
				}else if(p >= 60.41 && p <= 60.50){
					count.push(64);
					count = count.unique();
					changeFunc();
					$('#angtxt').val(count.pop());
				}else if(p >= 60.51 && p <= 60.60){
					count.push(65);
					count = count.unique();
					$('#angtxt').val(count.pop());
					changeFunc();
				}else if(p >= 60.61 && p <= 60.70){
					count.push(66);
					count = count.unique();
					$('#angtxt').val(count.pop());
					changeFunc();
				}else if(p >= 60.71 && p <= 60.80){
					count.push(67);
					count = count.unique();
					$('#angtxt').val(count.pop());
					changeFunc();
				}else if(p >= 60.81 && p <= 60.90){
					count.push(68);
					count = count.unique();
					$('#angtxt').val(count.pop());
					changeFunc();
				}else if(p >= 61.01 && p <= 61.10){
					count.push(69);
					count = count.unique();
					$('#angtxt').val(count.pop());
					changeFunc();
				}else if(p >= 61.11 && p <= 61.20){
					count.push(70);
					count = count.unique();
					$('#angtxt').val(count.pop());
				}else if(p >= 61.21 && p <= 61.30){
					count.push(71);
					count = count.unique();
					$('#angtxt').val(count.pop());
					changeFunc();
				}else if(p >= 61.31 && p <= 61.40){
					count.push(72);
					count = count.unique();
					$('#angtxt').val(count.pop());
					changeFunc();
				}else if(p >= 61.41 && p <= 61.50){
					count.push(73);
					count = count.unique();
					$('#angtxt').val(count.pop());
				}else if(p >= 61.51 && p <= 61.60){
					count.push(74);
					count = count.unique();
					$('#angtxt').val(count.pop());
					changeFunc();
				}else if(p >= 61.61 && p <= 61.70){
					count.push(75);
					count = count.unique();
					$('#angtxt').val(count.pop());
					changeFunc();
				}else if(p >= 61.71 && p <= 61.80){
					count.push(76);
					count = count.unique();
					$('#angtxt').val(count.pop());
					changeFunc();
				}else if(p >= 61.81 && p <= 61.90){
					count.push(77);
					count = count.unique();
					$('#angtxt').val(count.pop());
					changeFunc();
				}else if(p >= 61.91 && p <= 62.00){
					count.push(78);
					count = count.unique();
					$('#angtxt').val(count.pop());
					changeFunc();
				}else if(p >= 62.01 && p <= 62.10){
					count.push(79);
					count = count.unique();
					$('#angtxt').val(count.pop());
				}else if(p >= 62.11 && p <= 62.20){
					count.push(80);
					count = count.unique();
					changeFunc();
					$('#angtxt').val(count.pop());
				}else if(p >= 62.21 && p <= 62.30){
					count.push(81);
					count = count.unique();
					$('#angtxt').val(count.pop());
					changeFunc();
				}else if(p >= 62.31 && p <= 62.40){
					count.push(82);
					count = count.unique();
					$('#angtxt').val(count.pop());
					changeFunc();
				}else if(p >= 62.41 && p <= 62.50){
					count.push(83);
					count = count.unique();
					$('#angtxt').val(count.pop());
					changeFunc();
				}else if(p >= 62.51 && p <= 62.60){
					count.push(84);
					count = count.unique();
					$('#angtxt').val(count.pop());
					changeFunc();
				}else if(p >= 62.61 && p <= 62.70){
					count.push(85);
					count = count.unique();
					$('#angtxt').val(count.pop());
					changeFunc();
				}else if(p >= 62.71 && p <= 62.80){
					count.push(86);
					count = count.unique();
					$('#angtxt').val(count.pop());
					changeFunc();
				}else if(p >= 62.81 && p <= 62.90){
					count.push(87);
					count = count.unique();
					$('#angtxt').val(count.pop());
					changeFunc();
				}else if(p >= 62.91 && p <= 63.00){
					count.push(88);
					count = count.unique();
					$('#angtxt').val(count.pop());
					changeFunc();
				}else if(p >= 63.01 && p <= 63.10){
					count.push(89);
					count = count.unique();
					$('#angtxt').val(count.pop());
					changeFunc();
				}else if(p >= 63.11 && p <= 63.20){
					count.push(90);
					count = count.unique();
					$('#angtxt').val(count.pop());
					changeFunc();
				}else if(p >= 63.21 && p <= 63.30){
					count.push(91);
					count = count.unique();
					$('#angtxt').val(count.pop());
					changeFunc();
				}else if(p >= 63.31 && p <= 63.40){
					count.push(92);
					count = count.unique();
					$('#angtxt').val(count.pop());
					changeFunc();
				}else if(p >= 63.41 && p <= 63.50){
					count.push(93);
					count = count.unique();
					$('#angtxt').val(count.pop());
					changeFunc();
				}else if(p >= 63.51 && p <= 63.60){
					count.push(94);
					count = count.unique();
					$('#angtxt').val(count.pop());
					changeFunc();
				}else if(p >= 63.61 && p <= 63.70){
					count.push(95);
					count = count.unique();
					$('#angtxt').val(count.pop());
					changeFunc();
				}else if(p >= 63.71 && p <= 63.80){
					count.push(96);
					count = count.unique();
					$('#angtxt').val(count.pop());
					changeFunc();
				}else if(p >= 63.81 && p <= 63.90){
					count.push(97);
					count = count.unique();
					$('#angtxt').val(count.pop());
					changeFunc();
				}else if(p >= 63.91 && p <= 64.00){
					count.push(98);
					count = count.unique();
					$('#angtxt').val(count.pop());
					changeFunc();
				}else if(p >= 64.01 && p <= 64.10){
					count.push(99);
					count = count.unique();
					$('#angtxt').val(count.pop());
					changeFunc();
				}else if(p >= 64.11 && p <= 64.20){
					count.push(100);
					count = count.unique();
					$('#angtxt').val(count.pop());
					changeFunc();
				}else if(p >= 64.21 && p <= 64.30){
					count.push(101);
					count = count.unique();
					$('#angtxt').val(count.pop());
					changeFunc();
				}else if(p >= 64.31 && p <= 64.40){
					count.push(102);
					count = count.unique();
					$('#angtxt').val(count.pop());
					changeFunc();
				}else if(p >= 64.41 && p <= 64.50){
					count.push(103);
					count = count.unique();
					$('#angtxt').val(count.pop());
					changeFunc();
				}else if(p >= 64.51 && p <= 64.60){
					count.push(104);
					count = count.unique();
					$('#angtxt').val(count.pop());
				}else if(p >= 64.61 && p <= 64.70){
					count.push(105);
					count = count.unique();
					$('#angtxt').val(count.pop());
					changeFunc();
				}else if(p >= 64.71 && p <= 64.80){
					count.push(106);
					count = count.unique();
					$('#angtxt').val(count.pop());
					changeFunc();
				}else if(p >= 64.81 && p <= 64.90){
					count.push(107);
					count = count.unique();
					$('#angtxt').val(count.pop());
					changeFunc();
				}else if(p >= 64.91 && p <= 65.00){
					count.push(108);
					count = count.unique();
					$('#angtxt').val(count.pop());
					changeFunc();
				}
				else if(p >= 64.91 && p <= 65.00){
					count.push(108);
					count = count.unique();
					$('#angtxt').val(count.pop());
					changeFunc();
				}
				else if(p >= 65.01 && p <= 65.10){
					count.push(109);
					count = count.unique();
					$('#angtxt').val(count.pop());
					changeFunc();
				}
				else if(p >= 65.11 && p <= 65.20){
					count.push(110);
					count = count.unique();
					$('#angtxt').val(count.pop());
					changeFunc();
				}
				else if(p >= 65.21 && p <= 65.30){
					count.push(111);
					count = count.unique();
					$('#angtxt').val(count.pop());
					changeFunc();
				}
				else if(p >= 65.31 && p <= 65.40){
					count.push(112);
					count = count.unique();
					$('#angtxt').val(count.pop());
					changeFunc();
				}
				else if(p >= 65.41 && p <= 65.50){
					count.push(113);
					count = count.unique();
					$('#angtxt').val(count.pop());
					changeFunc();
				}
				else if(p >= 65.51 && p <= 65.60){
					count.push(114);
					count = count.unique();
					$('#angtxt').val(count.pop());
					changeFunc();
				}
				else if(p >= 65.61 && p <= 65.70){
					count.push(115);
					count = count.unique();
					$('#angtxt').val(count.pop());
					changeFunc();
				}
				else if(p >= 65.71 && p <= 65.80){
					count.push(116);
					count = count.unique();
					$('#angtxt').val(count.pop());
					changeFunc();
				}
				else if(p >= 65.81 && p <= 65.90){
					count.push(117);
					count = count.unique();
					$('#angtxt').val(count.pop());
					changeFunc();
				}
				else if(p >= 65.91 && p <= 66.00){
					count.push(118);
					count = count.unique();
					$('#angtxt').val(count.pop());
					changeFunc();
				}
		
				},
				disableDrag:false
			});
		}
			
});

