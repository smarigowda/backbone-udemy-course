
// In the first few sections, we do all the coding here.
// Later, you'll see how to organize your code into separate
// files and modules.

const Song = Backbone.Model.extend({
  initialize: function() {
    console.log('A new song has been created.');
  },
  defaults: {
    genre: 'Jazz'
  },
  validate: function(attrs) {
    if(!attrs.title) {
      return 'title is required';
    }
  }
});

// const song = new Song({
//   title: "Black is Orange",
//   artist: "Miles",
//   publishYear: 1989
// });

// song.set("title", "Blue in Green");
// song.set({
//   artist: "Miles Davis",
//   publishYear: 1989
// });

// console.log(song.toJSON());

const song = new Song();

console.log('is Song valid ? ' + song.isValid());
console.log('error: ' + song.validationError);

song.set('title', 'Harry Potter');

console.log('is Song valid ? ' + song.isValid());
console.log('error: ' + song.validationError);
