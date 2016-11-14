(function() {
  'use strict';

  window.thoughter = window.thoughter || {};
  $('main').hide();
    window.addEventListener('hashchange', function() {
      $('main').hide();
        console.log("I'm in here!");
      $(window.location.hash).show();

      if(window.location.hash === '#recent-thought'){
        window.thoughter.retrieveAllThoughts()
        .done(function successHandler(data){
          console.log(data, 'nav success');
          window.thoughter.addThoughtsToRecent(data);
        });
      }
  });


}());
