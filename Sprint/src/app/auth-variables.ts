interface AuthConfig {
    clientID: string;
    domain: string;
    callbackURL: string;
  }
  
  export const AUTH_CONFIG: AuthConfig = {
    clientID: 'P2Wg61HZ4y05yohh1t7UcVKcB6ZPm1Oa',
    domain: 'anasziani.auth0.com',
    callbackURL: 'http://localhost:4200/callback'
  };
  