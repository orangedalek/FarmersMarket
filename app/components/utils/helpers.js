// // require axios for query calls
var axios = require('axios');


var helpers = {
    

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

   postPodcast: function(title, date, description, image, url) {
     axios.post('/api/podcast', 
      {title: title, date: date, description: description, image:image, url: url})
     .then(function(result) {
       return(result);
     })
    },


  // getPods: function() {
  //   return axios.get("/user/:id")
  //     .then(function(results) {
  //       console.log("axios results", results);
  //       return results;
  //     });
  // },

 };

module.exports = helpers;
