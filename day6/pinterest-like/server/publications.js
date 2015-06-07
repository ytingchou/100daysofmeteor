Meteor.publish('categories', function() {
  return Categories.find();
});

Meteor.publish('books', function(category) {
  return Books.find({category: category});
});

Meteor.publish('likes', function() {
  return Likes.find();
});