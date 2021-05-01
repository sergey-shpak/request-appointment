import StepRoute from './step';
import { action } from '@ember/object';

export default class LocationRoute extends StepRoute {

  async model(){
    return this.modelFor('Appointment')
  }

  beforeModel(){
    const appointment = this.modelFor('Appointment')

    if(!appointment.office)
      this.router.transitionTo('appointment.location')
  }

  @action
  nextStep(){
    alert('Not implemented!')
  }
}