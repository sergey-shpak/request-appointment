import Controller from '@ember/controller';
import { action } from '@ember/object';

/* To proxy controller actions to route actions */
export default class AppointmentController extends Controller {
  @action
  next(...args){
    this.send('nextStep', ...args)
  }
}