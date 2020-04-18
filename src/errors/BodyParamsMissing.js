class BodyParamsMissing extends Error {
  constructor(params) {
    super('');

    this.status = 400;
    this.name = 'Bad Request';
    this.message = `Body parameter are not provited: ${Object.keys(params).join(', ')}.`;
  }
}

module.exports = BodyParamsMissing;
