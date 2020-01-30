const accountSid = '';
const authToken = '';
const client = require('twilio')(accountSid, authToken);

client.messages
  .create({
    body: 'hello',
    from: '',
    to: '+919113253470'
  })
  .then(message => console.log(message))
  .done();
