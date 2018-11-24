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
    this.$el.html(this.model.get('title') + '<button class="listen">Listen</button><button class="bookmark">Bookmark</button>');
    return this;
  }
});

const SongsView = Backbone.View.extend({
  initialize: function() {
    this.model.on('add', this.onSongAdded, this)
  },
  onSongAdded: function(song) {
    console.log('song added...');
    const songView = new SongView({ model: song });
    this.$el.append(songView.render().$el);
  },
  render: function() {
    this.model.each(song => {
      const songView = new SongView({ model: song });
      this.$el.append(songView.render().$el);
    });
  }
});


const songs = new Songs([
  new Song({ title: 'Blue is Green' }),
  new Song({ title: 'Green is Yellow' }),
  new Song({ title: 'All Yellow' }),
])

const songsView = new SongsView({ el: '#container', model: songs });
songsView.render();



// const song = new Song({ title: 'Blue in Green' });

// const songView = new SongView({ el: '#container' });
// const songView = new SongView({
//   model: song
// });

// $('#container').html(songView.render().$el);
