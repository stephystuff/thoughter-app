(function() {
  'use strict';

  window.thoughter = window.thoughter || {};

  $('.post-new-thought')
  .on('submit', function postThought (event) {
    event.preventDefault();
    window.thoughter.createThought($('.form-control').val());
    // .done(function changeViews (data){
    //   window.location.hash = '#recent-thoughts';
    // });
  });

}());
