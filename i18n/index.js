var en = require("./translations.en.json");
var fr = require("./translations.fr.json");

const i18n = {
  translations: {
    en,
    fr,
  },
  defaultLang: "en",
  useBrowserDefault: true,
};

module.exports = i18n;