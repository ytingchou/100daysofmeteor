Template.bookInfo.helpers({
  likeThis: function() {
    var like = Likes.findOne({bookId: this._id, userId: Meteor.userId()});
    return like;
  },
  likeCount: function() {
    return Likes.find({bookId: this._id}).count();
  }
});

Template.bookInfo.events({
    'click #like': function() {
    var like = Likes.findOne({bookId: this._id, userId: Meteor.userId()});
    if (!like) {
      Meteor.call('addLike', this._id);
    }
  }
});