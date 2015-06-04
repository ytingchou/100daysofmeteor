Comments = new Mongo.Collection('comments');

Meteor.methods({
  'addComment': function(yakId, comment) {
    Comments.insert({
      yakId: yakId,
      comment: comment
    });
  }
});