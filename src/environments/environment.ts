// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,

  baseUrl: 'https://jsonplaceholder.typicode.com/',
};

export const constants = {
  form_urlEncoded: 'application/x-www-form-urlencoded',
  json: 'application/json',
  multipart: 'application/multipart',
  multipartFormData: 'multipart/form-data',
};

export const urls = {
  posts: environment.baseUrl + 'posts/',
  singlePosts: environment.baseUrl + 'posts/{id}',
  comments: environment.baseUrl + 'posts/{id}/comments',
};




/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
