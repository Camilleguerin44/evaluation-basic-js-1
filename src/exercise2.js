var mapCustomer = function(customer) {


  var output = {
    firstname: 'John',
    lastname: 'Doe',
    products: [],
    moneySpent: 0
    }

  }
  var output2{
    firstname: 'Jack',
    lastname: 'Smith',
    products: [{ label: 'shoes', price: 89 }, { label: 'book', price: 14 }, { label: 'smartphone', price: 499 }],
    moneySpent: 602
  }
  var output = output2.map()
  return output;
module.exports = {
  title: 'Exercise 2',
  run: mapCustomer
}
