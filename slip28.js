const EventEmitter = require('events');
const event = new EventEmitter();

const onLogin = () => console.log("User logged in");
const onLogout = () => console.log("User logged out");

event.on('login', onLogin);
event.on('logout', onLogout);

setInterval(() => {
    const rand = Math.random();
    if (rand < 0.5) {
        event.emit('login');
    } else {
        event.emit('logout');
    }
}, 2000);