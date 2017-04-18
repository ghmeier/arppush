# arppush
POST the results of arp-scan to a url to consumption

## Usage
To get up and running you'll first need to install `arp-scan` on either MacOS or Linux.

**MacOS** [Use Brew](http://brewformulas.org/ArpScan)
```
brew install arp-scan
```

**Linux**
```
sudo apt-get install arp-scan
```
or
```
sudo dnf install arp-scan
```

Then, make sure you have `nodejs` and `npm` [ready to go](https://nodejs.org/en/download/).

Now clone this repo:
```
git clone git@github.com:ghmeier/arppush
cd arppush
npm install
```

We're ready to add configuration:
1. Find your wireless interface id using `ifconfig` or similar
2. Add that and the destination url (from [autohat](https://github.com/yuderekyu/autohat)) to a file called `config.json` in the root directory like this:
```
{
  "url": "https://<herokuapp-name>.herokuapp.com/api/arppush",
  "ifc": "eth0"
}
```
Finally, **run it like this:**
```
npm start
```

This will run arp-scan periodically, and post it to the provided url in this form:
```
{
  'AC:CF:23:31:9B:FC': {
    ip: '192.168.1.1',
    mac: 'AC:CF:23:31:9B:FC',
    vendor: 'Cisco-Linksys, LLC',
    timestamp: 1427686747854
  },
  'AC:CF:23:31:9B:33': {
    ip: '192.168.1.132',
    mac: 'AC:CF:23:3F:9B:33',
    vendor: 'Raspberry Pi Foundation',
    timestamp: 1427686747854
  },
  'b8:e9:37:11:d5:5c': {
    ip: '192.168.1.140',
    mac: 'b8:e9:37:11:d5:5c',
    vendor: 'Sonos, Inc.',
    timestamp: 1427686747854
  }
}
```

## Development
If you find bugs, additions, etc. please for the repo and toss me a PR, I'll look it over!
