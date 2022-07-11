import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  инвНомре: DS.attr('string'),
  название: DS.attr('string'),
  пользователь: DS.belongsTo('i-i-s-i-s-s7-пользователь', { inverse: null, async: false }),
  тип: DS.belongsTo('i-i-s-i-s-s7-тип', { inverse: null, async: false }),
  рабочееМесто: DS.belongsTo('i-i-s-i-s-s7-рабочее-место', { inverse: 'оборудование', async: false })
});

export let ValidationRules = {
  инвНомре: {
    descriptionKey: 'models.i-i-s-i-s-s7-оборудование.validations.инвНомре.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  название: {
    descriptionKey: 'models.i-i-s-i-s-s7-оборудование.validations.название.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  пользователь: {
    descriptionKey: 'models.i-i-s-i-s-s7-оборудование.validations.пользователь.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  тип: {
    descriptionKey: 'models.i-i-s-i-s-s7-оборудование.validations.тип.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  рабочееМесто: {
    descriptionKey: 'models.i-i-s-i-s-s7-оборудование.validations.рабочееМесто.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ОборудованиеE', 'i-i-s-i-s-s7-оборудование', {
    инвНомре: attr('Инв номре', { index: 0 }),
    название: attr('Название', { index: 1 }),
    пользователь: belongsTo('i-i-s-i-s-s7-пользователь', 'Пользователь', {
      фИО: attr('ФИО', { index: 3, hidden: true })
    }, { index: 2, displayMemberPath: 'фИО' }),
    тип: belongsTo('i-i-s-i-s-s7-тип', 'Тип', {
      название: attr('Название', { index: 5, hidden: true })
    }, { index: 4, displayMemberPath: 'название' })
  });
};
