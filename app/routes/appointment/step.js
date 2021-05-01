import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';

export default class StepRoute extends Route {
  @service router;
  @service store;

  controllerName = 'Step'

  @action
  nextStep(args){
    /* to override */
  }
}