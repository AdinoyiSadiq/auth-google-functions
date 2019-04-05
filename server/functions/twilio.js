const twilio = require('twilio');
const keys = require('./keys');

module.exports = new twilio.Twilio(keys.ACCOUNTSID, keys.AUTHTOKEN);

