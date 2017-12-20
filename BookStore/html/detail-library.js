/**
 * Created by Administrator on 2017/5/10 0010.
 */
$(function () {
    var realHeight = $(window).height();
    $(window).scroll(function () {
        var top = $(document).scrollTop();
        $("#guide").animate({"top": top + realHeight / 2}, 20);
    });
});