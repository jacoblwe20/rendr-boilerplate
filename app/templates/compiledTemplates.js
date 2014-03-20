module.exports = function(Handlebars) {

var templates = {};

templates["home/about"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "";


  return buffer;
  });

templates["home/index"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  buffer += "\n<div>\n	<h1>Stats Slider</h2>\n</div>\n";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.view || depth0.view),stack1 ? stack1.call(depth0, "widget", options) : helperMissing.call(depth0, "view", "widget", options)));
  return buffer;
  });

templates["widget"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<h2>Hello</h2>";
  });

return templates;

};