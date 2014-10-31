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
      
      
      //  LIGHT up Author if we are on any of those subpages
      if ( trimUrl == "topic" ) {
        $( '#topic' ).css( "background-color", "rgb(227, 227, 227" );
        
        //  Assume there is a third parameter... Light that one up too.
        console.log( "Third parameter is: ", trimUrl2);
        showTopic();
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
    
    //  This will fire when we move the mouse away from any 1st Level item.
    //    Hide topic sublevels Unless it should be there to support the menu path.
    //    This should function exactly like the function above - except we cant just show/hide,
    //    we have to figure out which one to show/hide based on the path. 
    //$( '.team-menu-wrap' ).hoverIntent(function(){}, hideTopic, function(){});
    
    $( '.team-menu-wrap' ).hoverIntent(
      function(){},
      
      //  Instead of just hideTopic
      function() {
        $('.publications-1').each(function(index) {
          //  Begin Paste 
          var link = $(this).find("a").attr('href');
          var url = stripTrailingSlash(window.location.pathname);
          var subUrl = url.split("/");
                
          var subLink = link.split("/");
          var trimUrl = subUrl[2];
          var trimLink = subLink[2];
             
          console.log("this is the url: ", url);
          console.log("trim URL: ", trimUrl);
          
          if (typeof trimUrl === "undefined") {
            hideAuthor();
            hideTopic();
          }
          
          if (trimUrl == "author") {
            showAuthor();
          }
          
          if (trimUrl == "topic") {
            hideAuthor();
            showTopic();
          }
          
          
          //  End Paste
          
        });
        
      }
      
    );
    
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

