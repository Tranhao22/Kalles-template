


$('.parent').on('click', function() {
    var parentContainer = $(this).closest('.dropdown');
    var item = parentContainer.find('.children');
    if (item.hasClass('d-none')){
        item.removeClass('d-none');
    }else{
        item.addClass('d-none');
    }
    return;
});