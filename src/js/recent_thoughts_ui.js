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
           '<li class="list-group-item list-group-item-info">' + thought.createTime +
           '<p class="list-group-item-text">' + thought.content + '</p>' + '</li>'
          );
      });
  }

}());
