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

(function() {
  'use strict';

  window.thoughter = window.thoughter || {};
  window.thoughter.createThought = createThought;
  window.thoughter.retrieveAllThoughts = retrieveAllThoughts;

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
    function retrieveAllThoughts(){
      return $.ajax({
          url:'https://thoughter.herokuapp.com/api/Thoughts?filter={"limit":10}',
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

(function() {
  'use strict';

  window.thoughter = window.thoughter || {};

  $('main').hide();
    window.addEventListener('hashchange', function() {
      $('main').hide();
        console.log("I'm in here!");
      $(window.location.hash).show();

      if(window.location.hash === '#recent-thoughts'){
        window.thoughter.retrieveAllThoughts()
        .done(function successHandler(data){
          console.log(data, 'nav success');
          window.thoughter.addThoughtsToRecent(data);
        });
      }
  });


}());

(function() {
  'use strict';

  window.thoughter = window.thoughter || {};
  window.thoughter.addThoughtsToRecent = addThoughtsToRecent;

  function addThoughtsToRecent(thoughts) {
    thoughts.forEach(function appendThought(thought){
      $('.thoughts-list')
          .append('<li class="panel-info">' + thought.content + '</li>');
          // .append('<p class=".recent-thought">' + thought.content + '</p>');
    });
  }

}());
