// require axios for query calls
var axios = require('axios');

var helpers = {
  // run query looking for topic, publication date,
  runQuery: function(title) {
    console.log(title);
    var result = title.split(" ");

    //var apiKey = "";
//     var queryURL = "curl -H "Content-Type: application/json"  -H 'Accept: application/json' -d '{"email":"austin.alexander.lee@gmail.com","password":"austinatvoice"}' -X POST https://voicerepublic.com/api/sessions
// ";
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
    })
  },

  postPodcast: function(topic, date, url) {
    axios.post('/api/saved', {title: title, date: date, url: url})
    .then(function(result) {
      return(result);
    })
  }
}

module.exports = helpers;
