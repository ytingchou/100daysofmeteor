Template.index.helpers({
  numBooks: function() {
    return Books.find().count();
  },
  books: function() {
    return Books.find();
  },
});