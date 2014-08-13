/**
 * @file
 * Javascript functionality for Display Suite's administration UI.
 *
 * TODO: We need to grab just one... The last term in the URL.
 *  Strip backward to the last '/'
 */

//Wrap the whole mess in the following function to make it work in Drupal
(function($) {

  $(document).ready(function () {
    
    
    function stripTrailingSlash(str) {
        if(str.substr(-1) == '/') {
            return str.substr(0, str.length - 1);
        }
        return str;
    }    

       
    $('.team-1').each(function(index) {
      var link = $(this).find("a").attr('href');
      var url = stripTrailingSlash(window.location.pathname);
      var subUrl = url.split("/");
      var subLink = link.split("/");
      var trimUrl = subUrl[2];
      var trimLink = subLink[2];
      //  TODO: Too general
      //  This will light up the box of ANY term is in the string...
      //  In this case, we need to take the 1st term in the path name
      if (trimUrl == trimLink) {
        $(this).css( "background-color", "rgb(227, 227, 227" );
        if (trimUrl == "research") showResearch();
      }
    });
        
    
    function showResearch(){
      $( 'ul.level-3b').removeClass( "hidden" );
    }
    
  });

})(jQuery);

