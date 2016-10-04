chrome.tabs.onUpdated.addListener( function (tabId, changeInfo, tab) {
  if (changeInfo.status == 'complete') {

	chrome.tabs.executeScript({
		file: 'jquery.min.js'
		}, function() {
		  
		chrome.tabs.executeScript({
				code: '$( ".flag-ca" ).each(function( index ) {$( this ).parent().parent().parent().parent().remove();});'
		});
	});

  }
})