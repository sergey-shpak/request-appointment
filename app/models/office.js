import Model, { attr } from '@ember-data/model';

export default class OfficeModel extends Model {
  @attr('boolean') isPublic;
  @attr('boolean') isVideo;
  @attr('string') phone;
  @attr('string') name;
  @attr geolocation;
}