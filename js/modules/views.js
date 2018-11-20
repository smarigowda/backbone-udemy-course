const Song = Backbone.Model.extend();
const Songs = Backbone.Collection.extend({
  model: Song
});

const SongView = Backbone.View.extend({
  tagName: 'li',
  events: {
    'click': 'clickHandler'
  },
  clickHandler() {
    console.log('Listen button clicked...');
  },
  render: function() {
    this.$el.html(this.model.get('title') + '<button>Listen</button>');
    return this;
  }
});

const SongsView = Backbone.View.extend({
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
