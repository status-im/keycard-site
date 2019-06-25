hexo.extend.helper.register('show_lang', function (lang) {
  if (this.page.lang != 'en') {
    return '/' + this.page.lang;
  }
});

hexo.extend.helper.register('lang_name', function(lang) {
  var data = this.site.data.languages[lang];
  return data.name || data;
});