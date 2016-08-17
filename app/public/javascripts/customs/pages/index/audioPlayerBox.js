/**
 * Created by Liuwei on 2016/8/9.
 */
(function () {
    $("#audioPlayerBox-btn").click(function() {
        if($("#audioPlayerBox-container").hasClass("open")) {
            $("#audioPlayerBox-container").removeClass("open");
            $("#audioPlayerBox-box").toggle();
        }else {
            $("#audioPlayerBox-container").addClass("open");
            $("#audioPlayerBox-box").toggle();
        }
    });
})();

//<![CDATA[
$(document).ready(function () {
    var url = "http://jplayer.org/audio/mp3/Miaow-07-Bubble.mp3";

    $("#jquery_jplayer_1").jPlayer({
        ready: function () {
            $(this).jPlayer("setMedia", {
                title: "正在监听...",
                mp3: url
            });
        },
        swfPath: "../../dist/jplayer",
        supplied: "mp3",
        wmode: "window",
        useStateClassSkin: true,
        autoBlur: false,
        smoothPlayBar: true,
        preload: "auto",
        keyEnabled: true,
        remainingDuration: true,
        toggleDuration: true
    });


    var loadURL1 = $("#btnPlay_1");
    var loadURL2 = $("#btnPlay_2");

    loadURL1.click(function() {

    if(!$("#audioPlayerBox-container").hasClass("open")) {
        $("#audioPlayerBox-container").addClass("open");
        $("#audioPlayerBox-box").toggle();
    }

        url = "http://123.57.215.156:10011/D5999819D7597843B2C928DE5620C602.mp3";

        $("#jquery_jplayer_1").jPlayer("setMedia",{
            mp3:url
        });
        $("#jquery_jplayer_1").jPlayer("play");
    });

    loadURL2.click(function() {

        if(!$("#audioPlayerBox-container").hasClass("open")) {
            $("#audioPlayerBox-container").addClass("open");
            $("#audioPlayerBox-box").toggle();
        }

        url = "http://123.57.215.156:10011/8B004FA67938E4AF50F7DC4E17A62E55.mp3";

        $("#jquery_jplayer_1").jPlayer("setMedia",{
            mp3:url
        });
        $("#jquery_jplayer_1").jPlayer("play");
    });


    $(".Js_btnStop").click(function() {

        if($("#audioPlayerBox-container").hasClass("open")) {
            $("#audioPlayerBox-container").removeClass("open");
            $("#audioPlayerBox-box").toggle();
        }

        $("#jquery_jplayer_1").jPlayer("stop");
    })
});
//]]>