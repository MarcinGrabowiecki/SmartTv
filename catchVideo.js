	//javascript:(function(){document.body.appendChild(document.createElement('script')).src='https://rawgit.com/MarcinGrabowiecki/SmartTv/master/catchVideo.js';})();


	console.log('init');

	if(!window.jQuery){

	(function(){
	  var newscript = document.createElement('script');
	     newscript.type = 'text/javascript';
	     newscript.async = true;
	     newscript.src = 'https://ajax.googleapis.com/ajax/libs/jquery/1.6.1/jquery.min.js';
	     if(document.location.protocol=="http:") 'http://ajax.googleapis.com/ajax/libs/jquery/1.6.1/jquery.min.js';
	  (document.getElementsByTagName('head')[0]||document.getElementsByTagName('body')[0]).appendChild(newscript);
	})();
	console.log('jQuery ' + jQuery.fn.jquery + '');
	console.log($);

	}


	console.log($('video')[0]);

	var src;
	if($('video')[0]) src=$('video')[0].src;
	else if($('video')) src=$('video').src;

	var title=document.title;

	//https://script.google.com/macros/s/AKfycbwMQEd6FI91OgLpKBzejeYkkFhSCarWrUh3giJJlxUE42VBr8mJ/exec?command=append&data=[1,2,3,"xxxxxxx"]
	var url="https://script.google.com/macros/s/AKfycbwMQEd6FI91OgLpKBzejeYkkFhSCarWrUh3giJJlxUE42VBr8mJ/exec"

	$.ajax({
	  url: url,
	  type: "get",
	  data: { 
	  	command: 'append', 
	  	data: JSON.stringify([title,src,'play',new Date()])
	  },
	  success: function(response) {
	    console.log(response);
	  },
	  error: function(xhr) {
	    console.log(xhr);
	  }
	});