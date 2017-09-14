define(function(require) {
  var Ember = require('ember');
  var App = require('app');

  return App.registerRoute('comments', {
    view: require('../view/commentsView'),
    controller: require('../controller/commentsController'),
    route: Ember.Route.extend({
      model: function(params, transition) {
        var post = this.modelFor('post');
        this.controllerFor('comments').post_id = post.id;
 
         return this.controllerFor('comments').findComments(post.id);
      },
      renderTemplate: function() {
        this.render({ into: 'post'});
      }
    })
  });
});
