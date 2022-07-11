import { Serializer as ТипSerializer } from
  '../mixins/regenerated/serializers/i-i-s-i-s-s7-тип';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ТипSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
