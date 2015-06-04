Meteor.publish('allProblems', function() {
  return Problems.find();
});