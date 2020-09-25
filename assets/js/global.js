$('.bibliografia').on($LEAP.ie_start, function() {
    console.log('test');
    $(this).toggleClass('open');
})

$('.home-btn').on($LEAP.ie_start, function() {
    $LEAP.slideName('page_01');
})