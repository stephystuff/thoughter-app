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
