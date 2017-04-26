
// $(function() {
//     $(".j-slide-not,.j-slide-auto,.j-slide-np").each(function(){
//         var clone_text = $(this).find('.m-box').clone();
//         $("<div class='sclwrap_box' style='position:relative;'></div>").insertAfter($(this).find('.m-box').get(0));
//         $(this).find('.m-box').remove();
//         $(this).find('.sclwrap_box').append(clone_text);
//     });
//     DetailsAutoImgbox();
//     footerKefu();
//     clearWordHandle();
// 	productListHandle();
// 	scrollBar();
// 	scrollBarAuto();
//     Changebox();
// });
// function changeMboxWidth(){
// 	var w=window.innerWidth||document.body.width||document.documentElement.width;
// 	$(".m-box li").width(w)
// }
scrollBarAuto();
scrollBar();

// changeMboxWidth();
function DetailsAutoImgbox(){
    if($("body").attr("id") == "Details_Page"){
        var HasSlide_1 = $('.j-slide-np').hasClass("pro_gd");
        var HasSlide_2 = $('.m-rec').hasClass("j-slide-np");
        var HasSlide_3 = $('.m-pp').hasClass("j-slide-np");
        if(HasSlide_1 == true || HasSlide_3 == true){
            var Auto_Imgbox = $("#Details_Page .m-slicon .j-slide-np,#Details_Page .m-pp.j-slide-np");
            var ImgHeight = $(Auto_Imgbox).find("img").css("height");
            ImgHeight = parseInt(ImgHeight)+20;
            $(Auto_Imgbox).find(".sclwrap_box").css("height",ImgHeight+"px");
            
        }
        if(HasSlide_2 == true){
            var Auto_Imgbox2 = $("#Details_Page .m-rec.j-slide-np");
            var ImgHeight2 = $(Auto_Imgbox2).find("img").css("height");
            ImgHeight2 = parseInt(ImgHeight2)+40;
            $(Auto_Imgbox2).find(".sclwrap_box").css("height",ImgHeight2+"px");
        }
    }
};
function scrollBarAuto() {
    var cc = [], kk = [], uu = [], ap, active = 0;

    /*有时间*/
    $(".j-slide-auto").each(function (dd, n) {
        var r = $(this),
		i = r.find(".m-box"),
		s = r.find(".m-cnt");
        i.attr("id", "slides_control_id" + dd),
		s.attr("id", "pager_id" + dd),
		cc.push({
		    slideId: "slides_control_id" + dd,
		    pageId: "pager_id" + dd,
		    index: 0
		});
    });
    $.each(cc, function (No, obj) {
        var h_body = $("#"+obj.slideId).find("img").attr('height');
        $("#"+obj.slideId).find("img").css('height', h_body + 'px');
        if (!document.getElementById(obj.pageId)) {

            new TouchSlider({
                id: obj.slideId,
                timeout: 3000,
                speed: 400,
                before: function () { },
                after: function () { },
            });
        } else {
            var ap = document.getElementById(obj.pageId).getElementsByTagName('li');
            $("#" + obj.pageId).find("li:first-child").addClass('z-on');
            for (var i = 0; i < ap.length; i++) {
                (function () {
                    var j = i;
                    ap[i].onclick = function () {
                        tt.slide(j);
                        return false;
                    }
                })();
            }
            var tt = new TouchSlider({
                id: obj.slideId,
                timeout: 3000,
                speed: 400,
                before: function (index) { ap[obj.index].className = ''; obj.index = index; ap[obj.index].className = 'z-on'; },
                after: function () { },
            });
        }
    });
}

function scrollBar() {     //滚动JS
    var cc = [], kk = [], uu = [], ap, active = 0;
    $(".j-slide-not .m-cnt li").removeClass('z-on');
    /*无时间*/
    $(".j-slide-not").each(function (dd, n) {
        var r = $(this),
		i = r.find(".m-box"),
		s = r.find(".m-cnt"),
		pr = r.find(".prev"),
		ne = r.find(".next");
        i.attr("id", "slides_control_id_" + dd),
		s.attr("id", "pager_id_" + dd),
		pr.attr("id", "prev_id_" + dd),
	    ne.attr("id", "next_id_" + dd),
		kk.push({
		    slideId: "slides_control_id_" + dd,
		    pageId: "pager_id_" + dd,
		    prevId: "prev_id_" + dd,
		    nextId: "next_id_" + dd,
		    index: 0
		});
    });
    $.each(kk, function (No, obj) {
        if(document.getElementById(obj.pageId)){
        var ap = document.getElementById(obj.pageId).getElementsByTagName('li');
        var size = document.getElementById(obj.slideId).childElementCount;
        $("#" + obj.pageId).find("li:first-child").addClass('z-on');
        for (var i = 0; i < ap.length; i++) {
            (function () {
                var j = i;
                ap[i].onclick = function () {
                    tt.slide(j);
                    return false;
                }
            })();
        }
        $("#" + obj.prevId).bind('click', function () {
            var _i = parseInt(obj.index) - 1;
            _i = _i  < 0 ? _i  = 0 : _i ;
            tt.slide(_i);
        })
        $("#" + obj.nextId).bind('click', function () {
            var _i = parseInt(obj.index) + 1;
            _i = _i >= size - 1 ? _i = size - 1 : _i;
            tt.slide(_i);
        })

        var tt = new TouchSlider({
            id: obj.slideId,
            auto: false,
            speed: 400,
            before: function (index) { ap[obj.index].className = ''; obj.index = index; ap[obj.index].className = 'z-on'; },
            after: function () { },
        });
       }else{
            new TouchSlider({
                id: obj.slideId,
                auto: false,
                speed: 400,
            });
       } 
    });
    /*无时间 左右按钮*/
    $(".j-slide-np").each(function (dd, n) {
        var r = $(this),
		i = r.find(".m-box"),
		pr = r.find(".prev"),
		ne = r.find(".next");
        i.attr("id", "slides-control-id-" + dd),
		pr.attr("id", "prev-id-" + dd),
		ne.attr("id", "next-id-" + dd),
		uu.push({
		    slideId: "slides-control-id-" + dd,
		    prevId: "prev-id-" + dd,
		    nextId: "next-id-" + dd,
		    index: 0,

		});
    });
    $.each(uu, function (no, rr) {
        var size=0;
        if(document.getElementById(rr.slideId))
        {
            size = document.getElementById(rr.slideId).childElementCount;
        }
        if(size<2)
        {
          $('#' + rr.prevId).hide();
          $('#' + rr.nextId).hide();
        }
        $('#' + rr.prevId).bind('click', function () {
            var i = parseInt(rr.index) - 1;
            i = i < 0 ? i = 0 : i;
            ck.slide(i);
        });
        $('#' + rr.nextId).bind('click', function () {
            var i = parseInt(rr.index) + 1;
            i = i >= size - 1 ? i = size - 1 : i;
            ck.slide(i);
        });
        var ck = new TouchSlider({
            id: rr.slideId, speed: 600, timeout: 1000, auto: false,
            before: function (index) { rr.index = index; },
            after: function (index) {
                $('#' + rr.nextId).css("opacity","1");
                $('#' + rr.prevId).css("opacity","1");
                var si_ze = size - 1;
                if (rr.index == si_ze) { $('#' + rr.nextId).css("opacity","0.3"); }
                if (rr.index == 0) { $('#' + rr.prevId).css("opacity","0.3"); }
            }
        });
    });

    /*首页总导航 状态栏少于1 隐藏*/
    $('.m-box').each(function () {
        var k = this.childElementCount;
        if (k < 2) {
            $(this).parent().find('.m-cnt').hide();
            $(this).parent().find('.prev,.next').hide();
            $(this).parent().siblings('.prev,.next').hide();
        } else if (k > 1) { return false }
    })
	$('.m-cnt.m-cnt2 li:first-child').addClass('z-on');
};

                        var ke = 0;
                        var ke2 = 0;
                            function getColor() {
                                ke++;
                                switch (ke) {
                                    case 1: return "#f08300";
                                    case 2: return "#fff";
                                    case 3: return "#f08300";
                                    default: return "#fff";
                                }
                            }
                            function getColor2() {
                                ke2++;
                                switch (ke2) {
                                    case 1: return "#f08300";
                                    case 2: return "#fff";
                                    case 3: return "#f08300";
                                    default: return "#fff";
                                }
                            }
                        function colorful() {
                            var o = document.getElementById('asn')
                            o.style.color = getColor();
                            if (ke == 3) { ke = 0; }
                            setTimeout("colorful()", 1000);
                       }
                       function colorful2()
                       {
                            var o2 = document.getElementById('asn2')
                            o2.style.color = getColor2();
                            if (ke2 == 3) { ke2 = 0; }
                            setTimeout("colorful2()", 1100);
                       }
                        colorful2();
                        colorful();


