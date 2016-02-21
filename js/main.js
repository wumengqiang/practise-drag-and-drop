
var img = document.createElement('img');
img.src = 'img/dragImg.jpeg';
img.width = '100';
document.body.appendChild(img);
// h5 geolocation api
//navigator.geolocation.getCurrentPosition(function(position){
//    console.log(position.coords.latitude);
//});
//end
document.querySelector('.drag-1').addEventListener('dragstart',function(){
    document.querySelector('.drag-1').style.display = 'block';
    document.querySelector('.drag-1').style.opacity = '0.5';
    event.dataTransfer.dropEffect = 'move';
    event.dataTransfer.effectAllowed = 'move'; //dropEffect 以及 effectAllowed是设置拖拽效果，作用是该表drop时的光标效果，并没有其他作用，逻辑实现还得自己来写
    event.dataTransfer.setDragImage(document.querySelector('img'), 20, 20); //设置拖拽图片，该元素必须可见的图片元素以及canvas元素,第二个，第三个参数是设置图片相对于鼠标的位移量，图片左上角为（0，0）
});
document.querySelector('.drag-1').addEventListener('dragend',function(){
    console.log('dragend');
    document.querySelector('.drag-1').style.visibility = 'visible';
});
document.querySelector('.container').addEventListener('dragover', function(event){
    event.preventDefault(); // 只有dragover以及dragenter加入event.preventDefault()才能使得drop事件生效。
    console.log('dragover');
    event.target.style.backgroundColor = 'red';
});
document.querySelector('.container').addEventListener('dragleave', function(event){
    console.log('dragleave');
    event.target.style.backgroundColor = 'yellow';
});
document.querySelector('.drag-1').addEventListener('drop', function(event){
    console.log('drop');
    event.target.style.backgroundColor = 'black';
    document.querySelector('.drag-1').style.display = 'none';
    event.preventDefault();
});
document.querySelector('.container').addEventListener('drop', function(event){
    console.log('drop');
    event.target.style.backgroundColor = 'black';
    document.querySelector('.drag-1').style.visibility = 'visible';
    event.preventDefault();
});
