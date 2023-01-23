const EventMetter = require('events');
const eventMetter = new EventMetter();

eventMetter.on('start', () => {
    console.log("Durante");
})

console.log("Antes");

eventMetter.emit('start');

console.log("Depois");