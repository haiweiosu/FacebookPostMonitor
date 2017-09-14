define(function(require) {
  var Ember = require('ember');

  var T = Ember.Handlebars.compile('\
    <span style="width: 90%"> \
      {{textarea type="text" cols=100 placeholder="Write a comment" value=comment}} \
    </span> \
    <span style="width: 10%"> \
      <button class="btn btn-primary pull-right" {{action submit comment controller.post_id}} >Comment</button> \
    </span> \
    <table class="table table-striped table-hover"> \
      <thead><tr><th>Date</th><th>Message</th><th class="text-center">Delete Comment</th></thead> \
      <tbody> \
       {{#each comment in model}} \
         <tr style="cursor: pointer;"> \
           <td>{{date comment.created_time}}</td> \
           <td>{{comment.message}}</td> \
           <td class="text-center"><span {{action deleteComment comment.id}} class="delete-comment glyphicon glyphicon-trash"></span></td> \
         </tr> \
       {{/each}} \
      </tbody> \
    </table> \
  ');

  return Ember.View.extend({
    template: T
  });
});
