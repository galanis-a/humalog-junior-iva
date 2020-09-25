$('.bibliografia').on($LEAP.ie_start, function() {
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

$('.video1').on('click', function() {
    $LEAP.fileViewer("assets/videos/video_1.mp4");
})

$('.video2').on('click', function() {
    $LEAP.fileViewer("assets/videos/video_2.mp4");
})

$('.video3').on('click', function() {
    $LEAP.fileViewer("assets/videos/video_3.mp4");
})

$('.video4').on('click', function() {
    $LEAP.fileViewer("assets/videos/video_4.mp4");
})

$('.video5').on('click', function() {
    $LEAP.fileViewer("assets/videos/video_5.mp4");
})

$('.video6').on('click', function() {
    $LEAP.fileViewer("assets/videos/video_6.mp4");
})