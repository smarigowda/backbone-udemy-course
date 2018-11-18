
// In the first few sections, we do all the coding here.
// Later, you'll see how to organize your code into separate
// files and modules.

const Song = Backbone.Model.extend({
  initialize: function() {
    console.log('A new song has been created.');
  },
  defaults: {
    genre: 'Jazz'
  }
});

const song = new Song({
  title: "Black is Orange",
  artist: "Miles",
  publishYear: 1989
});

// song.set("title", "Blue in Green");
// song.set({
//   artist: "Miles Davis",
//   publishYear: 1989
// });

console.log(song.toJSON());