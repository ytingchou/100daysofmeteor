Likes = new Mongo.Collection('likes');

Meteor.methods({
  'addLike': function(bookId) {
      Likes.insert({bookId: bookId, userId: Meteor.userId()});
  }
});