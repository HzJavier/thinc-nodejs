var Firebase = require('firebase');
var firebaseRef = new Firebase("https://thinc-chat.firebaseio.com/messages");
var MSG_LIMIT = 500;
var TIMEOUT_MS = 100;
var dataLayer = {};

dataLayer.getMessages = function (callback) {
  var messages = [];

  var timeoutId = setTimeout(function () {
    firebaseRef.off('child_added');
    callback(messages);
  }, TIMEOUT_MS);

  firebaseRef
    .limitToLast(MSG_LIMIT)
    .on('child_added', function (snapshot) {
      messages.push(snapshot.val());

      clearTimeout(timeoutId);

      if (messages.length === MSG_LIMIT) {
        firebaseRef.off('child_added');
        callback(messages);
      } else {
        timeoutId = setTimeout(function () {
          firebaseRef.off('child_added');
          callback(messages); 
        }, TIMEOUT_MS);
      }

    });
};

module.exports = dataLayer;
