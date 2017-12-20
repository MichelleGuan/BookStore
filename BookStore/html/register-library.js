/**
 * Created by Administrator on 2017/5/10 0010.
 */
window.onload = function () {
    new Vue({
        el: '#container',
        data: {
            password: '',
            passwordVerify: '',
            username: '',
            phone: '',
            email: ''
        },
        methods: {
            confirm: function () {
                return $("#confirm").removeAttr("checked").prop("checked", true).removeAttr("disabled")
            }, 
            read: function () {
                return $("#confirm").removeAttr("disabled").prop("checked", false)
            },
            verifyPW: function () {
                if (this.passwordVerify.length == 0) {
                    return $("#confirmPassword").css('color', 'black')
                }
                else if (this.password != this.passwordVerify) {
                    this.passwordVerify = '';
                    return $("#confirmPassword").attr("placeholder", "���������������").css('color', 'red')
                }
                else {
                    return $("#confirmPassword").css('color', 'black')
                }
            },
            textPW: function () {
                var passwordL = parseInt(this.password);
                if (this.password.length == 6 && !isNaN(passwordL)) {
                    return $("#inputPassword").css('color', 'black')
                }
                else if (this.password.length == 0) {
                    return $("#inputPassword").css('color', 'black')
                }
                else if (this.password.length != 6) {
                    this.password = '';
                    return $("#inputPassword").attr("placeholder", "�������Ϊ6λO(��_��)O~").css('color', 'red')
                }
                else if (isNaN(passwordL)) {
                    this.password = '';
                    return $("#inputPassword").attr("placeholder", "�����������������ŶO(��_��)O~").css('color', 'red')
                }
            },
            textUN: function () {
                var reg = /^[A-Za-z]+$/;
                if (this.username.length >= 4 && this.password.length <= 12 && reg.test(this.username)) {
                    return $("#inputUsername").css('color', 'black')
                }
                else if (this.username.length == 0) {
                    return $("#inputUsername").css('color', 'black')
                }
                else if (this.username.length <= 4 | this.password.length >= 12) {
                    this.username = '';
                    return $("#inputUsername").attr("placeholder", "�û�������Ϊ4��12λO(��_��)O~").css('color', 'red')
                }
                else if (!reg.test(this.username)) {
                    this.username = '';
                    return $("#inputUsername").attr("placeholder", "���������Ӣ���û���ŶO(��_��)O~").css('color', 'red')
                }
            },
            submit: function (ev) {             
                var ID = $("#inputUsername").val()
                var PW = $("#confirmPassword").val()
                var Phone = $("#inputPhone").val()
                var Email = $("#inputEmail").val()
                var Total = ID + "," + PW + "," + Phone + "," + Email
                var url = `http://localhost:51755/data/register.ashx?total=${Total}`
                $.post(url, function (res) {
                   
                })
            }
        }
    })
}