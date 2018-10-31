const EventEmitter = require('events');

const emitter = new EventEmitter();

emitter.addListener('messageLogged', (data) => {
    console.log('Listener called!');
    console.log('With data:::', data)
});

emitter.emit('messageLogged', 'SomeTestData');