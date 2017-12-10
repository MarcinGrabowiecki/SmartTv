//javascript:(function(){document.body.appendChild(document.createElement('script')).src='https://rawgit.com/MarcinGrabowiecki/SmartTv/master/catchVideo.js';})();

console.log($);
console.log($('video')[0]);

var src=$('video')[0].src;
var title=document.title;

//https://script.google.com/macros/s/AKfycbwMQEd6FI91OgLpKBzejeYkkFhSCarWrUh3giJJlxUE42VBr8mJ/exec?command=append&data=[1,2,3,"xxxxxxx"]
var url="https://script.google.com/macros/s/AKfycbwMQEd6FI91OgLpKBzejeYkkFhSCarWrUh3giJJlxUE42VBr8mJ/exec"

$.ajax({
  url: url,
  type: "get",
  data: { 
  	command: 'append', 
  	data: JSON.stringify([title,src,'play'])
  },
  success: function(response) {
    console.log(response);
  },
  error: function(xhr) {
    console.log(xhr);
  }
});