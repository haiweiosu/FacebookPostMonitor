define(function(require) {
	var breeze = require('breeze'),
	Q = require('Q'),
	DT = breeze.DataType;

	var initialize = function(metadataStore) {
		metadataStore.addEntityType({
			shortName: 'Comment',
			dataProperties: {
				id: {
					dataType: DT.String,
					isPartOfKey: true
				},
				message: {
					dataType: DT.String
				},
				created_time: {
					dataType: DT.Date
				},
				createPath: {
					dataType: DT.String
				}
			}
		});
	}

	var createComment = function(manager, comment, post_id) {
		manager.createEntity("Comment", {message: comment, createPath: `${post_id}/comments`, id: 'placeholder'});
		
		return manager.saveChanges();
	}

	var deleteComment = function(manager, comment_id) {
 		var comment = manager.getEntityByKey("Comment", comment_id);
 		comment.entityAspect.setDeleted();

 		return manager.saveChanges();
 	}
 
 	var downloadComments = function(manager, post_id) {
 		var p = {
 			_VOXSUPMETHOD_: 'EDGE'
 		}
 
 		q = breeze.EntityQuery.from(post_id + '/comments').withParameters(p).toType('Comment');
 		return manager.executeQuery(q);
 	}

 	return {
 		initialize: initialize,
 		downloadComments: downloadComments,
 		deleteComment: deleteComment,
 		createComment: createComment
 	}
}