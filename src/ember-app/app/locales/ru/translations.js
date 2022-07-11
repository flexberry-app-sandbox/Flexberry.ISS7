import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

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
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'I s s7',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'I s s7',
          title: 'I s s7'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
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
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
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
