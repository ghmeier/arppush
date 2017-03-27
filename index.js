const arpscanner = require('arpscan');
const request = require('request');

const url = process.argv[2] || 'http://localhost:8080/';
let scanning = false;

const scan = () => {
    if (scanning) {
        return;
    }

    console.log("Scanning...");

    scanning = true;
    arpscanner(onResult, {
        interface: 'wlp3s0',
        args: ['--localnet', '--retry=1', '--timeout=2', '--interval=5', '--ignoredups', '--backoff=1.2'],
        sudo: true
    })
}

const onResult = (err, data) => {
    scanning = false;
    if(err) {
        //console.log(data, err);
        //Try to send anyway
    }

    let obj = {};
    for (let i=0; i<data.length; i++) {
        var mac = data[i].mac.split(' ')[0];
        obj[mac] = data[i];
        //console.log(mac, data[i].vendor);
    }

    scan();
    request({
        url: url,
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(obj)
    }, (err, res, body) => {
        if (err) {
            return;
        }

        console.log('Posted ' + Object.keys(data).length + ' addresses')
    });
}

scan();
