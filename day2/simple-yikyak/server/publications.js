Meteor.publish('yaks', function() {
  return Yaks.find();
});

Meteor.publish('comments', function() {
  return Comments.find();
});
