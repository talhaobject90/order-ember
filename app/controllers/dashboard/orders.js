import Ember from 'ember';

export default Ember.Controller.extend({

  isCreateOrderButtonDisabled: Ember.computed('title', function() {
    return Ember.isEmpty(this.get('title'));
  }),

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



  actions: {
    createOrder: function(){
      var controller = this;
      var order = this.store.createRecord('order', {
        title: this.get('title'),
        date: new Date()});

        order.save().then(function(){
          var item = controller.store.createRecord('item', {
            name :'',
            quantity :'',
            rate : '',
            amount : '',
            order : order});

            item.save().catch(function(){
              controller.notifications.addNotification({
                message: 'Sorry, cant save at the moment !' ,
                type: 'error',
                autoClear: true
              });
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
