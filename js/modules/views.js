const SongView = Backbone.View.extend({
  render: function() {
    this.$el.html("Hello World!");
    return this;
  }
});

const songView = new SongView({ el: '#container' });
songView.render();