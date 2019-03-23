   $("#bold").click(function(){
  	if ($("textarea").css('font-weight') == '700'){
  	$("#textarea").css("font-weight",'400');	
  	}
  	else{
  	$("#textarea").css("font-weight",'700');
    }
   });

   $("#italic").click(function(){
  	if ($("textarea").css('font-style') == 'italic'){
  	$("#textarea").css("font-style",'normal');	
  	}
  	else{
	$("#textarea").css("font-style","italic");
    }
   });

   $("#underlined").click(function(){
  	if ($("textarea").css('text-decoration') == 'underline'){
  	$("#textarea").css("text-decoration","none");	
  	}
  	else{
	$("#textarea").css("text-decoration","underline");
    }
   });

