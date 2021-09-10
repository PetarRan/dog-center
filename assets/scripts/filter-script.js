
$("#filter-options :radio").click(function() 
	{
		pageIndex = 0;
		$("#product-list").empty();
		$(".modcont").empty();
		$(".pagination").empty();
		document.querySelector(".pagination").classList.add("nijenacrtan");
       	$(".list-wrapper #product-list li").hide();
       	$("#filter-options :radio:checked").each(function() 
       	{
           $("." + $(this).val()).fadeIn();
		   initOglasi($(this).val());
		   

		});
       
        if($('#filter-options :checkbox').filter(':checked').length < 1) 
        {
        	$(".list-wrapper #product-list li").fadeIn();
        	
        }
        
    });

	
