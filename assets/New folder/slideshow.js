var bgimages=new Array()
bgimages[0]="../img/main1.jpg"
bgimages[1]="../img/main2.jpg"
bgimages[2]="../img/maing3.jpg"

//preload images
var pathToImg=new Array()
for (i=0;i<bgimages.length;i++){
pathToImg[i]=new Image()
pathToImg[i].src=bgimages[i]
}

var inc=-1

function bgSlide(){
if (inc<bgimages.length-1)
inc++
else
inc=0
document.body.background=pathToImg[inc].src
}

if (document.all||document.getElementById)
window.onload=new Function('setInterval("bgSlide()",3000)')
