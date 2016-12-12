import DS from 'ember-data';

export default DS.Model.extend({
      title:          DS.attr(),
      plantingseason: DS.attr(),
      sun:            DS.attr(),
      image:          DS.attr()
});
