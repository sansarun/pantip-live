describe("TopicParser", function() {

  	it("can count number of comment in topic", function() {
  		var simpleTopicHtml = $.ajax({
	        type: "GET",
	        url: "base/test/html/simpleTopic.html",
	        async: false
	    }).responseText;

  		var parser = new TopicParser(simpleTopicHtml);
	    expect(parser.getCommentNumber()).toBe(4);
  	});

});