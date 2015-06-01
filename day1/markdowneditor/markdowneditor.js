if (Meteor.isClient) {

  Template.markdownEditor.helpers({
    markdownContent: function() {
      return Session.get('markdownContent');
    },
    defaultContent: function() {
      var content = '\
# hello, This is Markdown Live Preview\n\
\n\
----\n\
## what is Markdown?\n\
see [Wikipedia](http://en.wikipedia.org/wiki/Markdown)\n\
\n\
> Markdown is a lightweight markup language, originally created by John Gruber and Aaron Swartz allowing people "to write using an easy-to-read, easy-to-write plain text format, then convert it to structurally valid XHTML (or HTML)".\n\
\n\
----\n\
## usage\n\
1. Write markdown text in this textarea.\n\
2. Click \'HTML Preview\' button.\n\
\n\
----\n\
## markdown quick reference\n\
# headers\n\
\n\
*emphasis*\n\
\n\
**strong**\n\
\n\
* list\n\
\n\
>block quote\n\
\n\
    code (4 spaces indent)\n\
[links](http://wikipedia.org)\n\
\n\
----\n\
## changelog\n\
* 17-Feb-2013 re-design\n\
\n\
----\n\
## thanks\n\
* [markdown-js](https://github.com/evilstreak/markdown-js)';
      return content;
    }
  });
  Template.markdownEditor.events({
    'keyup textarea': function(event) {
      var textarea = event.currentTarget;

      Session.set('markdownContent', textarea.value);
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
