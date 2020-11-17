// $('.btn').click(function(){
// $('.btn').removeClass("bg-gray-700");
// $(this).addClass("bg-gray-700");
// let animal = $(this).text();

// let flickerAPI = "https://www.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
// let flickerOptions = {
// 	tags: animal,
// 	format: "json",
// };

// function  displayPhotos(data){
// let photoHtml = '<div class="md:grid grid-cols-5 gap-2  mt-30 mt-10">';
// 	$.each( data.items, function(i, photo){
// 		 photoHtml +=`
			
// 				<a href="${photo.link}" class="image">
// 				<img src="${photo.media.m}" alt="" class="img">
					
// 				</a>
			
// 		`
// 	});
// 	photoHtml += '</div>';
// 		$('.photos').html(photoHtml);	
// }
// 	$.getJSON(flickerAPI,flickerOptions, displayPhotos);
// })

//======================================

$('form').submit(function(e){
	e.preventDefault();

	let formValue = $('input').val();

	let flickerAPI = "https://www.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
let flickerOptions = {
	tags: formValue,
	format: "json",
};

function  displayPhotos(data){
let photoHtml = '<div class="md:grid grid-cols-5 gap-2  mt-30 mt-10">';
	$.each( data.items, function(i, photo){
		 photoHtml +=`
			
				<a href="${photo.link}" class="image">
				<img src="${photo.media.m}" alt="" class="img">
					
				</a>
			
		`
	});
	photoHtml += '</div>';
		$('.photos').html(photoHtml);	
}
	$.getJSON(flickerAPI,flickerOptions, displayPhotos);
});


