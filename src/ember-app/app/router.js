import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-i-s-s7-пользователь-l');
  this.route('i-i-s-i-s-s7-пользователь-e',
  { path: 'i-i-s-i-s-s7-пользователь-e/:id' });
  this.route('i-i-s-i-s-s7-пользователь-e.new',
  { path: 'i-i-s-i-s-s7-пользователь-e/new' });
  this.route('i-i-s-i-s-s7-рабочее-место-l');
  this.route('i-i-s-i-s-s7-рабочее-место-e',
  { path: 'i-i-s-i-s-s7-рабочее-место-e/:id' });
  this.route('i-i-s-i-s-s7-рабочее-место-e.new',
  { path: 'i-i-s-i-s-s7-рабочее-место-e/new' });
  this.route('i-i-s-i-s-s7-тип-l');
  this.route('i-i-s-i-s-s7-тип-e',
  { path: 'i-i-s-i-s-s7-тип-e/:id' });
  this.route('i-i-s-i-s-s7-тип-e.new',
  { path: 'i-i-s-i-s-s7-тип-e/new' });
});

export default Router;
