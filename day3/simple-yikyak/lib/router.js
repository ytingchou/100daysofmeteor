// Global subscriptions
if (Meteor.isClient) {
  Meteor.subscribe('yaks');
  Meteor.subscribe('comments');
}

Router.configure({
  layoutTemplate: 'appBody'
});

Router.route('/', {
  name: 'home'
});

Router.route('/submit', {
  name: 'submit'
});

Router.route('/yaks/:_id', {
  name: 'yak.comment',
  data: function() {
    var id = this.params._id;

    return Yaks.findOne({_id: id});
  }
});