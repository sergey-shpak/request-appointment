import Model, { attr } from '@ember-data/model';

export default class AppointmentModel extends Model {
  @attr cptCode;
  @attr office;
}