(function() {
  'use strict';

  window.thoughter = window.thoughter || {};

  $('.new-post')
      .on('submit', function submitThought(event) {
        event.preventDefault();
        console.log('this works');
         $.ajax({
            url: 'https://thoughter.herokuapp.com/api/Thoughts',
            method: 'POST',
            data: JSON.stringify({'content':newPost}),
            headers: {'Content-Type': 'application/json'}
      })
      .done(function successHandler(data) {
        $('.panel-info');
        console.log('hey', data);
      })
      .fail(function failHandler(data) {
        console.log('try again!', data);
      });
    });












}());
