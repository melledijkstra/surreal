
$(window).on("load", function() {
	$(".cocoen").cocoen();
	
	Intense(document.querySelectorAll('.pure-img'));
	
	// this can take some time!
	$(".pure-img").each(function() {
		var _this = $(this);
		if(_this[0].hasAttribute("no-exif")) return;
		EXIF.getData(this, function() {
			var all = EXIF.getAllTags(this);
			var ISO = EXIF.getTag(this, "ISOSpeedRatings");
			var expTime = EXIF.getTag(this, "ExposureTime");
			var aperture = EXIF.getTag(this, "FNumber");
			_this.parent().append("<div>ISO: "+ISO+" | exposure: "+expTime.numerator+"/"+expTime.denominator+" | f/"+aperture+"</div>");
			_this.data("caption", "ISO: "+ISO+" | exposure: "+expTime.numerator+"/"+expTime.denominator+" | f/"+aperture);
		});
	});
});
