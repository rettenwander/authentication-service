class UrlParamsMissing extends Error {
  constructor(params) {
    super('');

    this.status = 400;
    this.name = 'Bad Request';
    this.message = `Url parameter are not provited: ${Object.keys(params).join(', ')}.`;
  }
}

module.exports = UrlParamsMissing;
