$(document).ready(function(){

    jQuery('button').click(function(){
      jQuery('.lightbox').fadeIn('fast');
      jQuery('.lightbox-bg').fadeIn('slow');
    });

       jQuery('.lightbox-bg').click(function(){
      jQuery('.lightbox').fadeOut('fast');
      jQuery('.lightbox-bg').fadeOut('slow');
    });

});