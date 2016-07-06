/**
 * Created by lvxin on 7/6/16.
 */

$(document).ready(function () {
    $("#qq").mouseover(function () {
        $("#qq").css(
            "background-color", "rgb(17, 183, 246)"
        );
    })
    $("#qq").mouseout(function () {
        $("#qq").css(
            "background-color", "rgb(215, 215, 215)"
        );
    })
    $("#wechat").mouseover(function () {
        $("#wechat").css(
            "background-color", "rgb(60, 176, 52)"
        )
    })
    $("#wechat").mouseout(function () {
        $("#wechat").css(
            "background-color", "rgb(215, 215, 215)"
        );
    })

    $("#weibo").mouseover(function () {
        $("#weibo").css(
            "background-color", "rgb(233, 14, 16)"
        )
    })
    $("#weibo").mouseout(function () {
        $("#weibo").css(
            "background-color", "rgb(215, 215, 215)"
        );
    })
    $("#taobao").mouseover(function () {
        $("#taobao").css(
            "background-color", "rgb(255, 83, 0)"
        )
    })
    $("#taobao").mouseout(function () {
        $("#taobao").css(
            "background-color", "rgb(215, 215, 215)"
        );
    })
})
