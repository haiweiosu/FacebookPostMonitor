define(function(require) {
  var Ember = require('ember');
  var Q = require('Q');
  var dctx = require('../model/datacontext');

  return Ember.Controller.extend({
  	comment: "",
  	actions: {
  		deleteComment: function(comment_id) {
  			dctx.deleteComment(comment_id).then(
  				function(r) {
  					console.log(r);
  				});
  		},
	  	submit: function(val, post_id) {
	  		dctx.createComment(val, post_id).then(
	  			function(r) {
	  				console.log(r);
	  			});
	  	}
  	},
  	findComments: function(post_id) {
  		return dctx.downloadComments(post_id).then(
  			function(r) {
  				return Q.resolve(Ember.getWithDefault(r, 'results', []));
  			});
  	}
  });
});
