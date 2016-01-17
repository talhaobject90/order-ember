import Ember from 'ember';

export default Ember.Controller.extend({

  isCreateOrderButtonDisabled: Ember.computed('title', function() {
    return Ember.isEmpty(this.get('title'));
  }),

  queryParams: {
    searchTerm: 's',
  },
  searchTerm: '',

  matchingOrders: Ember.computed('model.@each.name','searchTerm', function() {
    var searchTerm = this.get('searchTerm').toLowerCase();
    return this.get('orders').filter(function(order) {
      return order.get('title').toLowerCase().indexOf(searchTerm) !== -1;
    });
  }),



  actions: {
    createOrder: function(){
      var controller = this;
      var user = this.get('user').get('firstObject');
      var order = this.store.createRecord('order', {
        title: this.get('title'),
        user : user});
        order.save().then(function(){
          controller.notifications.addNotification({
            message: 'Sorry, cant save at the moment !' ,
            type: 'error',
            autoClear: true
          });
        }).catch(function(){
          controller.notifications.addNotification({
            message: 'Sorry, cant save at the moment !' ,
            type: 'error',
            autoClear: true
          });
        });
      }
    }
  });
