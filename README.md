# kefir-periodic-get

periodically poll a URL, and get a kefir stream of responses.

works in node and the browser!

## installation

`npm install kefir-periodic-get`

## usage

poll for recent changes on wikipedia:

```javascript
var kefir-periodic-get = require('timesink')

var wikiRecentlyChanged = 'https://en.wikipedia.org/wiki/Special:RecentChanges'

var syncedTimes = kefir-periodic-get(wikiRecentlyChanged, 1000).skipDuplicates()
```

this will issue a GET to the `wikiRecentlyChanged` every 1000ms.

## api

`kefir-periodic-get(url, interval)`

issues a GET request to `url` every `interval` ms.

returns a kefir stream of responses.
