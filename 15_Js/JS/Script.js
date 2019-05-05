console.log('You are at '+window.location);
let names = [
[
['куры', 'гуси', 'павлины'],
['сокол', 'орел', 'соловей']
],
[
['собака', 'кошка'],
['обезьяна', 'рысь']
]
]

for (one of names) {
  for (two of one) {
    for (four of two) {
      console.log(four);
    }
  }
}