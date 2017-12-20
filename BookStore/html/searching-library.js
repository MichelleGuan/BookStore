/**
 * Created by Administrator on 2017/5/10 0010.
 */
$(function () {
    var realHeight= $(window).height();
    $(window).scroll(function () {
        var top=$(document).scrollTop();
        $("#guide").animate({"top":top+realHeight/2},20);
    });
    $(".list li").mouseenter(function () {
        let $index = $(this).index();
        $(this).addClass("active").siblings("li").removeClass("active");
        $(".list img").stop().eq($index).animate({ top: "-12px" }, "fast", "swing", callback());
        $(".picture #miao").animate({ marginLeft: "930px" }, "fast");
    });
    function callback() {
        $(".list img").css("top", "0px");
    }
    $(".animationCat").mouseleave(function () {
        $(".list img").animate({ top: "-0px" }, "slow", "swing");
        $(".picture #miao").animate({ opacity: 0 }, "slow");
        $(".picture #cat").animate({ opacity: 0.9 , zIndex: 20}, "normal", callback2());
    });
    $(".list").mouseenter(function () {
        $(".picture #miao").animate({ marginLeft: "940px", opacity: 1 }, "normal");
    });
    function callback2() {
        setTimeout(function () {
            $(".picture #cat").animate({ opacity: 0 ,zIndex:-10}, "slow")
        }, 600)
    }

});