import Abstractroute from './AbstractRoute';
import { service } from '@ember/service';

export default class EmployeesRoute extends Abstractroute {
  @service store;
  model() {
    return this.store.findAll('employee');
  }
}
