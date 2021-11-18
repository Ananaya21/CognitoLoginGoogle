export const environment = {
  production: false,

  sso_api_username: '7p320fg0vtut0eitucbjjmi9a8',
  sso_api_pwd: 'uhct1g3vtb8mrva4cgi40m2v4vhjgopfdbsa7u0eotitk5qq9f5',

  loginURL: 'https://authgoogle.auth.us-east-1.amazoncognito.com/login?' +
              'client_id=7p320fg0vtut0eitucbjjmi9a8&response_type=code&scope=openid+profile&' +
              'redirect_uri=http://localhost:4200/callback',


  redirectURL: 'http://localhost:4200/callback',

  cognitoTokenURL: 'https://authgoogle.auth.us-east-1.amazoncognito.com/oauth2/token',

  logout: 'https://authgoogle.auth.us-east-1.amazoncognito.com/logout?' +
          'client_id=7p320fg0vtut0eitucbjjmi9a8&' +
          'logout_uri=http://localhost:4200/home'
};

