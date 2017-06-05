const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);
const secureCompare = require('secure-compare');
console.log("firebase", firebase);


exports.sendAuditReminders = functions.https.onRequest((req, res) => {
  const key = req.query.key;
  
  // Exit if the keys don't match
  if (!secureCompare(key, functions.config().cron.key)) {
    console.log('The key provided in the request does not match the key set in the environment. Check that', key,
      'matches the cron.key attribute in `firebase env:get`');
    res.status(403).send('Security key does not match. Make sure your "key" URL query parameter matches the ' +
      'cron.key environment variable.');
    return;
  }
  
  //Fetch all Accounts
  getAccounts().then(accounts => {
    let dateNow = new Date().getTime();
    accounts.forEach(checkAuditDate(account, dateNow).then(function (data) {
      if (data) {
        //send email
        console.log("send email");
      }
    }))
  });
});


function getAccounts(){
  functions.database.ref('account').once('value').then(data => {
    return data;
  })
}

function checkAuditDate (account, dateNow) {
  account.sites.forEach(function(site){
    site.areas.forEach(function (area) {
      if(area.auditStartDate < dateNow) {
        console.log('send email');
      }
    })
  })
}
