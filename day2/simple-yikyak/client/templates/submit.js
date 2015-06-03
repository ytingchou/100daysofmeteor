Template.submit.events({
  'submit': function(event) {

    var yak = event.target.yak.value;

    Meteor.call('yakSubmit', yak);

    Router.go('home');

    // Prevent default form submit
    return false;
  }
});
