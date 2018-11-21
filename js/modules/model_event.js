const Song = Backbone.Model.extend({
  defaults: {
    listeners: 0
  }
})

const SongView = Backbone.View.extend({
  initialize: function() {
    this.model.on('change', this.render, this);
  },
  render: function() {
    this.$el.html(`${this.model.get('title')}. Count of Listeners ${this.model.get('listeners')}`)
    return this;
  }
})

const song = new Song({ title: 'Orange is Blue...' });

const songView = new SongView({
  el: '#container',
  model: song
})

songView.render();