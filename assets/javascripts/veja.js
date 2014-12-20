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

function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();            
        reader.onload = function (e) {
            $('#target').attr('src', e.target.result);
        }
        
        reader.readAsDataURL(input.files[0]);
    }
}

$("#imgInp").change(function(){
    readURL(this);
});