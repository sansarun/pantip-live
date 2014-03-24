function TopicParser(html) {

	this.dom = $(html);

	this.getMainCommentNumber = function() {
		return this.dom.find(".section-comment:not(.sub-comment)").length;
	};

}