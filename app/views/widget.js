var BaseView = require('./base'),
	StatModel = require('../models/stats');

module.exports = BaseView.extend({
	className: 'widget',
	tagName : 'div',
	events : {
		'click .next' : 'nextStat',
		'click .prev' : 'prevStat'
	},
	postRender : function ( ) {
		if ( !this.init ) {
			this.init = true;
			this.model = new StatModel({}, { app : this.app });
			var model = this.model;
			_this = this;
			this.model.sync('read', model, {
				success : function ( data, res ) {
					var newData = {
						stats: _this.handleStats(data)
					}
					_this.model.set(newData);
					_this.render();
				}
			});
		}
	},
	handleStats : function ( data, res ) {
		var stats = [];
		for(var key in data.egood_stats){
			stats.push({
				name 	: key,
				value 	: data.egood_stats[key]
			})
		}
		return stats;
	}
});
// this is important
module.exports.id = 'widget';