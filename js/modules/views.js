const Song = Backbone.Model.extend();
const Songs = Backbone.Collection.extend({
  model: Song
});

const SongView = Backbone.View.extend({
  tagName: 'li',
  events: {
    'click': 'clickHandler',
    'click .bookmark': 'onClickBookmark'
  },
  clickHandler() {
    console.log('Listen button clicked...');
  },

  onClickBookmark(e) {
    e.stopPropagation();
    console.log('bookmark clicked');
  },

  render: function() {
    // this.$el.html(this.model.get('title'));
    // this.$el.attr('id', this.model.id);
    const template = _.template($("#songTemplate").html())
    // const template = _.template("<h1>Hello Backbone js...<h1>")
    // console.log(this.model);
    const html = template(this.model.toJSON());
    this.$el.html(html);
    return this;
  }
});

const SongsView = Backbone.View.extend({
  initialize: function() {
    this.model.on('add', this.onSongAdded, this);
    this.model.on('remove', this.onSongRemoved, this);
  },
  onSongAdded: function(song) {
    console.log('song added...');
    const songView = new SongView({ model: song });
    this.$el.append(songView.render().$el);
  },
  onSongRemoved: function(song) {
    console.log('song removed...');
    this.$el.find('li#'+song.id).remove();
  },
  render: function() {
    this.model.each(song => {
      const songView = new SongView({ model: song });
      this.$el.append(songView.render().$el);
    });
  }
});

const songs = new Songs([
  new Song({ id: 1, title: 'Blue is Green', plays: 100 }),
  new Song({ id: 2, title: 'Green is Yellow', plays: 200 }),
  new Song({ id: 3, title: 'All Yellow', plays: 1000 }),
])

const songsView = new SongsView({ el: '#container', model: songs });
songsView.render();

// const song = new Song({ title: 'Blue in Green' });

// const songView = new SongView({ el: '#container' });
// const songView = new SongView({
//   model: song
// });

// $('#container').html(songView.render().$el);
