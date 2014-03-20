var BaseView = require('./base'),
	StatModel = require('../models/stats');

module.exports = BaseView.extend({
	className : "widget_stats"
});
// this is important
module.exports.id = 'widget';