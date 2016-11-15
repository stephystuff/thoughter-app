(function() {
  'use strict';

    window.thoughter = window.thoughter || {};

    $(document).ready(function(){
        if (window.location.hash === '') {
          window.location.hash = '#recent-thoughts';
        }

        $(window).on('hashchange', viewChange);

        viewChange();
    });

    function viewChange(){
      $('section').hide();

      if(window.location.hash === '#recent-thoughts') {
        $('#recent-thoughts').show();
        window.thoughter.getThoughts(10)
          .done(function successHandler(thoughtData){
            window.thoughter.addThoughtsToRecent(thoughtData);
          });
      }

      if(window.location.hash === '#new-thought') {
        $('#recent-thoughts').hide();
        $('#new-thought').show();
      }
    }

}());
