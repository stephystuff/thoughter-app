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
