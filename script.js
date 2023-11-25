const bar = document.getElementById('bar');
const nav = document.getElementById('navbar');
const close = document.getElementById('close');
var ProductImg = document.getElementById('ProductImg');
var SmallImg = document.getElementsByClassName('small-img');

SmallImg[0].onclick = function(){
    ProductImg.src = SmallImg[0].src;
}
SmallImg[1].onclick = function(){
    ProductImg.src = SmallImg[1].src;
}
SmallImg[2].onclick = function(){
    ProductImg.src = SmallImg[2].src;
}
SmallImg[3].onclick = function(){
    ProductImg.src = SmallImg[3].src;
}
SmallImg[4].onclick = function(){
    ProductImg.src = SmallImg[4].src;
}
SmallImg[5].onclick = function(){
    ProductImg.src = SmallImg[5].src;
}
SmallImg[6].onclick = function(){
    ProductImg.src = SmallImg[6].src;
}
SmallImg[7].onclick = function(){
    ProductImg.src = SmallImg[7].src;
}
SmallImg[8].onclick = function(){
    ProductImg.src = SmallImg[8].src;
}
SmallImg[9].onclick = function(){
    ProductImg.src = SmallImg[9].src;
}
SmallImg[10].onclick = function(){
    ProductImg.src = SmallImg[10].src;
}

bar.addEventListener('click', () => {
    nav.classList.add('active');
})

close.addEventListener('click', () => {
    nav.classList.remove('active');
})
