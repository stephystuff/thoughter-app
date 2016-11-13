(function() {
  'use strict';

  window.thoughter = window.thoughter || {};
  window.thoughter.createThought = createThought;

    function createThought(newThought) {
      $.ajax({
          url:'https://thoughter.herokuapp.com/api/Thoughts',
          method:'POST',
          dataType:'json',
          data:JSON.stringify({'content':newThought}),
          headers:{
            'Content-Type': 'application/json'
          }
      })
      .done(function successHandler(data) {
        console.log('succes!', data);
      })
      .fail(function failHandler(xhr) {
        console.log(xhr, 'try again!');
      });
    }












}());

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
