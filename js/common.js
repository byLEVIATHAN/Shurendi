/*
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
[ COMMON SCRIPTS ]
AUTHOR :VIJAYAN PP
PROJECT :NIM
VERSION : 1.1
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
*/

(function($) {
	"use strict";

	$(window).load(function(){
		
	App.loader();
	});

	var App={
            init:function()
            {
              App.typing();
              App.owlTestimonial();
              App.stats();
              App.menuAnimation();
              App.navigate();
              App.contactsubmit();
              App.imagepopup();
             	
            },
        loader:function()
	{
                         
	 $("div.preloader").fadeOut("slow");                         
                         
	},
        typing:function()
        {
    $(".main-element").each(function(){
    var $this = $(this);
    $this.typed({
    strings: $this.attr('data-elements').split(','),
    typeSpeed: 100, // typing speed
    backDelay: 3000 // pause before backspacing
    });
});
        },
        
       
    
    owlTestimonial:function()
    {
        $("#testimonial").owlCarousel({
        navigation : false, // Show next and prev buttons
        slideSpeed : 300,
        paginationSpeed : 400,
        singleItem:true
        });
    },
    stats:function()
   {
        $('.our-stats-box').each(function () {
        $('.our-stat-info').fappear(function (direction) {
            $('.stats').countTo();
        }, {offset: "100px"});
    });
   },
   menuAnimation:function()
   {
       $(window).scroll(function()
       {
       var top_v=$(window).scrollTop();
       var themecolor="#f8198d";
      if(top_v>=30)
      {
        
          $(".nim-menu").css({height:"80px",padding:"15px",background:"#fff",boxShadow:"2px 2px 3px 3px rgba(0,0,0,0.3"});
          $(".nim-menu.navbar-default .navbar-nav > li > a,a.navbar-brand").css("color","#000");
           $(".nim-menu.navbar-default .navbar-nav > li > a").hover(function(){$(this).css("color",themecolor)},function(){$(this).css("color","#000")})
       }
      else
      {
          $(".nim-menu").css({height:"0px",padding:"15px",background:"#000",boxShadow:"2px 2px 3px 3px rgba(0,0,0,0.3"});
          $("a.navbar-brand").css("color","#fff");          
          $(".nim-menu.navbar-default .navbar-nav > li > a").css("color","#fafafa");
          $(".nim-menu.navbar-default .navbar-nav > li > a:hover").css("color",themecolor);
          $(".nim-menu.navbar-default .navbar-nav > li > a").hover(function(){$(this).css("color",themecolor)},function(){$(this).css("color","#fafafa")})
      }
       }
       )
   },
   
   
    navigate:function()
    {
        $('a.page-scroll').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html,body').animate({
              scrollTop: target.offset().top - 40
            }, 900);
            return false;
          }
        }
      });

    },
    
    imagepopup:function()
    {
        $('.show-image').magnificPopup({type: 'image'});
    },
   
   contactsubmit:function()
   {
       $('#mc-form').submit(function(e){
		var form = $(this);
		e.preventDefault();		
		$.ajax({
			type: 'POST',
			url : 'php/sendmail.php',
			data: form.serialize(),
			success: function(data){
				form.find('.form-message').html(data).fadeIn();
		
				form.find('.btn').prop('disabled', true);
					
				if ($(data).is('.send-true')){
					setTimeout(function(){
						form.trigger('reset');
						
						form.find('.btn').prop('disabled', false);
						
						form.find('.form-message').fadeOut().delay(500).queue(function(){
							form.find('.form-message').html('').dequeue();
						});
					}, 2000);
				} else {
					form.find('.btn').prop('disabled', false);
				}
			}
		});
  });
   },
			
        };
        App.init();
    
    
    $(function(){ /* to make sure the script runs after page load */

	$('.item').each(function(event){ /* select all divs with the item class */
	
		var max_length = 150; /* set the max content length before a read more link will be added */
		
		if($(this).html().length > max_length){ /* check for content length */
			
			var short_content 	= $(this).html().substr(0,max_length); /* split the content in two parts */
			var long_content	= $(this).html().substr(max_length);
			
			$(this).html(short_content+
						 '<a href="#" class="read_more"><br/>Read More</a>'+
						 '<span class="more_text" style="display:none;">'+long_content+'</span>'); /* Alter the html to allow the read more functionality */
						 
			$(this).find('a.read_more').click(function(event){ /* find the a.read_more element within the new html and bind the following code to it */
 
				event.preventDefault(); /* prevent the a from changing the url */
				$(this).hide(); /* hide the read more button */
				$(this).parents('.item').find('.more_text').show(); /* show the .more_text span */
		 
			});
			
		}
		
	});
 
 
});

    
    

})(jQuery);



/*+++++++++++++++++++++++++COMMON FUNCTIONS++++++++++++++++++++++++++++*/

/*KENBERG SLIDER*/

 var fullscreenslider=function()
  {
      $("section.main-heading").vegas({
	delay: 3000,
    slides: [
        { src: "images/bak3.jpg" },
        { src: "images/bak2.jpg" },
        { src: "images/bak3.jpg" },
        { src: "images/bak4.jpg" }
    ],animation: 'kenburns'
});
  }