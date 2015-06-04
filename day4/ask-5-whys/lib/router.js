Router.configure({
  layoutTemplate: 'appBody',
  loadingTemplate: 'spinner'
});

Router.route('/', {
  name: 'index',

  waitOn: function() {
    return Meteor.subscribe('allProblems');
  },

  onBeforeAction: function() {
    Session.set("currentStage", ProblemStage.ASK_PROBLEM);
    Session.set("currentProblem", {answers:[]});
    this.next();
  }
});


Router.route('/problems', {
  waitOn: function() {
    return Meteor.subscribe('allProblems');
  }
});

Router.route('/problems/:_id', {
  name: 'problemInfo',

  data: function() {
    return Problems.findOne(this.params._id);
  },

  waitOn: function() {
    return Meteor.subscribe('allProblems');
  }
});
