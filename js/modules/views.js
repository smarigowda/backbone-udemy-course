const Song = Backbone.Model.extend();

const SongView = Backbone.View.extend({
  tagName: 'span',
  render: function() {
    this.$el.html(this.model.get('title'));
    return this;
  }
});

const song = new Song({ title: 'Blue in Green' });

// const songView = new SongView({ el: '#container' });
const songView = new SongView({
  model: song
});

$('#container').html(songView.render().$el);
