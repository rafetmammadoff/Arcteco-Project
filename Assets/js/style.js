$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})





function MyFunction1(){
    var slide =document.getElementById('slide-navbar');
    slide.classList.toggle('mystyle2');

    var btn1 =document.getElementById('sec2');
    btn1.classList.toggle('trans');

    var xs=document.getElementById('bttn2');
    xs.classList.toggle('btn-style1')


    
}


function myFunction(){
    var element =document.getElementById('hidden-navbar');
    element.classList.toggle('my-style');

    var bs=document.getElementById('bttn')
    bs.classList.toggle('btn-style');
}

function MyFunction2(){
    var benimo =document.getElementById('my-js');
    benimo.classList.toggle('mystyle3');

    var heartin =document.getElementById('bttn3');
    heartin.classList.toggle('btn-style3')

}


