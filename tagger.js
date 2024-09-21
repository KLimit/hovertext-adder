for (let image of document.images) {
	if (image.title) {
		continue;
	}
	if (image.alt) {
		image.title = image.alt;
	} else {
		image.title = image.src.split('/').pop();
	}
}
