// // require axios for query calls
var axios = require('axios');


var helpers = {
    

  postUser: function(username, password, image) {
     axios.post('/api/user', {username: username, password: password, image:image})
     .then(function(result){
       return(result);
     })
   },

   createPod: function(title , icon, description, keyword, podcastURL) {
     axios.post('/api/pods', {title: title, icon: icon, description: description, keyword: keyword, podcastURL: podcastURL})
       .then(function(result) {
         return(result);
     })
   },

   searchEpisodes: function(episodeName) {
      
      var str = episodeName.split(" ");
      var appendString = str[0];

      for (var i = 1 ; i < str.length; i++) {
        appendString = appendString + "%20" + str[i];
      }


      var queryURL = "https://api.ottoradio.com/v1/playlist?query=" + appendString + "&length=90&mix=Just%20Podcasts";
      console.log(queryURL);

      return axios.get(queryURL).then(function(response) {

        var newResults = [];
        var fullResults = response.data;
        console.log(fullResults);

        newResults.push(fullResults);

    
      return newResults;

     })  
   },

   searchPods: function(podSearch) {

      return axios.get("/api/pods").then(function(response) {

      var newPodResults = [];
      var fullPodResults = response.data;
      console.log(fullPodResults);

      newPodResults.push(fullPodResults);
 
      return newPodResults;

     }) 
   },

   postPodcast: function(title, date, description, image, podcastURL) {
     axios.post('/api/podcast', 
      {title: title, date: date, description: description, image:image, podcastURL: podcastURL})
     .then(function(result) {
       return(result);
     })
    },

 };

module.exports = helpers;
