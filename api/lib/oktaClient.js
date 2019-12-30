const okta = require('@okta/okta-sdk-nodejs');

const client = new okta.Client({
  orgUrl: 'https://https://dev-148128-admin.okta.com',
  token: '00KakLh_mI_a7Drlrau5e0HxgThHZu5QII0qFRj3Hq'
});

module.exports = client;
