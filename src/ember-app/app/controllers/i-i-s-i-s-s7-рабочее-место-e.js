import EditFormController from 'ember-flexberry/controllers/edit-form';

export default EditFormController.extend({
  parentRoute: 'i-i-s-i-s-s7-рабочее-место-l',

  getCellComponent(attr, bindingPath, model) {
    let cellComponent = this._super(...arguments);
    if (attr.kind === 'belongsTo') {
      switch (`${model.modelName}+${bindingPath}`) {
        case 'i-i-s-i-s-s7-оборудование+пользователь':
          cellComponent.componentProperties = {
            choose: 'showLookupDialog',
            remove: 'removeLookupValue',
            displayAttributeName: 'фИО',
            required: true,
            relationName: 'пользователь',
            projection: 'ПользовательL',
            autocomplete: true,
          };
          break;

        case 'i-i-s-i-s-s7-оборудование+тип':
          cellComponent.componentProperties = {
            choose: 'showLookupDialog',
            remove: 'removeLookupValue',
            displayAttributeName: 'название',
            required: true,
            relationName: 'тип',
            projection: 'ТипL',
            autocomplete: true,
          };
          break;

      }
    }

    return cellComponent;
  },
});
