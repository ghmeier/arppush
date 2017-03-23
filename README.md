# arppush
Push arp scans to a url

Run like this:
```
npm install
node start <destination_uri>
```

This will run a scan every 5 seconds, and post it to the provided url in this form:
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