import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {

    return Ember.RSVP.hash({
      orders: this.store.findAll('order'),
    });
  },

  setupController(controller, models) {
    controller.setProperties(models);
  },



});
