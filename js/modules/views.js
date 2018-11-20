const SongView = Backbone.View.extend({
  tagName: 'span',
  className: 'song',
  id: '1234',
  attributes: {
    'data-test-id': 'test-id-song'
  },
  render: function() {
    this.$el.html("Hello World!");
    return this;
  }
});

// const songView = new SongView({ el: '#container' });
const songView = new SongView();

$('#container').html(songView.render().$el);
