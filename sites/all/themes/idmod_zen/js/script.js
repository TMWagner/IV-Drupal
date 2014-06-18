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
    
    
/**
 *End Custom Functions
 */
  }
};


})(jQuery, Drupal, this, this.document);
