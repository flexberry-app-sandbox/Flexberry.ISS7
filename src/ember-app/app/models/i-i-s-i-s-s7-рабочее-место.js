import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';
import OfflineModelMixin from 'ember-flexberry-data/mixins/offline-model';

import {
  defineProjections,
  ValidationRules,
  Model as РабочееМестоMixin
} from '../mixins/regenerated/models/i-i-s-i-s-s7-рабочее-место';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(OfflineModelMixin, РабочееМестоMixin, Validations, {
});

defineProjections(Model);

export default Model;
