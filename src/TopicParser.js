function TopicParser(html) {

	this.dom = $(html);

	this.getCommentNumber = function() {
		return this.dom.find(".section-comment").length;
	};

}