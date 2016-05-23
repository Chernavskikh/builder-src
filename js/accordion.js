 $(function() {
    var accordion = $('.banners__accordion');
    $( ".banners__accordion--header:first-child").addClass('active');//active 1st header
    accordion.find('.banners__accordion--text:not(:first)').hide();//show 1st text

    accordion.find('.banners__accordion--header').on('click',function(){
    	$(this).next('.banners__accordion--text').toggleClass('active').slideToggle().siblings('.banners__accordion--text:visible').slideUp();
    	$(this).toggleClass('active').siblings('.banners__accordion--header').removeClass('active');
    });
});