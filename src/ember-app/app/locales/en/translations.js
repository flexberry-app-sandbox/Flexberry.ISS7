import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IISISS7ПользовательLForm from './forms/i-i-s-i-s-s7-пользователь-l';
import IISISS7РабочееМестоLForm from './forms/i-i-s-i-s-s7-рабочее-место-l';
import IISISS7ТипLForm from './forms/i-i-s-i-s-s7-тип-l';
import IISISS7ПользовательEForm from './forms/i-i-s-i-s-s7-пользователь-e';
import IISISS7РабочееМестоEForm from './forms/i-i-s-i-s-s7-рабочее-место-e';
import IISISS7ТипEForm from './forms/i-i-s-i-s-s7-тип-e';
import IISISS7ОборудованиеModel from './models/i-i-s-i-s-s7-оборудование';
import IISISS7ПользовательModel from './models/i-i-s-i-s-s7-пользователь';
import IISISS7РабочееМестоModel from './models/i-i-s-i-s-s7-рабочее-место';
import IISISS7ТипModel from './models/i-i-s-i-s-s7-тип';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-i-s-s7-оборудование': IISISS7ОборудованиеModel,
    'i-i-s-i-s-s7-пользователь': IISISS7ПользовательModel,
    'i-i-s-i-s-s7-рабочее-место': IISISS7РабочееМестоModel,
    'i-i-s-i-s-s7-тип': IISISS7ТипModel
  },

  'application-name': 'I s s7',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please wait for a moment...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'I s s7',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'I s s7',
          title: 'I s s7'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        'i-s-s7': {
          caption: 'ISS7',
          title: 'ISS7',
          'i-i-s-i-s-s7-рабочее-место-l': {
            caption: 'Рабочее место',
            title: ''
          },
          'i-i-s-i-s-s7-пользователь-l': {
            caption: 'Пользователь',
            title: ''
          },
          'i-i-s-i-s-s7-тип-l': {
            caption: 'Тип',
            title: ''
          }
        },
        справочники: {
          caption: 'Справочники',
          title: 'Справочники',
          'i-i-s-i-s-s7-тип-l': {
            caption: 'ТипL',
            title: 'Тип'
          },
          'i-i-s-i-s-s7-пользователь-l': {
            caption: 'ПользовательL',
            title: 'Пользователь'
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'i-i-s-i-s-s7-пользователь-l': IISISS7ПользовательLForm,
    'i-i-s-i-s-s7-рабочее-место-l': IISISS7РабочееМестоLForm,
    'i-i-s-i-s-s7-тип-l': IISISS7ТипLForm,
    'i-i-s-i-s-s7-пользователь-e': IISISS7ПользовательEForm,
    'i-i-s-i-s-s7-рабочее-место-e': IISISS7РабочееМестоEForm,
    'i-i-s-i-s-s7-тип-e': IISISS7ТипEForm
  },

});

export default translations;
