class CustomError extends Error {
  constructor(name, errorMessage, ...params) {
    super(params);

    this.name = name;
    this.message = errorMessage;
  }
}
module.exports = CustomError;
