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

const Cars = Backbone.Collection.extend({
  model: Car
});


const cars = new Cars([
  { registrationNumber: 'XL1887', color: 'Silver' },
  { registrationNumber: 'XL6756', color: 'Blue' },
  { registrationNumber: 'XL9834', color: 'Silver' },
]);

const blueCars = cars.where({ color: 'Blue' });
console.log('blueCars ', blueCars);

cars.remove(cars.at(0)); // mutates cars model

const jsonObject = cars.toJSON();
console.log('jsonObject', jsonObject);

cars.forEach(d => {
  console.log(d.get('registrationNumber'));
})