var $ = require('jquery');
var Handlebars = require('handlebars');
var Ember = require('ember');

var App = window.App = Ember.Application.create();
App.IndexRoute = Ember.Route.extend({
  model: function() {
    return {};
  }
});

App.IndexController = Ember.ObjectController.extend({
});
