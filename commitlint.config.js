module.exports = {
  extends: ['@commitlint/cli'],
  parserPreset: {
    parserOpts: {
      issuePrefixes: ['VUE-']
    }
  },
  rules: {
    'references-empty': [2, 'never']
  }
};
