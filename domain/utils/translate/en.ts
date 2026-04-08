import { login } from "@infrastructure/api/authApi";

export default {
  atlas: {
    atlasDetail: 'Atlas Detail',
    imeiLabel: 'IMEI: {{imei}}',
    expires: 'Expires: {{date}}',
    deviceLocation: 'Device Location',
  },
  errors: {
    atlasDetail: 'Something went wrong loading the Atlas details. Please, try again later.',
    atlasList: 'Something went wrong loading the Atlas. Please, try again later.',
    estates: 'Something went wrong loading your estates. Please, try again later.',
    emptyCredentials: 'Please enter both username and password.',
    loginFailed: 'Please check your credentials and try again.',
  },
  login: {
    login: 'Login',
    username: 'Username',
    password: 'Password',
    signIn: 'Sign In',
    enterEmailPlaceholder: 'Enter your email',
    enterPasswordPlaceholder: 'Enter your password',
    errorTitle: 'Error',
  },
  atlasList: {
    atlasList: 'Atlas list',
    noAtlasFound: 'No Atlas found in this estate.',
  },
  estate: {
    estates: 'Estates',
    created: 'Created: {{date}}',
  },
  estateList: {
    noEstatesFound: 'No estates found.',
  },
};
