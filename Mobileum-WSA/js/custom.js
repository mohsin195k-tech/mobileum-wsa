$( document ).ready(function() {
$(".cust-btn .deal2-btn").click(function(){
	$(".cust-btn .deal2-btn").removeClass("btn-search");
	$(".cust-btn .deal2-btn").addClass("btn-graph");
	$(this).addClass("btn-search");
	$(this).removeClass("btn-graph");;

});
	// add and remove active class from dashboard menus
	$(".menuboard-wrap").click(function(){
		$('.menuboard-wrap').removeClass('active');
		$(this).addClass('active');
	});

	// add and remove active class from graph mutiple buttons
	$(".mult-btn-wrapper .btn-wrapper").click(function(){
		$(this).parents('.main-grap-wrap').find('.mult-btn-wrapper .btn-wrapper').removeClass('active');
		$(this).addClass('active');
	});


	    $('#tabs li a').addClass('inactive');
	    $('#tab1').removeClass('inactive');

	    $('.tabFrame-container').hide();
	    $('.tabFrame-container:first').show();

	        $('#tabs li a').click(function(){
	            var t = $(this).attr('id');
	          if($(this).hasClass('inactive')){ //this is the start of our condition 
	            $('#tabs li a').addClass('inactive');           
	            $(this).removeClass('inactive');

	            $('.tabFrame-container').hide();
	            $('#'+ t + 'C').fadeIn('slow');
	         }
	    });



$(".p-4").click(function(){
	$(".p-4.bg-white").removeClass("active");
	$(this).addClass("active");
});


// MOHSIN JS



	// DEAL NAVIGATION
	$(".deal2-btn").click(function(){
		$(".deal-1").animate({right:-30},50);
		$(".deal-1").animate({right:800,opacity:0},80);
		$(".deal-1").fadeOut(100 ,function(){

			$(".deal-2").fadeIn(80);
			$(".deal-2").animate({right:0,opacity:1},150);
		});
		$(".circ2").addClass("active");
		$(".bar1").addClass("active");
		$(".circ2 .inner-circ").addClass("active");
	});
	// DEAL NAVIGATION
	$(".deal2-back-btn").click(function(){
		$(".deal-2").animate({right:30},50);
		$(".deal-2").animate({right:-800,opacity:0},80);
		$(".deal-2").fadeOut(100 ,function(){

			$(".deal-1").fadeIn(80);
			$(".deal-1").animate({right:0,opacity:1},150);
		});

		$(".circ2").removeClass("active");
		$(".bar1").removeClass("active");
		$(".circ2 .inner-circ").removeClass("active");

		
	});
	$(".deal3-btn").click(function(){
		$(".deal-2").animate({right:-30},50);
		$(".deal-2").animate({right:800,opacity:0},80);
		$(".deal-2").fadeOut(100 ,function(){
			$(".deal-3").fadeIn(80);
			$(".deal-3").animate({right:0,opacity:1},150);
		});
		$(".circ3").addClass("active");
		$(".bar2").addClass("active");
		$(".circ3 .inner-circ").addClass("active");
	});
	// DEAL NAVIGATION
	$(".deal3-back-btn").click(function(){
		$(".deal-3").animate({right:30},50);
		$(".deal-3").animate({right:-800,opacity:0},80);
		$(".deal-3").fadeOut(100 ,function(){

			$(".deal-2").fadeIn(80);
			$(".deal-2").animate({right:0,opacity:1},150);
		});
		$(".circ3").removeClass("active");
		$(".bar2").removeClass("active");
		$(".circ3 .inner-circ").removeClass("active");	
		
	});

	// DEAL SCENARIO
	$(".more-arrow").click(function(){
		$(this).toggleClass("active");
		$(this).closest(".deal-scen-box").find(".slide-box").slideToggle(function(){
 			if ($(this).is(':visible'))
		        $(this).css('display','flex');
		});
	});



	// MODAL MOHSIN
	$('.list-partner').change(function(){ 
	    var value = $(this).val();
	    if(value=="Suggested Change")
	    {
	    	$('#suggestedModal').modal('show');
	    }
	    else if(value=="Send Message")
	    {
	    	$('#messageModal').modal('show');
	    }
	    else if (value=="group_partner") {
	    	location.href="networkDashboardGroup.html";
	    }
	});

	$(".browse-upload").click(function(){
		$(".upload-input").trigger("click");
	});
	$(".browse-upload").click(function(){
		$(".upload-input").trigger("click");
	});



	// TD click
	$('.table-blue-txt').click(function(){ 
	    var value = $(this).html();
		if(value=="Upload")
		{
			$('#agreeModal').modal('show');
		}
	});

		// TD click
	$('.message-icon').click(function(){ 
			$('#commentModal').modal('show');
	});
	$(".listingscroll").mCustomScrollbar({
	setHeight: 300,
	});
	$(".listingscrollAlarm").mCustomScrollbar({
	setHeight: 490,
	});

	$(".gb-horizontal-scroll").mCustomScrollbar({

        axis:"x",

        advanced:{autoExpandHorizontalScroll:true}

    });

   // CHECKBOX

$("tr th .checkbox-container .custom-check").click(function(){
	if($(this).prop( "checked" ))
	{
		$("tr .checkbox-container .custom-check").prop("checked", true);
		$(".budgetsave-btn1").removeClass("disabled");
	}
	else if(!$(this).prop( "checked" ))
	{

		$("tr .checkbox-container .custom-check").prop("checked",false);
		$(".budgetsave-btn1").addClass("disabled");
	
	}
});
$("tr td .checkbox-container .custom-check").click(function(){
	if($(this).prop( "checked" ))
	{
		$(this).prop("checked", true);
	}
	else if(!$(this).prop( "checked" ))
	{

		$(this).prop("checked",false);
	}
});

    

});



/*=========Start of the deal build scenario==========*/ 

$('.check-open').on('change',function() {
	 if($(this).is(":checked")) {
        $(".deal-bottom-compare").css({"display":"block"});
        $(".n-orange-fr").hide();
        $(".deal-bottom-compare a").addClass("not-active");
    } else {
        $(".deal-bottom-compare").css({"display":"none"});
    }
});

$('.check-open2').on('change',function() {
	 if($(this).is(":checked")) {
        $(".deal-bottom-compare").css({"display":"block"});
        $(".n-orange-fr").show();
        $(".deal-bottom-compare a").removeClass("not-active");

    } else {
        $(".deal-bottom-compare").css({"display":"none"});
    }
});

$('.n-close-icon').click(function(){
	$(".deal-bottom-compare").hide();
});


$('.n-imp-scenarios-1').click(function(){
	$(".n-first-scenario").fadeIn();
	$(".n-second-scenario").hide();
	$(".active-square").removeClass("active-square");
	$(this).find(".csr").addClass("active-square");
});

$('.n-imp-scenarios-2').click(function(){
	$(".n-second-scenario").fadeIn();
	$(".n-first-scenario").hide();
	$(".active-square").removeClass("active-square");
	$(this).find(".csr").addClass("active-square");
});


/*=========End of the deal build scenario==========*/    

// ---------- jeelani 25 March

 	  $('.rightTopDropdown').on('click',function(){
          $('#countryPopup').slideToggle('slow');
          $('.countryPopupFlag').slideUp('fast');
          $('.orangeCountryPopupFlag').slideUp('fast');
          $('.settlementCountryPopupFlag').slideUp('fast');
          $('.settlementOrangeCountryPopupFlag').slideUp('fast');

      })
      $('#showCountryFlagPopup').on('click',function(e){
      	 
          $('.countryPopupFlag').slideToggle('slow');
          $('.orangeCountryPopupFlag').slideUp('fast');
          $('#countryPopup').slideUp('fast');
      })

      $('#settlementShowCountryFlagPopup').on('click',function(e){
          e.stopImmediatePropagation();
            e.preventDefault();
          $('.settlementCountryPopupFlag').slideToggle('slow');
          $('.settlementOrangeCountryPopupFlag').slideUp('fast');
          $('#countryPopup').slideUp('fast');

      })

	  $('#settlementShowOrangeFlagPopup').on('click',function(e){
	  	e.stopImmediatePropagation();
            e.preventDefault();
          $('.settlementCountryPopupFlag').slideUp('fast');
          $('.settlementOrangeCountryPopupFlag').slideToggle('slow');
          $('#countryPopup').slideUp('fast');



      })
      

      $('.orangeDropdownTrigger').on('click',function(){
          $('.orangeCountryPopupFlag').slideToggle('slow');
          $('#countryPopup').slideUp('fast');
          $('.countryPopupFlag').slideUp('fast');

      })

      $('.width15').on('click',function(){
          $(this).toggleClass('width15Active');
      })

      $('.whiteButton').on('click',function(){
          $('#countryPopup').slideUp('slow');
          $('.width15').removeClass('width15Active');
      })

      $('.whiteCountryFlag').on('click',function(){
          $('.countryPopupFlag').slideUp('slow');          
          $('.orangeCountryPopupFlag').slideUp('slow');
          $('.width15').removeClass('width15Active');
      })

      //code on mouseover to slide left
      $('.rightTopDropdown').on('mouseenter',function(){
          $('.hoverSlideUl').removeClass('hoverSlideUl').addClass('hoverSlideUIActive');
      })
      $('.rightTopDropdown').on('mouseleave',function(){
          $('.hoverSlideUIActive').removeClass('hoverSlideUIActive').addClass('hoverSlideUl');
      })

      $('#getCountry').on('click',function(){
      		$('.hideFrance').removeClass('hideFrance').addClass('showFrance')
      })
