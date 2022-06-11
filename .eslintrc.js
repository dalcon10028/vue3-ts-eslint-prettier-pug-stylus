require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  extends: [
    'plugin:vue/vue3-recommended',
    '@vue/eslint-config-typescript',
    'plugin:vue-pug/vue3-recommended',
    'plugin:vue-scoped-css/vue3-recommended',
    'prettier',
  ],
  rules: {
    'vue/valid-template-root': 'off',
    'vue-scoped-css/enforce-style-type': 'off',
  },
}
