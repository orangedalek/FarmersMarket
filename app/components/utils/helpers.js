// require axios for query calls
var axios = require('axios');
var EventEmitter = require('events').EventEmitter;
var Promise = require('promise');
var request = require('request');

var helpers = {


  // run query looking for topic, publication date,
  runQuery: function(title) {

    var Audiosearch = require('audiosearch-client-node');

    var AUDIOSEARCH_APP_ID = '977ee2e6556d7d9583791f755096586cc6e7097f02a90acf64666e7c7427e8d0';
    var AUDIOSEARCH_SECRET = '453c868cd17a98436e6e213fbb4c1227b3a3c5824137bb5cdb292c7e81045b6c';

    var audiosearch = new Audiosearch(AUDIOSEARCH_APP_ID, AUDIOSEARCH_SECRET);

  // audiosearch.getTastemakers().then(function (tastemakers) {
  //   // do stuff here
  // });

  // audiosearch.searchEpisodes('text query').then(function (results) {
  //   // do stuff here.
  // });

    console.log(title);
    
    var result = title.split(" ");

    var queryURL = "";

    for (var i = 0; i < result.length; i++) {
      queryURL = queryURL + "%20" + result[i];
    }

    console.log("string " + queryURL);
    

    //#Search with parameters
    audiosearch.searchEpisodes(title, {"size":5,"from":1}).then(function (results) {
      console.log(response);
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
  // do stuff here.
  console.log(results);
    });
    return axios.get(queryURL).then(function(response) {

     
     console.log(newResults);
     title = "";
    })
  },

  postUser: function(username, password, image) {
    axios.post('/api/user', {username: username, password: password, image:image})
    .then(function(result){
      return(result);
    })
  },

  createPod: function(title , icon, description, keyword) {
    axios.post('/api/pods', {title: title, icon: icon, description: description, keyword: keyword})
      .then(function(result) {
        return(result);
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
