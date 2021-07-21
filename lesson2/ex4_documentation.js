// TODO 1: Start execution of all your code below ONLY 3.14 seconds after executing this program.
// Maybe try it with simpler code first?

function myFunc(arg) {
    console.log(`arg was => ${arg}`);
}


setTimeout(myFunc, 3140, 'funky');

let time = 3140
setTimeout((arg) => {
    // code
    console.log(`arg was => ${arg}`);
}, time)

// TODO 2: (the following 3 parts should be done together but you should apporach it step-by-step)
const fetch = require('node-fetch')
fetch('https://api.exchangerate.host/latest')
    .then(res => res.json())
    .then(body => console.log(body.motd));
// (i) Use Fetch to 
// (ii) obtain the latest exchange rates and latest conversion rate 
// (iii) for two supported symbols