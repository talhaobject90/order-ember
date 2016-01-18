
import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  quantity: DS.attr('number'),
  rate: DS.attr('number'),
  amount: DS.attr('string'),
  order: DS.belongsTo('order' , {async:true }),
});
