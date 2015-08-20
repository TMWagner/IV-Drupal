(function ($) {

//https://www.lullabot.com/articles/understanding-javascript-behaviors-in-drupal
Drupal.behaviors.fp = {
  attach: function (context, settings) {

    /*  Make the panel 2 icons hover active
     *  DEBUG: jQuery('div#fp-nav-research');
     *  jQuery('div#fp-nav-research').css("background-color", "yellow");
     *
     */
    $('div#fp-nav-research').hover(function(){
      $(this).find("img").attr("src", "/sites/default/files/fp_nav_research_hover.png");
      $(this).find("a").css("color", "black");
        }, function(){
      $(this).find("img").attr("src", "/sites/default/files/fp_nav_research.png");
      $(this).find("a").css("color", "#0073A3");
    });
    
    $('div#fp-nav-publications').hover(function(){
      $(this).find("img").attr("src", "/sites/default/files/fp_nav_publications_hover.png");
      $(this).find("a").css("color", "black");
        }, function(){
      $(this).find("img").attr("src", "/sites/default/files/fp_nav_publications.png");
      $(this).find("a").css("color", "#0073A3");
    });
    
    $('div#fp-nav-software').hover(function(){
      $(this).find("img").attr("src", "/sites/default/files/fp_nav_software_hover.png");
      $(this).find("a").css("color", "black");
        }, function(){
      $(this).find("img").attr("src", "/sites/default/files/fp_nav_software.png");
      $(this).find("a").css("color", "#0073A3");
    });
    
    $('div#fp-nav-team').hover(function(){
      $(this).find("img").attr("src", "/sites/default/files/fp_nav_team_hover.png");
      $(this).find("a").css("color", "black");
        }, function(){
      $(this).find("img").attr("src", "/sites/default/files/fp_nav_team.png");
     $(this).find("a").css("color", "#0073A3");
    });
    
    
    /*  Make the rotators clickable
     */
    $('div#fp-p1-video').click(function(){
      window.location = '/news/node/132';
    });
    $('div#fp-p1-reports').click(function(){
      window.location = '/news/node/131';
    });     
    $('div#fp-p1-shapes').click(function(){
      window.location = '/about';
    });  
    $('div#fp-p1-releases').click(function(){
      window.location = '/ias';
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