describe("TopicParser", function() {

  	it("can count number of maincomment in topic", function() {
  		var html = $.ajax({
	        type: "GET",
	        url: "base/test/html/simpleTopic.html",
	        async: false
	    }).responseText;

  		var parser = new TopicParser(html);
	    expect(parser.getMainCommentNumber()).toBe(4);
  	});

  	it("can count number of maincomment in topic that contain subcomment", function() {
  		var html = $.ajax({
	        type: "GET",
	        url: "base/test/html/subcommentTopic.html",
	        async: false
	    }).responseText;

  		var parser = new TopicParser(html);
	    expect(parser.getMainCommentNumber()).toBe(8);
  	});

});