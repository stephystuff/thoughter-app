(function() {
  'use strict';

  window.thoughter = window.thoughter || {};
  window.thoughter.createThought = createThought;
  window.thoughter.retrieveAllThoughts = retrieveAllThoughts;

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

    function retrieveAllThoughts(){
      return $.ajax({
          url:'https://thoughter.herokuapp.com/api/Thoughts?filter={"order":"createTime DESC"}',
          method:'GET',
          dataType: 'json'
      })
      .done(function successHandler(data){
        console.log(data);
      })
      .fail(function failHandler(xhr){
        console.log(xhr, 'attempt failed');
      });
    }











}());
