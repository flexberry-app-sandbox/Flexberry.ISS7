import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  инвНомре: DS.attr('string'),
  место: DS.attr('string'),
  оборудование: DS.hasMany('i-i-s-i-s-s7-оборудование', { inverse: 'рабочееМесто', async: false })
});

export let ValidationRules = {
  инвНомре: {
    descriptionKey: 'models.i-i-s-i-s-s7-рабочее-место.validations.инвНомре.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  место: {
    descriptionKey: 'models.i-i-s-i-s-s7-рабочее-место.validations.место.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  оборудование: {
    descriptionKey: 'models.i-i-s-i-s-s7-рабочее-место.validations.оборудование.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('РабочееМестоE', 'i-i-s-i-s-s7-рабочее-место', {
    инвНомре: attr('Инв номре', { index: 0 }),
    место: attr('Место', { index: 1 }),
    оборудование: hasMany('i-i-s-i-s-s7-оборудование', 'Оборудование', {
      инвНомре: attr('Инв номре', { index: 0 }),
      название: attr('Название', { index: 1 }),
      пользователь: belongsTo('i-i-s-i-s-s7-пользователь', 'Пользователь', {
        фИО: attr('ФИО', { index: 3, hidden: true })
      }, { index: 2, displayMemberPath: 'фИО' }),
      тип: belongsTo('i-i-s-i-s-s7-тип', 'Тип', {
        название: attr('Название', { index: 5, hidden: true })
      }, { index: 4, displayMemberPath: 'название' })
    })
  });

  modelClass.defineProjection('РабочееМестоL', 'i-i-s-i-s-s7-рабочее-место', {
    инвНомре: attr('Инв номре', { index: 0 }),
    место: attr('Место', { index: 1 })
  });
};
