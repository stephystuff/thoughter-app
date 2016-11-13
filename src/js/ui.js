(function() {
  'use strict';

  window.thoughter = window.thoughter || {};

  $('main').hide();
    window.addEventListener('hashchange', function() {
      $('main').hide();
        console.log("I'm in here!");
      $(window.location.hash).show();
  });

  $('.post-new-thought')
      .on('submit', function postThought (event) {
        event.preventDefault();
        console.log('submit works');
        window.thoughter.createThought($('.form-control').val());
      });




}());
