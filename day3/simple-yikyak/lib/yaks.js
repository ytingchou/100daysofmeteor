Yaks = new Mongo.Collection('yaks');

Meteor.methods({
  'yakSubmit': function(yak) {
    Yaks.insert({yak: yak});
  }
});