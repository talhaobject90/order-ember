import Ember from 'ember';

export default Ember.Controller.extend({
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

            controller.set('title' , '');
            controller.transitionToRoute('dashboard.orders.order',order);
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
