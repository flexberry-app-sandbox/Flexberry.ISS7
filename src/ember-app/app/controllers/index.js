import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.i-s-s7.caption'),
          title: i18n.t('forms.application.sitemap.i-s-s7.title'),
          children: [{
            link: 'i-i-s-i-s-s7-рабочее-место-l',
            caption: i18n.t('forms.application.sitemap.i-s-s7.i-i-s-i-s-s7-рабочее-место-l.caption'),
            title: i18n.t('forms.application.sitemap.i-s-s7.i-i-s-i-s-s7-рабочее-место-l.title'),
            icon: 'tags',
            children: null
          }, {
            link: 'i-i-s-i-s-s7-пользователь-l',
            caption: i18n.t('forms.application.sitemap.i-s-s7.i-i-s-i-s-s7-пользователь-l.caption'),
            title: i18n.t('forms.application.sitemap.i-s-s7.i-i-s-i-s-s7-пользователь-l.title'),
            icon: 'chart line',
            children: null
          }, {
            link: 'i-i-s-i-s-s7-тип-l',
            caption: i18n.t('forms.application.sitemap.i-s-s7.i-i-s-i-s-s7-тип-l.caption'),
            title: i18n.t('forms.application.sitemap.i-s-s7.i-i-s-i-s-s7-тип-l.title'),
            icon: 'paperclip',
            children: null
          }]
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.справочники.caption'),
          title: i18n.t('forms.application.sitemap.справочники.title'),
          children: [{
            link: 'i-i-s-i-s-s7-тип-l',
            caption: i18n.t('forms.application.sitemap.справочники.i-i-s-i-s-s7-тип-l.caption'),
            title: i18n.t('forms.application.sitemap.справочники.i-i-s-i-s-s7-тип-l.title'),
            icon: 'table',
            children: null
          }, {
            link: 'i-i-s-i-s-s7-пользователь-l',
            caption: i18n.t('forms.application.sitemap.справочники.i-i-s-i-s-s7-пользователь-l.caption'),
            title: i18n.t('forms.application.sitemap.справочники.i-i-s-i-s-s7-пользователь-l.title'),
            icon: 'briefcase',
            children: null
          }]
        }
      ]
    };
  }),
})