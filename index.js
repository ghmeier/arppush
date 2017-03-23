const arpscanner = require('arpscan');
const request = require('request');

const url = process.argv[2] || 'http://localhost:8080/';

setInterval(() => {
        arpscanner(onResult, {
        interface: 'wlp3s0',
        args: ['--localnet'],
        sudo: true
    })
}, 5000);
 
const onResult = (err, data) => {
    if(err) {
        console.log(err);
        return;
    }

    let obj = {};
    for (let i=0; i<data.length; i++) {
        obj[data[i].mac] = data[i];
    }

    request({
        url: url,
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(obj)
    }, (err, res, body) => {
        if (err) {
            console.log(err);
            return;
        }

        console.log('Posted ' + data.length + ' addresses')
    });
}