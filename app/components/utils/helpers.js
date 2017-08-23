// require axios for query calls
var axios = require('axios');
var EventEmitter = require('events').EventEmitter;
var Promise = require('promise');
var request = require('request');

var helpers = {

  audiosearch : function (oauthKey, oauthSecret, oauthHost) {
  var self = this;
  if (!oauthKey || !oauthSecret) {
    throw new Error('Audiosear.ch API requires key and secret to initialize.');
  }

  self._creds = {
    key: '977ee2e6556d7d9583791f755096586cc6e7097f02a90acf64666e7c7427e8d0',
    secret: '453c868cd17a98436e6e213fbb4c1227b3a3c5824137bb5cdb292c7e81045b6c',
    host: oauthHost || 'https://www.audiosear.ch',
  };

  self._ee = new EventEmitter();

  self._authorize().then(function (token) {
    self._token = token;
    self._ee.emit('authComplete');
  });
},

  audiosearchAuthorize : function () {
  var self = this;
  return new Promise(function (resolve, reject) {
    var params = {'grant_type':'client_credentials'};
    var unencoded_sig = self._creds.key + ':' + self._creds.secret;
    var signature = new Buffer(unencoded_sig).toString('base64');
    var options = {
      url: self._creds.host + '/oauth/token',
      qs: params,
      headers: {
        'Authorization': 'Basic ' + signature,
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    };
    request.post(options, function (err, res, body) {
      if (res.statusCode !== 200) {
        console.warn(res);
        reject();
      }
      var token = JSON.parse(body).access_token;
      resolve(token);
    });
  });
},

 audiosearchGet : function (url, params) {
  var self = this;
  return new Promise(function (resolve, reject) {
    var options = {
      url: self._creds.host + '/api' + url,
      qs: params,
      headers: {
        'Authorization': 'Bearer ' + self._token,
        'User-Agent': 'request'
      }
    };
    if (!self._token) {
      self._ee.once('authComplete', function () {
        return self.get(url, params).then(resolve);
      });
    } else {

      request(options, function (err, res, body) {
        if (err || res.statusCode !== 200) {
          return reject(err);
        }
        resolve(JSON.parse(body));
      });
    }
  });
},

  // run query looking for topic, publication date,
  runQuery: function(title) {

    audiosearch();
    audiosearchAuthorize();
    audiosearchGet();

    console.log(title);
    var result = title.split(" ");

    var queryURL = "";

    for (var i = 0; i < result.length; i++) {
      queryURL = queryURL + "%20" + result[i];
    }

    console.log("string " + queryURL);

    queryURL = "https://www.audiosear.ch/api/search/episodes/title%3A" + queryURL;

    console.log("full " + queryURL);

    return axios.get(queryURL).then(function(response) {

      var newResults = [];
      var fullResults = response.data.results[0];

      if(fullResults) {
        for (var digital_location in fullResults) {
          newResults.push(fullResults);
        }
        return newResults;
        
      }
     else {
       return ("No results");
     }
     console.log(newResults);
     title = "";
    })
  },

  postPodcast: function(topic, date, url) {
    axios.post('/api/saved', {title: title, date: date, url: url})
    .then(function(result) {
      return(result);
    })
  },

  getPods: function() {
    return axios.get("/user/:id")
      .then(function(results) {
        console.log("axios results", results);
        return results;
      });
  },

}

module.exports = helpers;
