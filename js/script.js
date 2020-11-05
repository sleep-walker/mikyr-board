﻿$(document).ready(function(){
	// Remove no-javascript class if js is enabled
	$("body.no-javascript").removeClass("no-javascript")

	$("audio").removeAttr("controls").each(function(i, audioElement) {
	    var audio = $(this);
	    var that = this;
	    $("#doc").append($('<li><a class="'+audio.attr("class")+'" href="#" title="'+audio.attr("title")+'"><button>'+audio.attr("title")+'</button></a></li>').click(function() {that.play();}));
	});

});
