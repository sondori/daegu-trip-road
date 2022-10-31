$(window).on("load",function () {
    $('img[usemap]').rwdImageMaps()

    let page = new fullpage(".fullpage",{
        sectionsColor:["#fff","#fff","#fff","#000","#fff","#fff"],
        anchors:["menu1","menu2","menu3","menu4","menu5", "menu6",],
        navigation: true,
        navigationPosition:"right",
        navigationTooltips: ["Home","대구 12경 ","맛집지도","파워풀 대구","관광서비스"],
        slidesNavigation: true,
        slidesNavigation: true,
        onLeave:function(origin,destination,direction){
            // 구역을 떠나고 새로운 구역으로 이동 도중 이벤트 실행
            // origin - 활성화된 구역
            // destination - 목적지 구역
            // direction - 마우스 휠 방향
            if (destination.index == 0) {
                $("#fp-nav ul li .fp-tooltip").eq(0).addClass("on")
                    
            }
            
            $("#fp-nav ul li .fp-tooltip").removeClass("on").eq(destination.index).addClass("on")
            if(destination.index == 3){

                $(".nav .nav-wrap ul li a").css("color","#fff")
                $(".nav .logo a img").attr("src","/image/logo-white.png")

                $(".nav .nav-wrap ul").mouseover(function(){
                    $(".nav .nav-wrap ul li a").css("color","#000")
                    $(".nav .logo a img").attr("src","../image/logo.png")
                })
                $(".nav .nav-wrap ul").mouseout(function(){
                    $(".nav .nav-wrap ul li a").css("color","#fff")
                    $(".nav .logo a img").attr("src","/image/logo-white.png")
                })

                

                $(".tabmenu").mouseover(function(){
                    $(".nav .nav-wrap ul li a").css("color","#000")
                    $(".nav .logo a img").attr("src","/image/logo.png")

                })
                $(".tabmenu").mouseout(function(){
                    $(".nav .nav-wrap ul li a").css("color","#fff")
                    $(".nav .logo a img").attr("src","image/logo-white.png")

                })



            }else{
                $(".nav .nav-wrap ul li a").css("color","#000")
                $(".nav .logo a img").attr("src","image/logo.png")
                $(".tabmenu").mouseout(function(){
                    $(".nav .nav-wrap ul li a").css("color","#000")
                    $(".nav .logo a img").attr("src","image/logo.png")
                })
                $(".nav .nav-wrap ul").mouseout(function(){
                    $(".nav .nav-wrap ul li a").css("color","#000")
                    $(".nav .logo a img").attr("src","image/logo.png")
                })
            }

        
            

        },
        afterLoad:function (origin,destination) {


            
        }
    })

    let ka = 0;

    $(".imgclick").click(function(e){
        e.preventDefault()

        ka = $(this).index()

    $(".food .food-map .content-box").fadeOut().eq(ka).fadeIn()
    })

    const area_list = [
        "donggu", "bukgu", "seogu", "junggu", "dalseonggun", "dalseoggun_2", "dalseogu", "namgu", "suseonggu"
    ]
    $("area").mouseout(function(){
        $(".content-food #img").attr("src", `image/${area_list[ka]}.png`)
    })



    $(".nav ul li").mouseover(function(){

        let i = $(this).index();
        
        $(".tabmenu .content").removeClass("on")
        $(".tabmenu").eq(i).find(".content").addClass("on")
        $(".nav ul li").removeClass("on").eq(i).addClass("on")
    })
    $(".nav ul li").mouseout(function(){

        let i = $(this).index();
        
        $(".tabmenu .content").removeClass("on")
        $(".tabmenu").eq(i).removeClass("on")
        $(".nav ul li").removeClass("on")
    })



    $(".tabmenu").mouseover(function(){
        
        let i = $(".tabmenu").index(this)
        $(".tabmenu").eq(i).removeClass("on").find(".content").addClass("on")
        $(".nav ul li").removeClass("on").eq(i).addClass("on")
    })



    $(".tabmenu").mouseout(function(){
        let i = $(this).index()-1;
        $(".tabmenu").eq(i).find(".content").removeClass("on")
        $(".nav ul li").removeClass("on")

    })



    $(".tabmenu .content .txt").mouseover(function(){
        $(".tabmenu .content .txt .a").removeClass("on")
        $(this).find(".a").addClass("on")

        
    })
    $(".tabmenu .content .txt").mouseout(function(){
        $(".tabmenu .content .txt .a").removeClass("on")
        $(this).find(".a").removeClass("on") 
    })

// 대구12경 슬라이드설정
    const swiper = new Swiper(" .swiper",{
        autoplay: {
            delay: 9000
        },
        loop: true,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev"
        },
            centeredSlides: true,
            spaceBetween: 1,
    })
    // const swiper2 = new Swiper(" .swiper2",{
    //     autoplay: {
    //         delay: 2000
    //     },
    //     loop: true,
    //     navigation: {
    //         nextEl: ".swiper-button-next",
    //         prevEl: ".swiper-button-prev"
    //     },
    //         centeredSlides: true,
    //         spaceBetween: 1,
    // })



    $(".fullpage .mySlideDiv").not(".active").hide(); //화면 로딩 후 첫번째 div를 제외한 나머지 숨김
        setInterval(nextSlide, 7000); //4초(4000)마다 다음 슬라이드로 넘어감

    
    //이전 슬라이드
    function prevSlide() {
        $(".banner .mySlideDiv").hide(); //모든 div 숨김
        var allSlide = $(".banner .mySlideDiv"); //모든 div 객체를 변수에 저장
        var currentIndex = 0; //현재 나타난 슬라이드의 인덱스 변수
        
        //반복문으로 현재 active클래스를 가진 div를 찾아 index 저장
        $(".mySlideDiv").each(function(index,item){ 
            if($(this).hasClass("active")) {
                currentIndex = index;
            }
            
        });
        
        //새롭게 나타낼 div의 index
        var newIndex = 0;
        
        if(currentIndex <= 0) {
            //현재 슬라이드의 index가 0인 경우 마지막 슬라이드로 보냄(무한반복)
            newIndex = allSlide.length-1;
        } else {
            //현재 슬라이드의 index에서 한 칸 만큼 뒤로 간 index 지정
            newIndex = currentIndex-1;
        }
    
        //모든 div에서 active 클래스 제거
        $(".mySlideDiv").removeClass("active");
        
        //새롭게 지정한 index번째 슬라이드에 active 클래스 부여 후 show()
        $(".mySlideDiv").eq(newIndex).addClass("active");
        $(".mySlideDiv").eq(newIndex).show();
    
    }
    
    //다음 슬라이드
    function nextSlide() {
        $(".mySlideDiv").hide();
        var allSlide = $(".mySlideDiv");
        var currentIndex = 0;
        
        $(".mySlideDiv").each(function(index,item){
            if($(this).hasClass("active")) {
                currentIndex = index;
            }
            
        });
        
        var newIndex = 0;
        
        if(currentIndex >= allSlide.length-1) {
            //현재 슬라이드 index가 마지막 순서면 0번째로 보냄(무한반복)
            newIndex = 0;
        } else {
            //현재 슬라이드의 index에서 한 칸 만큼 앞으로 간 index 지정
            newIndex = currentIndex+1;
        }
    
        $(".mySlideDiv").removeClass("active");
        $(".mySlideDiv").eq(newIndex).addClass("active");
        $(".mySlideDiv").eq(newIndex).show();
        
    }

// 대구맛집

function ImageChange(){
    alert("")
}

//파워풀 대구



$(".daegu .first").eq(0).show("on");
$(".daegu .daegu-menu ul li").removeClass("on").eq(0).addClass("on")





$(".daegu .daegu-menu ul li").mouseover(function(){
    let i = $(this).index();
    $(".daegu .daegu-menu ul li").eq(0).removeClass("on")
    $(".daegu .daegu-menu ul li a").removeClass("on").eq(i).addClass("on")
    $(".daegu .daegu-menu ul li").removeClass("on").eq(i).addClass("on")
    $(".daegu .festival").hide().eq(i).show();
    $(".daegu .festival").hide().eq(i).show();
})










}); //end