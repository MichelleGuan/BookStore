
$(function () {
    $("#nav").on("click", function () {
        var ID = $("#username").val()
        var PW = $("#password").val()
        var url = `http://localhost:51755/data/Login.ashx?id=${ID}&pw=${PW}`;
        $.post(url, function (res) {
            if (res == 1) {
                window.location.href = "searching.html";
            } else {
                alert("    �˺Ż��������\n    ������������ߵ����������\n    ͼ������������û���Ϊ4��12λӢ�ģ�����Ϊ6λ����");
            }
        })
    });
});
