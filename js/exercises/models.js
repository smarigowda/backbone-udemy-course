const Vehicle = Backbone.Model.extend({
  start: function() {
    console.log('Vehicle started.')
  }
});
const vehicle = new Vehicle();

const Car = Vehicle.extend({
  start: function() {
    if(!this.isValid()) {
      console.log(`error ${this.validationError}`);
      return;
    }
    console.log(`Car with registration number ${this.get('registrationNumber')}`)
  },
  validate: function(attrs) {
    if(!attrs.registrationNumber) {
      return 'registrationNumber is mandatory';
    }
  }
});

const car = new Car({registrationNumber: 'CE12ZMY'});

car.start();

