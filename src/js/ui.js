(function() {
  'use strict';

  window.thoughter = window.thoughter || {};
  window.thoughter.newPost = function newPost(thought) {


  $('main').hide();

    window.addEventListener('hashchange', function() {
    $('main').hide();
    console.log("I'm in here!");
    $(window.location.hash).show();
  });




}());
