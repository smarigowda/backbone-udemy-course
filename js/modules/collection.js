const Song = Backbone.Model.extend();

const Songs = Backbone.Collection.extend({
  model: Song
});

const songs = new Songs([
  new Song({ title: 'Song 1'}),
  new Song({ title: 'Song 2'}),
  new Song({ title: 'Song 3'}),
]);

songs.add(new Song({ title: 'Song 4' }));
const song1 = songs.at(0);
console.log(song1);

const songc1 = songs.get('c1');
console.log(songc1);

songs.remove(songs.at(0));
console.log(songs);

console.log(`collection length = ${songs.length}`);