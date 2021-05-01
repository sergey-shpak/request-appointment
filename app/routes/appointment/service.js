import StepRoute from './step';
import { action } from '@ember/object';
import ENV from 'request-appointment/config/environment';

export default class ServiceRoute extends StepRoute {

  async model(){
    return this.store.query('cptCode', {
      'filter[clinicianId]': ENV.APP.clinicianId
    });
  }

  beforeModel(){
    this.modelFor('Appointment')
      .setProperties({
        cptCode: null,
        office: null
      })
  }

  @action
  nextStep(cptCode){
    this.modelFor('Appointment')
      .set('cptCode', cptCode)
    this.router.transitionTo('appointment.location')
  }
}