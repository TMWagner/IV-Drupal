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
      var link = jQuery(this).find("a").attr('href');
      var url =  window.location.pathname;
      console.log('link: ' + link);
      console.log('URL: ' + url);
      url = stripTrailingSlash(url);
      console.log('URL clean: ' + url);
      //  TODO: Too general
      //  This will light up the box of ANY term is in the string... 
      if (url == link) {
        $(this).css( "background-color", "rgb(227, 227, 227" );
      }
    }); 
    
  });

})(jQuery);