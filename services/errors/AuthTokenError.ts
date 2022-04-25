export class AuthTokenError extends Error {
  constructor() {
    super("Token is invalid or expired");
  }
}
