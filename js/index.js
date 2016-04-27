$(function(){
    var btn=$(".min-nav .btn");
    btn.click(function(){
        $(".nav-box .max-nav").slideToggle();
    })

    //自动轮播效果
    var num=0;
    var t;

    $(".imgbao a").fadeOut(200).eq(0).fadeIn(200);
    // console.log($(".imgsbox img"))
    t=setInterval(move,1000)
    function move() {
        num++;
        if(num>$(".imgbao a").length-1)
        {
            num=0;
        }
        $(".imgbao a").fadeOut(200).eq(num).fadeIn(200);
        $(".ban-btn span").removeClass("active").eq(num).addClass("active")
    }

    //鼠标移上去效果 ，也可用hover({})
    $(".ban-jiantou").hide();
    $(".banner").mouseover(function () {
        clearInterval(t);
        $(".ban-jiantou").show();
    })
    $(".banner").mouseout(function () {
        t=setInterval(move,1000)
        $(".ban-jiantou").hide();
    })


    //点击按钮与图片对应
    $(".ban-btn span").click(function () {
        var index=$(this).index();
        num=index;
        $(".imgbao a").fadeOut(200).eq(num).fadeIn(200);
        $(".ban-btn span").removeClass("active").eq(num).addClass("active")
    })

        //console.log($(".ban-jiantou .jtr"));
        $(".ban-jiantou").click(function(e){
        var ev=e||window.event;
        if(ev.preventDefault){
            ev.preventDefault();
        }else{
            ev.returnValue = false;
        }
    });

    //右箭头，与自动轮播效果一致
    $(".ban-jiantou .jtr").click(function () {
        move();
    })
    //左箭头，相反
    $(".ban-jiantou .jtl").click(function () {
        num--;
        if(num==-1)
        {
            num=$(".imgbao a").length-1;
        }
        $(".imgbao a").fadeOut(200).eq(num).fadeIn(200);
        $(".ban-btn span").removeClass("active").eq(num).addClass("active")

    })

        //footer  list下拉
       var $footerBtn=$(".footer-lists h3");
        $footerBtn.click(function(){
                //$(this).next('ul').css({height:'auto'});
                    var screenW=document.documentElement.clientWidth;
                if (screenW<=768){
                        $(this).next('ul').slideToggle(400);
                    }
        });


})
