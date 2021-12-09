const images = document.querySelectorAll('.image img')
const showImage = document.querySelector('.gallery')
const closeBtn = document.querySelector('.close')
const imageUrl = document.querySelector('.gallery-inner img')
const controlPre = document.querySelector('.prev')
const controlNex = document.querySelector('.next')
var currentIndex = 0;

images.forEach((image,index) => {
    image.onclick = function () {
        hidePreControl(index);
        showImage.classList.add('show')
        imageUrl.src = this.src;
        currentIndex = index
    }
})
closeBtn.onclick = function () {
    showImage.classList.remove('show')
}
controlPre.onclick = function () {
    imageUrl.src = images[currentIndex-1].src;
    currentIndex -=1;
    hidePreControl(currentIndex);
}
controlNex.onclick = function () {
    imageUrl.src = images[currentIndex+1].src;
    currentIndex +=1;
    hidePreControl(currentIndex);
}
function hidePreControl(index) {
    if(index == 0) {
        controlPre.classList.add('hide')
        controlNex.classList.remove('hide')
    }else if(index == images.length - 1) {
        controlNex.classList.add('hide')
        controlPre.classList.remove('hide')
    } else {
        controlPre.classList.remove('hide')
        controlNex.classList.remove('hide')
    }
}

 