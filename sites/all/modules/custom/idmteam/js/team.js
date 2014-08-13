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
        


    // TODO: "Over" event is great
    //      The out event not so great. We can't hide the menu if the mouse has moved on that!!!!
    var config = {    
         sensitivity: 3,    
         interval: 10000,     
         timeout: 10000,    
    };    
         
    $( 'li.team-1' ).hoverIntent(
      function() {
        var type = $(this).find("a").html();
        if (type == 'Research') {
          //do our stuff for research
          //$( this ).css( "background-color", "red" );  //Debug only
          showResearch();
        }
        if (type == 'Software') {
          //do our stuff for Software
        }
        //debug
        console.log(type);    
      },
      
      function() {
        //$( this ).css( "background-color", "" );
        //hideResearch();
      },
      config
    );
    
    $( '.team-menu-wrap' ).hoverIntent(function(){}, hideResearch, function(){});
    
    function showResearch(){
      $( 'ul.level-3b').removeClass( "hidden" );
    }
    
    function hideResearch() {   
      var url = stripTrailingSlash(window.location.pathname);
      var subUrl = url.split("/");
      if (subUrl[2] !== 'research') {
        $( 'ul.level-3b').addClass( "hidden" );
      }
    }
    
    
    //Test Code
    $( "li.item-ii" ).find( "li" ).css( "background-color", "red" );
    
  });

})(jQuery);

