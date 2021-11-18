export const environment = {
  production: true,
  sso_api_username: '',
 // sso_api_pwd: '',

  loginURL: 'https://authgoogle.auth.us-east-1.amazoncognito.com/login?' +
              'client_id=21n5l8cscaq5t0826rnvo15f2u&response_type=code&scope=openid+profile&' +
              'redirect_uri=http://localhost:4200/callback',

  redirectURL: 'http://localhost:4200/callback',

  cognitoTokenURL: 'https://authgoogle.auth.us-east-1.amazoncognito.com/oauth2/token',

  logout: 'https://authgoogle.auth.us-east-1.amazoncognito.com/logout?' +
          'client_id=21n5l8cscaq5t0826rnvo15f2u&' +
          'logout_uri=http://localhost:4200/home'
};
