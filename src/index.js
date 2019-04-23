export default class ApiError extends Error {
  /**
   * @description Create an instance of the APIError object
   * @param  {string} message The error message
   * @param  {object[]} possibleCauses An array of possible caused
   * @param  {number} code=500 The HTTP status code
   */
  constructor(message, possibleCauses, code = 500) {
    super(message);
    this.code = code;
    this.possibleCauses = possibleCauses;
  }
}
