(function() {
  'use strict';

  window.thoughter = window.thoughter || {};
  window.thoughter.createThought = createThought;
  window.thoughter.getThoughts = getThoughts;

    /**
     * Creates a new thought
     * @param  {Object} newThought [description]
     * @return {[type]}            [description]
     */
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

    /**
     * Retrieves thoughts in descending order
     * @return {Promise} The ajax call promise
     */
    function getThoughts(thought){
      if(typeof(thought) !== 'number' || thought < 0) {
        thought = 10;
      }

      return $.ajax({
          url:'https://thoughter.herokuapp.com/api/Thoughts?filter={"limit":10}',
          method:'GET',
          dataType: 'json'
          // data: {
          //     limit:thought
          // }
      })
      .done(function successHandler(thought){
        console.log(thought);
      })
      .fail(function failHandler(xhr){
        console.log(xhr, 'attempt failed');
      });
    }











}());
