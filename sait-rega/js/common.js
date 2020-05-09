$(document).on('click','.box', function(){
    $(this).addClass('active').siblings().removeClass('active')
});