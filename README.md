# @respondex/apierror [![Build Status](https://travis-ci.org/IyiKuyoro/apierror.svg?branch=develop)](https://travis-ci.org/IyiKuyoro/apierror) [![Coverage Status](https://coveralls.io/repos/github/IyiKuyoro/apierror/badge.svg?branch=develop)](https://coveralls.io/github/IyiKuyoro/apierror?branch=develop) [![Maintainability](https://api.codeclimate.com/v1/badges/41ffa72ca310477a67d8/maintainability)](https://codeclimate.com/github/IyiKuyoro/apierror/maintainability)

This is a simple API error class that helps create an instance of custom API errors. It was created as a support package for [@respondex/core](https://github.com/IyiKuyoro/respondex).

## Documentation
Along with [@respondex/core](https://github.com/IyiKuyoro/respondex), a class has been provided that can be used to better handle errors that may occur during runtime; be it client or server errors. By simple instantiating an error object with this class, you can send a well formated http response using the RespondEx **error** method. Simply pass the instantiated error object as the first parameter of the **error** method.

| Parameter      | Type     | Description                                        | Example                                               |
|----------------|----------|----------------------------------------------------|-------------------------------------------------------|
| message        | string   | A simple message describing the error              | "Product not found"                                   |
| possibleCauses | string[] | A list of possible or definite causes of the error | ["The product with the specified ID does not exist."] |
| code           | number   | The status code of the error                       | 404                                                   |

#### Example
```
import RespondEx from "@respondex/core";
import ApiError from "@respondex/apierror";

const error = new ApiError(
  'Product not found',
  [
    'The product with the specified ID does not exist.',
    'The ID was not provided in the correct format.'
  ],
  404
);

RespondEx.error(error, res);
```

### Contributors
_Opeoluwa Iyi-Kuyoro_: 👨🏿[Profile](https://github.com/IyiKuyoro) - [WebSite](https://iyikuyoro.com)

### Contributions
I am very open to contributions from the community. If you find this package useful, and you feel there are a rew things you would like to add or nasty bugs that you just want to get rid of, please feel free to fork, modify and raise a PR.

In doing so, I would like you to follow the conventions.

**Commit styles**: This project uses the Angular commit style and [commitplease](https://www.npmjs.com/package/commitplease) has been set up to enforce that.

**PR Style**: Please use the template you find in the PR message to compose one.
