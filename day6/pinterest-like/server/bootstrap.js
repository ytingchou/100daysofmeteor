Meteor.startup(function() {
  if (Books.find().count() === 0) {
    for (var index = 0; index < 10; index++) {
      Books.insert({
        title: 'Being Mortal',
        coverImg: 'http://ecx.images-amazon.com/images/I/91E6exaOufL.jpg',
        format: 'Ebook',
        category: 'Psychology'
      });
      Books.insert({
        title: 'Eloquent JavaScript',
        coverImg: 'https://yuq.me/users/41/792/YO81mXVMpK.png',
        format: 'AudioBook',
        category: 'Tech'
      });
      Books.insert({
        title: 'Principles Of Web Design',
        coverImg: 'https://yuq.me/users/27/445/MXtELWFw17.jpg',
        format: 'Ebook',
        category: 'Design'
      });
    }
  }

  if (Categories.find().count() === 0) {
    Categories.insert({name: 'Tech'});
    Categories.insert({name: 'Design'});
    Categories.insert({name: 'Business'});
    Categories.insert({name: 'Science'});
    Categories.insert({name: 'Scifi'});
    Categories.insert({name: 'Psychology'});
  }
});