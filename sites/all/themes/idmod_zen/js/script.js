/**
 * @file
 * A JavaScript file for the theme.
 *
 * In order for this JavaScript to be loaded on pages, see the instructions in
 * the README.txt next to this file.
 */

// JavaScript should be made compatible with libraries other than jQuery by
// wrapping it with an "anonymous closure". See:
// - https://drupal.org/node/1446420
// - http://www.adequatelygood.com/2010/3/JavaScript-Module-Pattern-In-Depth
(function ($, Drupal, window, document, undefined) {


// To understand behaviors, see https://drupal.org/node/756722#behaviors
Drupal.behaviors.my_custom_behavior = {
  attach: function(context, settings) {

/**
 * Begin Custom Functions
 */


      $('#tile-wrap').masonry({
        gutter: 10,
        itemSelector: '.research-areas'
      });

      var color = '';
      var rollupColor = '';
      var replaceColor = '';
      var position = '';
      $(".p2_box").each(function() {
        color = $(this).css( "background-color" )
        rollupColor = $(this).next(".p2_rollup").css("background-color");


        console.log('Base Color init: ', color);
        replaceColor = color.replace(/\)/, ', 0.7)');
        replaceColor = replaceColor.replace('rgb', 'rgba');
        console.log('Rollup color: ', rollupColor);
        console.log('New Rollup color from base: ' + replaceColor);

        $(this).next(".p2_rollup").css("background-color", replaceColor);

      });


      $(function() {
        $(".p2_box").hoverIntent(hovIn, function(){});
        $(".p2_rollup").mouseleave(hovOut);   
      });
      
      function hovIn(evt) {
        $(this).next("div").animate({
            top: "0px",
            height: "320px",  
          }, 200 );
      }
           
      function hovRollup(evt) {
        $(this).animate({
            top: "0px",
            height: "330px",  
          }, 200 );
      }
                
      function hovOut(evt) {
        $(".p2_rollup").animate({
            top: "260px",
            height: "60px",  
          }, 200 );
      }
    
    $("#accordion > li > div").hover(function() {
      if(false == $(this).next().is(':visible')) {
        $('#accordion ul').slideUp(300);
      }
      $(this).next().slideToggle(300);
    });
    
    
    $(function() {
      $(".view-team .views-field-field-profile-picture").hoverIntent(teamIn, function(){});
      $(".team-name-info").mouseleave(teamOut);   
    });
    
    function teamIn(evt) {
      $(this).next("div").animate({
          top: "0px",
          height: "165px",
        }, "slow" );
    }
         
    //Move the top back town and height back to 0 to hide it
    function teamOut(evt) {
      $(".team-name-info").animate({
          top: "170px",
          height: "0px",  
        }, 200 );
    }
    
    //Light up the appropropriate menu block to show it is "active"
    $('.sf-level1').each(function(index) {
      var link = $(this).find("a").attr('href');
      var url =  window.location.href;
       
      if (url.indexOf(link) >=0) {
        $(this).css( "background-color", "rgb(82, 91, 92" );
      }
    });
    
    
    var defaultAuthor = null;
    var swapAuthor = null;
    $(function() {
      defaultAuthor = $(".default-author-data");
      defaultAuthorText = defaultAuthor.html();
      $(".author-list .views-field").not(':first').hoverIntent(teamMemIn, teamMemOut, function(){});
            
    });
    
    function teamMemIn(evt) {
      // Change the opacity of the first element to shaded and the target element to 100%
      $(this).addClass( "selected-author" );
      $(".author-list .views-row-first .views-field").css( "opacity", "0.4" );
      
      //Change color of target div to find it.... :)
      
      //$(this).next().find( ".swap-author-data" ).css( "border", "1px solid red");
      // Save new author info..
      swapAuthor = $(this).next().find( ".swap-author-data" );

      swapAuthorText = swapAuthor.html();

      defaultAuthor.html( swapAuthorText );
      //swapAuthor.css( "border", "1px solid black");
      //defaultAuthor.css( "border", "1px solid white");
    
      
      // Find the content we are going to use as replacment
      // Insert appropriately (make sure we mark it so we can make it go away with mouse leave.
      //  - OR, are we going to replace some text... that would be easier, I think.
      
      //$(this).next("div").animate({
      //    top: "0px",
      //    height: "165px",
      //  }, "slow" );
    }
    function teamMemOut(evt) {
      $(this).removeClass( "selected-author" );
      $(".author-list .views-row-first .views-field").css( "opacity", "1.0" );
      //debug test code
      //defaultAuthor.css( "border", "1px solid blue");
      //swapAuthor.css( "border", "1px solid black");
      
      //$( ".swap-author-data" ).css( "border", "1px solid red");
      $( ".default-author-data" ).html( defaultAuthorText );
      
      //End Debug test code
    }
 
    
    
    
/**
 *End Custom Functions
 */
  }
};


})(jQuery, Drupal, this, this.document);
