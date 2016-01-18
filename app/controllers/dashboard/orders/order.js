import Ember from 'ember';
export default Ember.Controller.extend({

  actions:{



    // calculatedAmount : Ember.computed('item.quantity', 'item.rate'  ,function() {
    //   var quantity =  this.get('item.quantity');
    //   var rate = this.get('item.rate');
    //   var amount = quantity * rate;
    //   return  amount;
    // }),

    isCreateOrderButtonDisabled: Ember.computed('title', function() {
          return Ember.isEmpty(this.get('title'));
    }),


    calculatedAmount: Ember.computed('model.title' , function() {
      //   return this.get('order.items').filter(function(item) {
      //     // var quantity =  item.get('quantity');
      //     // var rate = item.get('rate');
      //     // var amount = quantity * rate;
      //
      //   //return amount;
      // });
      console.log('sdsd');


    }),

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

    deleteItem :function(item){
      var controller = this;
      item.destroyRecord().catch(function(){
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
