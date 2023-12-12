var sliderMain = document.querySelector('.slider-main');
let item = sliderMain.getElementsByClassName('item');


function next(){
    sliderMain.append(item[0]);
}
function perv(){
    sliderMain.prepend(item[item.length-1]);
}