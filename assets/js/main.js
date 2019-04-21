
console.log('working');

$(".pure-img").each(function() {
	var _this = this;
	EXIF.getData(this, function() {
		var exposureTime = EXIF.getAllTags(this);
		console.log(exposureTime);
	});
});
