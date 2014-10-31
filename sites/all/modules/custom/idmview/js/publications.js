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
     
    $('.publications-1').each(function(index) {
      var link = $(this).find("a").attr('href');
      var url = stripTrailingSlash(window.location.pathname);
      var subUrl = url.split("/");
            
      var subLink = link.split("/");
      var trimUrl = subUrl[2];
      var trimLink = subLink[2];
      
      if (typeof trimUrl === "undefined") {
        if (subUrl[1] == 'publications') {
          $( '#publications' ).css( "background-color", "rgb(227, 227, 227" );
        }
      }
      
      //Grab second parameter in string
      var trimUrl2 = subUrl[3];
      var trimLink2 = subUrl[3];
      
      //  LIGHT up Author if we are on any of those subpages
      if ( trimUrl == "author" ) {
        $( '#author' ).css( "background-color", "rgb(227, 227, 227" );
        
        //  Assume there is a third parameter... Light that one up too.
        console.log( "Third parameter is: ", trimUrl2);
        showAuthor();
      }
      
      // If link parameter 2 is set, find that element and light it up.
      if (typeof trimLink2 === 'string') {  
        $( '#' + trimLink2 ).css( "background-color", "rgb(227, 227, 227" );
      }
      //
      //
      //console.log("this is the url: ", url);
      //console.log("this is the link: ", link);
      //console.log("trim URL: ", trimUrl);
      //console.log("trim Link: ", trimLink);
      
      // If link parameter 2 is set, find that element and light it up.
      if (typeof trimLink2 === 'string') {
        console.log("set the background color 1 ...");
        //  Set specified ID to background color
        $( '#' + trimUrl2 ).css( "background-color", "rgb(227, 227, 227" );
      }
             
      if (trimUrl == trimLink) {
        console.log("set the background color...2");
        //$(this).css( "background-color", "rgb(227, 227, 227" );
        if (trimUrl == "research") showTopic();
      }
    });
        

    // TODO: "Over" event is great
    //      The out event not so great. We can't hide the menu if the mouse has moved on that!!!!
    var config = {    
         sensitivity: 3,    
         interval: 10000,     
         timeout: 10000,    
    };    
         
    $( 'li.publications-1' ).hoverIntent(
      function() {
        var type = $(this).find("a").html();
        if (type == 'Author') {
          //do our stuff for Author...
          hideTopic();
          showAuthor();
        }        
        if (type == 'Topic') {
          //do our stuff for research...
          hideAuthor();
          showTopic();
        }
        if (type == 'Publications date') {
          //do our stuff for Software here...
          hideAuthor();
          hideTopic();
        }
      },
      
      function() {
      },
      config
    );
    
    //  This removes sub menu when hoving away from 1st level. 
    $( '.team-menu-wrap' ).hoverIntent(function(){}, hideTopic, function(){});
    
    
    // Show / Remove Author
    function showAuthor(){
      $( 'ul.level-3a').removeClass( "hidden" );
    }
    
    function hideAuthor() {   
      var url = stripTrailingSlash(window.location.pathname);
      var subUrl = url.split("/");
      if (subUrl[2] !== 'research') {
        $( 'ul.level-3a').addClass( "hidden" );
      }
    }    
    
    // Show / Remove Topic
    function showTopic(){
      $( 'ul.level-3c').removeClass( "hidden" );
    }
    
    function hideTopic() {   
      var url = stripTrailingSlash(window.location.pathname);
      var subUrl = url.split("/");
      
      //  Why the condition?
      if (subUrl[2] !== 'research') {
        $( 'ul.level-3c').addClass( "hidden" );
      }
    }
    
    
  });

})(jQuery);

