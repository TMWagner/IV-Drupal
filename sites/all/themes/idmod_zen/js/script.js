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
    
      /*  Animate Research page boxes
       *  Start with background color
       *  Then move next div up over it.
       */
      $(function() {
        $(".five_box_960row_block").hoverIntent(fiveBoxHovIn, function(){});
        //Roll "rollup" back down
        $(".rollup").mouseleave(fiveBoxHovOut);   
      });
      
      function fiveBoxHovIn(evt) {
        // Get the class of the box
        $box_class = $(this).attr('id');
        console.log('>>> ID is: ', $box_class);
        // Rollup related info. 
        $(this).find(".rollup").animate({
            top: "0px",
            height: "180px",  
          }, 200 );
        
        // Find related content div and display it.
        //  NOTE (2015/03/25): box class = "numercial..." is the old name for Applied Math
        if ($box_class == 'hiv_box' ) {
          $('#hiv_content').removeClass("hidden");
          $('#intro_content').addClass("hidden");
          $('#numerical_content').addClass("hidden");
          $('#malaria_content').addClass("hidden");
          $('#polio_content').addClass("hidden");
          $('#tuberculosis_content').addClass("hidden");
        }
        if ($box_class == 'numerical_box' ) {
          $('#intro_content').addClass("hidden");
          $('#hiv_content').addClass("hidden");
          $('#numerical_content').removeClass("hidden");
          $('#malaria_content').addClass("hidden");
          $('#polio_content').addClass("hidden");
          $('#tuberculosis_content').addClass("hidden");
        }        
        if ($box_class == 'malaria_box' ) {
          $('#malaria_content').removeClass("hidden");
          $('#intro_content').addClass("hidden");
          $('#hiv_content').addClass("hidden");
          $('#numerical_content').addClass("hidden");
          $('#polio_content').addClass("hidden");
          $('#tuberculosis_content').addClass("hidden");
        }
        if ($box_class == 'polio_box' ) {
          $('#polio_content').removeClass("hidden");
          $('#intro_content').addClass("hidden");
          $('#malaria_content').addClass("hidden");
          $('#hiv_content').addClass("hidden");
          $('#numerical_content').addClass("hidden");
          $('#tuberculosis_content').addClass("hidden");
        }
        if ($box_class == 'tuberculosis_box' ) {
          $('#tuberculosis_content').removeClass("hidden");
          $('#intro_content').addClass("hidden");
          $('#polio_content').addClass("hidden");
          $('#malaria_content').addClass("hidden");
          $('#hiv_content').addClass("hidden");
          $('#numerical_content').addClass("hidden");
        }

      }
      
      function fiveBoxHovOut(evt) {
        $(".rollup").animate({
            top: "180px",
            height: "0px",  
          }, 200 );
      }      
      
      /* This needs to match CSS */           
      function hovOut(evt) {
        $(".p2_rollup").animate({
            top: "265px",
            height: "50px",  
          }, 200 );
      }
      
      $(".p2_rollup.research").click(function(){
        window.location = 'research';
      });
      $(".p2_rollup.publications").click(function(){
        window.location = 'node/71';
      });      
      
      $(".p2_rollup.software").click(function(){
        window.location = 'software';
      });      
      
      
    
    $("#accordion > li > div").hover(function() {
      if(false == $(this).next().is(':visible')) {
        $('#accordion ul').slideUp(300);
      }
      $(this).next().slideToggle(300);
    });
    
    

    // This selector and 2 functions are for "related Team" pics left sidebar. Can we generalize this function?
    // >>> Refactor this code
    

    $(function() {
      $(".block .views-field.views-field-field-profile-picture").hoverIntent(side220SideIn, function(){});
    });
    
    function side220SideIn(evt) {
      $(this).next("div").animate({
          top: "0px",
          height: "180",
        }, "slow" );
    }
    //Move the top back town and height back to 0 to hide it
    function teamOut(evt) {
      $(".team-name-info").animate({
          top: "170px",
          height: "0px",  
        }, 200 );
    }
    
    // >>> END refactor code
    
    
    $(function() {
      $(".view-team .views-field-field-profile-picture").hoverIntent(teamIn, function(){});
      $(".team-name-info").mouseleave(teamOut);   
    });
    
    function teamIn(evt) {
      $(this).next("div").animate({
          top: "0px",
          height: "155",
        }, "slow" );
    }
         

    
    function stripTrailingSlash(str) {
      if(str.substr(-1) == '/') {
          return str.substr(0, str.length - 1);
      }
      return str;
    }     
    
    
    //Light up the appropropriate menu block to show it is "active"
    //TODO: We want to only consider the a tags in main nav... not secondary
    $('.sf-level1').each(function(index) {
      var link = $(this).find("a").attr('href');
      var url = stripTrailingSlash(window.location.pathname);
      var subUrl = url.split("/");
      var subLink = link.split("/");
      var trimUrl = subUrl[1];
      var trimLink = subLink[1];  
      //  TODO: Too general
      //  This will light up the box of ANY term is in the string...
      //  In this case, we need to take the 1st term in the path name
      if (trimUrl == trimLink) {
        $(this).css( "background-color", "rgb(82, 91, 92)" );
      }
    });
    
    
    
    $(function() {
      
      $(".author-list .views-field").not(':first').hoverIntent(teamMemIn, teamMemOut, function(){});
            
    });
    
    function teamMemIn(evt) {

      
      // Change the opacity of the first element to shaded and the target element to 100%
      $(this).addClass( "selected-author" );
      $(".author-list .views-row-first .views-field").css( "opacity", "0.4" );
      
      
      defaultAuthor = $(".default-author-data");
      defaultAuthorText = defaultAuthor.html();
         
      // Save new author info..
      swapAuthor = $(this).next().find( ".swap-author-data" );
      swapAuthorText = swapAuthor.html();
      defaultAuthor.html( swapAuthorText );

    }
    function teamMemOut(evt) {
      
      $(this).removeClass( "selected-author" );
      $(".author-list .views-row-first .views-field").css( "opacity", "1.0" );
      
      // Reset default author with default author data text.
      // Note: we are using TEXT (HTML) here - not an object. 
      $( ".default-author-data" ).html( defaultAuthorText );
    }
      
      
    
/**
 *End Custom Functions
 */
  }
};


})(jQuery, Drupal, this, this.document);
