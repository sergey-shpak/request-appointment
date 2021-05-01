import StepRoute from './step';
import { action } from '@ember/object';
import ENV from 'request-appointment/config/environment';

export default class LocationRoute extends StepRoute {

  async model(){
    const appointment = this.modelFor('Appointment')

    return this.store.query('office', {
      'filter[clinicianId]': ENV.APP.clinicianId,
      'filter[cptCodeId]': appointment.get('cptCode').id,
    });
  }

  beforeModel(){
    const appointment = this.modelFor('Appointment')

    if(!appointment.cptCode)
      this.router.transitionTo('appointment.service')
    else this.modelFor('Appointment')
      .setProperties({
        office: null
      })
  }

  @action
  nextStep(office){
    this.modelFor('Appointment')
      .set('office', office)
    this.router.transitionTo('appointment.confirm')
  }
}