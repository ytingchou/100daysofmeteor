Template.yakComment.helpers({
  comments: function() {
    console.log("yakId: "+this._id);
    return Comments.find({yakId: this._id});
  }
});

Template.yakComment.events({
  'submit': function(event) {
    var yakId = this._id;
    var comment = event.target.comment.value;
    Meteor.call('addComment', yakId, comment);
    return false;
  }
});