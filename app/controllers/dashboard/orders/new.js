import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    createOrder: function(){
      var controller = this;
      // var user = this.get('user').get('firstObject');
      var order = this.store.createRecord('order', {
        title: this.get('title')});

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
