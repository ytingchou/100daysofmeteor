Template.yak.helpers({
  commentCount: function() {
    return Comments.find({yakId: this._id}).count();
  }
});