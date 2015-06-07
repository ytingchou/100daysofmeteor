Router.configure({
  layoutTemplate: 'appBody',

  // Use package "sacha:spin" for loading
  loadingTemplate: 'spinner',

  notFoundTemplate: 'notFound',

  yieldRegions: {
    'header': {to: 'header'},
    'categoryList': {to: 'categories'},
    'footer': {to: 'footer'}
  },

  waitOn: function() {
    return [Meteor.subscribe('categories')];
  }
});


Router.route('/', {
  name: 'index',

  waitOn: function() {
    var category = Session.get('category');
    return [Meteor.subscribe('books', category)];
  },

  onBeforeAction: function() {
    if (Meteor.user()) {
      Meteor.subscribe('likes');
    }
    this.next();
  },

  data: function() {
    var category = Session.get('category');
    return {category: category};
  }
});

Router.route('/:category', {
  name: 'books',
  template: 'index',

  waitOn: function() {
    return [Meteor.subscribe('books', this.params.category)];
  },


  onBeforeAction: function() {
    if (Meteor.user()) {
      Meteor.subscribe('likes');
    }
    this.next();
  },

  data: function() {
    var category = this.params.category;
    var result = {};

    if (Categories.findOne({name: category})) {
      result.category = category;
      Session.set('category', category);
    } else {
      result = null;
    }
    return result;
  }
});

Router.onBeforeAction('dataNotFound', {
  only: 'books'
});
