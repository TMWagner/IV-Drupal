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
        $(".p2_box").mouseenter(hovIn);
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
      $(".views-field-field-profile-picture").hoverIntent(teamIn, function(){});
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
    
//// Superfish code
    //// initialise plugin
    //var example = $('#example').superfish({
    //  //add options here if required
    //});
    //
    //// buttons to demonstrate Superfish's public methods
    //$('.destroy').on('click', function(){
    //  example.superfish('destroy');
    //});
    //
    //$('.init').on('click', function(){
    //  example.superfish();
    //});
    //
    //$('.open').on('click', function(){
    //  example.children('li:first').superfish('show');
    //});
    //
    //$('.close').on('click', function(){
    //  example.children('li:first').superfish('hide');
    //});

//// End Superfish code
//    
    

    
    
/**
 *End Custom Functions
 */
  }
};


})(jQuery, Drupal, this, this.document);
