import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('login', {path: '/'});
  this.route('dashboard', function() {
    this.route('orders', function() {
      this.route('order', {path: ':id'});
      this.route('new');
      this.route('home');
    });
  });
});

export default Router;
