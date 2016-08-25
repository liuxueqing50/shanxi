/**
 * Created by Liuwei on 2016/8/18.
 */


/**
 * login - form - js
 */

//图形验证码
$(document).ready(function () {
    //iframe里的元素为动态加载，绑定的click事件会丢失，所以需要循环绑定
    setInterval(aa, 1000);

    function aa() {
        $("#loginIframe").contents().on("click", function (e) {
            $("#loginIframe").attr('src', $("#loginIframe").attr('src'));
        });
    }
});


/**
 * signin and signup - form - js
 */

$(document).ready(function () {

    var signinValidator = $("#signinForm").validate({
        rules: {
            user: {
                required: true,
                email: true
            },
            pass: {
                required: true,
                minlength: 6
            },
            captcha: {
                required: true,
                remote: {  //验证captcha是否正确
                    type: "POST",
                    url: "captcha",             //servlet
                    dataType: "json",           //接受数据格式
                    data: {
                        captcha: function () {
                            return $("#captcha").val();
                        }
                    }
                }
            }
        },
        messages: {
            user: {
                required: "用户名不能为空",
                email: "请输入正确的邮箱帐号"
            },
            pass: {
                required: "请输入确认密码",
                minlength: "确认密码不能小于6个字符",
            },
            captcha: {
                required: "请输入右侧验证码",
                remote: "验证码不正确"
            }
        }
    });


    var signupValidator = $("#signupForm").validate({
        errorPlacement: function (error, element) {
            // Append error within linked label
            $(element)
                .closest("form")
                .find("label[for='" + element.attr("id") + "']")
                .append(error);
        },
        errorElement: "span",
        rules: {
            email: {
                required: true,
                email: true,
                remote: {  //验证Email是否存在
                    type: "POST",
                    url: "/account/checkConfirm",             //servlet
                    dataType: "json",           //接受数据格式
                    data: {
                        captcha: function () {
                            return $("#cemail").val();
                        }
                    }
                }
            },
            name: {
                required: true,
                minlength: 4
            },
            password: {
                required: true,
                minlength: 6
            },
            pass: {
                required: true,
                minlength: 6,
                equalTo: "#password"
            },
            agreement: {
                required: true
            }
        },
        messages: {
            email: {
                required: "Email地址不能为空",
                remote: "Email地址已经存在，请重新输入"
            },
            name: {
                required: "用户名不能为空",
                minlength: "用户名不能小于6个字符"
            },
            password: {
                required: "请输入密码",
                minlength: "确认密码不能小于6个字符"
            },
            pass: {
                required: "请输入确认密码",
                minlength: "确认密码不能小于6个字符",
                equalTo: "两次输入密码不一致不一致"
            },
            agree: {
                required: "请接受用户声明!"
            }
        },
        invalidHandler: function () {
            return false;
        },
        submitHandler: function () {
            //表单的处理
            $.ajax({
                url: '/account/signup',
                dataType : 'text',
                type: 'POST',
                data: $("#signupForm").serialize(),
                error: function (err) {
                    alert(err)
                },
                success: function (result) {
                    if(result == "true") {
                        $('#formInfoBox').find(".modal-body").html("注册成功！");
                        $('#formInfoBox').modal();
                        $('#formInfoBox').on('hidden.bs.modal', function (e) {
                            window.location.href="/"
                        })
                    }
                    if(result == "false") {
                        $('#formInfoBox').find(".modal-body").html("注册失败！");
                        $('#formInfoBox').modal();
                        $('#formInfoBox').on('hidden.bs.modal', function (e) {
                            signupValidator.resetForm();
                        })
                    }
                }
            });
            return false;//阻止表单提交
        }
    });

    $("#signupReset").click(function () {
        signupValidator.resetForm();
    });
});