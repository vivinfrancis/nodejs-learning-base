const EventEmitter = require('events');

const myEmitter = new EventEmitter();

myEmitter.on('user-login', ()=>{
    console.log("User Logged in!");
    
})

myEmitter.emit('user-login');