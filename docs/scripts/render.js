jQuery(function($) {
	$("#feed").rss("https://anchor.fm/s/69da638/podcast/rss", {
		ssl: true,
		limit: 100,
		layoutTemplate: "<ul>{entries}</ul>",
		entryTemplate: "<li><a href='{url}'>{title}</li>"
	})
})