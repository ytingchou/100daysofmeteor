Template.askProblem.helpers({
  currentProblemTitle: function() {
    var currentProblem = Session.get("currentProblem");
    return currentProblem.problem;
  }
});

Template.askProblem.events({
  'click #btn-route': function(event) {
    var txtProblem = document.getElementById("txt-problem");
    var problem = txtProblem.value;

    if (problem.length == 0) {
      alert("You need to enter problem");
    } else {
      var currentProblem = Session.get("currentProblem");

      currentProblem.problem = problem;

      Session.set("currentProblem", currentProblem);
      Session.set("currentStage", this.currentStage+1);
    }

    return false;
  }
});

Template.askWhy.helpers({
  currentAnswer: function() {
    var currentProblem = Session.get("currentProblem");
    return currentProblem.answers[this.currentStage];
  },
  previousStageResult: function() {
    var resultText;
    var currentProblem = Session.get("currentProblem");
    var previousStage = this.currentStage-1;

    switch (previousStage) {
      case ProblemStage.ASK_PROBLEM:
          resultText = "Problem - " + currentProblem.problem;
        break;

      default:
          var answer = currentProblem.answers[previousStage];
          resultText = "Why #" +
                       previousStage +
                       " - " +
                       answer;
    }
    return resultText;
  }
});

Template.askWhy.events({
  'click #btn-answer': function(event) {
    var txtAnswer = document.getElementById("txt-answer");
    var answer = txtAnswer.value;

    if (answer.length == 0) {
      alert("You need to answer why is it problem");
    } else {
      var currentProblem = Session.get("currentProblem");

      if (!currentProblem.answers) {
        currentProblem.answers = [];
      }

      currentProblem.answers[this.currentStage] = answer;

      Session.set("currentProblem", currentProblem);
      Session.set("currentStage", this.currentStage+1);
    }

    return false;
  }
});

Template.askSolution.helpers({
  currentProblem: function() {
    return Session.get("currentProblem");
  },
  answerWithPrompt: function() {
    var answers = this.answers;
    var prompt = "Why # ";
    var result = [];

    for (var index = 1; index <= 5; index++) {
      result.push(prompt + index + " - " + answers[index]);
    }

    return result;
  }
});

Template.askSolution.events({
  'submit': function(event) {
    var solution = event.target.solution.value;
    var currentProblem = Session.get("currentProblem");

    currentProblem.solution = solution;
    Meteor.call('addProblem', currentProblem);

    Router.go('problems');
    return false;
  }
});

Template.backButton.events({
  'click #btn-back': function(event) {
      Session.set("currentStage", this.currentStage-1);
  }
});