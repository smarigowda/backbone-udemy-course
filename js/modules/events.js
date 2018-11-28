const person = {
  name: 'Santosh Marigowda',
  walk: function() {
    this.trigger('walking', {
      speed: 1,
      startTime: '08:00'
    });
  }
}

_.extend(person, Backbone.Events);

person.once('walking', function(e) {
  console.log('walking event triggered...', e);
})

person.walk();
person.walk();