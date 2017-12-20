
$(function () {
    $("#nav").on("click", function () {
        var ID = $("#username").val()
        var PW = $("#password").val()
        var url = `http://localhost:51755/data/Login.ashx?id=${ID}&pw=${PW}`;
        $.post(url, function (res) {
            if (res == 1) {
                window.location.href = "searching.html";
            } else {
                alert("    账号或密码错误！\n    请重新输入或者点击忘记密码\n    图书馆提醒您：用户名为4到12位英文，密码为6位数字");
            }
        })
    });
});
