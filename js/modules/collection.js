const Song = Backbone.Model.extend();

const Songs = Backbone.Collection.extend({
  model: Song
});

const songs = new Songs([
  new Song({ title: 'Song 1'}),
  new Song({ title: 'Song 2'}),
  new Song({ title: 'Song 3'}),
]);

songs.add(new Song({ title: 'Song 4' }), { at: 0 });
console.log(songs);

songs.push(new Song({ title: 'Song 5', genre: 'Classic' }));
songs.push(new Song({ title: 'Song 6', genre: 'Classic' }));
console.log(songs);

const classicSongs = songs.where({ genre: 'Classic' });
console.log('--- all Classic songs: ', classicSongs);

const firstClassicSong = songs.findWhere({ genre: 'Classic' });
console.log('--- first Classic song: ', firstClassicSong);

// const song1 = songs.at(0);
// console.log(song1);

// const songc1 = songs.get('c1');
// console.log(songc1);

// songs.remove(songs.at(0));
// console.log(songs);

// console.log(`collection length = ${songs.length}`);