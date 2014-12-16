$('.youtube').click(function(){
    video = '<iframe width="100%" height="100%" allowfullscreen src="'+ $(this).attr('data-video') +'"></iframe>';
    $(this).replaceWith(video);
    $('.sprites.produk-1').addClass('remove');
});

$('.height').css({
    'height': $('.youtube').height() 
});

$('.caption').css({
    'width': $('.user').width() 
});