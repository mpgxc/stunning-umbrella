export enum HttpStatusCode {
  STATUS_OK = 200,
  STATUS_CREATED = 201,
  STATUS_NO_CONTENT = 204,
  STATUS_BAD_REQUEST = 400,
  STATUS_UNAUTHORIZED = 401,
  STATUS_NOT_FOUND = 404,
  STATUS_REQUEST_TIMEOUT = 408,
  STATUS_TOO_MANY_REQUESTS = 429,
  STATUS_INTERNAL_SERVER_ERROR = 500,
  STATUS_NOT_IMPLEMENTED = 501,
  STATUS_SERVICE_UNAVAILABLE = 503,
}

export type HttpStatusCodeType = typeof HttpStatusCode;
