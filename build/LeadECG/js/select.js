$(document).ready(function(){
	$('#waveform').css("position","absolute");
	
	if($.browser.msie){
		document.write("The existing version of Internet Explorer is not supported");
		document.write("<A href='http://www.mozilla.com/en-US/products/download.html'>Click on the  Link :</A>");
	}else{
		
		$('#leadtype option').click(function(){
			var val = $(this).attr('value');
			$('#wave1zero').css('visibility','hidden');
			$('#wave2zero').css('visibility','hidden');
			$('#wave3zero').css('visibility','hidden');
			//$('#positive').css('visibility',)
			$('#amplifier').css('visibility','visible');
			$('#jackbox').css('visibility','hidden');
			$('#recorder').css('visibility','hidden');
			//$('.jpoint').css('')
			$('#axisY > svg > text').css('visibility','visible');
			//alert(val);
			if(val=='leadtype'){
				$('#subtype option').remove();
				$('#subtype').append('<option value="subtype">--Select Subtype--</option>');
			}else if(val=='BLL'){
				$('#subtype option').remove();
				$('#subtype').append('<option value="subtype">--Select Subtype--</option>');
				$('#subtype').append('<option value="lead1">Lead I</option>');
				$('#subtype').append('<option value="lead2">Lead II</option>');
				$('#subtype').append('<option value="lead3">Lead III</option>');
			}else if(val=='ULL'){
				$('#subtype option').remove();
				$('#subtype').append('<option value="subtype">--Select Subtype--</option>');
				$('#subtype').append('<option value="avr">aVR</option>');
				$('#subtype').append('<option value="avl">aVL</option>');
				$('#subtype').append('<option value="avf">aVF</option>');
			}else if(val=='UCL'){
				$('#subtype option').remove();
				$('#subtype').append('<option value="subtype">--Select Subtype--</option>');
				$('#subtype').append('<option value="v1">V1</option>');
				$('#subtype').append('<option value="v2">V2</option>');
				$('#subtype').append('<option value="v3">V3</option>');
				$('#subtype').append('<option value="v4">V4</option>');
				$('#subtype').append('<option value="v5">V5</option>');
				$('#subtype').append('<option value="v6">V6</option>');
			}
		});
	}
});