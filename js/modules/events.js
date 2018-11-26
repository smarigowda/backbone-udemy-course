const person = {
  name: 'Santosh Marigowda',
  walk: function() {
    this.trigger('walking');
  }
}

_.extend(person, Backbone.Events);

person.on('walking', function() {
  console.log('walking event triggered...');
})

person.walk();