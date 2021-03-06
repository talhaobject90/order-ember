import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  customer: DS.attr('string'),
  date: DS.attr('date'),
  total: DS.attr('number'),
  items: DS.hasMany('item' ,{embedded: 'always', async:true}),
  //user: DS.belongsTo('user', {async:true ,embedded: 'always'})
});
