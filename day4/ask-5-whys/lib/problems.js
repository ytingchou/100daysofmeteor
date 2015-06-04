Problems = new Mongo.Collection('problems');

Meteor.methods({
  'addProblem': function(problem) {
      Problems.insert(problem);
  }
})