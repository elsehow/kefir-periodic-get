var timesink = require('..')
var server = 'http://indra.webfactional.com/timeserver'
var syncedTimes = timesink(server, 300)
syncedTimes.log()
