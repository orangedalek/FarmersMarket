// require axios for query calls
var axios = require('axios');

var helpers = {
  // run query looking for /search/episodes/{query}
  runQuery: function(title + ) { //search for category
    console.log(title + );

    var Audiosearch = require('audiosearch-client-node');
    var audiosearch = new Audiosearch(process.env.AUDIOSEARCH_APP_ID, process.env.AUDIOSEARCH_SECRET);

    audiosearch.getTastemakers().then(function (tastemakers) {
      // adds function
    });

    audiosearch.searchEpisodes('text query'.then(function (results) {
      //
    });

    audiosearch.searchEpisodes('text query', {"size": 50, "from":1}).then(function(results) {

    });

    //var apiKey = "";
//     var queryURL = "curl -H "Content-Type: application/json"  -H 'Accept: application/json' -d '{"email":"austin.alexander.lee@gmail.com","password":"austinatvoice"}' -X POST https://voicerepublic.com/api/sessions
// ";
    //var queryURL = "";

    return axios.get(queryURL).then(function(response) {
      var newResults = [];
      var fullResults = response.data.response.docs;
      var count = 0;

      if (fullResults[0]) {
        for (var i = 0; i < fullResults.length; i++) {
          if(count>4) {
            return newResults;
          }
          //if(fullResults[count].[insert topic or title] && fullResults[count].[insert pub date] && fullResults[count].[insert content url]) {
          //newResults.push(fullResults[count]);
          //  count++;
          }
        return newResults;
      }
     else {
        return("");
      }
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
