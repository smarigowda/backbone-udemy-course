
// In the first few sections, we do all the coding here.
// Later, you'll see how to organize your code into separate
// files and modules.

const Song = Backbone.Model.extend({
  initialize: function() {
    console.log('A new song has been created.');
  }
});

const song = new Song();

song.set("title", "Blue in Green");
song.set({
  artist: "Miles Davis",
  publishYear: 1989
});