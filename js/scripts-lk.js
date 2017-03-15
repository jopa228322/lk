var tabItem = $(".tab-item");
var tab = $(".tab");
var validAddUsl = $(".valid-r");
var inValidAddUsl = $(".invalid-r");
var formLcBut = $('#form-lc-but');
var AddNewUslForm = $('.add-new-usl-form');



$(validAddUsl).hide();
$(inValidAddUsl).hide();

$(".link-lk-tours").click(function() {
  $(this).prev()[0].click(); 
});
	
$(tabItem).not(":first").hide();
$(tab).click(function(e) {
	event.preventDefault();
	$(tab).removeClass("active-panel-lk").eq($(this).index()).addClass("active-panel-lk");
	$(tabItem).hide().eq($(this).index()).fadeIn()
}).eq(0).addClass("active-panel-lk"); 



$(formLcBut).on("click", function (e) {
		e.preventDefault();
        var $form = $(".add-new-usl-form");
        $.ajax({
            type: "POST",
            url: "#",
            data: $form.serialize(),
        }).done(function(data) {
        	$(validAddUsl).fadeIn();
        	setTimeout(function(){
                $(".tab-panel-lk:nth-child(4)").removeClass("active-panel-lk");
                $(".tab-panel-lk:nth-child(3)").addClass("active-panel-lk");
                $.when($(".tab-item:nth-child(4)").fadeOut()).then(
                    function() {
                       $(".tab-item:nth-child(3)").fadeIn();
                    }
                );
               
        		}, 2000);
        }).fail(function() {
            console.log('fail');
        	$(inValidAddUsl).fadeIn();
        	setTimeout(function(){
        		$(inValidAddUsl).fadeOut();
        	}, 2000);
        	
        });
         
        return false;
    }); 



