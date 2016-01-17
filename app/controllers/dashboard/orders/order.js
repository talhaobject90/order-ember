import Ember from 'ember';
export default Ember.Controller.extend({

  actions:{

    addNewItem :function(){
      var controller = this;
      let order = this.get('model');
      var item = controller.store.createRecord('item', {
        name :'',
        quantity :'',
        rate : '',
        amount : '',
        order : order
      });

      item.save().catch(function(){
        controller.notifications.addNotification({
          message: 'Sorry, cant save at the moment !' ,
          type: 'error',
          autoClear: true
        });
      });
      
    },

    saveOrder :function(){
      var controller = this;
      var  order = controller.get('model');
      var items = order.get('items');
    items.forEach(function(item){
      item.save().catch(function(){
        controller.notifications.addNotification({
          message: 'Sorry, cant save at the moment !' ,
          type: 'error',
          autoClear: true
        });
      });
    });

    return order.save().then(function(){
          controller.notifications.addNotification({
            message: 'Order Saved!' ,
            type: 'success',
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
