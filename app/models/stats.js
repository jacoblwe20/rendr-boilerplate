var Base = require('./base');

module.exports = Base.extend({
	url : 'http://api2.egood.com/etest/etest/statistics/egood_stats',
	idAttribute : 'name'
});
module.exports.id = 'Stats';
