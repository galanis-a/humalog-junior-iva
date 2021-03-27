$('.bibliografia').on($LEAP.ie_start, function(e) {
    e.stopPropagation();
    $(this).toggleClass('open');
})

$('.home-btn').on($LEAP.ie_start, function() {
    $LEAP.slideName('page_01');
})

$('.side-drawer .toggle').on($LEAP.ie_start, function() {
    var isOpen = $(this).closest('.side-drawer').hasClass('open');
    $('.side-drawer').removeClass('open');
    if(!isOpen) {
        $(this).closest('.side-drawer').addClass('open');
    }
})

$(document).on($LEAP.ie_start, function(e) {
    if ($(e.target).closest('.side-drawer').length == 0) {
        $('.side-drawer').removeClass('open');
    }
})

$(document).on($LEAP.ie_start, function(e) {
    if ($(e.target).closest('.bibliografia').length == 0) {
        $('.bibliografia').removeClass('open');
    }
})

$('.open-file').on('click', function() {
    $LEAP.fileViewer("assets/" + $(this).data('file'));
})

$('.side-drawer.place3 .tap-target').on($LEAP.ie_start, function() {
    $('.place3.popup').addClass('open');
});

$('.place3.popup .close-btn').on($LEAP.ie_start, function(e) {
    e.stopPropagation();
    $('.place3.popup').removeClass('open');
});