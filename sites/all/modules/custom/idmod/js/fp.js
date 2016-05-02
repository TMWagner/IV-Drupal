(function ($) {

//https://www.lullabot.com/articles/understanding-javascript-behaviors-in-drupal
Drupal.behaviors.fp = {
  attach: function (context, settings) {

    /*  Make the panel 2 icons hover active
     *  DEBUG: jQuery('div#fp-nav-research');
     *  jQuery('div#nav2-research').css("background-color", "yellow");
     *
     */
    
		
		
//	New JS
    //$(alert("fp jquery loaded."));
    // TODO: 20160501 Get rid of all of the following nav2 stuff

    $('div#nav2-research').hover(function () {
        $(this).find(".nav2-icon").toggleClass("research-hover");
    });
    
    $('div#nav2-publications').hover(function () {
        $(this).find(".nav2-icon").toggleClass("publications-hover");
    });
    
    $('div#nav2-software').hover(function () {
        $(this).find(".nav2-icon").toggleClass("software-hover");
    });
    
    $('div#nav2-learn').hover(function () {
        $(this).find(".nav2-icon").toggleClass("learn-hover");
    });
    
    $('div#nav2-team').hover(function () {
        $(this).find(".nav2-icon").toggleClass("team-hover");
    });
    
    
    
    
    /*  Make the rotators clickable
     */
    $('div#fp-p1-video').click(function(){
      window.location = '/news/node/132';
    });
    $('div#fp-p1-releases').click(function(){
      window.location = '/software';
    });     
    $('div#fp-p1-shapes').click(function(){
      window.location = '/about';
    });  
    $('div#fp-p1-challenges').click(function(){
      window.location = '/news/node/142';
    });
    $('div#fp-p1-guinea').click(function(){
      window.location = '/news/node/154';
    });
    
    /*  Make the panel 2 nav  clickable
     *
     */
    $('div#fp-nav-research').click(function(){
      window.location = '/research';
    });
    $('div#fp-nav-publications').click(function(){
      window.location = '/publications';
    });
    $('div#fp-nav-software').click(function(){
      window.location = '/software';
    });
    $('div#fp-nav-team').click(function(){
      window.location = '/team';
    });    

  }
};

})(jQuery);