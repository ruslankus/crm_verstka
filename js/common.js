$(document).ready(function(e) {
    
	$(".date-picker").datepicker();
	
	$(".date-picker").on("change", function () {
		var id = $(this).attr("id");
		var val = $("label[for='" + id + "']").text();
		$("#msg").text(val + " changed");
	});	
	
	$('.ops_link').click(function(e) {
        console.log('test');
		
    });//click
	
});

