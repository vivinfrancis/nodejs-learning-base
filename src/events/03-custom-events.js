const EventEmitter = require('events');

const emitter = new EventEmitter();

emitter.on('payment-success', (amount) => {
  console.log(`Payment of $${amount} was successful!`);
});

emitter.emit('payment-success', 100);