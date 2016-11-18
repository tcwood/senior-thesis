export default class Actions {
  static grantAccess(token) {
    return {
      type: 'GRANT_ACCESS',
      token,
    };
  }
}
