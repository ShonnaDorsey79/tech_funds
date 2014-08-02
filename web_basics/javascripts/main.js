$(".circle").on("click", function(){
    $(this).fadeOut(1500);
});

  $(".circle").on("mouseover",function(){
    $(this).css("background","red")
  });

  $(".circle").on("mouseout", function(){
  	var $theCircle = $(this);

  	if($theCircle.hasClass( "odd" )){
  		$(this).css ("background", "black");
  		}
  		else{
  			$(this).css("background", "white");

  	 	}
  });


  

