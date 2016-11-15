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
  window.thoughter.getThoughts = getThoughts;

    /**
     * Creates a new thought and sends to server
     * @param  {Object} newThought [description]
     * @return {Promise}    The ajax call promise
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
     * Retrieves the 10 most recent thoughts
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

(function() {
  'use strict';

  window.thoughter = window.thoughter || {};
  window.thoughter.addThoughtsToRecent = addThoughtsToRecent;

  function addThoughtsToRecent(thoughts) {
      if(!Array.isArray(thoughts)){
        return;
      }

      // $('.thoughts-list').html('');

      thoughts.forEach(function appendThought(thought){
        $('.list-group')
          .append(
           '<li class="panel panel-primary">' + '<header class="panel-heading">' + thought.createTime + '</header>' +
           '<article class="panel-body">' + thought.content + '</article>' + '</li>'
          );
      });
  }

}());
