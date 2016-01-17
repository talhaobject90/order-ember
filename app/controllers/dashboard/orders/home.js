import Ember from 'ember';

export default Ember.Controller.extend({

  queryParams: {
    searchTerm: 's',
  },
  searchTerm: '',

  matchingOrders: Ember.computed('orders.@each.title','searchTerm', function() {
    var searchTerm = this.get('searchTerm').toLowerCase();
    return this.get('orders').filter(function(order) {
      return order.get('title').toLowerCase().indexOf(searchTerm) !== -1;
    });
  }),

  
});
