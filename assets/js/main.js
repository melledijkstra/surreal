
console.log('working');

$(window).on("load", function() {
	console.log('loaded');
	$(".pure-img").each(function() {
		var _this = $(this);
		EXIF.getData(this, function() {
			var all = EXIF.getAllTags(this);
			var ISO = EXIF.getTag(this, "ISOSpeedRatings");
			var expTime = EXIF.getTag(this, "ExposureTime");
			var aperture = EXIF.getTag(this, "FNumber");
			_this.parent().append("<div>ISO: "+ISO+" | exposure: "+expTime.numerator+"/"+expTime.denominator+" ("+expTime+") | f/"+aperture+"</div>");
		});
	});
});
