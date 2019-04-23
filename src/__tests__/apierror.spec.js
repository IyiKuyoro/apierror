import ApiError from '../index';

describe('APIError', () => {
  it('should should create a new error instance with 500 status code', () => {
    const error = new ApiError('Some error', []);

    expect(error.code).toBe(500);
  });

  it('should should create a new error instance with the custom code', () => {
    const error = new ApiError('Product not found', [], 404);

    expect(error.code).toBe(404);
  });
});
