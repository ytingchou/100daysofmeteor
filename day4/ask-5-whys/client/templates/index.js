Template.index.helpers({
  currentStage: function() {
    var currentStage = Session.get("currentStage");
    return {currentStage: currentStage};
  },
  currentStageTemplate: function() {
    var template;
    var currentStage = Session.get("currentStage");

    switch (currentStage) {
      case ProblemStage.ASK_PROBLEM:
        template = "askProblem";
        break;

      case ProblemStage.ASK_SOLUTION:
        template = "askSolution";
        break;

      default:
        template = "askWhy";
    }

    return template;
  }
});
